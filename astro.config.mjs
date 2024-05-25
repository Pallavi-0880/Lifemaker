import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

//https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Lifemaker',
			
			logo: {
				src: './src/assets/logo.png',
			  },
			 
			  components: {
				// Override the default `SocialIcons` component.
				SocialIcons: './src/component/pages.astro',
				
				
			  },
			  customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			  ],

			
			sidebar: [
				
				{
					label: 'Literature',
					autogenerate: { directory: 'guides' },
					
					
				},
				{
					label: 'Pilot',
					autogenerate: { directory: 'pilot' },
					
				},
			],
						
		}),
	],
});
