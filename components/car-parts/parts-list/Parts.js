import { useRouter } from 'next/router'
import Categories from '@/components/dashboard/categories/Categories'
import Paginate from '@/components/utils/Paginate'

export default function Parts({products}) {
    const router = useRouter()

    const listOfParts = products.data.map((product, index) => {
        return (
            <div
                onClick={ () => router.push(`/part/${ product?.slug }`) }
                key={ product.id }
                className={`py-2 ${index === 0 ? 'col-12' : 'col-3'}`}
            >
                <div className="border mx-2 rounded-4">
                    <div className="border-bottom py-3 ps-3 rounded-4 border-bottom">
                        { product.name }
                    </div>
                    <div className="text-break py-2 px-2">
                        { product.description }
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="d-flex flex-row">
            <div className="border-end col-2 vh-100">
                <Categories/>
            </div>
            <div className="d-flex flex-column justify-content-between">
                <div className="d-flex flex-wrap align-items-start justify-content-center">
                    { listOfParts }
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <Paginate itemsPerPage={ 9 } items={ products } props="/parts"/>
                </div>
            </div>
        </div>
    )
}