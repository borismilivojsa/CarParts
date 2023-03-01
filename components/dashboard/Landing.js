import { useRouter } from 'next/router'

export default function Landing({products}) {
    const router = useRouter()

    const listOfParts = products.map((product) => {
        return (
            <div
                onClick={ () => router.push(`/part/${ product?.slug }`) }
                key={ product.id }
                className="d-flex flex-column border mx-1 my-1 rounded-4 col-3"
            >
                <div className="border-bottom py-3 ps-3 rounded-4 border-bottom">
                    { product.name }
                </div>
                <div className="text-break py-2 px-2">
                    { product.description }
                </div>
            </div>
        )
    })

    return (
        <div className="d-flex flex-row flex-wrap justify-content-center">
            { listOfParts }
        </div>
    )
}