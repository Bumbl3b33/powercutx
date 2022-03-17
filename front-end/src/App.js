import Title from "./components/title";
import OutageMap from "./components/map/outagemap";
import OutageForm from "./components/outageform";
import { DistrictsProvider } from "./contexts/DistrictsContext";
import Test from "./components/test";
import React from "react";
function App() {
  return (
    <>
      <Title />
      <DistrictsProvider>
        <OutageMap />
        <OutageForm />
        {/* <Test /> */}
      </DistrictsProvider>
    </>
  );
}

export default App;
