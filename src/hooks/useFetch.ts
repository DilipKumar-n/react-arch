import { useEffect, useState } from 'react';
import type { BannerProps } from '../utils/types';

export default function useFetch(url: string) {
	const [data, setData] = useState<BannerProps['data']>(null);
	const [error, setError] = useState<string>('');

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
				if (error instanceof Error) {
					setError(error.message);
				} else {
					setError('An unknown error occurred');
				}
			}
		};

		fetchData();
	}, [url]);

	return { data, error };
}
