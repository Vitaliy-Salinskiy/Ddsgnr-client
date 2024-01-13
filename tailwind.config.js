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
			screens: {
				'3xl': '1596px',
			}
		},
	},
	plugins: [],
}