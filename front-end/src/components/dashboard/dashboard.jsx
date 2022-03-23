import "./dashboard.css";
import axios from "axios";
import React, { Component } from "react";
import OutageSummary from "./outageSummary/outageSummary";
import OutageMap from "./outageMap/outageMap";
import OutageForm from "./outageForm/outageForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default class Dashboard extends Component {
  state = {
    loadingOutages: true,
    outages: [],
  };

  componentDidMount() {
    this.fetchOutages();
    this.timer = setInterval(() => {
      this.fetchOutages();
    }, 10000); //Updates every 10 secs
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  fetchOutages() {
    this.setState({ ...this.state, loadingOutages: true });

    axios
      .get(
        `https://powercutx-backend.azurewebsites.net/api/outages/2022-03-01&2022-03-26`
      )
      .then((res) => {
        this.setState({
          ...this.state,
          outages: res.data,
          loadingOutages: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({ ...this.state, loadingOutages: false });
  }
  handleColours(newColours) {
    this.setState({ ...this.state, colours: newColours });
  }
  render() {
    // console.log(this.state);
    return (
      <Container>
        <Row>
          <Col xs={12} xl={3}>
            <div>
              <OutageSummary
                loadingOutages={this.state.loadingOutages}
                outages={this.state.outages}
              />
            </div>
          </Col>
          <Col xs={12} xl={6}>
            <div className="test">
              <OutageMap outages={this.state.outages} />
            </div>
          </Col>
          <Col xs={12} xl={3}>
            <div className="outage-form">
              <OutageForm />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
