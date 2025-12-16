import React, { Suspense } from 'react';
import useFetch from '../../hooks/useFetch';
import Loading from './Loading';

export default function CardContainer() {
	const { data } = useFetch('https://fake-json-api.mock.beeceptor.com/users');

	const Cards = React.lazy(() => import('./Card'));

	return (
		<Suspense fallback={<Loading data={data} />}>
			<Cards data={data} />
		</Suspense>
	);
}
