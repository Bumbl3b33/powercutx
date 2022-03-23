import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import DonateWithPayPal from "../../pages/donate/components/paypalDonate/donateWithPayPal";
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
          <DonateWithPayPal type={"small"} />
        </span>
      </Container>
    );
  }
}

export default Footer;
