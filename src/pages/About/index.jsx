import Banner from "../../components/UtilsComponents/Banner"
import mountain from "../../assets/images/mountain.png"
import Collapse from "../../components/UtilsComponents/Collapse"
import './about.scss'

function About() {
    return <div>
        <Banner>
            {mountain}
            <span></span>
        </Banner>
        <div className='valeurs'>
            <Collapse>
                Fiabilité
                <span>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</span>
            </Collapse>
            <Collapse>
                Respect
                <span>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</span>
            </Collapse>
            <Collapse>
                Service
                <span>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</span>
            </Collapse>
            <Collapse>
                Sécurité
                <span>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</span>
            </Collapse>
        </div>
    </div>
}

export default About