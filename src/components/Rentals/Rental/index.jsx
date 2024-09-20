import { useState, useEffect } from "react";
import { getOneRental } from "../../../libraries/functions";
import RentalItem from "../RentalItem";
import Error from "../../../pages/Error";
import { useParams } from "react-router-dom";

function Rental() {
    let { id } = useParams()
    const [rental, setRental] = useState(null);

    const displayRental = () => 
        (rental ? <RentalItem logement={rental} key={rental.id} /> : <Error />);

    useEffect(() => {
        getOneRental(setRental, id);
    }, [])

    return <div>
        {displayRental()}
    </div>
}

export default Rental