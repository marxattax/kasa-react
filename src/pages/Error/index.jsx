import { Link } from 'react-router-dom'
import './error.scss'

function Error() {
    return <div className="error">
        <div className="title">404</div>
        <div className="subtitle">Oups! La page que vous demandez n'existe pas.</div>
            <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
}

export default Error