import config from '@/libs/config';
import OpenGraphImage from '@public/og/og-image.webp';

export const openGraph = {
	title: 'Wedding+',
	description: 'Chia sẻ yêu thương, kỷ niệm đáng nhớ cùng Wedding+',
	url: config.appBaseUrl,
	siteName: 'Wedding+',
	images: [OpenGraphImage.src],
	locale: 'vi_VN',
	type: 'website',
};

export const twitter = {
	card: 'summary_large_image',
	title: 'Wedding+',
	description: 'Chia sẻ yêu thương, kỷ niệm đáng nhớ cùng Wedding+',
	siteId: '@d_congthanh',
	creator: '@nextjs',
	creatorId: '@d_congthanh',
	images: [OpenGraphImage.src],
};
