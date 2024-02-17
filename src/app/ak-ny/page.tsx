'use client';
import BrideImage from '@public/images/ak-ny/bride.webp';
import CountdownBgImage from '@public/images/wed-001/countdown-bg.webp';
import Event1Image from '@public/images/ak-ny/event-01-1.jpeg';
import Event2Image from '@public/images/ak-ny/event-02.jpeg';
import FooterImage from '@public/images/wed-001/footer.png';
import Gallery1Image from '@public/images/ak-ny/gallery-1.jpeg';
import Gallery2Image from '@public/images/ak-ny/gallery-2.jpeg';
import Gallery3Image from '@public/images/ak-ny/gallery-3.jpeg';
import Gallery4Image from '@public/images/ak-ny/gallery-4.jpeg';
import Gallery5Image from '@public/images/ak-ny/gallery-5.jpeg';
import Gallery6Image from '@public/images/ak-ny/gallery-6.jpeg';
import Gallery7Image from '@public/images/ak-ny/gallery-7.jpeg';
import Gallery8Image from '@public/images/ak-ny/gallery-8.jpeg';
import Gallery9Image from '@public/images/ak-ny/gallery-9.jpeg';
import Gallery10Image from '@public/images/ak-ny/gallery-10.jpeg';
import Gallery11Image from '@public/images/ak-ny/gallery-11.jpeg';
import Gallery12Image from '@public/images/ak-ny/gallery-12.jpeg';
import Gallery13Image from '@public/images/ak-ny/gallery-13.jpeg';
import Gallery14Image from '@public/images/ak-ny/gallery-14.jpeg';
import Gallery15Image from '@public/images/ak-ny/gallery-15.jpeg';
import GroomImage from '@public/images/ak-ny/groom.webp';
import SliderLargeImage from '@public/images/ak-ny/slider-large.webp';
import SliderImage from '@public/images/ak-ny/slider.webp';
import StoryImage from '@public/images/ak-ny/story.webp';
import { Nunito_Sans } from 'next/font/google';
import Header, { HeaderProps } from '@/components/wed-001/Header';
import Couple, { CoupleProps } from '@/components/wed-001/Couple';
import Countdown, { CountdownProps } from '@/components/wed-001/Countdown';
import Story, { StoryProps } from '@/components/wed-001/Story';
import Event, { EventProps } from '@/components/wed-001/Event';
import Gallery, { GalleryProps } from '@/components/wed-001/Gallery';
import Footer, { FooterProps } from '@/components/wed-001/Footer';

const nunitoSansFont = Nunito_Sans({
	subsets: ['latin', 'vietnamese'],
	weight: ['400', '600', '700'],
});

export default function Page() {
	const weddingDate = new Date(2024, 2, 8);
	const groom = {
		name: 'Anh Khiêm',
		full_name: 'Nguyễn Lê Anh Khiêm',
	};
	const bride = {
		name: 'Như Ý',
		full_name: 'Như Ý',
	};
	const headerData: HeaderProps = {
		weddingDate,
		bannerImage: SliderImage,
		bannerLargeImage: SliderLargeImage,
		groomName: 'Anh Khiêm',
		brideName: 'Như Ý',
	};
	const coupleData: CoupleProps = {
		groom: {
			name: 'Anh Khiêm',
			avatar: GroomImage,
			description:
				'',
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
			name: 'Như Ý',
			avatar: BrideImage,
			description:
				'',
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
			"<p>Curabit aliquet orci elit genes tristique lorem commodo vitae. Tuliaum tincidunt nete sede gravida aliquam, neque libero hendrerit magna, sit amet mollis lacus ithe maurise. Dunya erat volutpat edat themo the druanye semper.</p><p>Luality fringilla duiman at elit vinibus viverra nec a lacus themo the druanye sene sollicitudin mi suscipit non sagie the fermen.</p><p>Phasellus viverra tristique justo duis vitae diam neque nivamus ac est augue artine aringilla dui at elit finibus viverra nec a lacus. Nedana themo eros odio semper soe suscipit non. Curabit aliquet orci elit genes tristique.</p><h4 className='font-cormorantGaramond text-2xl'>Dec 5th, 2024, We Said Yes!</h4><p>Luality fringilla duiman at elit finibus viverra nec a lacus themo the druanye sene sollicitudin mi suscipit non sagie the fermen.</p>",
	};
	const eventData: EventProps = {
		items: [
			{
				title: 'TIỆC CƯỚI NHÀ NỮ',
				time: '16:00 AM',
				date: '08/03/2024',
				location: 'Nhà Hàng Tiệc Cưới Thành Đạt',
				image: Event1Image,
				google_map:
					'https://maps.app.goo.gl/znqeC4dKTfkLtnps5',
				calendar_data: {
					name: 'TIỆC CƯỚI NHÀ NỮ (Đám cưới Anh Khiêm và Như Ý)',
					description:
						'Cảm ơn bạn đã dành thời gian tham dự đám cưới của chúng tôi!. Thông tin chi tiết xem tại website:<br/>[url]https://weddingplus.app[/url]',
					start_date: '2024-03-08',
					end_date: '2024-03-08',
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
				title: 'TIỆC CƯỚI NHÀ NAM',
				time: '09:00 AM',
				date: '09/03/2024',
				location: 'Tư Gia',
				image: Event2Image,
				google_map:
					'https://maps.app.goo.gl/39Z7wGAGjJtW5mz69',
				calendar_data: {
					name: 'TIỆC CƯỚI NHÀ NAM (Đám cưới Anh Khiêm và Như Ý)',
					description:
						'Cảm ơn bạn đã dành thời gian tham dự đám cưới của chúng tôi!. Thông tin chi tiết xem tại website:<br/>[url]https://weddingplus.app[/url]',
					start_date: '2024-03-09',
					end_date: '2024-03-09',
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
			Gallery7Image,
			Gallery8Image,
			Gallery9Image,
			Gallery10Image,
			Gallery11Image,
			Gallery12Image,
			Gallery13Image,
			Gallery14Image,
			Gallery15Image,
		],
	};
	const footerData: FooterProps = {
		image: FooterImage,
		groomName: groom.name,
		brideName: bride.name,
		weddingDate,
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
			{data.section_events.active && <Event {...data.section_events.data} />}
			{data.section_gallery.active && <Gallery {...data.section_gallery.data} />}
			{data.section_footer.active && <Footer {...data.section_footer.data} />}
		</main>
	);
}
