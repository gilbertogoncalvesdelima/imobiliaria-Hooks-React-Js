import House from "../house"

const FeaturedHouse = ({ house }) => {
    if (house)
    return (  
        <div>
            <div className="row featuredHouse">
            <h3 className="col-md-12 text-center">Casas a Venda</h3>
            </div>
            <House house={house} />
        </div>
    );

    return <div>Não temos casas á venda</div>;
};
 
export default FeaturedHouse;