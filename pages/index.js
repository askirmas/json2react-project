import styles from './index.css';
import Link from 'next/link';

export default function Index() {
    return (
        <div className={styles.home}>
            <div className={styles.center}>
                <div className={styles.company}>Vijay Consulting Services</div>
                <Link href="/services">
                  <button className={styles.button}>View our services</button>
                </Link>
                <p className={styles.offering}>
                    We offer custom application development using React
                    framework
                </p>
            </div>
        </div>
    );
}