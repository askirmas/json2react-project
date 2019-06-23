import Layout from '../layout'
import Link from 'next/link'

export default function Services() {
  return (
      <Layout>
<ul /*className={styles.services}*/>
    <li>
        <Link as="/services/first" href="/service?json=first">
            <a>First</a>
        </Link>
    </li>
    <li>
        <Link as="/services/second" href="/service?json=second">
            <a>Second</a>
        </Link>
    </li>
</ul>
      </Layout>
  )
}
