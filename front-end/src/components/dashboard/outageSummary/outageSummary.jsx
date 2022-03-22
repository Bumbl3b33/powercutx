import "./outageSummary.css";
import React, { Component } from "react";
import Loading from "../../../common/loading";
export default class OutageSummary extends Component {
  state = {
    itemsToShow: 7, //MUST be less than 25
  };
  render() {
    return (
      <>
        {this.props.loadingOutages && <Loading />}
        <h5 className="mytable-title">
          Top {this.state.itemsToShow} Districts{" "}
        </h5>
        <table class="table table-striped table-hover" size="sm">
          <thead id="table-headers">
            <tr>
              <td>District</td>
              <td>Reported Outages</td>
            </tr>
          </thead>
          <tbody>
            {this.props.outages.map(({ DistrictName, Total }, index) => {
              if (index < this.state.itemsToShow) {
                return (
                  <tr key={index}>
                    <td>{DistrictName}</td>
                    <td>{Total}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </>
    );
  }
}
