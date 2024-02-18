'use client';
import BrideImage from '@public/images/ak-ny/bride.webp';
import CountdownBgImage from '@public/images/wed-001/countdown-bg.webp';
import Event1Image from '@public/images/ak-ny/event-01.jpeg';
import Event2Image from '@public/images/ak-ny/event-02.jpeg';
import FooterImage from '@public/images/wed-001/footer.png';
import Gallery01Image from '@public/images/ak-ny/gallery-01.jpeg';
import Gallery02Image from '@public/images/ak-ny/gallery-02.jpeg';
import Gallery03Image from '@public/images/ak-ny/gallery-03.jpeg';
import Gallery04Image from '@public/images/ak-ny/gallery-04.jpeg';
import Gallery05Image from '@public/images/ak-ny/gallery-05.jpeg';
import Gallery06Image from '@public/images/ak-ny/gallery-06.jpeg';
import Gallery07Image from '@public/images/ak-ny/gallery-07.jpeg';
import Gallery08Image from '@public/images/ak-ny/gallery-08.jpeg';
import Gallery09Image from '@public/images/ak-ny/gallery-09.jpeg';
import Gallery10Image from '@public/images/ak-ny/gallery-10.jpeg';
import Gallery11Image from '@public/images/ak-ny/gallery-11.jpeg';
import Gallery12Image from '@public/images/ak-ny/gallery-12.jpeg';
import Gallery13Image from '@public/images/ak-ny/gallery-13.jpeg';
import Gallery14Image from '@public/images/ak-ny/gallery-14.jpeg';
import Gallery15Image from '@public/images/ak-ny/gallery-15.jpeg';
import Gallery16Image from '@public/images/ak-ny/gallery-16.jpeg';
import Gallery17Image from '@public/images/ak-ny/gallery-17.jpeg';
import Gallery18Image from '@public/images/ak-ny/gallery-18.jpeg';
import Gallery19Image from '@public/images/ak-ny/gallery-19.jpeg';
import Gallery20Image from '@public/images/ak-ny/gallery-20.jpeg';
import Gallery21Image from '@public/images/ak-ny/gallery-21.jpeg';
import Gallery22Image from '@public/images/ak-ny/gallery-22.jpeg';
import Gallery23Image from '@public/images/ak-ny/gallery-23.jpeg';
import Gallery24Image from '@public/images/ak-ny/gallery-24.jpeg';
import Gallery25Image from '@public/images/ak-ny/gallery-25.jpeg';
import Gallery26Image from '@public/images/ak-ny/gallery-26.jpeg';
import Gallery27Image from '@public/images/ak-ny/gallery-27.jpeg';
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
		full_name: 'Nguyễn Hoàng Như Ý',
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
				'Chàng trai đến từ BaLi hiện là chuyên viên phần mềm tại thành phố Cần Thơ. Tính cách hướng ngoại, thích đi du lịch biển, yêu thiên nhiên, động vật.',
			socials: [],
		},
		bride: {
			name: 'Như Ý',
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
				title: 'TIỆC CƯỚI NHÀ NỮ',
				time: '16:00 AM',
				date: '08/03/2024',
				location: 'Nhà Hàng Tiệc Cưới Thành Đạt',
				image: Event1Image,
				google_map: 'https://maps.app.goo.gl/znqeC4dKTfkLtnps5',
			},
			{
				title: 'TIỆC CƯỚI NHÀ NAM',
				time: '09:00 AM',
				date: '09/03/2024',
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
