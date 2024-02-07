import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				fur: {
					'pink-100': '#faf4f4',
					'grey-100': '#9F9F9F',
					'gold-100': '#CDBA7B'
				}
			},
			backgroundImage: {
				main: "url('/images/bg-furniro.png')"
			}
		}
	},
	plugins: []
}
export default config
