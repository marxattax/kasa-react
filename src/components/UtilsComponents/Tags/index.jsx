import './tags.scss'

function Tags(props) {
    const array = props.array
    return <span>
    {array.map((i) => (<span key={i} className="tag">{i}</span>))}
    </span>
}

export default Tags