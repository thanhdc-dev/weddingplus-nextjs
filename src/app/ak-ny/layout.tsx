import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Anh Khiêm - Như Ý',
	description: 'Mẫu giao diện website đám cưới - WED-001'
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <>{ children }</>;
}
