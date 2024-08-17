import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';
//https://astro.build/config
export default defineConfig({
	integrations: [react(),
		starlight({
			title: 'Lifemaker',
			
			logo: {
				src: './src/assets/logo.png',
			  },
			 
			  components: {
				// Override the default `SocialIcons` component.
				SocialIcons: './src/component/pages.astro',
				Search:'./src/component/Menu.astro',
				
			  },
			  customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			  ],

			
			sidebar: [
				
				{
					label: 'About',
					autogenerate: { directory: 'guides' },
					
					
				},
				{
					label: 'Literature',
					autogenerate: { directory: 'literature' },
					
				},
				{
					label: 'Pilot',
					autogenerate: { directory: 'pilot' },
					
				},
				{
					label: 'Offering',
					autogenerate: { directory: 'offering' },
					
				},
				{
					label: 'Project',
					autogenerate: { directory: 'project' },
					
				},
			],
						
		}),
	],
});
