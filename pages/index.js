import { withRouter } from 'next/router';
import Layout from '../layout';
import renderJson from '../components/utils/renderJson'

function Service({content}) {
  return <Layout>{content}</Layout>
}

Service.getInitialProps = function({query: {json = 'home'}}) {
  let content = require(`./${json}.json`)
  try {
    content = require(`./${json}`).default(content)
  } catch(e) {}
  return { content: renderJson(content) }
}

export default withRouter(Service)