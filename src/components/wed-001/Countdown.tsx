import { useCountdown } from '@/hooks/useCountdown';
import Image, { StaticImageData } from 'next/image';

import { Alex_Brush } from 'next/font/google';

const alexBrushFont = Alex_Brush({
	subsets: ['latin', 'vietnamese'],
	weight: ['400'],
});

export type CountdownProps = {
	weddingDate: Date;
	backgroundImage: StaticImageData;
};

export default function Countdown({ weddingDate, backgroundImage }: Readonly<CountdownProps>) {
	const targetDate = weddingDate.getTime();
	const [days, hours, minutes, seconds] = useCountdown(targetDate);

	return (
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
						<span>Days</span>
					</li>
					<li key={2} className="text-xs p-4 leading-10">
						<span id="hours" className="block font-bold text-[60px]">
							{hours}
						</span>
						<span>Hours</span>
					</li>
					<li key={3} className="text-xs p-4 leading-10">
						<span id="minutes" className="block font-bold text-[60px]">
							{minutes}
						</span>
						<span>Minutes</span>
					</li>
					<li key={4} className="text-xs p-4 leading-10">
						<span id="seconds" className="block font-bold text-[60px]">
							{seconds}
						</span>
						<span>Seconds</span>
					</li>
				</ul>
			</div>
		</section>
	);
}
