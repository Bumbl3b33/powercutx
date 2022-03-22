import { Col, Container, Row } from "react-bootstrap";
import React, { useState } from "react";
import "./donateContent.css";

const DonateContent = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} xl={2}>
          <h1 className="donate-title">Donate 💛 </h1>
        </Col>
        <Col xs={12} xl={7}>
          <p className="about-text">
            Powercutx is a project rooted with the sole aim of enabling people
            to access information they demand readily and reliably. As a one-man
            team hosting, maintenance and adding Features to the project, it
            requires resources. Donations show your interest and support and
            help keep servers online.
            <br />
            <br />
            <span className="bold-text">Email: </span>
            <span className="italic-text">contact at powercutx dot com</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default DonateContent;
