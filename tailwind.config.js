/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: [
		'./index.html',
		'./src/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				lastica: ['Lastica', defaultTheme.fontFamily.sans],
				now: ['Now', defaultTheme.fontFamily.sans],
				madelyn: ['MadelynFill-Trial', defaultTheme.fontFamily.sans],
			},
			colors: {
				brown: '#362a1c',
				ceramic: '#411F16',
				taupe: '#7F6C5C',
				camel: '#e0a466',
				beige: '#CCAE94',
				white: '#ffffffde',
			},
			backgroundImage: {
				'hero-section':
					'url(./src/assets/images/sala de cirurgia - rinoplastia ultrassônica - lifting facial.webp)',
			},
		},
	},
	plugins: [],
};
