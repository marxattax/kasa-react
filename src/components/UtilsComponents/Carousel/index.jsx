import { useState } from "react"
import './carousel.scss'
import star from '../../../assets/images/star-active.png'

function Carousel(props) {
    const listPictures = props.listPictures

    const [currentImg, setCurrentImg] = useState(0)

    const prevImg= () => {
        currentImg > 0 ? setCurrentImg(currentImg -1) : setCurrentImg(listPictures.length -1)
    }

    const nextImg = () => {
        currentImg < listPictures.length -1 ? setCurrentImg(currentImg +1) : setCurrentImg(0)
    }

    const blocks = document.querySelectorAll(".block")
    blocks.forEach((block) => {
        listPictures.length == 1 ? block.style.display = "none" : block.style.display = "null"
    })

    return <div className="carousel">
                <div className="prev-img block" onClick={prevImg}></div>
                <div className="next-img block" onClick={nextImg}></div>
                <span className="count-img block">{currentImg+1}/{listPictures.length}</span>
                <img className="carousel-img" src={listPictures[currentImg]} alt="Carousel" />
            </div>
}

export default Carousel