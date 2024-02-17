import Image, { StaticImageData } from 'next/image';
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

export type StoryProps = {
	image: StaticImageData;
	description: string;
};

export default function Story({ image, description }: Readonly<StoryProps>) {
	return (
		<section id="story" className="pt-24 pb-14 md:pb-24">
			<div className="container">
				<div className="-mx-4 flex flex-wrap">
					<div className="px-4 w-full md:w-5/12 mb-7">
						<AnimationOnScroll animateIn="animate__fadeInLeft" duration={0.8}>
							<div className="story-img pr-7 pb-7 pl-4 relative before:absolute before:top-[30px] before:right-0 before:left-[45px] before:bottom-0 before:border-[10px] before:border-wed001-primary after:absolute after:w-[90%] after:-top-[10%] after:-bottom-[15%] after:left-0 after:bg-repeat after:-z-[1] after:bg-[url('/images/wed-001/dots.png')]">
								<Image className="relative" src={image} alt="story" />
							</div>
						</AnimationOnScroll>
					</div>
					<AnimationOnScroll
						animateIn="animate__fadeInRight"
						duration={0.8}
						className="px-4 w-full md:w-7/12"
					>
						<h4 className={`${alexBrushFont.className} text-wed001-primary text-3xl`}>Our love.</h4>
						<h3
							className={`${cormorantGaramondFont.className} text-3xl uppercase tracking-wide font-semibold mb-7`}
						>
							Our Story
						</h3>
						<div dangerouslySetInnerHTML={{ __html: description }}></div>
					</AnimationOnScroll>
				</div>
			</div>
		</section>
	);
}
