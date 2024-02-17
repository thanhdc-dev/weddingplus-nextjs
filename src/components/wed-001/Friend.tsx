import Image, { StaticImageData } from 'next/image';
import { Alex_Brush, Cormorant_Garamond } from 'next/font/google';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const alexBrushFont = Alex_Brush({
	subsets: ['latin', 'vietnamese'],
	weight: ['400'],
});

const cormorantGaramondFont = Cormorant_Garamond({
	subsets: ['latin', 'vietnamese'],
	weight: ['400', '500', '600'],
});

export type FriendsProps = {
	items: {
		name: string;
		position: string;
		description: string;
		avatar: StaticImageData;
	}[];
};

export default function Friend({ items }: Readonly<FriendsProps>) {
	const owlOptions = {
		responsive: {
			'0': {
				items: 1,
			},
			'991': {
				items: 2,
			},
		},
		autoplay: true,
		autoplayTimeout: 3000,
		loop: true,
		dots: true,
		margin: 30,
	};
	const CarouseItens = items.map((item, index) => {
		return (
			<div key={index} className="p-7 rounded-lg bg-white sm:flex text-center sm:text-left">
				<div className="w-[140px] h-140px overflow-hidden sm:mr-4 mx-auto sm:mx-0">
					<Image className="rounded-full" src={item.avatar} alt={item.name} />
				</div>
				<div className="flex-1">
					<div className="full-width">
						<h6 className={`${cormorantGaramondFont.className} text-2xl font-medium mb-0`}>
							{item.name}
						</h6>
						<span
							className={`${alexBrushFont.className} text-2xl mb-3 text-wed001-primary font-normal`}
						>
							{item.position}
						</span>
						<p className="">{item.description}</p>
					</div>
				</div>
			</div>
		);
	});
	return (
		<section id="friends" className="friends py-14 bg-pink">
			<div className="container">
				<div className="-mx-4">
					<div className="px-4 mb-7">
						<span className={`${alexBrushFont.className} text-wed001-primary text-3xl`}>
							Our best friends ever
						</span>
						<h2
							className={`${cormorantGaramondFont.className} text-3xl uppercase tracking-wide font-semibold mb-7`}
						>
							Thanks for being there
						</h2>
					</div>
				</div>
				<div className="-mx-4">
					<div className="px-4">
						<OwlCarousel className="owl-theme" {...owlOptions}>
							{CarouseItens}
						</OwlCarousel>
					</div>
				</div>
			</div>
		</section>
	);
}
