
import {Link} from "react-router-dom"
import './index.css'

const Header = () => {
    return(
        <div className="container">
            <ul>
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>About</Link>
                </li>
                <li>
                    <Link>Resume</Link>
                </li>
                
            </ul>
        </div>
    )
}

export default Header