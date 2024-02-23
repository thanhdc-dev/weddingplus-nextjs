import GoogleTagManager from '@/components/SEO/GoogleTagManager';
import { openGraph, twitter } from '@/components/SEO/shared-metadata';
import Navbar from '@/components/navbar/navbar';
import config from '@/libs/config';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL(config.appBaseUrl),
	alternates: {
		canonical: '/',
	},
	title: {
		default: 'Wedding+',
		template: '%s | Wedding+',
	},
	description: 'Chia sẻ yêu thương, kỷ niệm đáng nhớ cùng Wedding+',
	applicationName: 'Wedding+',
	keywords: ['Wedding website', 'Weddingplus', 'Wedding+'],
	authors: [{ name: 'Weddingplus', url: config.appBaseUrl }],
	creator: 'Weddingplus',
	publisher: 'Weddingplus',
	formatDetection: {
		email: true,
		address: true,
		telephone: true,
	},
	openGraph: {
		...openGraph,
	},
	twitter: {
		...twitter,
	},
	robots:
		config.appEnv !== 'production'
			? {
					index: true,
					follow: true,
			  }
			: {},
};

export const viewport: Viewport = {
  themeColor: '#df4759',
  colorScheme: 'only light'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="vi">
			{process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && <GoogleTagManager googleTagManagerId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />}
			<body className={`${inter.className} bg-white`}>
				<Navbar />
				{children}
				<footer className="py-4 text-center bg-[#f7f7f7]">
					<p className="mb-0">© 2023 Copyright Wedding+</p>
				</footer>
				<Analytics />
			</body>
		</html>
	);
}
