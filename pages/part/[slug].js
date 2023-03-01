import Part from '@/components/car-parts/car-part/Part'
import axios from '@/lib/axios'

export default function Slug({product}) {
    return (
        <>
            <Part product={product}/>
        </>
    )
}

export async function getServerSideProps(context) {
    const response = await axios.get(`/api/products/${context.query.slug}`)
    const product = response.data.data
    return {
        props: {
            product,
        },
    }
}
