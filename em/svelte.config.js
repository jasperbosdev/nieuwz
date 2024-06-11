import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';

const config = {
	content: ["./src/**/*.{html,js}"],
	theme: {
	  extend: {},
	},
	plugins: [],
	preprocess: preprocess(),
	preprocess: vitePreprocess(),
	kit: {
	  adapter: adapter(),
	}
};

export default config;