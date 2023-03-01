import axios from './axios'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


export default function useAuth({ middleware } = {}) {
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(true)
    const {data: user, error, mutate} = useSWR('/user', () => axios.get('/api/user').then(response => response.data))

    useEffect(()=>{
        if (user || error) {
            setIsLoading(false)
        }

        if (middleware === 'auth' && ! user && error) router.push('/log-in')
    }, [user, error, middleware, router])



    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const login = async ({setErrors, ...props}) => {
        setErrors([])

        await csrf()
        axios.post('/api/login', props)
             .then(()=> mutate() && router.push('/'))
             .catch(error => {
                 if (error.response.status !== 422) throw error

                 setErrors(Object.values(error.response.data.errors).flat())
             })
    }

    const register = async ({setErrors, ...props}) => {
        setErrors([])

        await csrf()
        axios.post('/api/register', props)
             .then(()=> mutate() && router.push('/'))
             .catch(error => {
                 if (error.response.status !== 422) throw error

                 setErrors(Object.values(error.response.data.errors).flat())
             })
    }

    const logout = async () => {
        await axios.post('/api/logout')

        await mutate(null)

        await router.push('/log-in')
    }

    return {
        user,
        csrf,
        login,
        logout,
        isLoading,
        register
    }

}
