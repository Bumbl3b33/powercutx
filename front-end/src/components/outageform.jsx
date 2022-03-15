import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./common/loading";

const OutageForm = () => {
  const [myDistrict, setMyDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setMyDistrict(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/api/districts`).then((res) => {
      setDistricts(res.data);
    });
    setLoading(false);
  }, []);

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
