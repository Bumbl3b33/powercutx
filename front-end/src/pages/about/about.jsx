import React from "react";
import "./about.css";
import NavBar from "../../common/navbar/navbar";
import AboutContent from "./content/aboutContent";
import Footer from "../../common/footer/footer";

class About extends React.Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <AboutContent />
        <Footer />
      </>
    );
  }
}

export default About;
