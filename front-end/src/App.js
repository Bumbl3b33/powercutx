import Title from "./components/title/title";
import OutageForm from "./components/form/outageform";
import { DistrictsProvider } from "./contexts/DistrictsContext";
import React from "react";
import Dashboard from "./components/dashboard/dashboard";
function App() {
  return (
    <>
      <Title />
      <DistrictsProvider>
        <Dashboard />
        <OutageForm />
      </DistrictsProvider>
    </>
  );
}

export default App;
