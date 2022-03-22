import Title from "./components/title/title";
import OutageForm from "./components/form/outageform";
import { DistrictsProvider } from "./contexts/DistrictsContext";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/dashboard/dashboard";
function App() {
  return (
    <>
      <Title />
      <DistrictsProvider>
        <Dashboard />
        {/* <OutageForm /> */}
        {/* <Footer /> */}
      </DistrictsProvider>
    </>
  );
}

export default App;
