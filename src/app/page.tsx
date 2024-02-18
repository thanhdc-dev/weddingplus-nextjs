import BannerSmallImage from '@public/images/banner-1x.webp';
import BannerLargeImage from '@public/images/banner.jpeg';
import HeroShapeImage from '@public/images/hero-shape.svg';
import Template1LargeImage from '@public/images/wed-001-large.webp';
import Template1MediumImage from '@public/images/wed-001-medium.webp';
import Template1SmallImage from '@public/images/wed-001-small.webp';
import Template2LargeImage from '@public/images/wed-002-large.webp';
import Template2MediumImage from '@public/images/wed-002-medium.webp';
import Template2SmallImage from '@public/images/wed-002-small.webp';
import Template3LargeImage from '@public/images/wed-003-large.webp';
import Template3MediumImage from '@public/images/wed-003-medium.webp';
import Template3SmallImage from '@public/images/wed-003-small.webp';
import { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type BannerProps = {
	title: string;
	description?: string;
	backgrountSmallImage: StaticImageData;
	backgrountLargeImage: StaticImageData;
	footerImage: StaticImageData;
};

const Banner = ({
	title,
	description,
	backgrountSmallImage,
	backgrountLargeImage,
	footerImage,
}: BannerProps) => {
	return (
		<section
			id="banner"
			className="relative h-[320px] md:h-[550px] banner before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-gradient-to-b before:from-[#41080e99] before:to-[#41080e99]"
		>
			<div className="banner-image absolute top-0 left-0 w-full h-full z-[-1]">
				<picture>
					<source media="(min-width:375px)" srcSet={backgrountLargeImage.src} />
					<Image
						alt="Banner"
						src={backgrountSmallImage}
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
			<div className="absolute top-[20%] md:top-[30%] left-0 w-full text-center px-4">
				<h1 className="text-2xl md:text-4xl lg:text-[40px] text-white font-sigmar uppercase">
					{title}
				</h1>
				{!!description && <p className="md:xl lg:text-2xl text-white">{description}</p>}
			</div>
			<div className="absolute bottom-[-2px] left-0 right-0 w-full">
				<Image
					className="w-full h-[90px] md:h-auto"
					alt="Banner line"
					src={footerImage}
					sizes="100vw"
				/>
			</div>
		</section>
	);
};
type TemplateProps = {
	title: string;
	description?: string;
	items: {
		name: string;
		link: string;
		image: {
			large: StaticImageData;
			medium: StaticImageData;
			small: StaticImageData;
		};
	}[];
};

const Template = ({ title, description, items }: TemplateProps) => {
	const Items = items.map((item, index) => {
		return (
			<div key={index} className="w-full px-4 md:w-1/2 xl:w-1/3">
				<div className="relative mb-12">
					<div className="overflow-hidden rounded-lg group border-[2px] border-gray aspect-[3/4] sm:aspect-[4/3] relative before:absolute before:hidden sm:before:block before:top-0 before:left-0 before:bg-[#00000033] before:w-full before:h-full">
						<picture>
							<source
								media="(min-width:768px)"
								srcSet={item.image.large.src}
								width={500}
								height={375}
							/>
							<source
								media="(min-width:576px)"
								srcSet={item.image.medium.src}
								width={520}
								height={390}
							/>
							<Image
								src={item.image.small.src}
								width={575}
								height={765}
								alt={`${item.name}`}
								className="absolute top-0 left-0 w-full h-auto group-hover:scale-105 transition-all object-cover"
								loading="lazy"
							/>
						</picture>
					</div>
					<div className="relative z-10 mx-7 -mt-12 rounded-lg bg-white p-3 sm:py-6 text-center shadow-lg">
						<h3 className="mb-4 text-xl font-bold text-dark">{item.name}</h3>
						<Link
							href={item.link}
							className="inline-block rounded-md border py-3 px-7 text-sm font-semibold transition hover:border-primary hover:bg-primary hover:text-white bg-primary text-white md:text-body-color md:bg-white"
						>
							View Demo
						</Link>
					</div>
				</div>
			</div>
		);
	});
	return (
		<section id="templates" className="pt-12 lg:pt-[90px]">
			<div className="container">
				<div className="-mx-4 flex flex-wrap">
					<div className="w-full px-4">
						<div className="mx-auto mb-[60px] max-w-[510px] text-center">
							<h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
								{title}
							</h2>
							{!!description && <p className="text-base text-body-color">{description}</p>}
						</div>
					</div>
				</div>
				<div className="-mx-4 flex flex-wrap">{Items}</div>
			</div>
		</section>
	);
};

type PricingProps = {
	title: string;
	description?: string;
	items: {
		name: string;
		price: string;
		description: string;
		features: string[];
		contact_phone: string;
	}[];
	services: {
		name: string;
		price: string;
	}[];
};

const Pricing = ({ title, description, items, services }: PricingProps) => {
	const Items = items.map((item, index) => {
		const Features = item.features.map((feature, featureIndex) => {
			return (
				<li key={featureIndex} className="mb-4 flex text-base text-dark">
					<span className="mr-2 rounded-full text-base text-secondary">
						<svg width="20" height="20" viewBox="0 0 20 20" className="fill-green-600">
							<path d="M10 19.625C4.6875 19.625 0.40625 15.3125 0.40625 10C0.40625 4.6875 4.6875 0.40625 10 0.40625C15.3125 0.40625 19.625 4.6875 19.625 10C19.625 15.3125 15.3125 19.625 10 19.625ZM10 1.5C5.3125 1.5 1.5 5.3125 1.5 10C1.5 14.6875 5.3125 18.5312 10 18.5312C14.6875 18.5312 18.5312 14.6875 18.5312 10C18.5312 5.3125 14.6875 1.5 10 1.5Z" />
							<path d="M8.9375 12.1875C8.71875 12.1875 8.53125 12.125 8.34375 11.9687L6.28125 9.96875C6.0625 9.75 6.0625 9.40625 6.28125 9.1875C6.5 8.96875 6.84375 8.96875 7.0625 9.1875L8.9375 11.0312L12.9375 7.15625C13.1563 6.9375 13.5 6.9375 13.7188 7.15625C13.9375 7.375 13.9375 7.71875 13.7188 7.9375L9.5625 12C9.34375 12.125 9.125 12.1875 8.9375 12.1875Z" />
						</svg>
					</span>
					{feature}
				</li>
			);
		});
		return (
			<div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
				<div className="relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12">
					<span className="mb-4 block text-2xl font-semibold text-primary">{item.name}</span>
					<h2 className="mb-5 text-[42px] font-bold text-dark">{item.price}</h2>
					<p className="mb-8 border-b border-[#F2F2F2] pb-8 text-base text-body-color">
						{item.description}
					</p>
					<div className="mb-7">
						<ul>{Features}</ul>
					</div>
					<a
						href="tel:0357747883"
						className="block w-full rounded-md border border-primary bg-primary p-4 text-center text-lg font-semibold text-white transition hover:bg-opacity-90 hover:text-white"
					>
						Liên Hệ
					</a>

					<div>
						<span className="absolute right-0 top-7 z-[-1]">
							<svg
								width="77"
								height="172"
								viewBox="0 0 77 172"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
								<defs>
									<linearGradient
										id="paint0_linear"
										x1="86"
										y1="0"
										x2="86"
										y2="172"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#df4759" stopOpacity="0.09" />
										<stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
									</linearGradient>
								</defs>
							</svg>
						</span>
						<span className="absolute right-4 top-4 z-[-1]">
							<svg
								width="41"
								height="89"
								viewBox="0 0 41 89"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle
									cx="38.9138"
									cy="87.4849"
									r="1.42021"
									transform="rotate(180 38.9138 87.4849)"
									fill="#df4759"
								/>
								<circle
									cx="38.9138"
									cy="74.9871"
									r="1.42021"
									transform="rotate(180 38.9138 74.9871)"
									fill="#df4759"
								/>
								<circle
									cx="38.9138"
									cy="62.4892"
									r="1.42021"
									transform="rotate(180 38.9138 62.4892)"
									fill="#df4759"
								/>
								<circle
									cx="38.9138"
									cy="38.3457"
									r="1.42021"
									transform="rotate(180 38.9138 38.3457)"
									fill="#df4759"
								/>
								<circle
									cx="38.9138"
									cy="13.634"
									r="1.42021"
									transform="rotate(180 38.9138 13.634)"
									fill="#df4759"
								/>
								<circle
									cx="38.9138"
									cy="50.2754"
									r="1.42021"
									transform="rotate(180 38.9138 50.2754)"
									fill="#df4759"
								/>
								<circle
									cx="38.9138"
									cy="26.1319"
									r="1.42021"
									transform="rotate(180 38.9138 26.1319)"
									fill="#df4759"
								/>
								<circle
									cx="38.9138"
									cy="1.42021"
									r="1.42021"
									transform="rotate(180 38.9138 1.42021)"
									fill="#df4759"
								/>
								<circle
									cx="26.4157"
									cy="87.4849"
									r="1.42021"
									transform="rotate(180 26.4157 87.4849)"
									fill="#df4759"
								/>
								<circle
									cx="26.4157"
									cy="74.9871"
									r="1.42021"
									transform="rotate(180 26.4157 74.9871)"
									fill="#df4759"
								/>
								<circle
									cx="26.4157"
									cy="62.4892"
									r="1.42021"
									transform="rotate(180 26.4157 62.4892)"
									fill="#df4759"
								/>
								<circle
									cx="26.4157"
									cy="38.3457"
									r="1.42021"
									transform="rotate(180 26.4157 38.3457)"
									fill="#df4759"
								/>
								<circle
									cx="26.4157"
									cy="13.634"
									r="1.42021"
									transform="rotate(180 26.4157 13.634)"
									fill="#df4759"
								/>
								<circle
									cx="26.4157"
									cy="50.2754"
									r="1.42021"
									transform="rotate(180 26.4157 50.2754)"
									fill="#df4759"
								/>
								<circle
									cx="26.4157"
									cy="26.1319"
									r="1.42021"
									transform="rotate(180 26.4157 26.1319)"
									fill="#df4759"
								/>
								<circle
									cx="26.4157"
									cy="1.4202"
									r="1.42021"
									transform="rotate(180 26.4157 1.4202)"
									fill="#df4759"
								/>
								<circle
									cx="13.9177"
									cy="87.4849"
									r="1.42021"
									transform="rotate(180 13.9177 87.4849)"
									fill="#df4759"
								/>
								<circle
									cx="13.9177"
									cy="74.9871"
									r="1.42021"
									transform="rotate(180 13.9177 74.9871)"
									fill="#df4759"
								/>
								<circle
									cx="13.9177"
									cy="62.4892"
									r="1.42021"
									transform="rotate(180 13.9177 62.4892)"
									fill="#df4759"
								/>
								<circle
									cx="13.9177"
									cy="38.3457"
									r="1.42021"
									transform="rotate(180 13.9177 38.3457)"
									fill="#df4759"
								/>
								<circle
									cx="13.9177"
									cy="13.634"
									r="1.42021"
									transform="rotate(180 13.9177 13.634)"
									fill="#df4759"
								/>
								<circle
									cx="13.9177"
									cy="50.2754"
									r="1.42021"
									transform="rotate(180 13.9177 50.2754)"
									fill="#df4759"
								/>
								<circle
									cx="13.9177"
									cy="26.1319"
									r="1.42021"
									transform="rotate(180 13.9177 26.1319)"
									fill="#df4759"
								/>
								<circle
									cx="13.9177"
									cy="1.42019"
									r="1.42021"
									transform="rotate(180 13.9177 1.42019)"
									fill="#df4759"
								/>
								<circle
									cx="1.41963"
									cy="87.4849"
									r="1.42021"
									transform="rotate(180 1.41963 87.4849)"
									fill="#df4759"
								/>
								<circle
									cx="1.41963"
									cy="74.9871"
									r="1.42021"
									transform="rotate(180 1.41963 74.9871)"
									fill="#df4759"
								/>
								<circle
									cx="1.41963"
									cy="62.4892"
									r="1.42021"
									transform="rotate(180 1.41963 62.4892)"
									fill="#df4759"
								/>
								<circle
									cx="1.41963"
									cy="38.3457"
									r="1.42021"
									transform="rotate(180 1.41963 38.3457)"
									fill="#df4759"
								/>
								<circle
									cx="1.41963"
									cy="13.634"
									r="1.42021"
									transform="rotate(180 1.41963 13.634)"
									fill="#df4759"
								/>
								<circle
									cx="1.41963"
									cy="50.2754"
									r="1.42021"
									transform="rotate(180 1.41963 50.2754)"
									fill="#df4759"
								/>
								<circle
									cx="1.41963"
									cy="26.1319"
									r="1.42021"
									transform="rotate(180 1.41963 26.1319)"
									fill="#df4759"
								/>
								<circle
									cx="1.41963"
									cy="1.4202"
									r="1.42021"
									transform="rotate(180 1.41963 1.4202)"
									fill="#df4759"
								/>
							</svg>
						</span>
					</div>
				</div>
			</div>
		);
	});
	const Services = services.map((item, index) => {
		return (
			<tr key={index}>
				<td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 font-medium text-dark">
					{item.name}
				</td>
				<td className="border-b border-[#E8E8E8] bg-white py-5 px-2 text-center font-medium text-dark">
					{item.price}
				</td>
			</tr>
		);
	});
	return (
		<section id="pricing" className="relative z-20 overflow-hidde py-12 lg:py-[90px]">
			<div className="container">
				<div className="-mx-4 flex flex-wrap">
					<div className="w-full px-4">
						<div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
							<h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
								{title}
							</h2>
							{!!description && <p className="text-base text-body-color">{description}</p>}
						</div>
					</div>
				</div>

				<div className="-mx-4 flex flex-wrap justify-center mb-20 lg:mb-[120px]">{Items}</div>

				<div className="-mx-4 flex flex-wrap">
					<div className="w-full px-4">
						<div className="max-w-full overflow-x-auto">
							<table className="w-full table-auto">
								<thead>
									<tr className="bg-primary text-center">
										<th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-6 lg:px-4">
											TÊN DỊCH VỤ
										</th>
										<th className="w-1/6 min-w-[160px] border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-6 lg:px-4">
											CHI PHÍ
										</th>
									</tr>
								</thead>
								<tbody>{Services}</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export const metadata: Metadata = {
	title: 'Home | Wedding+',
};

export default function Home() {
	const bannerData: BannerProps = {
		title: 'Kho giao diện website đám cưới',
		description:
			'Hãy chọn cho mình một giao diện miễn phí và chuyên nghiệp cho ngày trọng đại của bạn.',
		backgrountSmallImage: BannerSmallImage,
		backgrountLargeImage: BannerLargeImage,
		footerImage: HeroShapeImage,
	};
	const templateData: TemplateProps = {
		title: 'Templates',
		items: [
			{
				name: 'WED-001',
				link: 'templates/wed-001',
				image: {
					large: Template1LargeImage,
					medium: Template1MediumImage,
					small: Template1SmallImage,
				},
			},
			{
				name: 'WED-002',
				link: 'templates/wed-002',
				image: {
					large: Template2LargeImage,
					medium: Template2MediumImage,
					small: Template2SmallImage,
				},
			},
			{
				name: 'WED-003',
				link: 'templates/wed-003',
				image: {
					large: Template3LargeImage,
					medium: Template3MediumImage,
					small: Template3SmallImage,
				},
			},
		],
	};
	const pricingData: PricingProps = {
		title: 'Bảng Giá Dịch Vụ',
		description: 'Thông tin các dịch vụ đang được hỗ trợ.',
		items: [
			{
				name: 'Cơ Bản',
				price: '---',
				description:
					'Gói hoàn hảo để chia sẻ và lan tỏa những điều hạnh phúc của bạn đến mọi người.',
				features: [
					'1 template website',
					'30 hình ảnh trong album',
					'6 tháng sử dụng',
					'Hỗ trợ tạo QRCode miễn phí',
				],
				contact_phone: '0357747883',
			},
		],
		services: [
			{
				name: 'Cài đặt tên miền tùy chỉnh. (Hỗ trợ, hướng dẫn mua tên miền miễn phí).',
				price: '--- VNĐ / lần',
			},
			{
				name: 'Gia hạn thời gian sử dụng.',
				price: '--- VNĐ / tháng',
			},
			{
				name: 'Tăng dung lượng lưu trữ hình ảnh, video.',
				price: '--- VNĐ / 50 hình ảnh',
			},
		],
	};
	const data = {
		section_banner: {
			active: true,
			data: bannerData,
		},
		section_template: {
			active: true,
			data: templateData,
		},
		section_pricing: {
			active: false,
			data: pricingData,
		},
	};

	return (
		<main id='main' className='pt-[52px] xl:pt-[60px]'>
			{data?.section_banner?.active && <Banner {...data.section_banner.data} />}
			{data?.section_template?.active && <Template {...data.section_template.data} />}
			{data?.section_pricing?.active && <Pricing {...data.section_pricing.data} />}
		</main>
	);
}
