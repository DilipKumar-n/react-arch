import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function PageContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="page-container grid grid-rows-[auto_1fr_auto] min-h-screen">
			<Header />
			<div className="p-30">{children}</div>
			<Footer />
		</div>
	);
}
