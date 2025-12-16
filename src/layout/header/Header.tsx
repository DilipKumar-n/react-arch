import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div className="grid grid-cols-2 justify-between items-center bg-brand-yellow p-30">
			<div className="text-brand-blue">BURGER HOUSE</div>
			<div className="grid grid-rows-[auto_auto] justify-items-end gap-2">
				<div>Express Delivery</div>
				<nav className="flex gap-8">
					<Link to="/" className="menu-item">
						Home
					</Link>
					<Link to="/menu" className="menu-item">
						Menu
					</Link>
					<Link to="/our-story" className="menu-item">
						Our Story
					</Link>
					<Link to="/contact" className="menu-item">
						Contact
					</Link>
				</nav>
			</div>
		</div>
	);
}
