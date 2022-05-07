import { useEffect, useState } from "react";

const useHouses = () => {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fecthHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    }
    fecthHouses();
  }, []);

  return allHouses;
};

export default useHouses;
