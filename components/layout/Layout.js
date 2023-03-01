import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/Footer'
import Head from 'next/head'


export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>Car-Parts</title>
            </Head>
            <Header />
            <div className="container">
                {children}
            </div>
            <Footer />
        </>
    )
}
