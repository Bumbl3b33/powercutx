import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../common/loading";
import { useMetadata } from "../../contexts/DistrictsContext";
import "./outageform.css";

const OutageForm = () => {
  const [myDistrict, setMyDistrict] = useState("1");
  const [isDisabled, setIsDisabled] = useState(false);
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
    setIsDisabled(true);
    sendOutage(myDistrict);
  };

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className="submit-box">
          <div className="submit-title"> Submit your Outage </div>

          <form onSubmit={handleSubmit}>
            <label className="dropdown-title">
              Select your district:
              <select
                value={myDistrict}
                onChange={(e) => handleChange(e)}
                className="dropdown-box"
              >
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
            <input
              type="submit"
              disabled={isDisabled}
              value={isDisabled ? "Thanks for Submitting" : "Click to Submit"}
            />
          </form>
        </div>
      )}
    </>
  );
};

export default OutageForm;
