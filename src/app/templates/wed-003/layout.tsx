import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Template WED-003',
	description: 'Mẫu giao diện website đám cưới - WED-001'
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{ children }</>;
}
