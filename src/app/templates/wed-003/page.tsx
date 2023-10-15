'use client';
import { useCountdown } from '@/hooks/useCountdown';
import BrideImage from '@public/images/wed-003/bride.webp';
import Bridesmaid1Image from '@public/images/wed-003/bridesmaid-01.jpeg';
import Bridesmaid2Image from '@public/images/wed-003/bridesmaid-02.jpeg';
import BridesmaidBackgroundImage from '@public/images/wed-003/bridesmaid-bg.jpg';
import Event1Image from '@public/images/wed-003/event-01.jpeg';
import Event2Image from '@public/images/wed-003/event-02.jpeg';
import Event3Image from '@public/images/wed-003/event-03.jpeg';
import Event4Image from '@public/images/wed-003/event-04.jpeg';
import EventBackgroundImage from '@public/images/wed-003/event-bg.jpg';
import Gallery1Image from '@public/images/wed-003/gallery-item-01.webp';
import Gallery2Image from '@public/images/wed-003/gallery-item-02.webp';
import Gallery3Image from '@public/images/wed-003/gallery-item-03.webp';
import Gallery4Image from '@public/images/wed-003/gallery-item-04.webp';
import Gallery5Image from '@public/images/wed-003/gallery-item-05.webp';
import Gallery6Image from '@public/images/wed-003/gallery-item-06.webp';
import Gallery7Image from '@public/images/wed-003/gallery-item-07.webp';
import Gallery8Image from '@public/images/wed-003/gallery-item-08.webp';
import Gallery9Image from '@public/images/wed-003/gallery-item-09.webp';
import Gallery10Image from '@public/images/wed-003/gallery-item-10.webp';
import Gallery11Image from '@public/images/wed-003/gallery-item-11.webp';
import Gallery12Image from '@public/images/wed-003/gallery-item-12.webp';
import GroomImage from '@public/images/wed-003/groom.webp';
import Groomsmen1Image from '@public/images/wed-003/groomsmen-01.jpeg';
import Groomsmen2Image from '@public/images/wed-003/groomsmen-02.jpeg';
import GroomsmenBackgroundImage from '@public/images/wed-003/groomsmen-bg.jpg';
import InvitationBackgroundImage from '@public/images/wed-003/invitation-bg.jpg';
import StoryBackgroundImage from '@public/images/wed-003/our-story-bg.jpg';
import Slider1Image from '@public/images/wed-003/slider-01.webp';
import Slider2Image from '@public/images/wed-003/slider-02.webp';
import Story1Image from '@public/images/wed-003/story-01.jpeg';
import Story2Image from '@public/images/wed-003/story-02.jpeg';
import Story3Image from '@public/images/wed-003/story-03.jpeg';
import Story4Image from '@public/images/wed-003/story-04.jpeg';
import VideoBackgroundImage from '@public/images/wed-003/video-bg.jpg';
import { AddToCalendarButton, AddToCalendarButtonType } from 'add-to-calendar-button-react';
import 'animate.css/animate.min.css';
import dynamic from 'next/dynamic';
import { Marmelad, Oooh_Baby } from 'next/font/google';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {
	TfiFacebook,
	TfiHeartBroken,
	TfiInstagram,
	TfiLinkedin,
	TfiTwitterAlt,
} from 'react-icons/tfi';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import styles from './styles.module.scss';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const marmeladFont = Marmelad({
	subsets: ['latin', 'vietnamese'],
	weight: ['400'],
	variable: '--marmelad-font',
});
const ooohBabyFont = Oooh_Baby({
	subsets: ['latin', 'vietnamese'],
	weight: ['400'],
});

type SliderProps = {
	weddingDate: Date;
	groom: {
		name: string;
	};
	bride: {
		name: string;
	};
	items: StaticImageData[];
};

const Slider = ({ weddingDate, groom, bride, items }: SliderProps) => {
	const year = weddingDate.getFullYear();
	const month = weddingDate.getMonth() + 1;
	const date = weddingDate.getDate();
	const owlOptions = {
		items: 1,
		autoplay: true,
		autoplayTimeout: 3000,
		loop: true,
		dots: true,
	};
	const Items = items.map((item, index) => {
		return (
			<div key={index}>
				<div
					className="w-screen h-screen bg-center bg-no-repeat bg-cover"
					style={{ backgroundImage: `url(${item.src})` }}
				></div>
			</div>
		);
	});
	return (
		<section
			id="slider"
			className="relative overflow-hidden w-screen h-screen before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-80 before:bg-[#4d5271] after:absolute after:left-0 after:bottom-0 after:z-0 after:w-0 after:h-0 after:border after:border-b-[130px] after:border-l-[100vw] after:border-transparent after:border-b-white"
			style={{ minHeight: '623px' }}
		>
			<div className="fixed top-0 left-0 w-screen h-screen -z-[2]">
				<OwlCarousel className="owl-theme" {...owlOptions}>
					{Items}
				</OwlCarousel>
			</div>
			<div className="container">
				<div className="-mx-4">
					<div className="px-4">
						<div className=" flex flex-col items-center justify-center max-h-screen py-20 text-center relative hero-wrap before:-left-[100px] sm:before:-left-[45px] lg:before:left-0 before:w-[219px] before:h-[395px] after:-right-[100px] sm:after:-right-[45px] lg:after:right-0 after:w-[219px] after:h-[395px]">
							<AnimationOnScroll animateIn="animate__fadeIn" duration={0.8} initiallyVisible={true}>
								<h2 className="text-xl md:text-2xl uppercase text-white">Save the Date</h2>
							</AnimationOnScroll>
							<h1
								className={`${marmeladFont.className} text-[42px] lg:text-8xl mb-10 font-medium text-white relative before:absolute before:h-[1px] before:w-[100px] before:-bottom-[34px] before:left-1/2 before:-translate-x-1/2 before:bg-white`}
							>
								<AnimationOnScroll
									animateIn="animate__fadeInRight"
									duration={0.8}
									initiallyVisible={true}
								>
									<span className="block sm:inline d-sm-inline">{groom.name}</span>
								</AnimationOnScroll>
								<AnimationOnScroll
									animateIn="animate__fadeInUp"
									duration={0.8}
									initiallyVisible={true}
								>
									<small className="text-5xl">&amp;</small>
								</AnimationOnScroll>
								<AnimationOnScroll
									animateIn="animate__fadeInLeft"
									duration={0.8}
									initiallyVisible={true}
								>
									<span className="block sm:inline d-sm-inline">{bride.name}</span>
								</AnimationOnScroll>
							</h1>

							<AnimationOnScroll
								animateIn="animate__fadeIn"
								duration={1}
								initiallyVisible={true}
								className="font-normal text-xl md:text-2xl text-white"
							>
								{date} Tháng {month} {year}
							</AnimationOnScroll>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

type IconTypeProps = 'facebook' | 'twitter' | 'linkedin' | 'instagram';

type IconProps = {
	type: IconTypeProps;
};
const Icon = ({ type }: IconProps) => {
	switch (type) {
		case 'facebook':
			return <TfiFacebook className="hover:text-wed001-primary" />;
		case 'twitter':
			return <TfiTwitterAlt className="hover:text-wed001-primary" />;
		case 'linkedin':
			return <TfiLinkedin className="hover:text-wed001-primary" />;
		case 'instagram':
			return <TfiInstagram className="hover:text-wed001-primary" />;
		default:
			return <i></i>;
	}
};

type CoupleProps = {
	groom: {
		name: string;
		full_name: string;
		avatar: StaticImageData;
		description: string;
		socials: {
			icon: IconTypeProps;
			link: string;
		}[];
	};
	bride: {
		name: string;
		full_name: string;
		avatar: StaticImageData;
		description: string;
		socials: {
			icon: IconTypeProps;
			link: string;
		}[];
	};
};

const Couple = ({ groom, bride }: CoupleProps) => {
	type IconsProps = {
		items: {
			icon: IconTypeProps;
			link: string;
		}[];
	};
	const Icons = ({ items }: IconsProps) => {
		return items.map((item, index) => {
			return (
				<li key={index}>
					<Link className="px-2" href={item.link}>
						<Icon type={item.icon} />
					</Link>
				</li>
			);
		});
	};
	return (
		<section
			id="couple"
			className="relative py-16 -mt-[210px] bg-gradient-to-b from-white to-white bg-no-repeat [background-position-x:0] [background-position-y:210px]"
		>
			<div className="container">
				<div className="elative -mx-4 pb-10 sm:flex sm:justify-center">
					<div className="px-4 md:w-1/2 xl:w-1/3 offset-xl-2">
						<div className="p-4 bg-white relative group">
							<Image className="w-full h-auto mb-10 sm:mb-0" src={groom.avatar} alt="groom" />
							<div className="relative sm:absolute top-0 left-0 w-full sm:h-full bg-[#ffffffd9] sm:opacity-0 group-hover:opacity-100 sm:border-[36px] border-transparent">
								<div className="h-lines border-t border-b border-t-wed003-primary border-b-wed003-primary absolute top-0 -left-[10px] -right-[10px] h-full transition-all duration-700 sm:scale-x-0 group-hover:scale-x-100 before:border-t before:border-b before:border-t-wed003-primary before:border-b-wed003-primary before:absolute before:-top-[10px] before:left-[10px] before:right-[10px] before:-bottom-[10px] before:transition-all before:duration-700 sm:before:scale-x-0 before:group-hover:scale-x-100"></div>
								<div className="v-lines border-l border-r border-l-wed003-primary border-r-wed003-primary absolute -top-[10px] -bottom-[10px] left-0 w-full transition-all duration-700 sm:scale-y-0 group-hover:scale-y-100 before:border-l before:border-r before:border-l-wed003-primary before:border-r-wed003-primary before:absolute before:top-[10px] before:bottom-[10px] before:-left-[10px] before:-right-[10px] before:transition-all before:duration-700 sm:before:scale-y-0 before:group-hover:scale-y-100"></div>
								<div className="p-4 text-center relative sm:top-1/2 sm:-translate-y-1/2">
									<h3 className={`${marmeladFont.className} text-3xl sm:text-[40px] mb-8`}>
										<span className="mb-4">{groom.full_name}</span>
										<small className="font-sans block uppercase text-base font-light">
											The Groom
										</small>
									</h3>
									<p>{bride.description}</p>
									<ul className="sn-icons flex justify-center items-center">
										{<Icons items={groom.socials} />}
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="absolute z-10 left-1/2 -translate-x-1/2 -bottom-[25px] rounded-full bg-white w-28 h-28 flex justify-center items-center">
						<TfiHeartBroken className="text-6xl text-wed003-primary" />
					</div>

					<div className="px-4 md:w-1/2 xl:w-1/3">
						<div className="p-4 bg-white relative group">
							<Image className="w-full h-auto mb-10 sm:mb-0" src={bride.avatar} alt="bride" />
							<div className="relative sm:absolute top-0 left-0 w-full sm:h-full bg-[#ffffffd9] sm:opacity-0 group-hover:opacity-100 sm:border-[36px] border-transparent">
								<div className="h-lines border-t border-b border-t-wed003-primary border-b-wed003-primary absolute top-0 -left-[10px] -right-[10px] w-full h-full transition-all duration-700 sm:scale-x-0 group-hover:scale-x-100 before:border-t before:border-b before:border-t-wed003-primary before:border-b-wed003-primary before:absolute before:-top-[10px] before:left-[10px] before:right-[10px] before:-bottom-[10px] before:transition-all before:duration-700 sm:before:scale-x-0 before:group-hover:scale-x-100"></div>
								<div className="v-lines border-l border-r border-l-wed003-primary border-r-wed003-primary absolute -top-[10px] -bottom-[10px] left-0 w-full transition-all duration-700 sm:scale-y-0 group-hover:scale-y-100 before:border-l before:border-r before:border-l-wed003-primary before:border-r-wed003-primary before:absolute before:top-[10px] before:bottom-[10px] before:-left-[10px] before:-right-[10px] before:transition-all before:duration-700 sm:before:scale-y-0 before:group-hover:scale-y-100"></div>
								<div className="p-4 text-center relative sm:top-1/2 sm:-translate-y-1/2 w-full h-auto">
									<h3 className={`${marmeladFont.className} text-3xl sm:text-[40px] mb-8`}>
										<span className="mb-4">{bride.full_name}</span>
										<small className="font-sans block uppercase text-base font-light">
											The Bride
										</small>
									</h3>
									<p>{bride.description}</p>
									<ul className="sn-icons flex justify-center items-center">
										{<Icons items={bride.socials} />}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap justify-center -mx-4">
					<AnimationOnScroll
						animateIn="animate__fadeInDown"
						duration={0.8}
						className="px-4 md:w-1/2 text-center"
					>
						<h3 className={`${marmeladFont.className} font-bold text-4xl mb-10`}>
							We are Getting Married
						</h3>
						<p className="mb-5">
							Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám cưới của chúng
							tôi. Chúng tôi muốn gửi đến bạn những lời cảm ơn sâu sắc nhất và để bạn biết chúng tôi
							rất hạnh phúc khi thấy bạn ở đó. Cảm ơn các bạn rất nhiều vì sự hiện diện cùng những
							lời chúc tốt đẹp mà bạn đã dành cho chúng tôi!
						</p>
						<p className={`${ooohBabyFont.className} text-4xl font-extralight mb-5`}>
							{groom.name}
							&amp;
							{bride.name}
						</p>
					</AnimationOnScroll>
				</div>
			</div>
		</section>
	);
};

type StoryProps = {
	backgroundImage: StaticImageData;
	items: {
		date: string;
		title: string;
		image: StaticImageData;
		content: string;
	}[];
};

const Story = ({ backgroundImage, items }: StoryProps) => {
	const Items = items.map((item, index) => {
		return (
			<div key={index}>
				<AnimationOnScroll
					animateIn="animate__fadeInDown"
					duration={0.8}
					className="relative bg-white text-center mb-16"
				>
					<div
						className={`${marmeladFont.className} relative bg-white inline-block text-2xl lg:text-4xl font-extralight px-8 py-1 text-wed003-primary`}
					>
						<div className="absolute top-0 -left-[10px] -right-[10px] h-full border-t border-b border-t-wed003-primary border-b-wed003-primary transition-all duration-700 before:border-t before:border-b before:border-t-wed003-primary before:border-b-wed003-primary before:absolute before:-top-[10px] before:left-[10px] before:right-[10px] before:-bottom-[10px] before:transition-all before:duration-700"></div>
						<div className="absolute -top-[10px] -bottom-[10px] left-0 w-full border-l border-r border-l-wed003-primary border-r-wed003-primary transition-all duration-700 before:border-l before:border-r before:border-l-wed003-primary before:border-r-wed003-primary before:absolute before:top-[10px] before:bottom-[10px] before:-left-[10px] before:-right-[10px] before:transition-all before:duration-700"></div>
						{item.date}
					</div>
				</AnimationOnScroll>
				<div className="item pb-24 relative flex flex-wrap justify-center lg:before:right-0 2xl:before:right-[130px]">
					<AnimationOnScroll
						animateIn="animate__fadeInLeft"
						duration={0.8}
						className="lg:w-max lg:relative lg:translate-x-[calc(-50%+100px)] mb-6"
					>
						<div className="relative text-center">
							<Image
								src={item.image}
								alt={item.title}
								className="rounded-full w-full h-auto lg:rounded-md"
								style={{ maxWidth: '500px' }}
							/>
						</div>
					</AnimationOnScroll>
					<AnimationOnScroll
						animateIn="animate__fadeInDown"
						duration={0.8}
						className="lg:max-w-[550px] lg:absolute lg:left-[calc(50%+50px)] lg:rounded-md overflow-hidden lg:top-5"
					>
						<div className="relative bg-wed003-primary border-[30px] border-transparent">
							<div className="h-lines border-t border-b border-t-[#ffffff4d] border-b-[#ffffff4d] absolute top-0 -left-[10px] -right-[10px] h-full transition-all duration-700 before:border-t before:border-b before:border-t-[#ffffff4d] before:border-b-[#ffffff4d] before:absolute before:-top-[10px] before:left-[10px] before:right-[10px] before:-bottom-[10px] before:transition-all before:duration-700"></div>
							<div className="v-lines border-l border-r border-l-[#ffffff4d] border-r-[#ffffff4d] absolute -top-[10px] -bottom-[10px] left-0 w-full transition-all duration-700 before:border-l before:border-r before:border-l-[#ffffff4d] before:border-r-[#ffffff4d] before:absolute before:top-[10px] before:bottom-[10px] before:-left-[10px] before:-right-[10px] before:transition-all before:duration-700"></div>
							<div className="p-4 text-center">
								<h4 className={`${marmeladFont.className} text-white text-2xl sm:text-3xl`}>
									{item.title}
								</h4>
								<p className="text-white">{item.content}</p>
							</div>
						</div>
					</AnimationOnScroll>
				</div>
			</div>
		);
	});
	return (
		<section id="our-story" className="bg-white pb-24">
			<div
				id="our-story-title-container"
				className="relative py-16 mb-16 sm:py-24 lg:py-40 bg-white bg-center bg-cover bg-fixed before:absolute before:bg-wed003-primary-light before:top-0 before:left-0 before:w-full before:h-full before:opacity-80"
				style={{ backgroundImage: `url('${backgroundImage.src}')` }}
			>
				<div className="absolute top-0 left-0 w-0 h-0 border-t-[60px] sm:border-t-[90px] lg:border-t-[130px] border-r-[calc(100vw-15px)] border-transparent border-t-white"></div>
				<div className="container relative">
					<div>
						<h1
							className={`${marmeladFont.className} section-title text-center text-4xl sm:text-5xl lg:text-[56px] sm:text-[56px] pb-9 text-white`}
						>
							Chuyện Tình Yêu
						</h1>
					</div>
				</div>
				<div className="absolute bottom-0 left-0 w-0 h-0 border-t-[60px] sm:border-t-[90px] lg:border-t-[130px] border-l-[calc(100vw-15px)] border-transparent border-l-white"></div>
			</div>
			<div className="container">
				<div className="relative before:absolute before:w-[1px] before:h-full before:top-0 before:left-1/2 before:-ml-[1px] before:bg-[#8eaeba]">
					{Items}
				</div>

				<div className="timeline_footer">
					<AnimationOnScroll
						animateIn="animate__fadeInUp"
						duration={0.8}
						className="flex justify-center animate-from-top animation-from-top"
					>
						<svg
							className="w-[80px] fill-wed003-primary"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 64 64"
						>
							<g id="Layer_13" data-name="Layer 13">
								<path d="M47.41,21l2.48-3.41a.72.72,0,0,0,.48-.8,0,0,0,0,0,0,0,.71.71,0,0,0-.62-.81c-.36-.25-2.56-2.86-3-2.72h-8a.68.68,0,0,0-.47.17c-.09.06-2.48,2.48-2.56,2.55-.81.07-.88,1.41-.15,1.65l2.54,3.49a16.56,16.56,0,0,0-6.95,3.32A16.07,16.07,0,0,0,25.69,22l1.16-1.16c3.51-4.09-2.41-8.75-5.77-4.45-3.37-4.3-9.27.37-5.77,4.45l1,1C-3.7,26.15,0,55,20.59,53.94a16.13,16.13,0,0,0,11.08-3.19A16.57,16.57,0,0,0,43,53.93C64,55,67.88,25.47,47.41,21ZM43,51.93a14.54,14.54,0,0,1-8.51-3.81c5.1-5.74,4.88-15.63-.4-21.16a14.47,14.47,0,0,1,9-4.18C60.37,24.81,60.52,49.89,43,51.93ZM7.74,37.78C7.42,27.2,20.4,19.1,28.5,27c-4.91,5.75-4.71,15.61.41,21.16C20.75,56.64,7.52,48.67,7.74,37.78Zm37-20.15-1,3.09a14,14,0,0,1-1.94,0l-1-3.07Zm-11.65,29-.15-.19a16.31,16.31,0,0,0-.3-17.85.67.67,0,0,1,.11-.14C37.13,33.22,37.31,41.74,33.05,46.66Zm-2.78.05c-4.3-4.83-4.48-13.28-.35-18.28a2.62,2.62,0,0,1,.22.25,16.74,16.74,0,0,0,.31,17.81Zm1.15-16.23a14.32,14.32,0,0,1,.24,14.18A14.73,14.73,0,0,1,31.42,30.48Zm14.3-9.72-.47,0,1-3.09H48Zm1.88-4.85h-.74l.19-.56Zm-1.93-1.2-.4,1.2H40.13l-.4-1.2Zm-7.31.64.19.56H37.8Zm-1,2.28h1.72l1.05,3.13a3.59,3.59,0,0,0-.46,0ZM5,37.78A14.15,14.15,0,0,1,9.41,27.5C4.57,33,4.58,42.59,9.44,48.09A14.17,14.17,0,0,1,5,37.78Zm49.08,10.5c5.41-5.8,5.41-16.06,0-21.86C60.58,31.89,60.57,42.81,54.08,48.28Z" />
							</g>
						</svg>
					</AnimationOnScroll>
					<AnimationOnScroll
						animateIn="animate__fadeInDown"
						duration={0.8}
						className={`${marmeladFont.className} text-center uppercase text-wed003-primary sm:text-2xl`}
					>
						This is where our FOREVER BEGINS!
					</AnimationOnScroll>
				</div>
			</div>
		</section>
	);
};

type InvitationProps = {
	weddingDate: Date;
	backgroundImage: StaticImageData;
};

const Invitation = ({ weddingDate, backgroundImage }: InvitationProps) => {
	const year = weddingDate.getFullYear();
	const month = weddingDate.getMonth() + 1;
	const date = weddingDate.getDate();
	const targetDate = weddingDate.getTime();
	const [days, hours, minutes, seconds] = useCountdown(targetDate);
	return (
		<section
			id="invitation"
			className="relative py-28 bg-center bg-scroll bg-no-repeat bg-cover before:absolute before:bg-wed003-primary before:top-0 before:left-0 before:w-full before:h-full before:opacity-80"
			style={{ backgroundImage: `url('${backgroundImage.src}')` }}
		>
			<div className="absolute top-0 left-0 w-0 h-0 border-t-[60px] sm:border-t-[90px] lg:border-t-[130px] border-r-[calc(100vw-15px)] border-transparent border-t-white"></div>
			<div className="container relative">
				<div className="-mx-4">
					<div className="px-4">
						<h1
							className={`${marmeladFont.className} section-title text-center text-4xl sm:text-5xl lg:text-[56px] sm:text-[56px] pb-9 text-white`}
						>
							The Big Day!
						</h1>
					</div>
				</div>
			</div>
			<div className="section-divider-top-1 off-section"></div>
			<div className="container">
				<div className="-mx-4 flex justify-center">
					<div className="px-4 w-full lg:w-4/5 xl:w-3/5 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 center">
						<div
							className="relative flex flex-wrap"
							data-animation-direction="fadeInLeft"
							data-animation-delay="100"
						>
							<div className="h-lines border-t-[2px] border-b-[2px] border-t-white border-b-white absolute top-0 -left-[10px] -right-[10px] h-full transition-all duration-700 before:border-t before:border-b-[2px] before:border-t-white before:border-b-white before:absolute before:-top-[10px] before:left-[10px] before:right-[10px] before:-bottom-[10px] before:transition-all before:duration-700"></div>
							<div className="v-lines border-l-[2px] border-r-[2px] border-l-white border-r-white absolute -top-[10px] -bottom-[10px] left-0 w-full transition-all duration-700 before:border-l before:border-r-[2px] before:border-l-white before:border-r-white before:absolute before:top-[10px] before:bottom-[10px] before:-left-[10px] before:-right-[10px] before:transition-all before:duration-700"></div>
							<div className="w-full md:w-1/2 flex justify-center items-center py-16 md:pb-0">
								<div
									className={`${marmeladFont.className} text-6xl md:text-8xl text-white text-center font-extralight`}
								>
									<span className="block">Save</span>
									<small className={`${marmeladFont.className} text-xl`}>THE</small>
									<span className="block">Date</span>
								</div>
							</div>
							<div className="w-full md:w-1/2 py-10 px-6 bg-[#747ba9b3] text-white text-center">
								<h2 className={`${marmeladFont.className} text-[27px] text-white font-medium`}>
									Kiến Văn <small>&amp;</small> Việt Hoài
								</h2>

								<div className="mb-4">
									Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi có thêm một niềm
									hạnh phúc!
								</div>
								<div className={`${marmeladFont.className} date py-10 mb-4 text-2xl font-bold`}>
									<span className="pr-2">{date}</span>
									<span className="pr-2">Tháng</span>
									<span className="pr-2">{month}</span>
									<span>{year}</span>
								</div>
								<div className="count-down-clock">
									<div className="flex">
										<div className="w-1/4">
											<div id="days" className="text-3xl font-bold">
												{days}
											</div>
											<span>Ngày</span>
										</div>
										<div className="w-1/4">
											<div id="hours" className="text-3xl font-bold">
												{hours}
											</div>
											<span>Giờ</span>
										</div>
										<div className="w-1/4">
											<div id="minutes" className="text-3xl font-bold">
												{minutes}
											</div>
											<span>Phút</span>
										</div>
										<div className="w-1/4">
											<div id="seconds" className="text-3xl font-bold">
												{seconds}
											</div>
											<span>Giây</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute bottom-0 left-0 w-0 h-0 border-b-[60px] sm:border-b-[90px] lg:border-b-[130px] border-l-[calc(100vw-15px)] border-transparent border-b-white"></div>
		</section>
	);
};

type GalleryProps = {
	items: StaticImageData[];
};

const Gallery = ({ items }: GalleryProps) => {
	const Items = items.map((item, index) => {
		return (
			<div key={index} className="grid-item p-2">
				<Link href={item.src} className="block img-zoom">
					<div className="overflow-hidden group">
						<Image
							className="w-full h-auto mx-auto transition-all group-hover:scale-105"
							alt={`gallery ${index}`}
							src={item}
						/>
					</div>
				</Link>
			</div>
		);
	});
	return (
		<section id="gallery" className="bg-white py-16">
			<div className="container">
				<div className="-mx-4">
					<div className="px-4">
						<h1 className="section-title text-center font-marmelad text-4xl sm:text-5xl lg:text-[56px] sm:text-[56px] pb-9 text-wed003-primary">
							Album Hình Cưới
						</h1>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="-mx-4">
					<div className="px-4">
						<ResponsiveMasonry columnsCountBreakPoints={{ 0: 2, 768: 3 }}>
							<Masonry className="masonry-gallery -mx-2">{Items}</Masonry>
						</ResponsiveMasonry>
					</div>
				</div>
			</div>
		</section>
	);
};

type VideoProps = {
	backgroundImage: StaticImageData;
	videoUrl: string;
};

const Video = ({ backgroundImage, videoUrl }: VideoProps) => {
	return (
		<section
			id="video"
			className="relative py-40 bg-center bg-scroll bg-no-repeat bg-cover before:absolute before:bg-wed003-primary before:top-0 before:left-0 before:w-full before:h-full before:opacity-80"
			style={{ backgroundImage: `url('${backgroundImage.src}')` }}
		>
			<div className="absolute top-0 left-0 w-0 h-0 border-t-[60px] sm:border-t-[90px] lg:border-t-[170px] border-r-[100vw] border-transparent border-t-white"></div>
			<div className="container relative">
				<div className="-mx-4">
					<div className="px-4">
						<h1 className="section-title text-center font-marmelad text-4xl sm:text-5xl lg:text-[56px] sm:text-[56px] pb-9 mb-16 text-white">
							Xem video cưới của chúng tôi!
						</h1>
					</div>
				</div>
			</div>
			<div className="container">
				<AnimationOnScroll
					animateIn="animate__fadeInLeft"
					duration={0.8}
					className="relative mx-auto"
				>
					<div className="h-lines border-t-[2px] border-b-[2px] border-t-white border-b-white absolute top-0 -left-[10px] -right-[10px] h-full transition-all duration-700 before:border-t before:border-b-[2px] before:border-t-white before:border-b-white before:absolute before:-top-[10px] before:left-[10px] before:right-[10px] before:-bottom-[10px] before:transition-all before:duration-700"></div>
					<div className="v-lines border-l-[2px] border-r-[2px] border-l-white border-r-white absolute -top-[10px] -bottom-[10px] left-0 w-full transition-all duration-700 before:border-l before:border-r-[2px] before:border-l-white before:border-r-white before:absolute before:top-[10px] before:bottom-[10px] before:-left-[10px] before:-right-[10px] before:transition-all before:duration-700"></div>
					<iframe
						className="border border-5 border-white w-full aspect-video"
						style={{ borderWidth: '10px !important' }}
						src={videoUrl}
						allowFullScreen={true}
						data-aspectratio="0.559"
					></iframe>
				</AnimationOnScroll>
			</div>
		</section>
	);
};

type EventItemProps = {
	title: string;
	time: string;
	location: string;
	googleMapUrl: string;
	image: StaticImageData;
	calendar: AddToCalendarButtonType;
};

type EventProps = {
	backgroundImage: StaticImageData;
	items: EventItemProps[];
};

const EventItem = ({ image, title, time, location, calendar, googleMapUrl }: EventItemProps) => {
	calendar = {
		...calendar,
		label: 'THÊM VÀO LỊCH',
		size: '4',
		inline: true,
		hideIconButton: true,
		hideCheckmark: true,
		styleLight:
			'--btn-text: rgb(116 123 169, 1); --font: var(--marmelad-font);--btn-text-hover: rgb(116 123 169, 1);--btn-background: rgb(255,255,255,0); --btn-border: rgb(255,255,255,0); --btn-shadow: none;--btn-shadow-hover: none;--btn-shadow-active: none;',
	};

	return (
		<div className="relative p-8 group/item transition duration-700 ease-in-out">
			<div className="border-t border-b border-t-wed003-primary border-b-wed003-primary absolute top-0 -left-[10px] -right-[10px] h-full before:border-t before:border-b before:border-t-wed003-primary before:border-b-wed003-primary before:absolute before:-top-[10px] before:left-[10px] before:right-[10px] before:-bottom-[10px]"></div>
			<div className="border-l border-r border-l-wed003-primary border-r-wed003-primary absolute -top-[10px] -bottom-[10px] left-0 w-full before:border-l before:border-r before:border-l-wed003-primary before:border-r-wed003-primary before:absolute before:top-[10px] before:bottom-[10px] before:-left-[10px] before:-right-[10px]"></div>
			<div className="flex items-center flex-wrap justify-center lg:justify-start mb-5">
				<Image
					className="inline-block rounded-full aspect-square w-[100px] h-auto mb-4 lg:mb-0 lg:mr-4"
					src={image}
					alt={title}
				/>
				<div className="text-center lg:text-left">
					<h3 className="font-marmelad font-medium text-lg sm:text-[26px] lg:text-3xl mb-0">
						{title}
					</h3>
					<p className="mb-0">
						<i className="ti-alarm-clock text-wed003-primary" aria-hidden="true"></i>
						<strong className="text-wed003-primary">{time}</strong>
					</p>
					<p className="mb-0">
						<i className="ti-map-alt text-wed003-primary" aria-hidden="true"></i>
						<strong className="text-wed003-primary">{location}</strong>
					</p>
				</div>
			</div>

			<div className="relative group-hover/item:h-max group-hover/item:opacity-100 group-hover/item:top-0 flex justify-center items-center flex-col sm:flex-row">
				<div className="calendar-button overflow-hidden"></div>
				<span
					className={`${marmeladFont.className} text-wed003-primary hover:text-wed003-primary group/button relative mx-3 border border-wed003-primary w-[205px] text-center text-sm hover:border-transparent`}
				>
					<div className="border-t border-b border-t-wed003-primary border-b-wed003-primary absolute top-0 -left-[10px] -right-[10px] h-full transition-all duration-700 scale-x-0 group-hover/button:scale-x-100 before:border-t before:border-b before:border-t-wed003-primary before:border-b-wed003-primary before:absolute before:-top-[10px] before:left-[10px] before:right-[10px] before:-bottom-[10px] before:transition-all before:duration-700 before:scale-x-0 before:group-hover/button:scale-x-100"></div>
					<div className="border-l border-r border-l-wed003-primary border-r-wed003-primary absolute -top-[10px] -bottom-[10px] left-0 w-full transition-all duration-700 scale-y-0 group-hover/button:scale-y-100 before:border-l before:border-r before:border-l-wed003-primary before:border-r-wed003-primary before:absolute before:top-[10px] before:bottom-[10px] before:-left-[10px] before:-right-[10px] before:transition-all before:duration-700 before:scale-y-0 before:group-hover/button:scale-y-100"></div>
					<AddToCalendarButton {...calendar}></AddToCalendarButton>
				</span>
				<Link
					href={googleMapUrl}
					target="_blank"
					className={`${marmeladFont.className} text-wed003-primary hover:text-wed003-primary font-semibold group/button relative mx-3 py-4 border border-wed003-primary w-[205px] text-center text-sm hover:border-transparent`}
				>
					<div className="border-t border-b border-t-wed003-primary border-b-wed003-primary absolute top-0 -left-[10px] -right-[10px] h-full transition-all duration-700 scale-x-0 group-hover/button:scale-x-100 before:border-t before:border-b before:border-t-wed003-primary before:border-b-wed003-primary before:absolute before:-top-[10px] before:left-[10px] before:right-[10px] before:-bottom-[10px] before:transition-all before:duration-700 before:scale-x-0 before:group-hover/button:scale-x-100"></div>
					<div className="border-l border-r border-l-wed003-primary border-r-wed003-primary absolute -top-[10px] -bottom-[10px] left-0 w-full transition-all duration-700 scale-y-0 group-hover/button:scale-y-100 before:border-l before:border-r before:border-l-wed003-primary before:border-r-wed003-primary before:absolute before:top-[10px] before:bottom-[10px] before:-left-[10px] before:-right-[10px] before:transition-all before:duration-700 before:scale-y-0 before:group-hover/button:scale-y-100"></div>
					XEM BẢN ĐỒ
					<i className="fa fa-angle-right me-0"></i>
				</Link>
			</div>
		</div>
	);
};

const Event = ({ backgroundImage, items }: EventProps) => {
	const Items = items.map((item, index) => {
		return (
			<AnimationOnScroll key={index} animateIn="animate__fadeInDown" duration={0.8}>
				<li className="bg-white p-9 mb-9">
					<EventItem {...item} />
				</li>
			</AnimationOnScroll>
		);
	});
	return (
		<section
			id="event"
			className="py-32 bg-center bg-no-repeat bg-cover bg-fixed"
			style={{ backgroundImage: `url('${backgroundImage.src}')` }}
		>
			<div className="container px-0 sm:px-4">
				<div className="w-full md:w-2/3 xl:w-1/2 events-boxs py-12 px-7 bg-wed003-primary-transparent text-white">
					<h2 className="text-white font-marmelad text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-medium mb-10 md:mb-12">
						Sự Kiện Cưới
					</h2>
					<div className="mb-12 text-center">
						Tình yêu đích thực đứng về phía nhau trong những ngày tốt đẹp và sát cánh hơn trong
						những ngày tồi tệ.
					</div>

					<ul className="wedding-gifts">{Items}</ul>
				</div>
			</div>
		</section>
	);
};
type BridesmaidProps = {
	backgroundImage: StaticImageData;
	items: {
		image: StaticImageData;
		name: string;
		description: string;
	}[];
};
const Bridesmaid = ({ backgroundImage, items }: BridesmaidProps) => {
	const Items = items.map((item, index) => {
		return (
			<AnimationOnScroll
				key={index}
				animateIn="animate__fadeInUp"
				duration={0.8}
				className="sm:w-1/2 lg:w-1/3 px-4 mb-10 sm:mb-0"
			>
				<div className="p-3 bg-white group relative cursor-pointer">
					<Image src={item.image} alt="bridesmaid" />
					<div className="absolute top-0 left-0 w-full h-full bg-[#ffffffd9] opacity-0 group-hover:opacity-100 neela-style border-[36px] border-transparent">
						<div className="h-lines border-t border-b border-t-wed003-primary border-b-wed003-primary absolute top-0 -left-[10px] -right-[10px] h-full transition-all duration-700 scale-x-0 group-hover:scale-x-100 before:border-t before:border-b before:border-t-wed003-primary before:border-b-wed003-primary before:absolute before:-top-[10px] before:left-[10px] before:right-[10px] before:-bottom-[10px] before:transition-all before:duration-700 before:scale-x-0 before:group-hover:scale-x-100"></div>
						<div className="v-lines border-l border-r border-l-wed003-primary border-r-wed003-primary absolute -top-[10px] -bottom-[10px] left-0 w-full transition-all duration-700 scale-y-0 group-hover:scale-y-100 before:border-l before:border-r before:border-l-wed003-primary before:border-r-wed003-primary before:absolute before:top-[10px] before:bottom-[10px] before:-left-[10px] before:-right-[10px] before:transition-all before:duration-700 before:scale-y-0 before:group-hover:scale-y-100"></div>

						<div className="p-9 text-center">
							<h3 className="font-marmelad text-4xl font-medium text-wed003-primary mb-2">
								{item.name}
							</h3>
							<p className="font-light text-wed003-primary">PHÙ DÂU</p>
							<p>{item.description}</p>
							<ul className="sn-icons"></ul>
						</div>
					</div>
				</div>
			</AnimationOnScroll>
		);
	});
	return (
		<section
			id="bridesmaid"
			className="relative py-16 bg-center bg-fixed bg-no-repeat bg-cover before:absolute before:bg-wed003-primary before:top-0 before:left-0 before:w-full before:h-full before:opacity-80"
			style={{ backgroundImage: `url('${backgroundImage.src}')` }}
		>
			<div className="container relative">
				<div className="-mx-4">
					<div className="px-4">
						<h1 className="section-title text-center font-marmelad text-4xl sm:text-5xl lg:text-[56px] sm:text-[56px] pb-9 mb-16 text-white">
							Phù Dâu
						</h1>
					</div>
				</div>
				<div className="-mx-4 flex justify-center flex-wrap">{Items}</div>
			</div>
		</section>
	);
};
type TestimonialProps = {
	items: string[];
};
const Testimonial = ({ items }: TestimonialProps) => {
	const owlOptions = {
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		loop: true,
		dots: true,
	};
	const Items = items.map((item, index) => {
		return (
			<div key={index} className="text-center">
				<blockquote
					className={`${marmeladFont.className} relative inline-block text-white pt-4 sm:pt-12 px-12 sm:px-14 md:px-24 sm:text-lg md:text-2xl before:absolute before:top-0 before:left-0 before:${marmeladFont.className} before:leading-[1] before:hidden sm:before:block before:content-['“'] before:text-8xl after:absolute after:top-0 after:right-0 after:${marmeladFont.className} after:leading-[1] after:hidden sm:after:block after:content-['”'] after:text-8xl sm:before:text-[100pt] sm:after:text-[100pt] md:before:text-[145pt] md:after:text-[145pt]`}
				>
					{item}
				</blockquote>
			</div>
		);
	});
	return (
		<section id="testimonials" className="py-16 bg-wed003-primary">
			<div className="container">
				<div className="-mx-4 flex justify-center">
					<div className="px-4 lg:w-full xl:w-10/12">
						{/* <AnimationOnScroll
							animateIn="animate__fadeInDown"
							duration={0.8}
							className="light mb-16"
						>
							<OwlCarousel className="owl-theme" {...owlOptions}>
								{Items}
							</OwlCarousel>
						</AnimationOnScroll> */}
						<blockquote
							className={`${marmeladFont.className} relative inline-block text-white pt-4 sm:pt-12 px-12 sm:px-14 md:px-24 sm:text-lg md:text-2xl before:absolute before:top-0 before:left-0 before:${marmeladFont.className} before:leading-[1] before:hidden sm:before:block before:content-['“'] before:text-8xl after:absolute after:top-0 after:right-0 after:${marmeladFont.className} after:leading-[1] after:hidden sm:after:block after:content-['”'] after:text-8xl sm:before:text-[100pt] sm:after:text-[100pt] md:before:text-[145pt] md:after:text-[145pt]`}
						>
							{items[0]}
						</blockquote>
					</div>
				</div>
			</div>
		</section>
	);
};
type GroomsmenProps = {
	backgroundImage: StaticImageData;
	items: {
		image: StaticImageData;
		name: string;
		description: string;
	}[];
};

const Groomsmen = ({ backgroundImage, items }: GroomsmenProps) => {
	const Items = items.map((item, index) => {
		return (
			<AnimationOnScroll
				key={index}
				animateIn="animate__fadeInUp"
				duration={0.8}
				className="sm:w-1/2 lg:w-1/3 px-4 mb-10 sm:mb-0"
			>
				<div className="p-3 bg-white group relative cursor-pointer">
					<Image src={item.image} alt="groomsmen" loading="lazy" />
					<div className="absolute top-0 left-0 w-full h-full bg-[#ffffffd9] opacity-0 group-hover:opacity-100 neela-style border-[36px] border-transparent">
						<div className="h-lines border-t border-b border-t-wed003-primary border-b-wed003-primary absolute top-0 -left-[10px] -right-[10px] h-full transition-all duration-700 scale-x-0 group-hover:scale-x-100 before:border-t before:border-b before:border-t-wed003-primary before:border-b-wed003-primary before:absolute before:-top-[10px] before:left-[10px] before:right-[10px] before:-bottom-[10px] before:transition-all before:duration-700 before:scale-x-0 before:group-hover:scale-x-100"></div>
						<div className="v-lines border-l border-r border-l-wed003-primary border-r-wed003-primary absolute -top-[10px] -bottom-[10px] left-0 w-full transition-all duration-700 scale-y-0 group-hover:scale-y-100 before:border-l before:border-r before:border-l-wed003-primary before:border-r-wed003-primary before:absolute before:top-[10px] before:bottom-[10px] before:-left-[10px] before:-right-[10px] before:transition-all before:duration-700 before:scale-y-0 before:group-hover:scale-y-100"></div>

						<div className="p-9 text-center">
							<h3 className="font-marmelad text-4xl font-medium text-wed003-primary mb-2">
								{item.name}
							</h3>
							<p className="font-light text-wed003-primary">PHÙ Rể</p>
							<p>{item.description}</p>
							<ul className="sn-icons"></ul>
						</div>
					</div>
				</div>
			</AnimationOnScroll>
		);
	});
	return (
		<section
			id="groomsmen"
			className="relative py-16 bg-center bg-scroll bg-no-repeat bg-cover before:absolute before:bg-wed003-primary before:top-0 before:left-0 before:w-full before:h-full before:opacity-80"
			style={{ backgroundImage: `url('${backgroundImage.src}')` }}
		>
			<div className="container relative">
				<div className="-mx-4">
					<div className="px-4">
						<h1 className="section-title text-center font-marmelad text-4xl sm:text-5xl lg:text-[56px] sm:text-[56px] pb-9 mb-16 text-white">
							Phù Rể
						</h1>
					</div>
				</div>
				<div className="-mx-4 flex justify-center flex-wrap">{Items}</div>
			</div>
		</section>
	);
};

type FooterProps = {
	groom: {
		name: string;
	};
	bride: {
		name: string;
	};
};

const Footer = ({ groom, bride }: FooterProps) => {
	return (
		<section id="footer" className="bg-wed003-primary">
			<div className="container">
				<div className="-mx-4">
					<div className="px-4 flex justify-center">
						<div
							className={`${marmeladFont.className} ${styles.footerImage} relative mx-auto inline-block font-extralight text-4xl text-white text-center py-6 px-16`}
						>
							{groom.name}
							<br />
							<small className="text-base">&amp;</small>
							<br />
							{bride.name}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default function TemplateWed003Page() {
	const now = new Date();
	const weddingDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
	const groom = {
		name: 'Kiến Văn',
		full_name: 'Hoàng Kiến Văn',
	};
	const bride = {
		name: 'Việt Hoài',
		full_name: 'Ngô Việt Hoài',
	};

	const sliderData: SliderProps = {
		weddingDate,
		groom: groom,
		bride: groom,
		items: [Slider1Image, Slider2Image],
	};

	const coupleData: CoupleProps = {
		groom: {
			name: groom.name,
			full_name: groom.full_name,
			avatar: GroomImage,
			description:
				'Là bác sĩ nha khoa hiện đang công tác tại một phòng khám nha khoa ở Quận 1 thành phồ Hồ Chí Minh. Là một người hiền lành và ít nói. Luôn coi trọng tình cảm và yêu thương gia đình. Với anh: “Gia đình là điểm tựa vững chắc nhất và là bến đỗ bình yên không đâu sánh bằng đối với mỗi con người. Đó luôn là nơi tràn ngập tình yêu thương để ta trở về.',
			socials: [
				{
					icon: 'instagram',
					link: 'https://instagram.com',
				},
				{
					icon: 'twitter',
					link: 'https://twitter.com',
				},
				{
					icon: 'facebook',
					link: 'https://facebook.com',
				},
			],
		},
		bride: {
			name: bride.name,
			full_name: bride.full_name,
			avatar: BrideImage,
			description:
				'Cô gái đến từ xứ Huế mộng mơ, hiện đang sinh sống và làm việc tại Sài Gòn. Sau khi tốt nghiệp Học viện Báo chí và Tuyên truyền, quyết tâm theo đuổi đam mê làm phóng viên du lịch. Là một người hay cười nhưng lại sống nội tâm, thích đọc sách, trồng cây và yêu thiên nhiên. Ngoài ra còn rất thích vẽ vời, nuôi mèo và nuôi ước mơ có cho mình một vườn hồng khoe sắc.',
			socials: [
				{
					icon: 'instagram',
					link: 'https://instagram.com',
				},
				{
					icon: 'twitter',
					link: 'https://twitter.com',
				},
				{
					icon: 'facebook',
					link: 'https://facebook.com',
				},
			],
		},
	};
	const storyData: StoryProps = {
		backgroundImage: StoryBackgroundImage,
		items: [
			{
				date: 'December 12 2015',
				title: 'Bạn có tin vào tình yêu online không?',
				image: Story1Image,
				content:
					'Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại đang như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!! Ngày ấy vu vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói chuyện với một người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau người ấy lại là chồng mình.',
			},
			{
				date: 'August 04 2016',
				title: 'Lời tỏ tình dễ thương^^',
				image: Story2Image,
				content:
					'Ngày ấy, tôi 21! Một mình giữa phố thị nấp tập. Mỗi chiều cuối tuần thường chạy xe vòng quanh qua những con phố, len lỏi trong từng dòng người tấp nập. Hay thậm chí là ghé vào một quán cà phê ven đường để ngồi đó và cảm nhận về cuộc sống của riêng mình. Đôi khi lạc lõng và hơi cô đơn. Nhưng rồi một ngày đẹp trời, người con trai ấy xuất hiện, nắm tay rồi thủ thỉ vào tai: “Hy vọng sau này anh được làm những điều ấy cùng em',
			},
			{
				date: 'May 10 2018',
				title: 'Phút giây cầu hôn',
				image: Story3Image,
				content:
					'5 năm bên nhau không phải là quãng thời gian quá dài, nhưng đủ cho chúng ta nhận ra được rất nhiều điều. Yêu nhau, vun vén hạnh phúc và cùng nỗ lực vượt qua những khó khăn trong cuộc sống. Chúng ta từ 2 con người xa lạ mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp tục cùng nhau sang trang mới. Giây phút anh ngỏ lời “Làm vợ anh nhé!”, em đã nguyện ý đời này, đi đâu cũng được, miễn là cùng anh.',
			},
			{
				date: 'July 28 2018',
				title: 'Ngày lễ đính hôn',
				image: Story4Image,
				content:
					'“Tiếng trái tim đôi ta đập thật nhanh. Thì thầm lời yêu thương. Ngày tình về chung đôi...” Sau bao nhiêu chờ đợi, cuối cùng ngày vui của chúng ta cũng tới rồi. Cảm ơn vì mình đã luôn là một phần trong cuộc sống của nhau. Em và anh không chỉ là người yêu mà chúng ta còn là tri kỷ. Ngày hôm nay, em sẽ là cô dâu của anh và sau này sẽ là mẹ của các con anh.',
			},
		],
	};
	const invitationData: InvitationProps = {
		weddingDate,
		backgroundImage: InvitationBackgroundImage,
	};
	const galleryData: GalleryProps = {
		items: [
			Gallery1Image,
			Gallery2Image,
			Gallery3Image,
			Gallery4Image,
			Gallery5Image,
			Gallery6Image,
			Gallery7Image,
			Gallery8Image,
			Gallery9Image,
			Gallery10Image,
			Gallery11Image,
			Gallery12Image,
		],
	};
	const videoData: VideoProps = {
		backgroundImage: VideoBackgroundImage,
		videoUrl: 'https://www.youtube.com/embed/lGUdD29BDMg',
	};
	const eventData: EventProps = {
		backgroundImage: EventBackgroundImage,
		items: [
			{
				title: 'LỄ CƯỚI NHÀ NỮ',
				time: '07:30 AM 10/02/2023',
				location: '370 Đường 02 tháng 9, Quận Hải Châu, Đà Nẵng',
				googleMapUrl:
					'https://www.google.com/maps/place/Nh%C3%A0+H%C3%A0ng+Ti%E1%BB%87c+C%C6%B0%E1%BB%9Bi+Ph%C3%BAc+Gia/@16.0386843,108.2208223,16z/data=!4m9!1m2!2m1!1zMzcwIMSQxrDhu51uZyAwMiB0aMOhbmcgOSwgUXXhuq1uIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZw!3m5!1s0x314219e8511b2333:0x7dfc73b1e9718eec!8m2!3d16.0387611!4d108.2234015!15sCjozNzAgxJDGsOG7nW5nIDAyIHRow6FuZyA5LCBRdeG6rW4gSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nWjoiODM3MCDEkcaw4budbmcgMDIgdGjDoW5nIDkgcXXhuq1uIGjhuqNpIGNow6J1IMSRw6AgbuG6tW5nkgEKcmVzdGF1cmFudA',
				image: Event1Image,
				calendar: {
					name: 'LỄ CƯỚI NHÀ NỮ (Đám cưới Kiến Văn và Việt Hoài)',
					description:
						'Cảm ơn bạn đã dành thời gian tham dự đám cưới của chúng tôi!. Thông tin chi tiết xem tại website:<br/>[url]https://weddingplus.app[/url]',
					startDate: '2023-09-12',
					endDate: '2023-09-12',
					startTime: '12:00 AM',
					endTime: '13:00 AM',
					location: 'A30 Trần Hưng Đạo, P. An Hải Tây, Quận Sơn Trà, Đà Nẵng',
					options: ['Apple', 'Google', 'iCal', 'Microsoft365', 'MicrosoftTeams', 'Outlook.com'],
					timeZone: 'Asia/Ho_Chi_Minh',
					iCalFileName: 'Reminder-Event',
					listStyle: 'modal',
					trigger: 'click',
				},
			},

			{
				title: 'TIỆC CƯỚI NHÀ NỮ',
				time: '07:30 AM 10/02/2023',
				location: '370 Đường 02 tháng 9, Quận Hải Châu, Đà Nẵng',
				googleMapUrl:
					'https://www.google.com/maps/place/Nh%C3%A0+H%C3%A0ng+Ti%E1%BB%87c+C%C6%B0%E1%BB%9Bi+Ph%C3%BAc+Gia/@16.0386843,108.2208223,16z/data=!4m9!1m2!2m1!1zMzcwIMSQxrDhu51uZyAwMiB0aMOhbmcgOSwgUXXhuq1uIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZw!3m5!1s0x314219e8511b2333:0x7dfc73b1e9718eec!8m2!3d16.0387611!4d108.2234015!15sCjozNzAgxJDGsOG7nW5nIDAyIHRow6FuZyA5LCBRdeG6rW4gSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nWjoiODM3MCDEkcaw4budbmcgMDIgdGjDoW5nIDkgcXXhuq1uIGjhuqNpIGNow6J1IMSRw6AgbuG6tW5nkgEKcmVzdGF1cmFudA',
				image: Event2Image,
				calendar: {
					name: 'TIỆC CƯỚI NHÀ NỮ (Đám cưới Kiến Văn và Việt Hoài)',
					description:
						'Cảm ơn bạn đã dành thời gian tham dự đám cưới của chúng tôi!. Thông tin chi tiết xem tại website:<br/>[url]https://weddingplus.app[/url]',
					startDate: '2023-09-12',
					endDate: '2023-09-12',
					startTime: '12:00 AM',
					endTime: '13:00 AM',
					location: 'A30 Trần Hưng Đạo, P. An Hải Tây, Quận Sơn Trà, Đà Nẵng',
					options: ['Apple', 'Google', 'iCal', 'Microsoft365', 'MicrosoftTeams', 'Outlook.com'],
					timeZone: 'Asia/Ho_Chi_Minh',
					iCalFileName: 'Reminder-Event',
					listStyle: 'modal',
					trigger: 'click',
				},
			},
			{
				title: 'LỄ CƯỚI NHÀ NAM',
				time: '07:30 AM 10/02/2023',
				location: '370 Đường 02 tháng 9, Quận Hải Châu, Đà Nẵng',
				googleMapUrl:
					'https://www.google.com/maps/place/Nh%C3%A0+H%C3%A0ng+Ti%E1%BB%87c+C%C6%B0%E1%BB%9Bi+Ph%C3%BAc+Gia/@16.0386843,108.2208223,16z/data=!4m9!1m2!2m1!1zMzcwIMSQxrDhu51uZyAwMiB0aMOhbmcgOSwgUXXhuq1uIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZw!3m5!1s0x314219e8511b2333:0x7dfc73b1e9718eec!8m2!3d16.0387611!4d108.2234015!15sCjozNzAgxJDGsOG7nW5nIDAyIHRow6FuZyA5LCBRdeG6rW4gSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nWjoiODM3MCDEkcaw4budbmcgMDIgdGjDoW5nIDkgcXXhuq1uIGjhuqNpIGNow6J1IMSRw6AgbuG6tW5nkgEKcmVzdGF1cmFudA',
				image: Event3Image,
				calendar: {
					name: 'LỄ CƯỚI NHÀ NAM (Đám cưới Kiến Văn và Việt Hoài)',
					description:
						'Cảm ơn bạn đã dành thời gian tham dự đám cưới của chúng tôi!. Thông tin chi tiết xem tại website:<br/>[url]https://weddingplus.app[/url]',
					startDate: '2023-09-12',
					endDate: '2023-09-12',
					startTime: '12:00 AM',
					endTime: '13:00 AM',
					location: 'A30 Trần Hưng Đạo, P. An Hải Tây, Quận Sơn Trà, Đà Nẵng',
					options: ['Apple', 'Google', 'iCal', 'Microsoft365', 'MicrosoftTeams', 'Outlook.com'],
					timeZone: 'Asia/Ho_Chi_Minh',
					iCalFileName: 'Reminder-Event',
					listStyle: 'modal',
					trigger: 'click',
				},
			},
			{
				title: 'TIỆC CƯỚI NHÀ NAM',
				time: '07:30 AM 10/02/2023',
				location: '370 Đường 02 tháng 9, Quận Hải Châu, Đà Nẵng',
				googleMapUrl:
					'https://www.google.com/maps/place/Nh%C3%A0+H%C3%A0ng+Ti%E1%BB%87c+C%C6%B0%E1%BB%9Bi+Ph%C3%BAc+Gia/@16.0386843,108.2208223,16z/data=!4m9!1m2!2m1!1zMzcwIMSQxrDhu51uZyAwMiB0aMOhbmcgOSwgUXXhuq1uIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZw!3m5!1s0x314219e8511b2333:0x7dfc73b1e9718eec!8m2!3d16.0387611!4d108.2234015!15sCjozNzAgxJDGsOG7nW5nIDAyIHRow6FuZyA5LCBRdeG6rW4gSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nWjoiODM3MCDEkcaw4budbmcgMDIgdGjDoW5nIDkgcXXhuq1uIGjhuqNpIGNow6J1IMSRw6AgbuG6tW5nkgEKcmVzdGF1cmFudA',
				image: Event4Image,
				calendar: {
					name: 'TIỆC CƯỚI NHÀ NAM (Đám cưới Kiến Văn và Việt Hoài)',
					description:
						'Cảm ơn bạn đã dành thời gian tham dự đám cưới của chúng tôi!. Thông tin chi tiết xem tại website:<br/>[url]https://weddingplus.app[/url]',
					startDate: '2023-09-12',
					endDate: '2023-09-12',
					startTime: '12:00 AM',
					endTime: '13:00 AM',
					location: 'A30 Trần Hưng Đạo, P. An Hải Tây, Quận Sơn Trà, Đà Nẵng',
					options: ['Apple', 'Google', 'iCal', 'Microsoft365', 'MicrosoftTeams', 'Outlook.com'],
					timeZone: 'Asia/Ho_Chi_Minh',
					iCalFileName: 'Reminder-Event',
					listStyle: 'modal',
					trigger: 'click',
				},
			},
		],
	};
	const bridesmaidData: BridesmaidProps = {
		backgroundImage: BridesmaidBackgroundImage,
		items: [
			{
				image: Bridesmaid1Image,
				name: 'Lý Mạc Sầu',
				description:
					'Là cô gái đến từ vùng đất Cố Đô “Huế mộng Huế mơ” dịu dàng, nết na và thùy mị. Với nhiều tài lẻ như ...',
			},
			{
				image: Bridesmaid2Image,
				name: 'Phạm Ðoan Trang',
				description:
					'Là cô gái gái Huế thân thiện, hay cười, dễ giao tiếp nhưng thích yên tĩnh một mình. Thường hướng về ..',
			},
		],
	};
	const testimonialData: TestimonialProps = {
		items: [
			'Tình yêu không có rào cản. Nó nhảy rào, nhảy rào, xuyên tường để đến đích với đầy hy vọng.',
			'Tình yêu không có rào cản.',
		],
	};
	const groomsmenData: GroomsmenProps = {
		backgroundImage: GroomsmenBackgroundImage,
		items: [
			{
				image: Groomsmen1Image,
				name: 'Trần Đức Minh',
				description:
					'Chàng trai sinh năm 1996 tại Bình Dương, từng là sinh viên Đại học Kinh tế TP. Hồ Chí Minh. Hiện tại...',
			},
			{
				image: Groomsmen2Image,
				name: 'Hoàng Gia Bảo',
				description:
					'Hòa đồng, xông xáo, nhiệt tình và có trách nhiệm trong công việc. Là chàng trai yêu động vật, thích ...',
			},
		],
	};
	const footerData: FooterProps = {
		groom,
		bride,
	};
	const data = {
		section_slider: {
			active: true,
			data: sliderData,
		},
		section_couple: {
			active: true,
			data: coupleData,
		},
		section_story: {
			active: true,
			data: storyData,
		},
		section_invitation: {
			active: true,
			data: invitationData,
		},
		section_gallery: {
			active: true,
			data: galleryData,
		},
		section_video: {
			active: false,
			data: videoData,
		},
		section_event: {
			active: true,
			data: eventData,
		},
		section_bridesmaid: {
			active: true,
			data: bridesmaidData,
		},
		section_testimonial: {
			active: true,
			data: testimonialData,
		},
		section_groomsmen: {
			active: false,
			data: groomsmenData,
		},
		section_footer: {
			active: false,
			data: footerData,
		},
	};

	return (
		<main className={`font-sans text-[#797979] pt-[52px] overflow-hidden w-screen`}>
			{data.section_slider.active && <Slider {...data.section_slider.data} />}
			{data.section_couple.active && <Couple {...data.section_couple.data} />}
			{data.section_story.active && <Story {...data.section_story.data} />}
			{data.section_invitation.active && <Invitation {...data.section_invitation.data} />}
			{data.section_gallery.active && <Gallery {...data.section_gallery.data} />}
			{data.section_video.active && <Video {...data.section_video.data} />}
			{data.section_event.active && <Event {...data.section_event.data} />}
			{data.section_bridesmaid.active && <Bridesmaid {...data.section_bridesmaid.data} />}
			{data.section_testimonial.active && <Testimonial {...data.section_testimonial.data} />}
			{data.section_groomsmen.active && <Groomsmen {...data.section_groomsmen.data} />}
			{data.section_footer.active && <Footer {...data.section_footer.data} />}
		</main>
	);
}
