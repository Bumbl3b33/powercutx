import "./dashboard.css";
import axios from "axios";
import React, { Component } from "react";
import ColouredMap from "./map/colouredMap";
import Summary from "./summary/summary";

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
      .get(`http://localhost:5000/api/outages/2022-03-01&2022-03-18`)
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

  render() {
    console.log(this.state);
    return (
      <>
        <Summary
          loadingOutages={this.state.loadingOutages}
          outages={this.state.outages}
        />
        <ColouredMap jaf="#e5eb34" mle="#eb3434" outages={this.state.outages} />
      </>
    );
  }
}
