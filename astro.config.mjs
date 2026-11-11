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
					link: '/smart-customer-service'
				},
				{
					label: 'Agent Resilience',
					link: '/agent-resilience',
				},
				{
					label: 'AI Native SDLC',
					items: [
						{ label: 'Capture as intent.md', link: '/ai-native-sdlc/001-intent_management_CN' },
						{ label: 'Requirements and design', link: '/ai-native-sdlc/002-spec_management_CN' },
					],
				},
				{
					label: 'Architect in AI Era',
					items: [
						{ label: 'To Be or Not to Be', link: '/ai-era-arch/ai-era-architect' },
						{ label: 'Self-Assessment', link: '/ai-era-arch/architect-assessment' },
					],
				},
				{
					label: 'Guides',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
			],
		}),
	],
});
