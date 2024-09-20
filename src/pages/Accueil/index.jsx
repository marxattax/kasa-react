import RentalsList from '../../components/Rentals/RentalsList'
import Banner from '../../components/UtilsComponents/Banner'
import falaise from "../../assets/images/falaise.png"

function Accueil() {
  return <div>

    <Banner>
      {falaise}
      Chez vous ici, partout, et ailleurs
    </Banner>

    <RentalsList />

  </div>
}

export default Accueil