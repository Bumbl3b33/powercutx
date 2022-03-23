import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../../common/loading";
import { useMetadata } from "../../../contexts/DistrictsContext";
import { Form, Button, Card } from "react-bootstrap";

const OutageForm = () => {
  const [myDistrict, setMyDistrict] = useState("1");
  const [isDisabled, setIsDisabled] = useState(false);
  const { districts, loading } = useMetadata();

  const handleChange = (e) => {
    setMyDistrict(e.target.value);
  };

  const sendOutage = (districtId) => {
    console.log({
      DistrictId: districtId,
    });
    axios
      .post("https://powercutx-backend.azurewebsites.net/api/outages", {
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
        <div id="submit">
          <Card>
            <Card.Header>Submit your Outage</Card.Header>
            <Card.Body>
              {/* <Card.Title>Select Your District</Card.Title> */}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="enabledSelect">
                    Select Your District{" "}
                  </Form.Label>
                  <Form.Select
                    id="enabledSelect"
                    onChange={handleChange}
                    disabled={isDisabled}
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
                  </Form.Select>
                  {/* <Form.Text className="text-muted">
            We do not collect your personal information
          </Form.Text> */}
                </Form.Group>
                <Button
                  type="submit"
                  variant={isDisabled ? "success" : "primary"}
                  disabled={isDisabled}
                >
                  {isDisabled ? "Thanks for Submitting" : "Click to Submit"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default OutageForm;
