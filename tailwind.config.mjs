/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// dark
				'semi-black': '#0A0A0A',
				'outline-dark': '#242424',
				'hover-dark': '#1F1F1F',
				'secondary-dark-text': '#A1A1A1',

				// light
				'semi-white': '#FAFAFA',
				'secondary-light-text': '#666666',
				'hover-light': '#E5E6EB',
				'outline-light': '#E6E6E6'

			}
		},
	},
	plugins: [],
}
