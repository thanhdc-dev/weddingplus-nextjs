import styles from './styles.module.scss';
import { Marmelad } from 'next/font/google';

const marmeladFont = Marmelad({
	subsets: ['latin'],
	weight: ['400'],
});

export default function Loading() {
	return (
		<div className={`fixed w-full h-full bg-white top-0 left-0 z-50 text-center`}>
			<div
				className={`${styles.loadingHeart} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center`}
			>
				<svg className=' overflow-visible w-[11rem]' viewBox="0 0 512 512" width="100">
					<path
						className="animate-wed003-stroke"
						d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
					></path>
				</svg>
				<div
					className={`${marmeladFont.className} text-2xl absolute top-[40px] left-1/2 -translate-x-1/2`}
				>
					V<br />
					<small>&amp;</small>
					<br />H
				</div>
			</div>
		</div>
	);
}
