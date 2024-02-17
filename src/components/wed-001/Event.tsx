import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

import { Cormorant_Garamond } from 'next/font/google';

const cormorantGaramondFont = Cormorant_Garamond({
	subsets: ['latin', 'vietnamese'],
	weight: ['400', '500', '600'],
});

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

export type EventProps = {
	items: {
		title: string;
		image: StaticImageData;
		location: string;
		time: string;
		date: string;
		google_map: string;
		calendar_data: any;
	}[];
};

export default function Events({ items }: Readonly<EventProps>) {
	const owlOptions = {
		responsive: {
			'0': { items: 1 },
			'576': { items: 2 },
			// '768': { items: 3 },
			// '992': { items: 4 },
		},
		autoplay: false,
		autoplayTimeout: 3000,
		loop: true,
		dots: true,
		margin: 30,
	};

	const CarouseItens = items.map((item, index) => {
		return (
			<div key={index} className="py-5 md:py-8 bg-white">
				<div className="whenwhere-img">
					<Image src={item.image} alt={item.title} loading="lazy" />
				</div>
				<div className="content">
					<h5 className="text-xl pt-2 pb-3 uppercase">{item.title}</h5>
					<p>
						<i className="ti-location-pin pr-2"></i>
						{item.location}
					</p>
					<p>
						<i className="ti-time pr-2"></i>
						<span>{item.time}</span>
					</p>
					<p>
						<i className="ti-calendar pr-2"></i>
						<span>{item.date}</span>
					</p>
					<Link
						className="text-[#777] hover:cursor-pointer bg-transparent hover:bg-wed001-primary font-semibold hover:text-white py-2 px-4 border border-wed001-primary hover:border-transparent rounded"
						href={item.google_map}
						target="_blank"
					>
						View Map
					</Link>
				</div>
			</div>
		);
	});

	return (
		<section id="section-whenwhere" className="py-14 bg-pink">
			<div className="container">
				<div className="-mx-4">
					<div className="px-4">
						<div className="mb-7">
							<h2
								className={`${cormorantGaramondFont.className} text-black text-3xl uppercase tracking-wide font-semibold`}
							>
								When & Where
							</h2>
						</div>
						<OwlCarousel className="owl-theme" {...owlOptions}>
							{CarouseItens}
						</OwlCarousel>
					</div>
				</div>
			</div>
		</section>
	);
}
