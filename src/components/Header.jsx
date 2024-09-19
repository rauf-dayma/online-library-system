import { Link } from "react-router-dom";
import "./headerStyle.css"
function Header(){
    return(
        <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/browse">Browse Books</Link></li>
            <li><Link to="/add">Add Book</Link></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;