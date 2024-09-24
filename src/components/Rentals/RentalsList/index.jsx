import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getRentals } from '../../../libraries/functionsAPI'
import RentalItem from '../RentalItem';
import './rentals-list.scss'


function RentalsList() {
    const navigate = useNavigate();
    const [rentals, setRentals] = useState(null);
    
    const displayRentals = () => 
        (rentals ? rentals.map((rental) => (<RentalItem logement={rental} key={rental.id} display={'list'} />)) : "Recherche des logements en cours")
    
    useEffect(() => {
        async function getItems() {
            const data = await getRentals();
            if (!data) {
                navigate('/*');
            }
            else {
                setRentals(data);
            };
          }
          getItems();
    }, [])

    return <div className="logements-liste">
            {displayRentals()}
           </div>
    
}

export default RentalsList