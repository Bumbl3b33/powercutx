import Title from "./components/title/title";
import { DistrictsProvider } from "./contexts/DistrictsContext";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/dashboard/dashboard";
import NavBar from "./common/navbar/navbar";
import Footer from "./common/footer/footer";

function App() {
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

export default App;
