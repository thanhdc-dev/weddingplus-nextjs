'use client';
import Countdown, { CountdownProps } from '@/components/wed-001/Countdown';
import Couple, { CoupleProps } from '@/components/wed-001/Couple';
import Events, { EventProps } from '@/components/wed-001/Event';
import Footer, { FooterProps } from '@/components/wed-001/Footer';
import Friend, { FriendsProps } from '@/components/wed-001/Friend';
import Gallery, { GalleryProps } from '@/components/wed-001/Gallery';
import Header, { HeaderProps } from '@/components/wed-001/Header';
import Story, { StoryProps } from '@/components/wed-001/Story';
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
import { Nunito_Sans } from 'next/font/google';

const nunitoSansFont = Nunito_Sans({
	subsets: ['latin', 'vietnamese'],
	weight: ['400', '600', '700'],
});

export default function Page() {
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
		bannerLargeImage: SliderImage,
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
	const eventData: EventProps = {
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
		weddingDate,
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
			{data.section_friends.active && <Friend {...data.section_friends.data} />}
			{data.section_events.active && <Events {...data.section_events.data} />}
			{data.section_gallery.active && <Gallery {...data.section_gallery.data} />}
			{data.section_footer.active && <Footer {...data.section_footer.data} />}
		</main>
	);
}
