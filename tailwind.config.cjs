/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'regal-100': '#EDEDED',
				'regal-200': '#121212',
			},
			backgroundImage: {
				'mean-fruit': 'linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)',
			},
		},
		screens: {
			xs: '0px',
			sm: '420px',
			md: '768px',
			lg: '996px',
			xl: '1280px',
			'2xl': '1536px',
		},
		fontFamily: {
			Pacifico: '"Pacifico"',
			Silkscreen: '"Silkscreen"',
		},
	},
	plugins: [],
	darkMode: 'class',
}
