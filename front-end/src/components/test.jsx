import { useMetadata } from "../contexts/DistrictsContext";

const Test = () => {
  const { loading, districts } = useMetadata();

  return <h3 color="red">Testing...</h3>;
};

export default Test;
