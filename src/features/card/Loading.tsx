import React from 'react';
import type { BannerProps } from '../../utils/types';
import defaultImage from '../../assets/Placeholder_view_vector.svg';

function Card({ data }: BannerProps) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{data !== null &&
				data.map((item) => (
					<div key={item.id} className="border p-4 rounded shadow">
						<div className="mb-4 mx-auto w-50 h-50">
							<img
								src={defaultImage}
								alt={'/'}
								className="w-50 h-50 animate-pulse bg-gray-300"
							/>
						</div>
						<div className="mb-2 font-bold text-2xl h-[32px] bg-gray-300 animate-pulse">
							&nbsp;
						</div>
						<div className="mb-3 text-lg h-[20px] bg-gray-300 animate-pulse">
							&nbsp;
						</div>
						<div className="mb-1 h-[18px] bg-gray-300 animate-pulse">
							&nbsp;
						</div>
						<div className="mb-1 h-[18px] bg-gray-300 animate-pulse">
							&nbsp;
						</div>
						<div className="mb-1 h-[18px] bg-gray-300 animate-pulse">
							&nbsp;
						</div>
						<div className="h-[18px] bg-gray-300 animate-pulse">&nbsp;</div>
					</div>
				))}
		</div>
	);
}
export default Card;
