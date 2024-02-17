import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Alex_Brush, Cormorant_Garamond } from 'next/font/google';

const alexBrushFont = Alex_Brush({
	subsets: ['latin', 'vietnamese'],
	weight: ['400'],
});

const cormorantGaramondFont = Cormorant_Garamond({
	subsets: ['latin', 'vietnamese'],
	weight: ['400', '500', '600'],
});

export type CoupleProps = {
	groom: {
		name: string;
		avatar: StaticImageData;
		description: string;
		socials: {
			icon: string;
			link: string;
		}[];
	};
	bride: {
		name: string;
		avatar: StaticImageData;
		description: string;
		socials: {
			icon: string;
			link: string;
		}[];
	};
};

export default function Couple({ groom, bride }: Readonly<CoupleProps>) {
	type SocialProps = {
		className?: string;
		items: {
			icon: string;
			link: string;
		}[];
	};
	const Socials = ({ className, items }: SocialProps) => {
		const list = items.map((item, index) => {
			return (
				<Link
					key={index}
					href={item.link}
					className="icon text-center leading-[35px] text-xs w-[35px] h-[35px]"
				>
					<i className={`${item.icon} leading-[35px]`}></i>
				</Link>
			);
		});
		return <div className={className}>{list}</div>;
	};

	return (
		<section id="section-couple" className="bridegroom py-14 bg-pink">
			<div className="container">
				<div className="-mx-4 md:flex flex-wrap">
					<div className="px-4 w-full md:w-1/2 mb-7 md:mb-0">
						<AnimationOnScroll
							animateIn="animate__fadeInLeft"
							duration={0.8}
							className="lg:flex lg:flex-row-reverse bg-white p-7 text-center"
						>
							<div className="lg:w-[140px] lg:h-[140px] lg:mt-[50px] overflow-hidden flex items-center lg:items-baseline justify-center lg:ml-6">
								<Image
									className="rounded-full border border-wed001-primary"
									width={140}
									height={140}
									src={groom.avatar}
									alt="groom"
								/>
							</div>
							<div className="lg:flex-1 lg:text-right mt-7">
								<h6 className={`${cormorantGaramondFont.className} text-2xl`}>
									{/* <span className="text-xl pr-1">Phaolo</span> */}
									{groom.name}
								</h6>
								<span className={`${alexBrushFont.className} text-wed001-primary text-2xl`}>
									The Groom
								</span>
								<p>{groom.description}</p>
								<Socials className="socials mt-5" items={groom.socials} />
							</div>
						</AnimationOnScroll>
					</div>
					<div className="px-4 w-full md:w-1/2">
						<AnimationOnScroll
							animateIn="animate__fadeInRight"
							duration={0.8}
							className="lg:flex bg-white p-7 text-center"
						>
							<div className="lg:w-[140px] lg:h-[140px] lg:mt-[50px] overflow-hidden flex items-center lg:items-baseline justify-center lg:mr-6">
								<Image
									className="rounded-full border border-wed001-primary"
									width={140}
									height={140}
									src={bride.avatar}
									alt="bride"
								/>
							</div>
							<div className="lg:flex-1 lg:text-left mt-7">
								<h6 className={`${cormorantGaramondFont.className} text-2xl`}>
									{/* <span className="text-xl pr-1">Anna</span> */}
									{bride.name}
								</h6>
								<span className={`${alexBrushFont.className} text-wed001-primary text-2xl`}>
									The Bride
								</span>
								<p>{bride.description}</p>
								<div className="socials mt-5">
									<Socials className="socials mt-5" items={bride.socials} />
								</div>
							</div>
						</AnimationOnScroll>
					</div>
				</div>
				<div className="-mx-4">
					<AnimationOnScroll animateIn="animate__fadeInUp" duration={0.8} className="text-center">
						<h3 className={`${alexBrushFont.className} text-3xl mb-4 text-wed001-primary`}>
							Are getting married!
						</h3>
					</AnimationOnScroll>
				</div>
			</div>
		</section>
	);
}
