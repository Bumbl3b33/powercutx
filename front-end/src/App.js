import Title from "./components/title";
import OutageMap from "./components/map/outagemap";
import OutageForm from "./components/outageform";
import { DistrictsProvider } from "./contexts/DistrictsContext";
import Test from "./components/test";
function App() {
  return (
    <>
      <Title />
      <OutageMap />
      <OutageForm />
      <DistrictsProvider>
        <Test />
      </DistrictsProvider>
    </>
  );
}

export default App;
