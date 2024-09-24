import { useState, useEffect } from "react";
import { getOneRental } from "../../../libraries/functionsAPI";
import RentalItem from "../RentalItem";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Rental() {
    const { id } = useParams()
    const [rental, setRental] = useState(null);
    const navigate = useNavigate()

    const displayRental = () => 
        (rental ? <RentalItem logement={rental} key={rental.id} /> : "Chargement");

    useEffect(() => {
        async function getItem() {
            const data = await getOneRental(id);
            if (data == null) {
                navigate('/*');
            }
            else {
                setRental(data);
            }
          }
          getItem();
    }, [])

    return <div>
        {displayRental()}
    </div>
}

export default Rental