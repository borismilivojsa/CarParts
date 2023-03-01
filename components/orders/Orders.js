import useAuth from '@/lib/useAuth'

export default function Orders() {
    const {user} = useAuth({middleware: 'auth'})

    return (
        <>
            Orders
        </>
    )
}