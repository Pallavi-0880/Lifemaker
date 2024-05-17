import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

//https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Lifemaker',
			logo: {
				src: './src/assets/infographicLifemaker.png',
			  },
			  components: {
				// Override the default `SocialIcons` component.
				SocialIcons: './src/component/pages.astro',
				
				
			  },
			
			sidebar: [
				{
					label: 'Value',
					autogenerate: { directory: 'guides' },
					
					
				},
				{
					label: 'Pilot',
					autogenerate: { directory: 'reference' },
					
				},
			],
		}),
	],
});
