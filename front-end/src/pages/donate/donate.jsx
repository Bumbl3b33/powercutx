import React from "react";
import NavBar from "../../common/navbar/navbar";
import DonateContent from "./content/donateContent";
import Footer from "../../common/footer/footer";
import DonateWithPayPal from "./components/paypalDonate/donateWithPayPal";
import "./donate.css";

class Donate extends React.Component {
  state = { donator: { name: "test", message: "testmsg", price: 19 } };
  render() {
    return (
      <>
        <NavBar />
        <DonateContent />
        <DonateWithPayPal type={"large"} />
        <Footer />
      </>
    );
  }
}

export default Donate;
