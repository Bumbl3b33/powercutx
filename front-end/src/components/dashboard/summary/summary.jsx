import "./summary.css";
import axios from "axios";
import React, { Component } from "react";
import ColouredMap from "../map/colouredMap";
import Loading from "../../../common/loading";

export default class Summary extends Component {
  render() {
    return (
      <>
        {this.props.loadingOutages && <Loading />}
        <table className="outage-table">
          <thead id="table-headers">
            <tr>
              <td>District</td>
              <td>Reported Outages</td>
            </tr>
          </thead>
          <tbody>
            {this.props.outages.map(({ DistrictName, Total }, index) => {
              return (
                <tr key={index}>
                  <td>{DistrictName}</td>
                  <td>{Total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
