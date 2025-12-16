// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}', // Scans all files in the src directory
	],
	theme: {
		extend: {
			colors: {
				'brand-yellow': '#ffc849',
			},
			backgroundColor: {
				'brand-yellow': '#ffc849',
			},
			spacing: {
				30: '30px', // Custom spacing value
			},
		},
	},
	plugins: [],
};
