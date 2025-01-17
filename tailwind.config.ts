import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: [
		'variant',
		[
			'@media (prefers-color-scheme: dark) { &:not([data-weblah-color-scheme="light"] *) }',
			'&:is([data-weblah-color-scheme="dark"] *)'
		]
	],

	theme: {
		extend: {
			colors: {
				// Semantic Background
				sb: {
					primary: 'var(--weblah-color-sb-primary)',
					secondary: 'var(--weblah-color-sb-secondary)',
					tertiary: 'var(--weblah-color-sb-tertiary)'
				},
				// Semantic Foreground
				sf: {
					primary: 'var(--weblah-color-sf-primary)',
					secondary: 'var(--weblah-color-sf-secondary)',
					tertiary: 'var(--weblah-color-sf-tertiary)'
				},
				// Semantic Stroke
				ss: {
					primary: 'var(--weblah-color-ss-primary)',
					secondary: 'var(--weblah-color-ss-secondary)'
				}
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
