import Parts from '@/components/car-parts/parts-list/Parts'
import axios from '@/lib/axios'

export default function PartsPage({products}) {
    return (
        <>
            <Parts products={ products }/>
        </>
    )
}

export async function getServerSideProps(context) {

    const response = await axios.get(`/api/products?page=${context.query.page}`)
    const products = response.data

    return {
        props: {
            products,
        },
    }
}
