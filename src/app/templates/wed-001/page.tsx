'use client';
import { useCountdown } from '@/hooks/useCountdown';
import BrideImage from '@public/images/wed-001/bride.jpg';
import CountdownBgImage from '@public/images/wed-001/countdown-bg.webp';
import Events1Image from '@public/images/wed-001/event-01.jpeg';
import Events2Image from '@public/images/wed-001/event-02.jpeg';
import Events3Image from '@public/images/wed-001/event-03.jpeg';
import Events4Image from '@public/images/wed-001/event-04.jpeg';
import FooterImage from '@public/images/wed-001/footer.png';
import Friend1Image from '@public/images/wed-001/friend-01.jpg';
import Friend2Image from '@public/images/wed-001/friend-02.jpg';
import Friend3Image from '@public/images/wed-001/friend-03.jpg';
import Friend4Image from '@public/images/wed-001/friend-04.jpg';
import Friend5Image from '@public/images/wed-001/friend-05.jpg';
import Friend6Image from '@public/images/wed-001/friend-06.jpg';
import Gallery1Image from '@public/images/wed-001/gallery-1.jpg';
import Gallery2Image from '@public/images/wed-001/gallery-2.jpg';
import Gallery3Image from '@public/images/wed-001/gallery-3.jpg';
import Gallery4Image from '@public/images/wed-001/gallery-4.jpg';
import Gallery5Image from '@public/images/wed-001/gallery-5.jpg';
import Gallery6Image from '@public/images/wed-001/gallery-6.jpg';
import GroomImage from '@public/images/wed-001/groom.jpg';
import SliderImage from '@public/images/wed-001/slider.jpg';
import StoryImage from '@public/images/wed-001/story.jpg';
import 'animate.css/animate.min.css';
import dynamic from 'next/dynamic';
import { Alex_Brush, Cormorant_Garamond, Nunito_Sans } from 'next/font/google';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

type HeaderProps = {
	weddingDate: Date;
	bannerImage: StaticImageData;
	groomName: string;
	brideName: string;
};

type CoupleProps = {
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

type CountdownProps = {
	weddingDate: Date;
	backgroundImage: StaticImageData;
};

type StoryProps = {
	image: StaticImageData;
	description: string;
};

type FriendsProps = {
	items: {
		name: string;
		position: string;
		description: string;
		avatar: StaticImageData;
	}[];
};

type EventsProps = {
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

type GalleryProps = {
	items: StaticImageData[];
};

type FooterProps = {
	image: StaticImageData;
	groomName: string;
	brideName: string;
};

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const nunitoSansFont = Nunito_Sans({
	subsets: ['latin', 'vietnamese'],
	weight: ['400', '600', '700'],
});

const alexBrushFont = Alex_Brush({
	subsets: ['latin', 'vietnamese'],
	weight: ['400'],
});

const cormorantGaramondFont = Cormorant_Garamond({
	subsets: ['latin', 'vietnamese'],
	weight: ['400', '500', '600'],
});

const Header = ({ weddingDate, bannerImage, groomName, brideName }: HeaderProps) => {
	const year = weddingDate.getFullYear();
	const month = weddingDate.getMonth() + 1;
	const date = weddingDate.getDate();
	return (
		<div
			id="section-header"
			className="min-h-screen bg-center bg-cover bg-no-repeat overflow-hidden flex items-center relative before:block before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-25"
		>
			<div className="banner-image absolute top-0 left-0 w-full h-full z-[-1]">
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
			</div>
			<div className="text-center absolute top-[335px] w-full z-10">
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
						<span className="wedding-date-d">{date}</span>-
						<span className="wedding-date-m">{month}</span>-
						<span className="wedding-date-y">{year}</span>
					</AnimationOnScroll>
				</span>
			</div>
		</div>
	);
};

const Couple = ({ groom, bride }: CoupleProps) => {
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
									<span className="text-xl pr-1">Phaolo</span>
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
									<span className="text-xl pr-1">Anna</span>
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
					<AnimationOnScroll
						animateIn="animate__fadeInUp"
						duration={0.8}
						className="text-center"
					>
						<h3 className={`${alexBrushFont.className} text-3xl mb-4 text-wed001-primary`}>
							Are getting married!
						</h3>
					</AnimationOnScroll>
				</div>
			</div>
		</section>
	);
};

const Countdown = ({ weddingDate, backgroundImage }: CountdownProps) => {
	const targetDate = weddingDate.getTime();
	const [days, hours, minutes, seconds] = useCountdown(targetDate);

	return (
		<>
			<section id="section-countdown" className="relative py-14">
				<div className="absolute top-0 left-0 w-full h-full z-[-1]">
					<Image
						alt="Count down background"
						src={backgroundImage}
						placeholder="blur"
						quality={100}
						fill
						sizes="100vw"
						style={{
							objectFit: 'cover',
						}}
					/>
				</div>
				<div className="container text-center text-white">
					<div className="section-head col-md-12">
						<h4 className={`${alexBrushFont.className} text-4xl text-white`}>
							We will become a family in
						</h4>
					</div>
					<ul className="flex flex-wrap justify-center items-center">
						<li key={1} className="text-xs p-4 leading-10">
							<span id="days" className="block font-bold text-[60px]">
								{days}
							</span>
							Days
						</li>
						<li key={2} className="text-xs p-4 leading-10">
							<span id="hours" className="block font-bold text-[60px]">
								{hours}
							</span>
							Hours
						</li>
						<li key={3} className="text-xs p-4 leading-10">
							<span id="minutes" className="block font-bold text-[60px]">
								{minutes}
							</span>
							Minutes
						</li>
						<li key={4} className="text-xs p-4 leading-10">
							<span id="seconds" className="block font-bold text-[60px]">
								{seconds}
							</span>
							Seconds
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

const Story = ({ image, description }: StoryProps) => {
	return (
		<section id="story" className="py-24">
			<div className="container">
				<div className="-mx-4 flex flex-wrap">
					<div className="px-4 w-full md:w-5/12 mb-7">
						<AnimationOnScroll
							animateIn="animate__fadeInLeft"
							duration={0.8}
						>
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
};

const Friends = ({ items }: FriendsProps) => {
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
						<span className={`${alexBrushFont.className} text-2xl mb-3 text-wed001-primary font-normal`}>
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
};

const Events = ({ items }: EventsProps) => {
	const owlOptions = {
		responsive: {
			'0': { items: 1 },
			'576': { items: 2 },
			'768': { items: 3 },
			'992': { items: 4 },
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
};

const Gallery = ({ items }: GalleryProps) => {
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
						<span className={`${alexBrushFont.className} text-wed001-primary text-3xl`}>Gallery</span>
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
};

const Footer = ({ image, groomName, brideName }: FooterProps) => {
	return (
		<section id="footer" className="pb-14">
			<div className="container">
				<div className="-mx-4">
					<div className="px-4 text-center">
						<h2>
							<Image className="w-[90px] mx-auto mb-3" src={image} alt="footer" />
							<span className={`${alexBrushFont.className} font-normal text-4xl`}>
								{groomName}
								<small>&amp;</small>
								{brideName}
							</span>
						</h2>
						<p className={`${nunitoSansFont.className} copyright text-lg italic`}>
							<span className="wedding-date-d">15</span>-<span className="wedding-date-m">07</span>-
							<span className="wedding-date-y">2023</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default function TemplateWed001Page() {
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
		bannerImage: SliderImage,
		groomName: 'Kiến Văn',
		brideName: 'Việt Hoài',
	};
	const coupleData: CoupleProps = {
		groom: {
			name: 'Kiến Văn',
			avatar: GroomImage,
			description:
				'Là bác sĩ nha khoa hiện đang công tác tại một phòng khám nha khoa ở Quận 1 thành phồ Hồ Chí Minh. Là một người hiền lành và ít nói. Luôn coi trọng tình cảm và yêu thương gia đình.',
			socials: [
				{
					icon: 'ti-instagram',
					link: 'https://instagram.com',
				},
				{
					icon: 'ti-twitter',
					link: 'https://twitter.com',
				},
				{
					icon: 'ti-facebook',
					link: 'https://facebook.com',
				},
			],
		},
		bride: {
			name: 'Việt Hoài',
			avatar: BrideImage,
			description:
				'Cô gái đến từ xứ Huế mộng mơ, hiện đang sinh sống và làm việc tại Sài Gòn. Sau khi tốt nghiệp Học viện Báo chí và Tuyên truyền, quyết tâm theo đuổi đam mê làm phóng viên du lịch. Là một người hay cười nhưng lại sống nội tâm, thích đọc sách, trồng cây và yêu thiên nhiên.',
			socials: [
				{
					icon: 'ti-instagram',
					link: 'https://instagram.com',
				},
				{
					icon: 'ti-twitter',
					link: 'https://twitter.com',
				},
				{
					icon: 'ti-facebook',
					link: 'https://facebook.com',
				},
			],
		},
	};
	const countdownData: CountdownProps = {
		weddingDate,
		backgroundImage: CountdownBgImage,
	};
	const outStoryData: StoryProps = {
		image: StoryImage,
		description:
			"<p>Curabit aliquet orci elit genes tristique lorem commodo vitae. Tuliaum tincidunt nete sede gravida aliquam, neque libero hendrerit magna, sit amet mollis lacus ithe maurise. Dunya erat volutpat edat themo the druanye semper.</p><p>Luality fringilla duiman at elit vinibus viverra nec a lacus themo the druanye sene sollicitudin mi suscipit non sagie the fermen.</p><p>Phasellus viverra tristique justo duis vitae diam neque nivamus ac est augue artine aringilla dui at elit finibus viverra nec a lacus. Nedana themo eros odio semper soe suscipit non. Curabit aliquet orci elit genes tristique.</p><h4 className='font-cormorantGaramond text-2xl'>Dec 5th, 2023, We Said Yes!</h4><p>Luality fringilla duiman at elit finibus viverra nec a lacus themo the druanye sene sollicitudin mi suscipit non sagie the fermen.</p>",
	};
	const friendData: FriendsProps = {
		items: [
			{
				name: 'Matthew Brown',
				position: 'Groomsmen',
				description: 'Enstibulum eringilla dui athe elitene miss minibus viverra nectar.',
				avatar: Friend1Image,
			},
			{
				name: 'Fredia Halle',
				position: 'Bridesmaids',
				description: 'Enstibulum eringilla dui athe elitene miss minibus viverra nectar.',
				avatar: Friend2Image,
			},
			{
				name: 'Pablo Dante',
				position: 'Groomsmen',
				description: 'Enstibulum eringilla dui athe elitene miss minibus viverra nectar.',
				avatar: Friend3Image,
			},
			{
				name: 'Eleanor Chris',
				position: 'Bridesmaids',
				description: 'Enstibulum eringilla dui athe elitene miss minibus viverra nectar.',
				avatar: Friend4Image,
			},
			{
				name: 'Stefano Smiht',
				position: 'Groomsmen',
				description: 'Enstibulum eringilla dui athe elitene miss minibus viverra nectar.',
				avatar: Friend5Image,
			},
			{
				name: 'Vanessa Brown',
				position: 'Bridesmaids',
				description: 'Enstibulum eringilla dui athe elitene miss minibus viverra nectar.',
				avatar: Friend6Image,
			},
		],
	};
	const eventData: EventsProps = {
		items: [
			{
				title: 'LỄ CƯỚI NHÀ NỮ',
				time: '07:30 AM',
				date: '10/02/2023',
				location: 'Tư gia nhà nữ',
				image: Events1Image,
				google_map:
					'https://www.google.com/maps/place/Da+Nang,+H%E1%BA%A3i+Ch%C3%A2u+District,+Da+Nang,+Vietnam/@16.0471659,108.1716864,13z/data=!3m1!4b1!4m5!3m4!1s0x314219c792252a13:0xfc14e3a044436487!8m2!3d16.0544068!4d108.2021667',
				calendar_data: {
					name: 'LỄ CƯỚI NHÀ NỮ (Đám cưới Kiến Văn và Việt Hoài)',
					description:
						'Cảm ơn bạn đã dành thời gian tham dự đám cưới của chúng tôi!. Thông tin chi tiết xem tại website:<br/>[url]https://weddingplus.app[/url]',
					start_date: '2023-09-12',
					end_date: '2023-09-12',
					start_time: '12:00 AM',
					end_time: '13:00 AM',
					location: 'A30 Trần Hưng Đạo, P. An Hải Tây, Quận Sơn Trà, Đà Nẵng',
					options: [
						'Apple',
						'Google',
						'iCal',
						'Microsoft365',
						'MicrosoftTeams',
						'Outlook.com',
						'Yahoo',
					],
					time_zone: 'Asia/Ho_Chi_Minh',
					i_cal_file_name: 'Reminder-Event',
					list_style: 'modal',
					trigger: 'click',
				},
			},
			{
				title: 'TIỆC CƯỚI NHÀ NỮ',
				time: '11:30 AM',
				date: '10/02/2023',
				location: 'Nhà hàng tiệc cưới Hoa Cau',
				image: Events2Image,
				google_map:
					'https://www.google.com/maps/place/Da+Nang,+H%E1%BA%A3i+Ch%C3%A2u+District,+Da+Nang,+Vietnam/@16.0471659,108.1716864,13z/data=!3m1!4b1!4m5!3m4!1s0x314219c792252a13:0xfc14e3a044436487!8m2!3d16.0544068!4d108.2021667',
				calendar_data: {
					name: 'TIỆC CƯỚI NHÀ NỮ (Đám cưới Kiến Văn và Việt Hoài)',
					description:
						'Cảm ơn bạn đã dành thời gian tham dự đám cưới của chúng tôi!. Thông tin chi tiết xem tại website:<br/>[url]https://weddingplus.app[/url]',
					start_date: '2023-09-12',
					end_date: '2023-09-12',
					start_time: '11:30 AM',
					end_time: '13:00 AM',
					location: 'A30 Trần Hưng Đạo, P. An Hải Tây, Quận Sơn Trà, Đà Nẵng',
					options: [
						'Apple',
						'Google',
						'iCal',
						'Microsoft365',
						'MicrosoftTeams',
						'Outlook.com',
						'Yahoo',
					],
					time_zone: 'Asia/Ho_Chi_Minh',
					i_cal_file_name: 'Reminder-Event',
					list_style: 'modal',
					label: 'Thêm vào lịch',
					trigger: 'click',
				},
			},
			{
				title: 'LỄ CƯỚI NHÀ NAM',
				time: '09:30 AM',
				date: '10/02/2023',
				location: 'Tư gia nhà nam',
				image: Events3Image,
				google_map:
					'https://www.google.com/maps/place/Da+Nang,+H%E1%BA%A3i+Ch%C3%A2u+District,+Da+Nang,+Vietnam/@16.0471659,108.1716864,13z/data=!3m1!4b1!4m5!3m4!1s0x314219c792252a13:0xfc14e3a044436487!8m2!3d16.0544068!4d108.2021667',
				calendar_data: {
					name: 'LỄ CƯỚI NHÀ NAM (Đám cưới Kiến Văn và Việt Hoài)',
					description:
						'Cảm ơn bạn đã dành thời gian tham dự đám cưới của chúng tôi!. Thông tin chi tiết xem tại website:<br/>[url]https://weddingplus.app[/url]',
					start_date: '2023-09-12',
					end_date: '2023-09-12',
					start_time: '09:00 AM',
					end_time: '10:00 AM',
					location: 'A30 Trần Hưng Đạo, P. An Hải Tây, Quận Sơn Trà, Đà Nẵng',
					options: [
						'Apple',
						'Google',
						'iCal',
						'Microsoft365',
						'MicrosoftTeams',
						'Outlook.com',
						'Yahoo',
					],
					time_zone: 'Asia/Ho_Chi_Minh',
					i_cal_file_name: 'Reminder-Event',
					list_style: 'modal',
					label: 'Thêm vào lịch',
					trigger: 'click',
				},
			},
			{
				title: 'TIỆC CƯỚI NHÀ NAM',
				time: '12:00 PM',
				date: '10/02/2023',
				location: 'Nhà hàng tiệc cưới For You',
				image: Events4Image,
				google_map:
					'https://www.google.com/maps/place/Da+Nang,+H%E1%BA%A3i+Ch%C3%A2u+District,+Da+Nang,+Vietnam/@16.0471659,108.1716864,13z/data=!3m1!4b1!4m5!3m4!1s0x314219c792252a13:0xfc14e3a044436487!8m2!3d16.0544068!4d108.2021667',
				calendar_data: {
					name: 'TIỆC CƯỚI NHÀ NAM (Đám cưới Kiến Văn và Việt Hoài)',
					description:
						'Cảm ơn bạn đã dành thời gian tham dự đám cưới của chúng tôi!. Thông tin chi tiết xem tại website:<br/>[url]https://weddingplus.app[/url]',
					start_date: '2023-09-12',
					end_date: '2023-09-12',
					start_time: '12:00 AM',
					end_time: '13:00 AM',
					location: 'A30 Trần Hưng Đạo, P. An Hải Tây, Quận Sơn Trà, Đà Nẵng',
					options: [
						'Apple',
						'Google',
						'iCal',
						'Microsoft365',
						'MicrosoftTeams',
						'Outlook.com',
						'Yahoo',
					],
					time_zone: 'Asia/Ho_Chi_Minh',
					i_cal_file_name: 'Reminder-Event',
					list_style: 'modal',
					label: 'Thêm vào lịch',
					trigger: 'click',
				},
			},
		],
	};
	const galleryData: GalleryProps = {
		items: [
			Gallery1Image,
			Gallery2Image,
			Gallery3Image,
			Gallery4Image,
			Gallery5Image,
			Gallery6Image,
		],
	};
	const footerData: FooterProps = {
		image: FooterImage,
		groomName: groom.name,
		brideName: bride.name,
	};
	const data = {
		section_header: {
			active: true,
			data: headerData,
		},
		section_couple: {
			active: true,
			data: coupleData,
		},
		section_countdown: {
			active: true,
			data: countdownData,
		},
		section_out_story: {
			active: true,
			data: outStoryData,
		},
		section_friends: {
			active: true,
			data: friendData,
		},
		section_events: {
			active: true,
			data: eventData,
		},
		section_gallery: {
			active: true,
			data: galleryData,
		},
		section_footer: {
			active: true,
			data: footerData,
		},
	};

	return (
		<main className={`${nunitoSansFont.className} font-sans pt-[52px]`}>
			{data.section_header.active && <Header {...data.section_header.data} />}
			{data.section_couple.active && <Couple {...data.section_couple.data} />}
			{data.section_countdown.active && <Countdown {...data.section_countdown.data} />}
			{data.section_out_story.active && <Story {...data.section_out_story.data} />}
			{data.section_friends.active && <Friends {...data.section_friends.data} />}
			{data.section_events.active && <Events {...data.section_events.data} />}
			{data.section_gallery.active && <Gallery {...data.section_gallery.data} />}
			{data.section_footer.active && <Footer {...data.section_footer.data} />}
		</main>
	);
}
