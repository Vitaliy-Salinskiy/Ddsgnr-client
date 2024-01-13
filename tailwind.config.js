/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,ts}",
	],
	theme: {
		extend: {
			fontFamily: {
				"roboto": ["Roboto", "sans-serif"],
			},
		},
	},
	plugins: [],
}