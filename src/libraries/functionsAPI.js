import { routesApi } from "./routesApi";

export async function getRentals() {
    try {
        const response = await fetch(routesApi.getRentals);
        return response.json()
    } catch (error) {
        console.error(error);
    }

}

export async function getOneRental(id) {
    const response = await fetch(`${routesApi.getOneRental}`);
    return response.json()
    /* fonction provisoire en attendant la création du backend */
        .then(rentals => {
            for(const rental of rentals) {
                if(rental.id === id) {
                    return rental;
                }
            }
        });
}