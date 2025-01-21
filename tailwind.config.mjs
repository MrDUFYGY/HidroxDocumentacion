/** @type {import('tailwindcss').Config} */
import starlightPlugin from '@astrojs/starlight-tailwind';

const accent = { 200: '#a8d8a1', 600: '#167c00', 900: '#063e00', 950: '#032d00' };
const gray = { 100: '#fbf8da', 200: '#f7f1b4', 300: '#cdc579', 400: '#9b8e00', 500: '#625a00', 700: '#3f3900', 800: '#2c2800', 900: '#1c1900' };


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				// Your preferred text font. Starlight uses a system font stack by default.
				// sans: ['"Atkinson Hyperlegible"'],
				// Your preferred code font. Starlight uses system monospace fonts by default.
				mono: ['"IBM Plex Mono"'],
			},
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],


}
