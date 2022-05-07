import { useParams } from "react-router-dom";
import House from "./"
import { useContext } from "react"
import HousesContext from "../context/housesContext"

const HouseFromQuery = () => {
    const { id } = useParams();
    const allHouses = useContext(HousesContext);

    const house = allHouses.find((h) => h.id === parseInt(id));

    if(!house) return <div>Casa não encontrada</div>;
    return <House house={house}> </House>;
}
 
export default HouseFromQuery;