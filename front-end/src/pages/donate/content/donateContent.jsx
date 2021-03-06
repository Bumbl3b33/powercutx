import { Col, Container, Row } from "react-bootstrap";
import React, { useState } from "react";
import "./donateContent.css";

const DonateContent = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} xl={2}>
          <h1 className="donate-title">Donate💛</h1>
        </Col>
        <Col xs={12} xl={7}>
          <p className="about-text">
            Powercutx is a project rooted with the sole aim of enabling people
            to access information they demand readily and reliably. As a one-man
            team, adding features, maintaining servers requires time, effort and
            money. Donations show your interest and support & help keep servers
            online.
            <br />
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default DonateContent;
