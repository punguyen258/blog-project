import { AppProps } from 'next/dist/next-server/lib/router/router';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
