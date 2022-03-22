import React from "react";
import "./donate.css";
import NavBar from "../../common/navbar/navbar";
import DonateContent from "./content/donateContent";
import Footer from "../../common/footer/footer";

class Donate extends React.Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <DonateContent />
        <Footer />
      </>
    );
  }
}

export default Donate;
