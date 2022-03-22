import React from "react";
import { DistrictsProvider } from "../../contexts/DistrictsContext";
import Title from "../../components/title/title";
import Dashboard from "../../components/dashboard/dashboard";
import NavBar from "../../common/navbar/navbar";
import Footer from "../../common/footer/footer";

class Home extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Title />
        <DistrictsProvider>
          <Dashboard />
        </DistrictsProvider>
        <Footer />
      </>
    );
  }
}

export default Home;
