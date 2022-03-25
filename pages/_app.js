import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Navbar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
