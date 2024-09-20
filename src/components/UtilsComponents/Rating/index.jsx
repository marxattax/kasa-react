import star from '../../../assets/images/star.png'
import starActive from '../../../assets/images/star-active.png'

function Rating(props) {
    function starRating() {
        const rating = props.rating

        let i = 0;

        const stars = document.querySelectorAll(".rating img")
        for(const star of stars) {
            i++;
            if(i<=rating) {
                star.src=starActive;
            }
        }
    }

    return <span className="rating" ref={starRating}>
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
    </span>
}

export default Rating