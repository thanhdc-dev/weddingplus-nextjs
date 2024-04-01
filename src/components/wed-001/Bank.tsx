import { Cormorant_Garamond } from 'next/font/google';
import Image, { StaticImageData } from 'next/image';
const cormorantGaramondFont = Cormorant_Garamond({
	subsets: ['latin', 'vietnamese'],
	weight: ['400', '500', '600'],
});

export type BankProps = {
	items: StaticImageData[];
};

export default function Bank({ items }: Readonly<BankProps>) {
	const Items = items.map((image) => {
		return (
			<div className="px-4 mb-4 w-full md:w-1/2 flex items-center justify-center" key={image.src}>
				<div className="rounded-lg border-[3px] max-w-[500px]">
					<Image
						className="border-wed001-primary"
						width={image.width}
						height={image.height}
						src={image}
						alt="bank"
					/>
				</div>
			</div>
		);
	});
	return (
		<section id="bank-couple" className="py-14">
			<div className="container">
				<div className="-mx-4 md:flex flex-wrap">{Items}</div>
			</div>
		</section>
	);
}
