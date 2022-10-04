/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// light-文字
				regal: '#FFF',
				// light-button-bg
				'regal-50': '#E9ECEF',
				// dark-text
				'regal-100': '#EDEDED',
				// dark-com-col light-hover
				'regal-200': '#CED4DA',
				// light-active
				'regal-300': '#ADB5BD',
				'regal-400': '#212529',
				// dark-icon-col
				'regal-500': '#363636',
				// dark-hover || light-icon-col
				'regal-600': '#272727',
				// dark-active
				'regal-700': '#222',
				// dark-cpm-bg
				'regal-800': '#1D1D1D',
				// dark-bg-
				'regal-900': '#121212',
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
