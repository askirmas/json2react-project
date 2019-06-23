/*global window*/
import { withRouter } from 'next/router';
import Layout from '../layout';
import renderJson from '../components/utils/renderJson'
import Head from 'next/head'

const homePage = Object.keys(require('../pages.json'))[0]

function Service({content, redirect}) {
  if (redirect)
    return <Head>
      <meta http-equiv="Refresh" content={`0; url=./${homePage}/`}/>
    </Head>
  return <Layout>{content}</Layout>
}

Service.getInitialProps = function({query: {json, redirect}}) {
  if (redirect)
    return {redirect}
  let content = require(`./${json}.json`)
  try {
    content = require(`./${json}`).default(content)
  } catch(e) {}
  return { content: renderJson(content) }
}

export default withRouter(Service)