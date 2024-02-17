import { Metadata } from 'next';
import OpenGraphImage from '@public/images/ak-ny/open-graph.webp';
import config from '@/libs/config';
import { openGraph } from '@components/SEO/shared-metadata';

export function generateMetadata(
): Metadata {
	// optionally access and extend (rather than replace) parent metadata
	const previousImages = openGraph?.images ?? [];

	const metaTag = {
		title: 'Anh Khiêm ♥ Như Ý | 08-03 | Wedding+',
		description: 'Chia sẻ yêu thương, kỷ niệm đáng nhớ cùng Wedding+',
		url: `${config.appBaseUrl}/ak-ny`,
		images: [OpenGraphImage.src, ...previousImages],
	};

	return {
		title: metaTag.title,
		description: metaTag.description,
		alternates: {
			canonical: metaTag.url,
		},
		openGraph: {
			...openGraph,
			...metaTag,
		},
		twitter: {
			images: metaTag.images,
		},
	};
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <>{children}</>;
}
