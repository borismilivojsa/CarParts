import Landing from '@/components/dashboard/Landing'
import axios from '@/lib/axios'

export default function Home({products}) {
    return (
        <>
            <Landing products={products} />
        </>)
}

export async function getStaticProps(context) {
    const response = await axios.get('/api/products')
    const products = response.data.data

    return {
        props: {
            products,
        },
    }
}