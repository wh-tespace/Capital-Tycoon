import "./Navbar.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navBar">
			<ul className="navBar__list">
				<li className="list__navItem">
					<Link to="/">Home</Link>
				</li>
				<li className="list__navItem">
					<Link to="/login">Login</Link>
				</li>
				<li className="list__navItem">
					<Link to="/register">Register</Link>
				</li>
				<li className="list__navItem">
					<Link to="/invest">Invest</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;