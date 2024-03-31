import { Metadata } from 'next';
import OpenGraphImage from '@public/images/nguyendat-trantien/open-graph.webp';
import config from '@/libs/config';
import { openGraph } from '@components/SEO/shared-metadata';

export function generateMetadata(
): Metadata {
	// optionally access and extend (rather than replace) parent metadata
	const previousImages = openGraph?.images ?? [];

	const metaTag = {
		title: 'Nguyễn Đạt ♥ Trần Tiên | 29-04 | Wedding+',
		description: 'Chia sẻ yêu thương, kỷ niệm đáng nhớ cùng Wedding+',
		url: `${config.appBaseUrl}/nguyendat-trantien`,
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
