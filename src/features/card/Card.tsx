import React from 'react';
import type { BannerProps } from '../../utils/types';

function Card({ data }: BannerProps) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{data !== null &&
				data.map((item) => (
					<div key={item.id} className="border p-4 rounded shadow">
						<div className="mb-4 mx-auto w-50 h-50">
							<img src={item.photo} alt={item.name} className="w-50 h-auto" />
						</div>
						<div className="mb-2font-bold text-2xl">{item.name}</div>
						<div className="mb-3 text-lg">{item.company}</div>
						<div>{item.address},</div>
						<div>
							{item.state}, {item.country}, {item.zip}
						</div>
						<div>{item.phone}</div>
						<div>{item.email}</div>
					</div>
				))}
		</div>
	);
}
export default Card;
