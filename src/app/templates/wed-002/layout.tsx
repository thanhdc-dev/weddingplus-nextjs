import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Template WED-002',
	description: 'Mẫu giao diện website đám cưới - WED-001'
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{ children }</>;
}
