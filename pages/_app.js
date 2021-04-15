import '../styles/globals.css'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
import 'leaflet/dist/leaflet.css';
import { Provider } from 'next-auth/client'


function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
  <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
