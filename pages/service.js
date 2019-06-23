import { withRouter } from 'next/router';
import Layout from '../layout';
import renderJson from '../components/utils/renderJson'

function Service({content}) {
  return <Layout>{content}</Layout>
}

Service.getInitialProps = function({query: {json}}) {
  return { content: renderJson(require(`./services/${json}.json`)) }
}

export default withRouter(Service)