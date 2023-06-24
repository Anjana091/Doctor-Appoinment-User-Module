import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'
import { useNavigate } from "react-router-dom";

function Navbar() {

	const navigate = useNavigate();
	const navRef = useRef();
	const isLoggedIn = localStorage.getItem("loggedIn")
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className="Nav-header">
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/home">Home</a>
				<a href="/doctors">Doctors</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
				<div className="navbar">
					{isLoggedIn ? (
						<button className="Nav-login" onClick={() => {
							localStorage.clear();
							navigate('/')
						}}>Logout</button>
					) : (
						<button className="Nav-login"
							onClick={() => {
								navigate('/')
							}}
						>Login</button>
					)}
				</div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;