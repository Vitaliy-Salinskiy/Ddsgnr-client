/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,ts}",
	],
	theme: {
		extend: {
			height: {
				"inherit": "inherit",
			},
			fontFamily: {
				"roboto": ["Roboto", "sans-serif"],
			},
			screens: {
				'3xl': '1624px',
			},
			colors: {
				"app-white": "#F7F7F7",
				"auth-gray": "#A4A1AA",
				"auth-black": "#131118",
			}
		},
	},
	plugins: [],
}