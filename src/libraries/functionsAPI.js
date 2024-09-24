import { routesApi } from "./routesApi";

export async function getRentals(func) {
    const response = await fetch(routesApi.getRentals);
    return response.json()
    
    .then(rentals => {
        return rentals;
    });
}

export async function getOneRental(id) {
    const response = await fetch(`${routesApi.getOneRental}`);
    return response.json()

    .then(rentals => {
        for(const rental of rentals) {
            if(rental.id == id) {
                return rental;
            }
        }
    });
}