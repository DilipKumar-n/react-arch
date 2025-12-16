import { useEffect, useState } from 'react';

interface BannerProps {
	data: {
		address?: string;
		company?: string;
		country?: string;
		email?: string;
		id?: number;
		name?: string;
		phone?: string;
		photo?: string;
		state?: string;
		username?: string;
		zip?: string;
		message?: string;
	} | null;
}

export default function useFetch(url: string) {
	const [data, setData] = useState<BannerProps['data']>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const result = await response.json();
				setData(result);
			} catch (error: unknown) {
				const data: BannerProps['data'] = {
					message:
						error instanceof Error
							? error.message
							: 'An unknown error occurred',
				};
				setData(data);
			}
		};

		fetchData();
	}, [url]);

	return { data };
}
