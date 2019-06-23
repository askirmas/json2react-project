/*global window*/
import { withRouter } from 'next/router';
import Layout from '../layout';
import renderJson from '../components/utils/renderJson'
import Head from 'next/head'

function Service({page, redirect}) {
  if (redirect)
    return <Head>
      <meta http-equiv="Refresh" content={`0; url=./${page}/`}/>
    </Head>
  return <Layout>{page}</Layout>
}

Service.getInitialProps = function({query: {json, redirect}}) {
  if (redirect)
    return {redirect, page: json}
  let content = require(`./${json}.json`)
  try {
    content = require(`./${json}`).default(content)
  } catch(e) {}
  return { page: renderJson(content) }
}

export default withRouter(Service)