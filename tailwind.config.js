/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			dropShadow: {
				"3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
				"4xl": ["0 35px 35px rgba(0, 0, 0, 0.25)", "0 45px 65px rgba(0, 0, 0, 0.15)"],
			},
			// for conversionMarketing component
			keyframes: {
				box: {
					"0%, 100%": { boxShadow: "#fcc6a4" },
					"50%": { boxShadow: "0 0 20px #fcc6a4" },
				},
			},
		},
		fontFamily: {
			// logoFont: ["Genos", "sans-serif"],
			// graphik: ["GraphikRegular"],
			// circular: ["CircularStd"],
			// circularLight: ["CircularStdLight"],
			// circularMedium: ["CircularStdMedium"],
			// circularBold: ["CircularStdBold"],
			// openSans: ["Open Sans"],
			sans: ["var(--font-sans)"],
		},
	},
	plugins: [],
};
