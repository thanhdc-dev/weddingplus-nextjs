'use client';
import BrideImage from '@public/images/nguyendat-trantien/bride.webp';
import CountdownBgImage from '@public/images/nguyendat-trantien/countdown-bg.webp';
import Event1Image from '@public/images/nguyendat-trantien/event-01.webp';
import Event2Image from '@public/images/nguyendat-trantien/event-02.webp';
import Event3Image from '@public/images/nguyendat-trantien/event-03.webp';
import FooterImage from '@public/images/wed-001/footer.png';
import Gallery01Image from '@public/images/nguyendat-trantien/gallery-01.webp';
import Gallery02Image from '@public/images/nguyendat-trantien/gallery-02.webp';
import Gallery03Image from '@public/images/nguyendat-trantien/gallery-03.webp';
import Gallery04Image from '@public/images/nguyendat-trantien/gallery-04.webp';
import Gallery05Image from '@public/images/nguyendat-trantien/gallery-05.webp';
import Gallery06Image from '@public/images/nguyendat-trantien/gallery-06.webp';
import Gallery07Image from '@public/images/nguyendat-trantien/gallery-07.webp';
import Gallery08Image from '@public/images/nguyendat-trantien/gallery-08.webp';
import Gallery09Image from '@public/images/nguyendat-trantien/gallery-09.webp';
import Gallery10Image from '@public/images/nguyendat-trantien/gallery-10.webp';
import Gallery11Image from '@public/images/nguyendat-trantien/gallery-11.webp';
import Gallery12Image from '@public/images/nguyendat-trantien/gallery-12.webp';
import Gallery13Image from '@public/images/nguyendat-trantien/gallery-13.webp';
import Gallery14Image from '@public/images/nguyendat-trantien/gallery-14.webp';
import Gallery15Image from '@public/images/nguyendat-trantien/gallery-15.webp';
import Gallery16Image from '@public/images/nguyendat-trantien/gallery-16.webp';
import Gallery17Image from '@public/images/nguyendat-trantien/gallery-17.webp';
import Gallery18Image from '@public/images/nguyendat-trantien/gallery-18.webp';
import Gallery19Image from '@public/images/nguyendat-trantien/gallery-19.webp';
import Gallery20Image from '@public/images/nguyendat-trantien/gallery-20.webp';
import Gallery21Image from '@public/images/nguyendat-trantien/gallery-21.webp';
import Gallery22Image from '@public/images/nguyendat-trantien/gallery-22.webp';
import Gallery23Image from '@public/images/nguyendat-trantien/gallery-23.webp';
import Gallery24Image from '@public/images/nguyendat-trantien/gallery-24.webp';
import Gallery25Image from '@public/images/nguyendat-trantien/gallery-25.webp';
import Gallery26Image from '@public/images/nguyendat-trantien/gallery-26.webp';
import Gallery27Image from '@public/images/nguyendat-trantien/gallery-27.webp';
import Gallery28Image from '@public/images/nguyendat-trantien/gallery-28.webp';
import Gallery29Image from '@public/images/nguyendat-trantien/gallery-29.webp';
import Gallery30Image from '@public/images/nguyendat-trantien/gallery-30.webp';
import Gallery31Image from '@public/images/nguyendat-trantien/gallery-31.webp';
import Gallery32Image from '@public/images/nguyendat-trantien/gallery-32.webp';
import Gallery33Image from '@public/images/nguyendat-trantien/gallery-33.webp';
import Gallery34Image from '@public/images/nguyendat-trantien/gallery-34.webp';
import Gallery35Image from '@public/images/nguyendat-trantien/gallery-35.webp';
import Gallery36Image from '@public/images/nguyendat-trantien/gallery-36.webp';
import Gallery37Image from '@public/images/nguyendat-trantien/gallery-37.webp';
import Gallery38Image from '@public/images/nguyendat-trantien/gallery-38.webp';
import GroomImage from '@public/images/nguyendat-trantien/groom.webp';
import SliderLargeImage from '@public/images/nguyendat-trantien/slider-large.webp';
import SliderImage from '@public/images/nguyendat-trantien/slider.webp';
import StoryImage from '@public/images/nguyendat-trantien/story.webp';
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
	const date = 29;
	const month = 4;
	const year = 2024;
	const weddingDate = new Date(year, month - 1, date);
	const groom = {
		name: 'Nguyễn Đạt',
		full_name: 'Nguyễn Tiến Đạt',
	};
	const bride = {
		name: 'Trần Tiên',
		full_name: 'Trần Thị Cẩm Tiên',
	};
	const headerData: HeaderProps = {
		weddingDate,
		bannerImage: SliderImage,
		bannerLargeImage: SliderLargeImage,
		groomName: 'Nguyễn Đạt',
		brideName: 'Trần Tiên',
	};
	const coupleData: CoupleProps = {
		groom: {
			name: 'Vincent - Nguyễn Đạt',
			avatar: GroomImage,
			description:
				'Chàng trai đến từ BaLi hiện là chuyên viên phần mềm tại thành phố Cần Thơ. Tính cách hướng ngoại, thích đi du lịch biển, yêu thiên nhiên, động vật.',
			socials: [],
		},
		bride: {
			name: 'Maria - Trần Tiên',
			avatar: BrideImage,
			description:
				'Cô gái đến từ xứ sở Sóc Trăng, hiện đang công tác trong lĩnh vực ngân hàng tại Cần Thơ. Luôn yêu quý tất cả mọi người, thích ăn uống và đi núi cắm trại.',
			socials: [],
		},
	};
	const countdownData: CountdownProps = {
		weddingDate,
		backgroundImage: CountdownBgImage,
	};
	const outStoryData: StoryProps = {
		image: StoryImage,
		description: `<p>Các bạn có tin vào tình yêu từ cái nhìn đầu tiên không? Không, đối với chúng tôi thì không tin vào điều đó.</p><p>Vì từ thời điểm gặp nhau cho đến hơn một năm sau đó chúng tôi vẫn nghĩ khả năng chúng tôi thành một cặp là 0%</p><p>Vậy mà các bạn biết không, vào một ngày chống dịch, tôi nhận được một tin nhắn “corona thì anh không chữa được còn codonqua thì anh chữa được nha"</p><p>Từ đó, chúng tôi từ hai người xa lạ va vào nhau, tưởng chừng không tin nỗi nên phải hẹn gặp mặt nhau vào ngày hôm sau đó.</p><p>Những cuộc hẹn nhiều lên, chúng tôi rong ruổi khắp mọi con đường, kể cho nhau nghe rất nhiều chuyện như thể  đã thân thiết từ lâu,</p><p>Qua độ tuổi rong ruổi, chúng tôi tiếp tục trải qua nhiều thăng trầm từ công việc, gia đình, tuy không vất vả hơn bao người, nhưng tất cả những trải nghiệm đối với chúng tôi rất quý báu.</p><p>* Và ngày 21/1/2023 chúng tôi đã Say Yes!</p><p>4 năm bên nhau không phải quãng thời gian quá dài, nhưng đủ cho chúng ta nhận ra nhiều điều. Yêu nhau, vun vén hạnh phúc và cùng nỗ lực vượt qua những khó khăn trong cuộc sống. Và giờ đây chúng ta tiếp tục cùng nhau bước sang trang mới thật hạnh phúc, thật thành công.</p><p><b>LỜI CẢM ƠN</b></p><p>Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám cưới của chúng tôi. Chúng tôi muốn gửi đến các bạn lời cảm ơn sâu sắc nhất để bạn biết chúng tôi rất hạnh phúc khi thấy bạn ở đó. Cảm ơn các bạn rất nhiều vì sự hiện diện cùng những lời chúc tốt đẹp mà bạn đã dành cho chúng tôi!</p>`,
	};
	const eventData: EventProps = {
		items: [
			{
				title: 'LỄ CƯỚI',
				time: '08:00 AM',
				date: '29/04/2024',
				location: 'Giáo xứ Thánh Gia - Thầy Ký',
				image: Event3Image,
				google_map: 'https://maps.app.goo.gl/hLpur5DLGE6bwukg6',
			},
			{
				title: 'TIỆC CƯỚI NHÀ NỮ',
				time: '11:00 AM',
				date: '29/04/2024',
				location: 'Tư Gia',
				image: Event1Image,
				google_map: 'https://maps.app.goo.gl/znqeC4dKTfkLtnps5',
			},
			{
				title: 'TIỆC CƯỚI NHÀ NAM',
				time: '10:30 AM',
				date: '30/04/2024',
				location: 'Tư Gia',
				image: Event2Image,
				google_map: 'https://maps.app.goo.gl/39Z7wGAGjJtW5mz69',
			},
		],
	};
	const galleryData: GalleryProps = {
		items: [
			Gallery01Image,
			Gallery02Image,
			Gallery03Image,
			Gallery04Image,
			Gallery05Image,
			Gallery06Image,
			Gallery07Image,
			Gallery08Image,
			Gallery09Image,
			Gallery10Image,
			Gallery11Image,
			Gallery12Image,
			Gallery13Image,
			Gallery14Image,
			Gallery15Image,
			Gallery16Image,
			Gallery17Image,
			Gallery18Image,
			Gallery19Image,
			Gallery20Image,
			Gallery21Image,
			Gallery22Image,
			Gallery23Image,
			Gallery24Image,
			Gallery25Image,
			Gallery26Image,
			Gallery27Image,
			Gallery28Image,
			Gallery29Image,
			Gallery30Image,
			Gallery31Image,
			Gallery32Image,
			Gallery33Image,
			Gallery34Image,
			Gallery35Image,
			Gallery36Image,
			Gallery37Image,
			Gallery38Image,
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
