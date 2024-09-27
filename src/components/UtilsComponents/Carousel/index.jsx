import { useState } from "react"
import './carousel.scss'

function Carousel(props) {
    const listPictures = props.listPictures;

    const [currentImg, setCurrentImg] = useState(0);
    const cover = <img className="carousel-img" src={listPictures[currentImg]} alt="Carousel" /> ;

    const prevImg= () => {
        currentImg > 0 ? setCurrentImg(currentImg -1): setCurrentImg(listPictures.length -1);
    }
    const nextImg = () => {
        currentImg < listPictures.length -1 ? setCurrentImg(currentImg +1) : setCurrentImg(0);
    }

    function showNav(coverImg) {
        return <>
            <div className="prev-img" onClick={prevImg}></div>
            <div className="next-img" onClick={nextImg}></div>
            <span className="count-img">{currentImg+1}/{listPictures.length}</span>
            {coverImg}
            </>
    }

    const generateCarousel = () => 
        (listPictures.length > 1 ? showNav(cover) : cover)

    return <div className="carousel">
                {generateCarousel()}
            </div>
}

export default Carousel