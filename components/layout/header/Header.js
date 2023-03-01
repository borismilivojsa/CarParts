import Search from '@/components/layout/header/Search'
import Image from 'next/image'
import Link from 'next/link'
import useAuth from '@/lib/useAuth'


export default function Header() {
    const {user} = useAuth()
    const {logout} = useAuth()

    return (
        <div className="d-flex flex-row border-bottom">
            <div className="flex-column align-items-center w-100">
                <div className="border-bottom">
                    <div className="container d-flex flex-row justify-content-between my-2">
                        <div>
                            <Link href={ '/about-us' }>
                                <button className="btn" type="button">
                                    About us
                                </button>
                            </Link>
                            <Link href={ '/profile' }>
                                <button className="btn" type="button">
                                    My profile
                                </button>
                            </Link>
                            <Link href={ '/orders' }>
                                <button className="btn" type="button">
                                    Orders
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Link href={ '/contact' }>
                                <button className="btn" type="button">
                                    Contact us
                                </button>
                            </Link>
                        </div>
                        <div>
                            { user ?
                                  <button onClick={logout} className="btn" type="button">
                                      Log Out
                                  </button>
                                   :
                              <div>
                                  <Link href={ '/log-in' }>
                                      <button className="btn" type="button">
                                          Log In
                                      </button>
                                  </Link>
                                  <Link href={ '/register' }>
                                      <button className="btn" type="button">
                                          Register
                                      </button>
                                  </Link>
                              </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="mt-4 mb-2">
                    <div className="container d-flex flex-column">
                        <div className="d-flex flex-row justify-content-between">
                            <div className="justify-content-start">
                                <Link href={ '/' }>
                                    <Image
                                        src="/static/img.jpg"
                                        alt=""
                                        width="150"
                                        height="100"
                                    />
                                </Link>
                            </div>
                            <div className="d-flex flex-row justify-content-center w-50 me-5 pe-5">
                                <Search/>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                                <Link href={'/selected-parts'}>
                                    <button className="btn btn-light">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                        >
                                            <path
                                                strokeLinecap="round" strokeLinejoin="round"
                                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                            />
                                        </svg>
                                        <span
                                            className="absolute badge rounded-5 bg-danger"
                                        >
                                            {/*  {} vrijednost izabranih stvari   */ }
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                                <Link href={ '/parts' }>
                                    <button className="btn" type="button">
                                        Parts
                                    </button>
                                </Link>
                                <Link href={ '/manufacturers' }>
                                    <button className="btn" type="button">
                                        Manufacturers
                                    </button>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}