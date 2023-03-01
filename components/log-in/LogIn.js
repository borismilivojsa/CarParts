import Head from 'next/head'
import Label from '@/components/utils/Label'
import Input from '@/components/utils/Input'
import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/utils/Button'
import Error from '@/components/utils/Error'
import useAuth from '@/lib/useAuth'

export default function LogIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [remember, setRemember] = useState(false)

    const {login, isLoading, user} = useAuth({middleware: 'guest'})

    const submitForm = async event => {
        event.preventDefault()

        await login({email, password, remember, setErrors})
    }

    if (isLoading || user) {
        return <>Loading...</>
    }

    return (
        <>
            <Head>
                <title>Car-Parts-LogIn</title>
            </Head>

            <div className="container p-5">
                <Error errors={ errors }/>

                <form onSubmit={ submitForm }>
                    <div className="container d-flex flex-column border rounded-4 w-50 py-4 px-5">
                        <div className="d-flex flex-row justify-content-center py-2">
                            <Link href="/log-in">
                                <Button className="btn">LogIn</Button>
                            </Link>
                            <Link href="/register">
                                <Button className="btn">Register</Button>
                            </Link>
                        </div>

                        <Label htmlFor="email" className="py-2 mt-2">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            value={ email }
                            className="form-control rounded-4 py-2 mb-2"
                            required
                            autoFocus
                            autoComplete="off"
                            onChange={ (e) => setEmail(e.target.value) }
                            placeholder="example@gmail.com"
                        />

                        <Label htmlFor="password" className="py-2 mt-1">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            value={ password }
                            className="form-control rounded-4 py-2 mb-2"
                            required
                            onChange={ (e) => setPassword(e.target.value) }
                            autoComplete="current-password"
                        />

                        <div className="d-flex flex-row mt-4">
                            <Input
                                id="remember_me"
                                type="checkbox"
                                name="remember"
                                checked={ remember }
                                onChange={ (e) => setRemember(e.target.value) }
                                className="form-check-input me-2"
                            />
                            <Label htmlFor="remember_me">
                                Remember me
                            </Label>
                        </div>
                        <div className="d-flex flex-column pt-2 pb-4">
                            <Button className="btn btn-light rounded-4 py-2">Log In</Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}