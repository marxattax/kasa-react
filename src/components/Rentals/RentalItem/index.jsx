import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Carousel from '../../UtilsComponents/Carousel'
import Rating from '../../UtilsComponents/Rating'
import Tags from '../../UtilsComponents/Tags'
import Collapse from '../../UtilsComponents/Collapse'
import User from '../../UtilsComponents/User'
import './rental-item.scss'

function RentalItem({logement, display}) {
    switch(display) {
        case 'list':
            return <Link key={logement.id} to={`Logement/${logement.id}`}>
                        <div className="logements-card" key={logement.id}>
                            <img src={logement.cover} alt={logement.title} />
                            <div className='title'>{logement.title}</div>
                        </div>
                    </Link>
        default: 
            return <div key={logement.id} className='card-logement'>
                        <Carousel listPictures={logement.pictures} />

                        <div className='encart'>
                            <div className='title-and-tags'>
                                <div className='title-and-location'>
                                    <span className='title'>{logement.title}</span>
                                    <span className='location'>{logement.location}</span>
                                </div>
                                <div className='tags'>
                                    <Tags array={logement.tags} />
                                </div>
                            </div>
                            <div className='user-and-rating'>
                                <div className='rating'>
                                    <Rating rating={logement.rating} />
                                </div>
                                <User className="user" target={logement.host} />
                            </div>
                        </div>

                        <div className='description-and-equipments'>
                            <Collapse target={logement}>
                                Description
                                <span className='description'>{logement.description}</span>
                            </Collapse>
                            <Collapse target={logement}>
                                Équipements
                                {logement.equipments.map((i) => (<span key={i} className="equipments">{i}</span>))}
                            </Collapse>
                        </div>
                        
                    </div>
    }

}

RentalItem.propTypes = {
    logement: PropTypes.shape({
      id: PropTypes.string,
      cover: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      location: PropTypes.string,
      rating: PropTypes.string,
      pictures: PropTypes.array,
      tags: PropTypes.array,
      equipments: PropTypes.array,
      host: PropTypes.shape({
        user: PropTypes.string,
        picture: PropTypes.string,
      }),
    })
  };

export default RentalItem