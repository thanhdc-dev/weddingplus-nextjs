import { MetadataRoute } from 'next';
import config from './libs/config';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: config.appBaseUrl,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
		{
			url: `${config.appBaseUrl}/templates/wed-001`,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.8,
		},
		{
			url: `${config.appBaseUrl}/templates/wed-002`,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.8,
		},
		{
			url: `${config.appBaseUrl}/templates/wed-003`,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.8,
		},
	];
}
