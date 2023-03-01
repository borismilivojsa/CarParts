import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Search() {
    const [term, setTerm] = useState('')
    const router = useRouter()


    const submit = (e) => {
        e.preventDefault()


        router.push(`${term}`)
        setTerm('')
    }
    return (
        <>
            <div className="d-flex flex-row align-items-center w-100">
                <button className="btn btn-light">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 20 20"
                        height="24"
                        width="24"
                    >
                        <path
                            strokeLinecap="round" strokeLinejoin="round"
                            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                        />
                    </svg>
                </button>
                <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    className="w-100 h-50 rounded-5 text-dark border-1 ps-3"
                    placeholder="Start searching for your parts :D"
                />
                <button
                    onClick={(e) => submit(e)}
                    className="btn btn-light"
                    type="submit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 20 20"
                        height="24"
                        width="24"
                    >
                        <path
                            strokeLinecap="round" strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </button>
            </div>
        </>
    )
}