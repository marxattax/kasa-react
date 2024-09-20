import './banner.scss'

function Banner(props) {
    return <div className="banner">
        <img src={props.children[0]} alt="banner" />
        <span className='title'>{props.children[1]}</span>
    </div>
}

export default Banner