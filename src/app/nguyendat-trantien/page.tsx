'use client';
import BankBrideImage from '@public/images/nguyendat-trantien/bank-bride.webp';
import BankGroomImage from '@public/images/nguyendat-trantien/bank-groom.webp';
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
import Bank, { BankProps } from '@/components/wed-001/Bank';

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
				'Chàng trai đến từ Kiên Giang. Cô dâu nhận xét như sau: Là người có tính cách hướng ngoại partime, hiền lành, siêng năng, thông minh nhưng hơi vô tri.',
			socials: [],
		},
		bride: {
			name: 'Maria - Trần Tiên',
			avatar: BrideImage,
			description:
				'Cô gái đến từ Cần Thơ. Chú rể nhận xét thế này: Là một người hòa đồng nhưng hướng nội, vui vẻ nhưng khó tính. Dễ hiểu nhưng không đáng kể.',
			socials: [],
		},
	};
	const countdownData: CountdownProps = {
		weddingDate,
		backgroundImage: CountdownBgImage,
	};
	const outStoryData: StoryProps = {
		image: StoryImage,
		description: `<p>Chúng tớ gặp nhau vào tháng 10/2016 khi cùng tham gia, hoạt động trong nhóm Giới trẻ Giáo Phận Long Xuyên cụm Cần Thơ.</p><p>Thật hài hước khi cả hai đều đã có một đối tượng khác và đang trong giai đoạn mập mờ. Chúng tớ trở nên thân thiết khi luôn sáp lại chọc ghẹo, tra hỏi nhau về những nghi ngờ của đối phương về mối quan hệ với đối tượng kia như một thám tử thực thụ.</p><p>Trớ trêu thay khi bạn bè, những người ngoài cuộc chẳng hiểu chủ để hai đứa đang nói với nhau, chỉ thấy cứ sáp lại thì mọi nghi ngờ được đẩy lên cao về mối quan hệ của hai đứa.</p><p>Một chiếc thuyền được ra khơi từ những hiểu lầm mà chẳng có lời giải thích. Người xưa có câu: Lửa gần rơm lâu ngày cũng bén. Và nó bén thật sự mọi người ạ. Hai đứa chẳng thể biết được nó đã bén từ lúc nào.</p><p>Dĩ nhiên chiếc thuyền cũng không hoàn toàn thuận buồm xuôi gió đâu, cũng có những lúc chênh vênh do hiểu lầm và mém từ bỏ.</p><p>Nhưng cuối cùng. Tháng 01/2017 chúng tớ đã chính thức hẹn hò. Và mối tình này chẳng có lời tỏ tình nào. Mọi thứ diễn ra tự nhiên chẳng có cột mốc đánh dấu nào cả.</p><p>Chúng tớ không có ngày tỏ tình và 7 năm sau cũng thế, cũng không có ngày cầu hôn luôn. Mọi sự diễn ra như 1 điều mặc định. Chúng tớ cho rằng, cuộc tình này là một trang sách mà Chúa đã viết sẵn cho hai đứa rồi.</p><p>Chúng tớ có THẤT TÌNH. Nhưng là THẤT là 7 và TÌNH là Tình yêu. Là 7 NĂM TÌNH CẢM. Người ta nói quen 7 năm hay chia tay lắm. Nên là sợ quá… sợ quá… phải cưới nó thôi.</p><p><b>LỜI CẢM ƠN</b></p><p>Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt là đám cưới của chúng tớ. Chúng tớ muốn gửi đến các bạn lời cảm ơn sâu sắc nhất để bạn biết chúng tớ rất hạnh phúc khi thấy bạn ở đó. Cảm ơn các bạn rất nhiều vì sự hiện diện cùng những lời chúc tốt đẹp mà bạn đã dành cho chúng tớ!</p>`,
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
				location: 'Số 99, ấp Thầy Ký - TT Thạnh An, Vĩnh Thạnh, Cần Thơ',
				image: Event1Image,
				google_map: 'https://maps.app.goo.gl/UgvboQkmGBw61ALU9',
			},
			{
				title: 'TIỆC CƯỚI NHÀ NAM',
				time: '10:30 AM',
				date: '30/04/2024',
				location: 'Số 343-345 ấp Kinh Tư, Bình Giang, Hòn Đất, Kiên Giang',
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
	const bankData: BankProps = {
		items: [BankBrideImage, BankGroomImage]
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
		section_bank: {
			active: true,
			data: bankData,
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
			{data.section_bank.active && <Bank {...data.section_bank.data} />}
			{data.section_footer.active && <Footer {...data.section_footer.data} />}
		</main>
	);
}
