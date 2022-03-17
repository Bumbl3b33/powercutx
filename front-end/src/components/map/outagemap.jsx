import { ReactComponent as Map } from "./resources/map_sl.svg";
import "./outagemap.css";
import axios from "axios";
import React, { Suspense, useState, useEffect } from "react";
import Loading from "../common/loading";
import { useMetadata } from "../../contexts/DistrictsContext";

const OutageMap = () => {
  const [outages, setOutages] = useState([]);
  const [loadingOutages, setLoadingOutages] = useState(true);
  const [loadingSvg, setLoadingSvg] = useState(true);
  const { districts } = useMetadata();

  const fillSvg = () => {
    if (!outages) return;

    var r = document.querySelector(":root");
    const dashdash = "--";
    outages.map(({ DistrictName, Total }) => {
      /* Determine colour for district (based on No. of outages) */
      var colour = "#34eb62"; //default green
      if (Total > 5) {
        colour = "#eb3434"; //red
      } else if (Total > 3) {
        colour = "#e5eb34"; //yellow
      }

      // console.log(DistrictName.toLowerCase().substr(0, 3));
      // console.log(colour)

      //Hardcoding Matara and Matale Abbreviations to match classname
      if (DistrictName === "Matara") DistrictName = "Mra";
      else if (DistrictName === "Matale") DistrictName = "Mle";

      /*Set the appropriate colour to district */
      r.style.setProperty(
        dashdash.concat(DistrictName.toLowerCase().substr(0, 3)),
        colour
      );
    });
    setLoadingSvg(false);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/outages/2022-03-01&2022-03-18`)
      .then((res) => {
        setOutages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoadingOutages(false);
    fillSvg();
  }, []);

  return (
    <>
      {loadingOutages && <Loading />}
      {/* TODO: if outages is empty ( ) */}
      {!loadingOutages && (
        <div>
          <div className="section-desc">
            Here are the outages reported since the past hour! 😲
          </div>
          <table className="outage-table">
            <thead id="table-headers">
              <tr>
                <td>District</td>
                <td>Reported Outages</td>
              </tr>
            </thead>
            <tbody>
              {outages.map(({ DistrictName, Total }, index) => {
                return (
                  <tr key={index}>
                    <td>{DistrictName}</td>
                    <td>{Total}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {!loadingSvg && (
            <div className="map">
              <Map />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default OutageMap;
