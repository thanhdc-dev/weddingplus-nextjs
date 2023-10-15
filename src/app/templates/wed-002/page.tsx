'use client';
import { useCountdown } from '@/hooks/useCountdown';
import Blog1Image from '@public/images/wed-002/blog-01.webp';
import Blog2Image from '@public/images/wed-002/blog-02.webp';
import Blog3Image from '@public/images/wed-002/blog-03.webp';
import Blog4Image from '@public/images/wed-002/blog-04.webp';
import GroomImage from '@public/images/wed-002/couple-01.webp';
import BrideImage from '@public/images/wed-002/couple-02.webp';
import Event1Image from '@public/images/wed-002/event-01.webp';
import Event2Image from '@public/images/wed-002/event-02.webp';
import Event3Image from '@public/images/wed-002/event-03.webp';
import Event4Image from '@public/images/wed-002/event-04.webp';
import EventBgImage from '@public/images/wed-002/event-bg.jpg';
import EventItemBgImage from '@public/images/wed-002/event-item-bg.png';
import Gallery1Image from '@public/images/wed-002/gallery-item-01.webp';
import Gallery2Image from '@public/images/wed-002/gallery-item-02.webp';
import Gallery3Image from '@public/images/wed-002/gallery-item-03.webp';
import Gallery4Image from '@public/images/wed-002/gallery-item-04.webp';
import Gallery5Image from '@public/images/wed-002/gallery-item-05.webp';
import Gallery6Image from '@public/images/wed-002/gallery-item-06.webp';
import Gallery7Image from '@public/images/wed-002/gallery-item-07.webp';
import Gallery8Image from '@public/images/wed-002/gallery-item-08.webp';
import InvitationBgImage from '@public/images/wed-002/invitation-bg.webp';
import SectionTitleImage from '@public/images/wed-002/sec-title-flower.png';
import Slider1Image from '@public/images/wed-002/slider-01.jpg';
import Slider2Image from '@public/images/wed-002/slider-02.jpg';
import Story1Image from '@public/images/wed-002/story-01.jpeg';
import Story2Image from '@public/images/wed-002/story-02.jpeg';
import Story3Image from '@public/images/wed-002/story-03.jpeg';
import Story4Image from '@public/images/wed-002/story-04.jpeg';
import SectionVideoImage from '@public/images/wed-002/video-bg.jpg';
import { AddToCalendarButton, AddToCalendarButtonType } from 'add-to-calendar-button-react';
import 'animate.css/animate.min.css';
import dynamic from 'next/dynamic';
import { Comfortaa, Dancing_Script, Great_Vibes } from 'next/font/google';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import React, { createElement } from 'react';
import { TfiFacebook, TfiInstagram, TfiLinkedin, TfiTwitterAlt, TfiControlPlay } from 'react-icons/tfi';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import styles from './styles.module.scss';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const comfortaaFont = Comfortaa({
	subsets: ['latin', 'vietnamese'],
	weight: ['400', '600'],
});
const dancingScriptFont = Dancing_Script({
	subsets: ['latin', 'vietnamese'],
	weight: ['400'],
});
const greatVibesFont = Great_Vibes({
	subsets: ['latin', 'vietnamese'],
	weight: ['400'],
});

type IconTypeProps = 'facebook' | 'twitter' | 'linkedin' | 'instagram';

type IconProps = {
	type: IconTypeProps;
};
const Icon = ({ type }: IconProps) => {
	switch (type) {
		case 'facebook':
			return <TfiFacebook />;
		case 'twitter':
			return <TfiTwitterAlt />;
		case 'linkedin':
			return <TfiLinkedin />;
		case 'instagram':
			return <TfiInstagram />;
		default:
			return <i></i>;
	}
};

type HeaderProps = {
	weddingDate: Date;
	items: StaticImageData[];
};

const Slider = ({ weddingDate, items }: HeaderProps) => {
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
	const CarouseItens = items.map((image, index) => {
		return (
			<div
				key={index}
				className="overflow-hidden max-h-screen relative before:bg-[#00000066] before:w-full before:h-full before:absolute before:left-0 before:top-0"
			>
				<Image src={image} alt="slider 1" />
			</div>
		);
	});
	return (
		<section className="relative" id="slider">
			<div className="swiper-container">
				<div className="absolute w-full h-full flex justify-center items-center z-10">
					<div className="container">
						<div className="slide-title text-center">
							<h2
								className={`${dancingScriptFont.className} text-4xl sm:text-5xl lg:text-7xl text-white`}
							>
								<span className="block md:inline">Kiến Văn</span>{' '}
								<i className="ti-heart text-5xl text-wed002-primary"></i>{' '}
								<span className="block md:inline">Việt Hoài</span>
							</h2>
						</div>
						<div className="wedding-date text-center my-8 text-lg text-white">
							<span className="relative before:bg-white before:w-[35px] before:h-[1px] before:absolute before:left-[-50px] before:top-[9px] after:bg-white after:w-[35px] after:h-[1px] after:absolute after:right-[-50px] after:top-[9px]">
								<span className="wedding-date-d">{date}</span> Tháng{' '}
								<span className="wedding-date-m">{month}</span>{' '}
								<span className="wedding-date-y">{year}</span>
							</span>
						</div>
					</div>
				</div>
				<OwlCarousel className="owl-theme" {...owlOptions}>
					{CarouseItens}
				</OwlCarousel>
			</div>
		</section>
	);
};

type InvitationProps = {
	weddingDate: Date;
	invitationBgImage: StaticImageData;
};

const Invitation = ({ weddingDate, invitationBgImage }: InvitationProps) => {
	const targetDate = weddingDate.getTime();
	const [days, hours, minutes, seconds] = useCountdown(targetDate);
	const makeContentCellCalendar = (date: number) => {
		if (date === 0) return '';
		if (weddingDate.getDate() != date) {
			return date;
		} else {
			return createElement(
				'span',
				{
					id: 'today',
					className:
						'w-[30px] h-[30px] leading-[20px] p-2 bg-wed002-primary text-white rounded-full',
				},
				date,
			);
		}
	};

	const TableCallendar = ({ weddingDate }: { weddingDate: Date }) => {
		const year = weddingDate.getFullYear();
		const month = weddingDate.getMonth() + 1;
		const firstDayOfMonth = new Date(year, month - 1, 1);
		const lastDayOfMonth = new Date(year, month, 0);
		const lastDateOfMonth = lastDayOfMonth.getDate();
		const tableRows = [];

		// Caption
		const captionElement = createElement(
			'caption',
			{
				key: 'capption',
				className: `${comfortaaFont.className} text-center mb-1 font-semibold text-[#203447] uppercase`,
			},
			`Tháng ${month} / ${year}`,
		);
		tableRows.push(captionElement);
		// Row name day of week
		const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		const theadTh = daysOfWeek.map((dayOfWeek, index) => {
			return createElement('th', { key: Math.random() }, dayOfWeek);
		});
		const theadTr = createElement('tr', { key: Math.random() }, theadTh);
		const thead = createElement('thead', { key: Math.random() }, theadTr);
		tableRows.push(thead);
		// Row first week of month
		const tbodyRow = [];
		let dayNum = 1;
		const day = firstDayOfMonth.getDay();
		if (day) {
			const cells = [];
			let start = firstDayOfMonth;
			start.setDate(start.getDate() - day);
			do {
				const tdContent = start.getMonth() + 1 === month ? start.getDate() : 0;
				const tdElement = createElement(
					'td',
					{ key: Math.random() },
					makeContentCellCalendar(tdContent),
				);
				cells.push(tdElement);
				start.setDate(start.getDate() + 1);
			} while (start.getDay() !== 0);
			dayNum = start.getDate();
			const secondRow = createElement('tr', { key: Math.random() }, cells);
			tbodyRow.push(secondRow);
		}

		// Row mid week of month
		let dayOfWeekCount = 1;
		let cells = [];
		while (dayNum < lastDateOfMonth) {
			const tdElement = createElement('td', { key: dayNum }, makeContentCellCalendar(dayNum));
			cells.push(tdElement);
			if (dayOfWeekCount === 7) {
				tbodyRow.push(createElement('tr', { key: Math.random() }, cells));
				dayOfWeekCount = 0;
				cells = [];
			}
			dayNum++;
			dayOfWeekCount++;
		}
		// Row last week of month
		const lastDay = lastDayOfMonth.getDay();
		if (lastDay !== 6) {
			const cells = [];
			let start = lastDayOfMonth;
			start.setDate(start.getDate() - lastDay);
			do {
				const tdContent = start.getMonth() + 1 === month ? start.getDate() : 0;
				const tdElement = createElement(
					'td',
					{ key: start.getDate() },
					makeContentCellCalendar(tdContent),
				);
				cells.push(tdElement);
				start.setDate(start.getDate() + 1);
			} while (start.getDay() !== 0);
			dayNum = start.getDate();
			tbodyRow.push(createElement('tr', { key: Math.random() }, cells));
		}
		const bodyRow = createElement('tbody', { key: Math.random() }, tbodyRow);
		tableRows.push(bodyRow);

		return createElement('table', { className: 'w-full' }, tableRows);
	};

	return (
		<section
			id="invitation"
			className="py-14 bg-center"
			style={{ backgroundImage: `url(${invitationBgImage.src})` }}
		>
			<div className="container">
				<div className="-mx-4 flex flex-wrap">
					<div className="p-4 w-full lg:w-1/2">
						<div className="invitation-box relative left m-auto bg-white max-w-[580px] p-12 xs:py-20 xs:px-16 lg:py-32 text-center before:absolute before:right-[15px] lg:before:right-[50px] before:bottom-[15px] lg:before:bottom-[50px] before:left-[15px] lg:before:left-[50px] before:top-[15px] lg:before:top-[50px] before:border-[5px] before:border-wed002-primary">
							<div className="left-vec"></div>
							<div className="right-vec"></div>
							<div className="inner text-center relative">
								<h2 className={`${greatVibesFont.className} text-4xl xs:text-5xl mb-4 xs:mb-7`}>
									Save the Date
								</h2>
								<span className="font-comfortaa">For the wedding of</span>
								<h3 className="text-2xl font-comfortaa">Kiến Văn & Việt Hoài</h3>
								<p className="text-base xs:text-xl mb-8 font-comfortaa">
									Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng tôi có thêm một niềm
									hạnh phúc!
								</p>
							</div>
						</div>
					</div>
					<div className="p-4 w-full lg:w-1/2">
						<div className="invitation-box m-auto bg-white max-w-[580px] p-8 sm:py-20 sm:px-16 lg:py-32 text-center relative before:absolute before:right-[15px] lg:before:right-[50px] before:bottom-[15px] lg:before:bottom-[50px] before:left-[15px] lg:before:left-[50px] before:top-[15px] lg:before:top-[50px] before:border-[5px] before:border-wed002-primary">
							<div className="inner relative">
								<div className={`${styles.miniCalendar}`} id="calendar">
									{<TableCallendar weddingDate={weddingDate} />}
								</div>
							</div>
							<div className="count-down-clock">
								<div id="clock" className="flex">
									<div className="box w-1/4 mt-7 mx-4 text-wed002-primary">
										<div id="days" className={`${greatVibesFont.className} text-4xl xs:5xl sm:text-6xl font-medium`}>
											{days}
										</div>
										<span>Ngày</span>
									</div>
									<div className="box w-1/4 mt-7 mx-4 text-wed002-primary">
										<div id="hours" className={`${greatVibesFont.className} text-4xl xs:5xl sm:text-6xl font-medium`}>
											{hours}
										</div>
										<span>Giờ</span>
									</div>
									<div className="box w-1/4 mt-7 mx-4 text-wed002-primary">
										<div
											id="minutes"
											className={`${greatVibesFont.className} text-4xl xs:5xl sm:text-6xl font-medium`}
										>
											{minutes}
										</div>
										<span>Phút</span>
									</div>
									<div className="box w-1/4 mt-7 mx-4 text-wed002-primary">
										<div
											id="seconds"
											className={`${greatVibesFont.className} text-4xl xs:5xl sm:text-6xl font-medium`}
										>
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
		</section>
	);
};

type CoupleProps = {
	titleImage: StaticImageData;
	groom: {
		name: string;
		avatar: StaticImageData;
		description: string;
		socials: {
			icon: IconTypeProps;
			link: string;
		}[];
	};
	bride: {
		name: string;
		avatar: StaticImageData;
		description: string;
		socials: {
			icon: IconTypeProps;
			link: string;
		}[];
	};
};

const Couple = ({ titleImage, groom, bride }: CoupleProps) => {
	return (
		<section id="couple" className="py-28">
			<div className="container max-w-5xl">
				<div className="relative section-title text-center mb-12">
					<Image className="mx-auto mb-4 w-32 h-14" src={titleImage} alt="flower" />
					<h2 className="font-dancingScript text-4xl font-semibold">Cô dâu & Chú rể</h2>
					<p className="font-comfortaa text-lg font-light">
						Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần thiết cho chính bạn.
					</p>
				</div>
				<div className="-mx-4 flex flex-wrap mb-10 lg:mb-0">
					<div className="px-4 lg:px-0 w-full lg:w-1/2 mb-5 lg:mb-0">
						<Image src={groom.avatar} alt={groom.name} />
					</div>
					<div className="px-4 lg:px-0 w-full lg:w-1/2">
						<div className="bg-[#f9f9f9] p-4 md:p-12 h-full">
							<h2 className="font-dancingScript text-3xl md:text-4xl">{groom.name}</h2>
							<p className="font-comfortaa">{groom.description}</p>
							{/* <ul className="social-links"></ul> */}
						</div>
					</div>
				</div>
				<div className="-mx-4 flex flex-wrap">
					<div className="px-4 lg:px-0 w-full lg:w-1/2 mb-5 lg:mb-0">
						<div className="bg-[#f9f9f9] p-4 md:p-12 h-full">
							<h2 className="font-dancingScript text-3xl md:text-4xl">{bride.name}</h2>
							<p className="font-comfortaa">{bride.description}</p>
							{/* <ul className="social-links"></ul> */}
						</div>
					</div>
					<div className="px-4 lg:px-0 w-full lg:w-1/2">
						<Image src={bride.avatar} alt={bride.name} />
					</div>
				</div>
			</div>
		</section>
	);
};

type VideoProps = {
	imageBg: StaticImageData;
	videoUrl: string;
};

const Video = ({ videoUrl, imageBg }: VideoProps) => {
	return (
		<section className="relative" id="video">
			<div className="video-bg text-center w-full h-[60%] py-16 lg:py-[150px] left-0 top-0 border-y-4 border-wed002-primary bg-center bg-cover bg-no-repeat before:bg-[#00000033] before:w-full before:h-full before:absolute before:left-0 before:top-0">
				<div className="banner-image absolute top-0 left-0 w-full h-full z-[-1]">
					<Image
						alt="Banner"
						src={imageBg}
						placeholder="blur"
						quality={100}
						fill
						sizes="100vw"
						style={{
							objectFit: 'cover',
						}}
					/>
				</div>
				<h2 className="relative font-dancingScript text-4xl md:text-5xl lg:text-6xl text-white">
					Xem video cưới của chúng tôi
				</h2>
				<p className="relative font-comfortaa text-white">
					Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm cho chuyến đi đáng
					giá.
				</p>
				<div className="relative video-btn w-20 h-20 block mx-auto">
					<Link
						className="flex items-center justify-center cursor-pointer w-full h-full text-3xl text-white leading-[75px] border-4 rounded-full border-wed002-primary bg-[#c89d9c4d]"
						href={videoUrl}
						data-type="iframe"
					>
						<TfiControlPlay/>
					</Link>
				</div>
			</div>
		</section>
	);
};

type StoryProps = {
	titleImage: StaticImageData;
	items: {
		title: string;
		date: string;
		description: string;
		image: StaticImageData;
	}[];
};

const Story = ({ titleImage, items }: StoryProps) => {
	const Items = items.map((item, index) => {
		if (index % 2 == 0)
			return (
				<li
					key={index}
					className="sm:flex mx-4 sm:-mx-4 relative pb-10 mb-10 last:pb-0 last:mb-0 sm:odd:text-right border-b-[3px] border-dash border-wed002-primary sm:border-none last:border-none before:hidden sm:before:block before:absolute before:bg-white before:w-5 before:h-5 before:rounded-full before:bottom-0 before:left-[calc(50%-10px)] before:border-[3px] before:border-wed002-primary after:hidden last:after:hidden sm:after:block after:absolute after:w-28 after:h-[2px] after:bottom-2 after:left-[calc(50%-140px)] after:border-b-[2px] after:border-wed002-primary after:border-dashed"
				>
					<div className="sm:mr-14 w-full lg:w-1/2">
						<h3 className="font-comfortaa text-2xl leading-10">{item.title}</h3>
						<span className="date font-comfortaa text-wed002-primary mb-6">{item.date}</span>
						<p className="font-comfortaa">{item.description}</p>
					</div>
					<div className="sm:ml-14 w-full lg:w-1/2">
						<Image className="mb-4" src={item.image} alt={`story ${index}`} />
					</div>
				</li>
			);
		return (
			<li
				key={index}
				className="sm:flex mx-4 sm:-mx-4 relative pb-10 mb-10 last:pb-0 last:mb-0 sm:odd:text-right border-b-[3px] border-dash border-wed002-primary sm:border-none last:border-none before:hidden sm:before:block before:absolute before:bg-white before:w-5 before:h-5 before:rounded-full before:bottom-0 before:left-[calc(50%-10px)] before:border-[3px] before:border-wed002-primary after:hidden last:after:hidden sm:after:block after:absolute after:w-28 after:h-[2px] after:bottom-2 after:left-[calc(50%-140px)] after:border-b-[2px] after:border-wed002-primary after:border-dashed"
			>
				<div className="sm:mr-14 w-full lg:w-1/2">
					<Image className="mb-4" src={item.image} alt={`story ${index}`} />
				</div>
				<div className="sm:ml-14 w-full lg:w-1/2">
					<h3 className="font-comfortaa text-2xl leading-10">{item.title}</h3>
					<span className="date font-comfortaa text-wed002-primary mb-6">{item.date}</span>
					<p className="font-comfortaa">{item.description}</p>
				</div>
			</li>
		);
	});
	return (
		<section className="story-section py-14" id="story">
			<div className="container max-w-5xl">
				<div className="relative section-title text-center py-12">
					<Image className="mx-auto mb-4 w-32 h-14" src={titleImage} alt="flower" />
					<h2 className="font-dancingScript text-4xl font-semibold">Chuyện Tình Yêu</h2>
					<p className="font-comfortaa text-lg font-light">
						Tình yêu không chỉ là một danh từ - nó là một động từ; nó còn hơn cả một cảm giác - đó
						là sự quan tâm, chia sẻ, giúp đỡ, hy sinh.
					</p>
				</div>
				<div className="py-12 px-6 sm:py-16 sm:px-6 shadow-xl">
					<ul className="relative before:hidden sm:before:block after:hidden sm:after:block before:absolute before:bg-wed002-primary before:w-1 before:h-full before:top-0 before:left-[calc(50%-1.5px)] after:absolute after:bg-wed002-primary after:w-5 after:h-5 after:rounded-full after:top-0 after:left-[calc(50%-10px)] after:border-[3px] after:border-wed002-primary">
						{Items}
					</ul>
				</div>
			</div>
		</section>
	);
};

type EventProps = {
	imageBg: StaticImageData;
	itemImageBg: StaticImageData;
	items: {
		title: string;
		time: string;
		location: string;
		googleMapUrl: string;
		image: StaticImageData;
		calendar: AddToCalendarButtonType;
	}[];
};

const Event = ({ imageBg, itemImageBg, items }: EventProps) => {
	const Items = items.map((item, index) => {
		return (
			<div
				key={index}
				className="relative text-center py-12 px-5 mb-7 mx-2 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] p-5"
				style={{ backgroundImage: `url(${itemImageBg.src})` }}
			>
				<h3 className={`${comfortaaFont.className} font-medium text-lg pb-4 mb-6 relative before:absolute before:bg-wed002-primary before:h-[2px] before:w-[120px] before:left-1/2 before:bottom-0 before:-translate-x-1/2`}>
					{item.title}
				</h3>
				<div className="mb-5">
					<Image src={item.image} alt={`${item.title}`} />
				</div>
				<p>
					<strong>07:30 AM 10/02/2023</strong>
				</p>
				<p>{item.location}</p>

				<div className="calendar-button">
					<AddToCalendarButton
						{...item.calendar}
						inline
						buttonStyle="round"
						styleLight="--btn-border: #c89d9c;--btn-shadow: none;--btn-shadow-hover: none;--btn-shadow-active: none;"
					></AddToCalendarButton>
				</div>
				<Link
					className="w-full font-bold bg-[#f5f5f5] rounded-[60px] py-2 border-[2px] border-wed002-primary"
					href={item.googleMapUrl}
					target="_blank"
				>
					Xem bản đồ
				</Link>
			</div>
		);
	});
	return (
		<section className="event-section relative" id="events">
			<div
				className="event-bg text-center w-full h-[60vh] pt-20 lg:pt-36 left-0 top-0 bg-center bg-cover bg-no-repeat before:bg-[#00000033] before:w-full before:h-full before:absolute before:left-0 before:top-0"
				style={{ backgroundImage: `url(${imageBg.src})` }}
			>
				<h2 className="relative text-white font-dancingScript text-4xl md:text-5xl lg:text-6xl font-medium mb-3">
					Sự Kiện Cưới
				</h2>
				<p className="relative text-white font-comfortaa">
					...tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn chằm chằm về cùng một
					hướng...
				</p>
			</div>
			<div className="container -mt-[20vh]">
				<div className="flex flex-wrap -mx-4">{Items}</div>
			</div>
		</section>
	);
};

type GalleryProps = {
	titleImage: StaticImageData;
	items: StaticImageData[];
};

const Gallery = ({ titleImage, items }: GalleryProps) => {
	const Items = items.map((image, index) => {
		return (
			<div key={index} className="grid-item p-2">
				<a href={image.src} className="block img-zoom">
					<Image src={image} alt={`gallery ${index}`} className="img img-responsive" />
				</a>
			</div>
		);
	});
	return (
		<section className="gallery-section py-14" id="gallery">
			<div className="container max-w-5xl">
				<div className="relative section-title text-center py-12">
					<Image className="mx-auto mb-4 w-32 h-14" src={titleImage} alt="flower" />
					<h2 className="font-dancingScript text-4xl font-semibold">Album Hình Cưới</h2>
					<p className="font-comfortaa text-lg font-light mb-5">
						Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho
						bạn dũng khí.
					</p>
				</div>
				<ResponsiveMasonry columnsCountBreakPoints={{ 0: 2, 768: 3 }}>
					<Masonry className="masonry-gallery -mx-2">{Items}</Masonry>
				</ResponsiveMasonry>
			</div>
		</section>
	);
};

type BlogProps = {
	titleImage: StaticImageData;
	items: {
		type: 'bridesmaid' | 'groomsmen';
		name: string;
		description?: string;
		image: StaticImageData;
		socials?: {
			icon: IconTypeProps;
			link: string;
		}[];
	}[];
};

const Blog = ({ titleImage, items }: BlogProps) => {
	type SocialProps = {
		items: {
			icon: IconTypeProps;
			link: string;
		}[];
	};
	const Socials = ({ items }: SocialProps) => {
		const list = items.map((item, index) => {
			return (
				<li key={index} className="mx-4 hover:text-wed002-primary">
					<Link href={item.link} target="_blank">
						<Icon type={item.icon} />
					</Link>
				</li>
			);
		});
		return <ul className="flex justify-center sm:justify-normal -mx-4">{list}</ul>;
	};

	const bridesmaids = items.filter((item) => item.type == 'bridesmaid');
	const Bridesmaids = bridesmaids.map((item, index) => {
		return (
			<div key={index} className="w-full lg:w-1/2 xl:w-full mb-20 sm:flex">
				<div className="mb-5">
					<Image
						className="mx-auto w-[200px] rounded-full"
						src={item.image}
						alt={`Bridesmaid ${item.name}`}
					/>
				</div>
				<div className="sm:pl-5 sm:flex-1">
					<h2 className="font-dancingScript font-medium text-2xl mb-3 sm:text-3xl">{item.name}</h2>
					<h4 className="text-wed002-primary mb-3 text-lg">Phù dâu</h4>
					<p>{item.description}</p>
					{!!item?.socials && <Socials items={item.socials} />}
				</div>
			</div>
		);
	});

	const groomsmens = items.filter((item) => item.type == 'groomsmen');
	const Groomsmens = groomsmens.map((item, index) => {
		return (
			<div key={index} className="w-full lg:w-1/2 xl:w-full mb-20 sm:flex">
				<div className="mb-5">
					<Image
						className="mx-auto w-[200px] rounded-full"
						src={item.image}
						alt={`Groomsmen ${item.name}`}
					/>
				</div>
				<div className="sm:pl-5 sm:flex-1">
					<h2 className="font-dancingScript font-medium text-2xl mb-3 sm:text-3xl">{item.name}</h2>
					<h4 className="text-wed002-primary mb-3 text-lg">Phù rể</h4>
					<p>{item.description}</p>
					{!!item?.socials && <Socials items={item.socials} />}
				</div>
			</div>
		);
	});
	return (
		<section className="blog-section bg-[#F2EDED]" id="featured-people">
			<div className="container max-w-5xl">
				<div className="relative section-title text-center py-12">
					<Image className="mx-auto mb-4 w-32 h-14" src={titleImage} alt="flower" />
					<h2 className="font-dancingScript text-4xl font-semibold">Phù Dâu & Phù Rể</h2>
					<p className="font-comfortaa text-lg font-light mb-5">
						Tình yêu không có rào cản. Nó nhảy rào, nhảy rào, xuyên tường để đến đích với đầy hy
						vọng.
					</p>
				</div>

				<div className="flex flex-wrap -mx-4">
					<div className="px-4 w-full xl:w-1/2">
						<div className="flex flex-wrap text-center sm:text-left">{Bridesmaids}</div>
					</div>

					<div className="px-4 w-full xl:w-1/2">
						<div className="flex flex-wrap text-center sm:text-left">{Groomsmens}</div>
					</div>
				</div>
			</div>
		</section>
	);
};

type FooterProps = {
	weddingDate: Date;
	groom: {
		name: string;
	};
	bride: {
		name: string;
	};
};

const Footer = ({ weddingDate }: FooterProps) => {
	const year = weddingDate.getFullYear();
	const month = weddingDate.getMonth() + 1;
	const date = weddingDate.getDate();

	return (
		<footer className="section-footer py-10 text-center bg-pink">
			<h2 className="text-4xl font-medium font-alexBrush">
				<span>
					Kiến Văn<small className="px-1">&</small>Việt Hoài
				</span>
			</h2>
			<p className="text-lg font-cormorantGaramond">
				<span className="wedding-date-d">{date}</span> -{' '}
				<span className="wedding-date-m">{month}</span> -{' '}
				<span className="wedding-date-y">{year}</span> – Wedding+
			</p>
		</footer>
	);
};

export default function TemplateWed002Page() {
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
	const headerData: HeaderProps = {
		weddingDate,
		items: [Slider1Image, Slider2Image],
	};
	const invitationData: InvitationProps = {
		weddingDate,
		invitationBgImage: InvitationBgImage,
	};
	const coupleData: CoupleProps = {
		titleImage: SectionTitleImage,
		groom: {
			name: groom.name,
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
	const videoData: VideoProps = {
		imageBg: SectionVideoImage,
		videoUrl: 'https://www.youtube.com/embed/lGUdD29BDMg',
	};
	const storyData: StoryProps = {
		titleImage: SectionTitleImage,
		items: [
			{
				title: 'Bạn có tin vào tình yêu online không?',
				description:
					'Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại đang như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!! Ngày ấy vu vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói chuyện với một người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau người ấy lại là chồng mình.',
				date: 'December 12 2015',
				image: Story1Image,
			},
			{
				title: 'Lời tỏ tình dễ thương^^',
				description:
					'Ngày ấy, tôi 21! Một mình giữa phố thị nấp tập. Mỗi chiều cuối tuần thường chạy xe vòng quanh qua những con phố, len lỏi trong từng dòng người tấp nập. Hay thậm chí là ghé vào một quán cà phê ven đường để ngồi đó và cảm nhận về cuộc sống của riêng mình. Đôi khi lạc lõng và hơi cô đơn. Nhưng rồi một ngày đẹp trời, người con trai ấy xuất hiện, nắm tay rồi thủ thỉ vào tai: “Hy vọng sau này anh được làm những điều ấy cùng em”.',
				date: 'August 04 2016',
				image: Story2Image,
			},
			{
				title: 'Phút giây cầu hôn',
				description:
					'5 năm bên nhau không phải là quãng thời gian quá dài, nhưng đủ cho chúng ta nhận ra được rất nhiều điều. Yêu nhau, vun vén hạnh phúc và cùng nỗ lực vượt qua những khó khăn trong cuộc sống. Chúng ta từ 2 con người xa lạ mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp tục cùng nhau sang trang mới. Giây phút anh ngỏ lời “Làm vợ anh nhé!”, em đã nguyện ý đời này, đi đâu cũng được, miễn là cùng anh.',
				date: 'May 10 2018',
				image: Story3Image,
			},
			{
				title: 'Ngày lễ đính hôn',
				description:
					'“Tiếng trái tim đôi ta đập thật nhanh. Thì thầm lời yêu thương. Ngày tình về chung	đôi...” Sau bao nhiêu chờ đợi, cuối cùng ngày vui của chúng ta cũng tới rồi. Cảm ơn vì mình đã luôn là một phần trong cuộc sống của nhau. Em và anh không chỉ là	người yêu mà chúng ta còn là tri kỷ. Ngày hôm nay, em sẽ là cô dâu của anh và sau này sẽ là mẹ của các con anh.“',
				date: 'July 28 2018',
				image: Story4Image,
			},
		],
	};
	const eventData: EventProps = {
		imageBg: EventBgImage,
		itemImageBg: EventItemBgImage,
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
	const galleryData: GalleryProps = {
		titleImage: SectionTitleImage,
		items: [
			Gallery1Image,
			Gallery2Image,
			Gallery3Image,
			Gallery4Image,
			Gallery5Image,
			Gallery6Image,
			Gallery7Image,
			Gallery8Image,
		],
	};
	const blogData: BlogProps = {
		titleImage: SectionTitleImage,
		items: [
			{
				type: 'bridesmaid',
				name: 'Lý Mạc Sầu',
				description:
					'Là cô gái đến từ vùng đất Cố Đô “Huế mộng Huế mơ” dịu dàng, nết na và thùy mị. Với nhiều tài lẻ như biết nấu ăn, cắm hoa, thêu thùa may vá.',
				image: Blog1Image,
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
			{
				type: 'bridesmaid',
				name: 'Ngô Thị Bích Thủy',
				description:
					'Bích Thủy sở hữu ngoại hình dễ thương, xinh xắn và nấu ăn rất ngon. Là cô gái thật thà, hiền lành, hơi ít nói bởi vì nhiều lúc không biết nên nói gì...',
				image: Blog2Image,
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
			{
				type: 'groomsmen',
				name: 'Trần Đức Minh',
				description:
					'Chàng trai sinh năm 1996 tại Bình Dương, từng là sinh viên Đại học Kinh tế TP. Hồ Chí Minh. Hiện tại, đang làm nhân viên tín dụng ngân hàng.',
				image: Blog3Image,
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
			{
				type: 'groomsmen',
				name: 'Hoàng Gia Bảo',
				description:
					'Hòa đồng, xông xáo, nhiệt tình và có trách nhiệm trong công việc. Là chàng trai yêu động vật, thích chơi game, thích ăn cơm nhà và nước uống có ga…',
				image: Blog4Image,
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
		],
	};
	const footerData: FooterProps = {
		weddingDate,
		groom,
		bride,
	};
	const data = {
		section_header: {
			active: true,
			data: headerData,
		},
		section_invitation: {
			active: true,
			data: invitationData,
		},
		section_couple: {
			active: true,
			data: coupleData,
		},
		section_video: {
			active: true,
			data: videoData,
		},
		section_story: {
			active: true,
			data: storyData,
		},
		section_event: {
			active: true,
			data: eventData,
		},
		section_gallery: {
			active: true,
			data: galleryData,
		},
		section_blog: {
			active: true,
			data: blogData,
		},
		section_footer: {
			active: true,
			data: footerData,
		},
	};
	return (
		<main className={`${comfortaaFont.className} font-sans pt-[52px]`}>
			{data.section_header.active && <Slider {...data.section_header.data} />}
			{data.section_invitation.active && <Invitation {...data.section_invitation.data} />}
			{data.section_couple.active && <Couple {...data.section_couple.data} />}
			{data.section_video.active && <Video {...data.section_video.data} />}
			{data.section_video.active && <Story {...data.section_story.data} />}
			{data.section_event.active && <Event {...data.section_event.data} />}
			{data.section_gallery.active && <Gallery {...data.section_gallery.data} />}
			{data.section_blog.active && <Blog {...data.section_blog.data} />}
			{data.section_footer.active && <Footer {...data.section_footer.data} />}
		</main>
	);
}
