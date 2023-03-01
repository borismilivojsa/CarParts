import useAuth from '@/lib/useAuth'

export default function Profile() {
const {user} = useAuth({middleware: 'auth'})

    return (
        <>
            Profile
        </>
    )
}