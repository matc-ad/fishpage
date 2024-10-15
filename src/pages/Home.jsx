import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { colorsOptions, historiaPeixos } from "../constants";

const Paragraph = ({ children, className }) => (
	<p className={`mb-4 text-lg leading-relaxed ${className}`}>{children}</p>
);

Paragraph.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string.isRequired,
};

const Section = ({ title, level, children, className }) => {
	const HeadingTag = `h${level}`;
	return (
		<div
			className={`p-6 border rounded-xl shadow-lg flex flex-col w-full mt-${level === 2 ? "6" : level === 3 ? "4" : "2"} ${className}`}
		>
			<HeadingTag
				className={`text-${level === 2 ? "2xl" : level === 3 ? "xl" : "lg"} font-bold mb-4`}
			>
				{title}
			</HeadingTag>
			{children}
		</div>
	);
};

Section.propTypes = {
	title: PropTypes.string.isRequired,
	level: PropTypes.number.isRequired,
	children: PropTypes.node.isRequired,
	className: PropTypes.string.isRequired,
};

const Home = ({ isDarkMode, toggleDarkMode }) => {
	const colors = isDarkMode ? colorsOptions.darkMode : colorsOptions.lightMode;

	const renderParagraphs = (paragraphs) =>
		paragraphs.map((paragraph, index) =>
			typeof paragraph === "string" ? (
				<Paragraph key={index} className={colors.paragraph}>
					{paragraph}
				</Paragraph>
			) : (
				<Paragraph
					key={index}
					className={paragraph.emphasis ? colors.title : colors.paragraph}
				>
					{paragraph.text}
				</Paragraph>
			),
		);

	const renderSections = (sections) =>
		sections.map((section, index) => (
			<Section
				key={index}
				title={section.title}
				level={section.level}
				className={
					`${colors.border} ` +
					(section.level % 2 === 0 ? colors.divBackground : colors.background)
				}
			>
				{renderParagraphs(section.paragraphs)}
				{section.subsections && renderSections(section.subsections)}
			</Section>
		));

	return (
		<>
			<Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
			<div
				id="prehistoria"
				className="container mx-auto pt-28 px-4 sm:px-6 lg:px-8"
			>
				A matc.ad tenim una relació massa estreta amb els peixos, com ja haurieu
				d&apos;haver notat. Aquesta relació no és casual, sinó que té una
				història que cal conèixer. A continuació, us presentem
			</div>
			<div id="historia" className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className={`text-4xl font-bold text-center mb-12 ${colors.title}`}>
					La història dels peixos
				</h1>
				{renderSections(historiaPeixos)}
			</div>
			<Footer isDarkMode={isDarkMode} />
		</>
	);
};

Home.propTypes = {
	isDarkMode: PropTypes.bool.isRequired,
	toggleDarkMode: PropTypes.func.isRequired,
};

export default Home;
