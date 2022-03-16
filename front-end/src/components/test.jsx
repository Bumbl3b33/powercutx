import { useMetadata } from "../contexts/DistrictsContext";

const Test = () => {
  const { loading, districts } = useMetadata();

  console.log(loading, districts);

  return <h3 color="red">Testing...</h3>;
};

export default Test;
