import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { colorsOptions, navLinks } from "../constants";

const NavbarLink = ({ link, handleNavigation, colors }) =>
	link.href ? (
		<a
			href={link.href}
			className={`text-md ${colors.text} w-full text-center hover:${colors.title}`}
		>
			{link.label}
		</a>
	) : (
		<button
			onClick={() => handleNavigation(link.path)}
			className={`text-md ${colors.text} w-full text-center hover:${colors.title}`}
		>
			{link.label}
		</button>
	);

NavbarLink.propTypes = {
	link: PropTypes.shape({
		label: PropTypes.string.isRequired,
		path: PropTypes.string,
		href: PropTypes.string,
	}).isRequired,
	handleNavigation: PropTypes.func.isRequired,
	colors: PropTypes.object.isRequired,
};

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleNavigation = (path) => {
		navigate("/");
		setTimeout(() => {
			document.getElementById(path).scrollIntoView({ behavior: "smooth" });
		}, 100);
		setIsMenuOpen(false);
	};

	const colors = isDarkMode ? colorsOptions.darkMode : colorsOptions.lightMode;

	return (
		<nav
			className={`fixed top-0 left-0 w-full p-4 shadow-lg z-50 ${colors.navbarBackground}`}
		>
			<div className="container mx-auto flex justify-between items-center h-16">
				<div
					className={`text-2xl font-extrabold cursor-pointer ${colors.text}`}
					onClick={() => handleNavigation("header")}
				>
					𓆟
				</div>
				<div className="xs:hidden">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="text-2xl"
					>
						☰
					</button>
				</div>
				<div className="hidden xs:flex space-x-6 items-center">
					{navLinks.map((link, index) => (
						<NavbarLink
							key={index}
							link={link}
							handleNavigation={handleNavigation}
							colors={colors}
						/>
					))}
					<button
						onClick={toggleDarkMode}
						className={`ml-4 p-2 rounded-full min-w-28 h-10 items-center justify-center ${colors.buttonBackground} ${colors.buttonText} ${colors.buttonHoverBackground}`}
						style={{ whiteSpace: "nowrap" }}
					>
						{isDarkMode ? "Mode Clar" : "Mode Fosc"}
					</button>
				</div>
			</div>
			<div
				className={`xs:hidden mt-4 space-y-2 flex flex-col items-center-2 transition-all duration-300 ease-in-out transform ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
			>
				{navLinks.map((link, index) => (
					<NavbarLink
						key={index}
						link={link}
						handleNavigation={handleNavigation}
						colors={colors}
					/>
				))}
				<button
					onClick={toggleDarkMode}
					className={`block w-full text-center mt-2 p-2 rounded-full ${colors.buttonBackground} ${colors.buttonText} ${colors.buttonHoverBackground}`}
				>
					{isDarkMode ? "Mode Clar" : "Mode Fosc"}
				</button>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	toggleDarkMode: PropTypes.func.isRequired,
	isDarkMode: PropTypes.bool.isRequired,
};

export default Navbar;
