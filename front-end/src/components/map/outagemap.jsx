import { ReactComponent as Map } from "./resources/map_sl.svg";
import "./outagemap.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "../common/loading";

const OutageMap = () => {
  const [outages, setOutages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/outages/2022-03-01&2022-03-12`)
      .then((res) => {
        setOutages(res.data);
      });
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div>
          <p>Here are the outages since the Big Bang! 😲</p>
          {outages.map((outage) => {
            return (
              <p>
                {outage?.DistrictId},{outage?.Total}
              </p>
            );
          })}
        </div>
      )}
    </>

    // <div className="map">
    //   <Map />
    // </div>
  );
};

export default OutageMap;
