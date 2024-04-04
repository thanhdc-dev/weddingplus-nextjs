import Image, { StaticImageData } from 'next/image';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Alex_Brush, Nunito_Sans } from 'next/font/google';

export type HeaderProps = {
	positionTitleClass?: string;
	weddingDate: Date;
	bannerImage: StaticImageData;
	bannerLargeImage: StaticImageData;
	groomName: string;
	brideName: string;
};

const alexBrushFont = Alex_Brush({
	subsets: ['latin', 'vietnamese'],
	weight: ['400'],
});

const nunitoSansFont = Nunito_Sans({
	subsets: ['latin', 'vietnamese'],
	weight: ['400', '600', '700'],
});

export default function Header({
	positionTitleClass,
	weddingDate,
	bannerImage,
	bannerLargeImage,
	groomName,
	brideName,
}: Readonly<HeaderProps>) {
	const year = weddingDate.getFullYear();
	const month = (weddingDate.getMonth() + 1).toString().padStart(2, '0');
	const date = weddingDate.getDate().toString().padStart(2, '0');
	const dateNext = (weddingDate.getDate() + 1).toString().padStart(2, '0');
	if (!positionTitleClass) {
		positionTitleClass = 'bottom-1/4';
	}
	return (
		<div
			id="section-header"
			className="min-h-screen bg-center bg-cover bg-no-repeat overflow-hidden flex items-center relative before:block before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-25"
		>
			<div className="banner-image absolute top-0 left-0 w-full h-full z-[-1]">
				<picture>
					<source media="(min-width:992px)" srcSet={bannerLargeImage.src} />
					<Image
						alt="Banner"
						src={bannerImage}
						placeholder="blur"
						quality={100}
						fill
						sizes="100vw"
						style={{
							objectFit: 'cover',
						}}
					/>
				</picture>
			</div>
			<div className={`text-center absolute ${positionTitleClass} w-full z-10`}>
				<h1
					className={`${alexBrushFont.className} text-[40px] sm:text-[42px] lg:text-8xl font-normal drop-shadow-lg flex justify-center items-center text-white`}
				>
					<AnimationOnScroll animateIn="animate__fadeInUp" initiallyVisible={true} duration={0.8}>
						<span>{groomName}</span>
						<span className="heart-icon animate__animated animate__bounce animate__infinite px-2">
							<svg
								className="w-5 h-5"
								fill="#FFF"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								height="800px"
								width="800px"
								version="1.1"
								id="Capa_1"
								viewBox="0 0 471.701 471.701"
								xmlSpace="preserve"
							>
								<g>
									<path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,434.001,213.101,414.401,232.701z" />
								</g>
							</svg>
						</span>
						<span>{brideName}</span>
					</AnimationOnScroll>
				</h1>
				<span
					className={`${nunitoSansFont.className} text-base lg:text-2xl tracking-[5px] uppercase text-white`}
				>
					<AnimationOnScroll animateIn="animate__fadeInUp" initiallyVisible={true} duration={0.8}>
						<span className="wedding-date-d">{date}/{dateNext}</span>
						<span>-</span>
						<span className="wedding-date-m">{month}</span>
						<span>-</span>
						<span className="wedding-date-y">{year}</span>
					</AnimationOnScroll>
				</span>
			</div>
		</div>
	);
}
