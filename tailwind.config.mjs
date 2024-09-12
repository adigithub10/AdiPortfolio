/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily :{
				'custom':["Silkscreen" , 'sans-serif'],
				'soc_text':["Montserrat", 'sans-serif']
			},
			colors :{
				myorange : '#a46808',
				bg_black : '#16181C',
				snow_white : '#FFFAFA',
				tech_clr : '#121212',
				tech_bg : '#212529',
			}
			
			
		
			
		},
	},
	plugins: [],
}
