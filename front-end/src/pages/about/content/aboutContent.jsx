import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./aboutContent.css";

const AboutContent = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} xl={2}>
          <h1 className="about-title">About</h1>
        </Col>
        <Col xs={12} xl={7}>
          <p className="about-text">
            A weekend project of mine to help people get the information they
            want, how they want. You can view outages by district or in the
            outage map. Submit your outages to help improve the data. <br />
            There's still plenty of features in the pipelines so check back
            soon. Made using React with 💜.
            <br />
            <br />
            Have a suggestion? Want to say Hi?
            <br />
            <span className="bold-text"> E mail: </span>
            <span className="italic-text">
              <a href="mailto:contact@powercutx.com">contact@powercutx.com</a>
            </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutContent;
