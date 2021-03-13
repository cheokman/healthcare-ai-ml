import Head from 'next/head';
import styles from '../styles/Home.module.css';
import OverviewPage from '../views/OverviewPage';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Care Provider</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100&display=swap'
          rel='stylesheet'
        />
      </Head>

      <main className={styles.main}>
        <OverviewPage />
      </main>
    </div>
  );
}
