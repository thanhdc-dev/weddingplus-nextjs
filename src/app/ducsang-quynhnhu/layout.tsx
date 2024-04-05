import { Metadata } from 'next';
import OpenGraphImage from '@public/images/ducsang-quynhnhu/open-graph.webp';
import config from '@/libs/config';
import { openGraph } from '@components/SEO/shared-metadata';

export function generateMetadata(
): Metadata {
	const previousImages = openGraph?.images ?? [];

	const metaTag = {
		title: 'Đức Sang ♥ Quỳnh Như | 20/21-04 | Wedding+',
		description: 'Chia sẻ yêu thương, kỷ niệm đáng nhớ cùng Wedding+',
		url: `${config.appBaseUrl}/ducsang-quynhnhu`,
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
