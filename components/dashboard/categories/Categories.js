import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import { useRouter } from 'next/router'

export default function Categories() {
    const [categories, setCategories] = useState([])
    const router = useRouter()

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        await axios.get('/api/categories').then((response) => {
            setCategories(response.data.data)
        })
    }

    const ListOfCategories = categories.map((category) => {
        return (
            <div key={ category.id }>
                { category.name }
            </div>
        )
    })

    return (
        <div className="overflow-auto h-50 border px-2 py-2 rounded-4">
            { ListOfCategories }
        </div>
    )
}