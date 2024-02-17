import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Alex_Brush, Cormorant_Garamond } from 'next/font/google';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const alexBrushFont = Alex_Brush({
	subsets: ['latin', 'vietnamese'],
	weight: ['400'],
});

const cormorantGaramondFont = Cormorant_Garamond({
	subsets: ['latin', 'vietnamese'],
	weight: ['400', '500', '600'],
});

export type GalleryProps = {
	items: StaticImageData[];
};

export default function Gallery({ items }: Readonly<GalleryProps>) {
	const Itens = items.map((image, index) => {
		return (
			<div key={index} className="grid-item p-2">
				<Link href={image.src} className="block img-zoom">
					<div className="overflow-hidden group">
						<Image
							className="w-full h-auto mx-auto transition-all group-hover:scale-105"
							src={image}
							alt={`Gallery item ${index}`}
						/>
					</div>
				</Link>
			</div>
		);
	});
	return (
		<section id="gallery" className="py-14 bg-pink">
			<div className="container">
				<div className="-mx-4">
					<div className="px-4">
						<span className={`${alexBrushFont.className} text-wed001-primary text-3xl`}>
							Gallery
						</span>
						<h2
							className={`${cormorantGaramondFont.className} text-black text-3xl uppercase tracking-wide font-semibold mb-7`}
						>
							Our Memories
						</h2>
					</div>
				</div>
			</div>
			<div className="container">
				<ResponsiveMasonry columnsCountBreakPoints={{ 0: 2, 768: 3 }}>
					<Masonry className="masonry-gallery -mx-2">{Itens}</Masonry>
				</ResponsiveMasonry>
			</div>
		</section>
	);
}
