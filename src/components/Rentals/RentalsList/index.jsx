import { useState, useEffect } from 'react'
import { getRentals } from '../../../libraries/functions'
import RentalItem from '../RentalItem';
import './rentals-list.scss'


function RentalsList() {
    const [rentals, setRentals] = useState(null);
    
    const displayRentals = () => 
        (rentals ? rentals.map((rental) => (<RentalItem logement={rental} key={rental.id} display={'list'} />)) : "Recherche des logements en cours")
    
    useEffect(() => {
        getRentals(setRentals);
    }, [])

    return <div className="logements-liste">
            {displayRentals()}
        </div>
    
}

export default RentalsList