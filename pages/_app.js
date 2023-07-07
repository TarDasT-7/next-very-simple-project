import NavbarComponent from '../components/header/Navbar.component'
import WebSiteLayout from '../layouts/WebSiteLayout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavbarComponent />
      <WebSiteLayout>
        <Component {...pageProps} />
      </WebSiteLayout>
    </>
  )
}

export default MyApp
