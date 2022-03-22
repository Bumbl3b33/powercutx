import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import "./footer.css";

class Footer extends React.Component {
  state = {};
  render() {
    return (
      <Container fluid className="bg-dark text-white myfooter">
        <span className="myleft-justified">
          {" "}
          Copyright &copy; {new Date().getFullYear()} - All Rights Reserved{" "}
        </span>
        <span className="myright-justified">
          <a href="/donate"> Donate</a>
        </span>
      </Container>
    );
  }
}

export default Footer;
