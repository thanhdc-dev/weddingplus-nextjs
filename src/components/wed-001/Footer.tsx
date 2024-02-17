import Image, { StaticImageData } from 'next/image';
import { Alex_Brush, Nunito_Sans } from 'next/font/google';

const nunitoSansFont = Nunito_Sans({
	subsets: ['latin', 'vietnamese'],
	weight: ['400', '600', '700'],
});

const alexBrushFont = Alex_Brush({
	subsets: ['latin', 'vietnamese'],
	weight: ['400'],
});

export type FooterProps = {
	image: StaticImageData;
	groomName: string;
	brideName: string;
	weddingDate: Date;
};

export default function Footer({
	weddingDate,
	image,
	groomName,
	brideName,
}: Readonly<FooterProps>) {
	const year = weddingDate.getFullYear();
	const month = weddingDate.getMonth() + 1;
	const date = weddingDate.getDate();

	return (
		<section id="footer" className="pb-14">
			<div className="container">
				<div className="-mx-4">
					<div className="px-4 text-center">
						<h2>
							<Image className="w-[90px] mx-auto mb-3" src={image} alt="footer" />
							<span className={`${alexBrushFont.className} font-normal text-4xl`}>
								{groomName}
								<small className="px-4">&amp;</small>
								{brideName}
							</span>
						</h2>
						<p className={`${nunitoSansFont.className} copyright text-lg italic`}>
							<span className="wedding-date-d">{date}</span>
							<span>-</span>
							<span className="wedding-date-m">{month}</span>
							<span>-</span>
							<span className="wedding-date-y">{year}</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
