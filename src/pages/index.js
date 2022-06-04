import Head from "next/head";
import HelloWorld from "../components/hello";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hello Italo</title>
      </Head>

      <main className={styles.main}>
        <HelloWorld />
      </main>
    </div>
  );
}
