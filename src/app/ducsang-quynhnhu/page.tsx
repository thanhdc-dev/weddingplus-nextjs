'use client';
import CountdownBgImage from '@public/images/wed-001/countdown-bg.webp';
import Event1Image from '@public/images/ducsang-quynhnhu/event-01.webp';
import Event2Image from '@public/images/ducsang-quynhnhu/event-02.webp';
import Event3Image from '@public/images/ducsang-quynhnhu/event-03.webp';
import Event4Image from '@public/images/ducsang-quynhnhu/event-04.webp';
import Event5Image from '@public/images/ducsang-quynhnhu/event-05.webp';
import FooterImage from '@public/images/wed-001/footer.png';
import Gallery01Image from '@public/images/ducsang-quynhnhu/gallery-01.webp';
import Gallery02Image from '@public/images/ducsang-quynhnhu/gallery-02.webp';
import Gallery03Image from '@public/images/ducsang-quynhnhu/gallery-03.webp';
import BannerLargeImage from '@public/images/ducsang-quynhnhu/banner-large.webp';
import BannerImage from '@public/images/ducsang-quynhnhu/banner.webp';
import { Nunito_Sans } from 'next/font/google';
import Header, { HeaderProps } from '@/components/wed-001/Header';
import Countdown, { CountdownProps } from '@/components/wed-001/Countdown';
import Event, { EventProps } from '@/components/wed-001/Event';
import Gallery, { GalleryProps } from '@/components/wed-001/Gallery';
import Footer, { FooterProps } from '@/components/wed-001/Footer';

const nunitoSansFont = Nunito_Sans({
	subsets: ['latin', 'vietnamese'],
	weight: ['400', '600', '700'],
});

export default function Page() {
	const date = 20;
	const month = 4;
	const year = 2024;
	const weddingDate = new Date(year, month - 1, date);
	const groom = {
		name: 'Đức Sang',
		full_name: 'Trần Đức Sang',
	};
	const bride = {
		name: 'Quỳnh Như',
		full_name: 'Vũ Thị Quỳnh Như ',
	};
	const headerData: HeaderProps = {
		weddingDate,
		bannerImage: BannerImage,
		bannerLargeImage: BannerLargeImage,
		groomName: 'Đức Sang',
		brideName: 'Quỳnh Như',
		positionTitleClass: 'bottom-[15%]',
	};
	const countdownData: CountdownProps = {
		weddingDate,
		backgroundImage: CountdownBgImage,
	};
	const eventData: EventProps = {
		items: [
			{
				title: 'Thánh Lễ Hôn Phối',
				time: '09:00',
				date: '20/04/2024',
				location: 'Nhà thờ Thánh Tâm - F2',
				image: Event1Image,
				google_map: 'https://maps.app.goo.gl/BrABr6Ewkff3QCo66',
			},
			{
				title: 'Tiệc Nhóm Họ Nhà Gái',
				time: '17:00',
				date: '19/04/2024',
				location: 'Tư Gia - 304 Ấp F2',
				image: Event2Image,
				google_map: 'https://maps.app.goo.gl/iyjFoxyS9gMNdhMC9',
			},
			{
				title: 'Tiệc Cưới Nhà Gái',
				time: '11:00',
				date: '20/04/2024',
				location: 'Tư Gia - 304 Ấp F2',
				image: Event3Image,
				google_map: 'https://maps.app.goo.gl/iyjFoxyS9gMNdhMC9',
			},
			{
				title: 'Tiệc Nhóm Họ Nhà Trai',
				time: '18:00',
				date: '20/04/2024',
				location: 'Tư Gia - 3349 QL 80',
				image: Event4Image,
				google_map: 'https://maps.app.goo.gl/xaWUHgsgnQwaDayh8',
			},
			{
				title: 'Tiệc Cưới Nhà Trai',
				time: '11:00',
				date: '21/04/2024',
				location: 'Hoa viên Giáo Xứ Ngọc Thạch - 3519 QL 80',
				image: Event5Image,
				google_map: 'https://maps.app.goo.gl/q73ipTGy4rsCuMtt6',
			},
		],
	};
	const galleryData: GalleryProps = {
		items: [Gallery01Image, Gallery02Image, Gallery03Image],
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
		section_countdown: {
			active: true,
			data: countdownData,
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
			<div className="h-[70px] w-full"></div>
			{data.section_countdown.active && <Countdown {...data.section_countdown.data} />}
			{data.section_events.active && <Event {...data.section_events.data} />}
			{data.section_gallery.active && <Gallery {...data.section_gallery.data} />}
			{data.section_footer.active && <Footer {...data.section_footer.data} />}
		</main>
	);
}
