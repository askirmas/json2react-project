import styles from './index.css'
import Link from 'next/link'
import pages from '../pages.json'
export default function Layout({children}) {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.wrapper}>{
          Object.entries(pages)
          .map(([uri, title]) =>
            <div className={styles.menu}>
              <Link as={`/${uri}`} href={`/?json=${uri}`}>
                <a>{title}</a>
              </Link>
            </div>
          )
        }</div>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}