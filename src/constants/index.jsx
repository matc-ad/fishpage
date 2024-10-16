import historiaPeixos from "./LHDP.md?raw";
export { historiaPeixos };

export const navLinks = [
	{ label: "Historia", path: "historia" },
	{ label: "Acudits", href: "/lista-acudits" },
	{ label: "Vull correus diaris!", href: "mailto:peix@matc.ad" },
];

export const colorsOptions = {
	darkMode: {
		navbarBackground: "bg-gray-900",
		background: "bg-gray-800",
		divBackground: "bg-gray-700",
		text: "text-white",
		title: "text-blue-400",
		paragraph: "text-gray-300",
		border: "border-neutral-600",
		buttonBackground: "bg-blue-500",
		buttonText: "text-gray-800",
		buttonHoverBackground: "hover:bg-blue-600",
	},
	lightMode: {
		navbarBackground: "bg-gray-100",
		background: "bg-gray-200",
		divBackground: "bg-gray-300",
		text: "text-black",
		title: "text-green-700",
		paragraph: "text-gray-700",
		border: "border-neutral-500",
		buttonBackground: "bg-green-600",
		buttonText: "text-white",
		buttonHoverBackground: "hover:bg-green-700",
	},
};
