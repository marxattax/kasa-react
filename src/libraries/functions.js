import { routesApi } from "./routesApi";

export async function getRentals(func) {
    const response = await fetch(routesApi.getRentals);
    return response.json()
    
    .then(rentals => {
        func(rentals)
    });
}

export async function getOneRental(func, id) {
    const response = await fetch(`${routesApi.getOneRental}`);
    return response.json()

    .then(rentals => {
        for(const rental of rentals) {
            if(rental.id === id) {
                func(rental)
            }
        }
    });
}