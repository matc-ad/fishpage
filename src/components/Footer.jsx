import PropTypes from "prop-types";
import { colorsOptions } from "../constants";

const Footer = ({ isDarkMode }) => {
	const colors = isDarkMode ? colorsOptions.darkMode : colorsOptions.lightMode;

	return (
		<footer
			className={`text-center py-5 ${colors.navbarBackground} ${colors.text}`}
		>
			<p>&copy; 2024 peix.matc.ad. Tots els drets reservats.</p>
		</footer>
	);
};

Footer.propTypes = {
	isDarkMode: PropTypes.bool.isRequired,
};

export default Footer;
