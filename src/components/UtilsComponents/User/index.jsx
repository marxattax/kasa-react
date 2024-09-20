function User(props) {
    const target = props.target
    return <div className={props.className}>
        <span className="user-name">{target.name}</span>
        <img src={target.picture} alt={target.name} />
        </div>
}

export default User