import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/showbooks" className="nav-link">Show Books</Link>
        <Link to="/addbook" className="nav-link">Add Book</Link>
    </nav>
  )
}

export default Navbar