import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./common/loading";
import { useMetadata } from "../contexts/DistrictsContext";

const OutageForm = () => {
  const [myDistrict, setMyDistrict] = useState("1");
  const { districts, loading } = useMetadata();

  const handleChange = (e) => {
    setMyDistrict(e.target.value);
  };

  const sendOutage = (districtId) => {
    axios
      .post("http://localhost:5000/api/outages", {
        DistrictId: districtId,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendOutage(myDistrict);
  };

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div>
          <h2>Outage Form</h2>

          <form onSubmit={handleSubmit}>
            <label>
              Select your district:
              <select value={myDistrict} onChange={(e) => handleChange(e)}>
                {districts.map((district) => {
                  return (
                    <option
                      key={district?.DistrictId}
                      value={district?.DistrictId}
                    >
                      {district?.DistrictName}
                    </option>
                  );
                })}
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
    </>
  );
};

export default OutageForm;
