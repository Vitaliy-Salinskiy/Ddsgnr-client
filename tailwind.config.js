/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,ts}",
	],
	theme: {
		extend: {
			boxShadow: {
				'cart': '0px 1.143px 1.143px 0px rgba(0, 0, 0, 0.04), 0px 2.285px 5.713px 0px rgba(0, 0, 0, 0.08)',
				'cart-input': 'box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 2px 5px 0px rgba(0, 0, 0, 0.08);'
			},
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
				"cart-gray": "#697386",
				"cart-black": "#1A1F36",
				'cart-input': '#3C42571F'
			}
		},
	},
	plugins: [],
}