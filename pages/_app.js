import '../styles/globals.css'
import Layout from '../components/Layout'
import { BasePrivider } from '../context/BaseContext'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <BasePrivider>
        <Component {...pageProps} />
      </BasePrivider>
    </Layout>
  )
}

export default MyApp
