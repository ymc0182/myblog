/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '480px',
			lg: '800px',
		  },
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
	darkMode: 'class',
}
