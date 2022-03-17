import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const DistrictsContext = createContext();

export const DistrictsProvider = ({ children }) => {
  /*
  districts - stores district Id and Name, received from API endpoint
  loading - indicates whether districts is being loaded. 
  */
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(params) {
      axios
        .get(`http://localhost:5000/api/districts`)
        .then((res) => {
          setDistricts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <DistrictsContext.Provider value={{ districts, loading }}>
      {children}
    </DistrictsContext.Provider>
  );
};

export const useMetadata = () => useContext(DistrictsContext);
