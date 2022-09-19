import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SessionProvider } from 'next-auth/react'


function MyApp({ Component, pageProps }: AppProps) {
  return (<div><Header/> <SessionProvider session={pageProps.session}><Component  {...pageProps} /></SessionProvider><Footer/></div>)
}

export default MyApp
