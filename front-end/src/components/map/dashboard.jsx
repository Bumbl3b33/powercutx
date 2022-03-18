import { ReactComponent as Map } from "./resources/map_sl.svg";
import "./dashboard.css";
import axios from "axios";
import React, { Component } from "react";

export default class Dashboard extends Component {
  state = {
    loadingOutages: true,
    loadingColours: true,
    outages: [],
  };

  componentDidMount() {
    this.fetchOutages();
    this.colourMap();
    this.timer = setInterval(() => {
      this.fetchOutages();
      this.colourMap();
    }, 10000); //Updates every 10 secs
  }

  shouldComponentUpdate(nextProps) {}

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  colourMap() {
    this.setState({ ...this.state, loadingColours: true });
    var r = document.querySelector(":root");
    const dashdash = "--";
    this.state.outages.forEach(({ DistrictName, Total }) => {
      /* Determine colour for district (based on No. of outages) */
      var colour = "#34eb62"; //default green
      if (Total > 5) {
        colour = "#eb3434"; //red
      } else if (Total > 3) {
        colour = "#e5eb34"; //yellow
      }

      //Hardcoding Matara and Matale Abbreviations to match classname
      if (DistrictName === "Matara") DistrictName = "Mra";
      else if (DistrictName === "Matale") DistrictName = "Mle";

      /*Set the appropriate colour to district */
      r.style.setProperty(
        dashdash.concat(DistrictName.toLowerCase().substr(0, 3)),
        colour
      );
    });
    this.setState({ ...this.state, loadingColours: false });
    this.forceUpdate();
  }

  fetchOutages() {
    this.setState({ ...this.state, loadingOutages: true });

    axios
      .get(`http://localhost:5000/api/outages/2022-03-01&2022-03-18`)
      .then((res) => {
        this.setState({
          ...this.state,
          outages: res.data,
          loadingOutages: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({ ...this.state, loadingOutages: false });
  }

  render() {
    return (
      <>
        {this.loadingOutages && <div>Fetching new data...</div>}
        <table className="outage-table">
          <thead id="table-headers">
            <tr>
              <td>District</td>
              <td>Reported Outages</td>
            </tr>
          </thead>
          <tbody>
            {this.state.outages.map(({ DistrictName, Total }, index) => {
              return (
                <tr key={index}>
                  <td>{DistrictName}</td>
                  <td>{Total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {!this.state.loadingColours && (
          <div className="map">
            <Map />
          </div>
        )}
      </>
    );
  }
}
