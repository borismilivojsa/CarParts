import ReactPaginate from 'react-paginate'
import { useRouter } from 'next/router'

function PaginatedItems({items, props}) {
    const router = useRouter()

    const handlePageClick = (e) => {

        router.push(`${ props }?page=${ e.selected + 1 }`)
    }

    return (
        <>
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={3}
                pageCount={items.meta.last_page}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default PaginatedItems