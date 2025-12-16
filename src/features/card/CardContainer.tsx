import React from 'react';
import useFetch from '../../hooks/useFetch';
import Card from './Card';

export default function CardContainer() {
	const { data } = useFetch('https://fake-json-api.mock.beeceptor.com/users');

	return <Card data={data} />;
}
