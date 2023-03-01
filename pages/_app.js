import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/car-parts.css'
import { RecoilRoot } from 'recoil'
import Layout from '@/components/layout/Layout'
import useAuth from '@/lib/useAuth'

export default function App({Component, pageProps}) {
    const {user} = useAuth({middleware:'guest'})

  return (
      <RecoilRoot>
        <Layout>
          <Component { ...pageProps } />
        </Layout>
      </RecoilRoot>
  )
}