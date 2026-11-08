// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://jack-yu-matrix.github.io',
    base: '/deeparch-atlas',
	integrations: [
		starlight({
			title: 'DeepArch Atlas',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jack-yu-matrix/deeparch-atlas' }],
			sidebar: [
				{
					label: 'Smart Custom Service',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', slug: 'smart-customer-service/overview' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
