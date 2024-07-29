import { Link } from "react-router-dom";
import './_button.scss'

function Button({to, name}) {
    return (
        <button className="btn-link">
        <Link to={to}>
          {name}
        </Link>
      </button>
    )
}

export default Button