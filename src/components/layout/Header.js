import React from "react";
import PropTypes from "prop-types";
import "../contacts/contact.css";
import { Link } from "react-router-dom";

const Header = props => {
	const { branding } = props;
	return (
		<div>
			<nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
				<div className="container">
					<a href="/" className="navbar-brand">
						{branding}
					</a>
				</div>
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li>
						<Link to="/about" className="nav-link">
							About
						</Link>
					</li>
					<li>
						<Link to="/contact/add" className="nav-link">
							<i className='fas fa-plus'></i>
                             Add
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

Header.defaultProps = {
	// Default title if no branding prop provided in App.js
	branding: "My App" // in class-based component can also use static defaultProps inside of class
};

Header.propTypes = {
	//Type checking branding gives console warnings for incorrect proptype
	branding: PropTypes.string.isRequired
};

export default Header;
