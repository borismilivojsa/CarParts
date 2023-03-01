import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Input from '@/components/utils/Input'
import Button from '@/components/utils/Button'
import Error from '@/components/utils/Error'
import Label from '@/components/utils/Label'
import useAuth from '@/lib/useAuth'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const {register} = useAuth({middleware: 'guest'})
    const submitForm = async event => {
        event.preventDefault()

        await register({name, email, password, password_confirmation, setErrors})
    }

    return (
        <>
            <Head>
                <title>Car-Parts-Register</title>
            </Head>

            <div className="container p-5">
                <Error errors={ errors }/>

                <form onSubmit={ submitForm }>
                    <div className="container d-flex flex-column border px-5 py-4 rounded-4 w-50">
                        <div className="d-flex flex-row justify-content-center py-2">
                            <Link href="/log-in">
                                <Button className="btn">LogIn</Button>
                            </Link>
                            <Link href="/register">
                                <Button className="btn">Register</Button>
                            </Link>
                        </div>

                        <Label htmlFor="email" className="py-2 mt-2">
                            Username
                        </Label>
                        <Input
                            id="name"
                            type="text"
                            value={ name }
                            className="form-control rounded-4 py-2 mb-2"
                            required
                            autoFocus
                            autoComplete="off"
                            onChange={ (e) => setName(e.target.value) }
                        />

                        <Label htmlFor="email" className="py-2 mt-2">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            value={ email }
                            className="form-control rounded-4 py-2 mb-2"
                            required
                            onChange={ (e) => setEmail(e.target.value) }
                            placeholder="example@gmail.com"
                        />

                        <Label htmlFor="password" className="py-2 mt-2">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            value={ password }
                            className="form-control rounded-4 py-2 mb-2"
                            required
                            onChange={ (e) => setPassword(e.target.value) }
                        />

                        <Label htmlFor="password" className="py-2 mt-2">
                            Confirm Password
                        </Label>
                        <Input
                            id="passwordConfirmation"
                            type="password"
                            value={ password_confirmation }
                            className="form-control rounded-4 py-2 mb-2"
                            required
                            onChange={ (e) => setPasswordConfirmation(e.target.value) }
                        />
                        <div className="d-flex flex-column pt-2 pb-4 mt-4">
                            <Button className="btn btn-light rounded-4 py-2">Register</Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}