import useFetch from '../../hooks/useFetch'
import Banner from './banner';

export default function BannerContainer() {
    const { data } = useFetch('https://fake-json-api.mock.beeceptor.com/users')

    return (
        <Banner data={data} />
    )
}
