import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7977963803436655"
          crossorigin="anonymous"
        ></script>
        <title lang="en-gb">Vegan Starter Guide</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Tips to start your vegan journey. Includes what to stock up in your pantry and easy vegan recipes"
        />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="keywords"
          content="vegan, vegan starter guide, vegan recipes, healthy recipes, plant based, healthy living, eat well, save our planet"
        />
        <meta name="author" content="Shreya Rijal"></meta>
      </Head>
      <div className={styles.header}>
        <h1 className={styles.headerText}>Vegan Starter Guide</h1>
      </div>
      <div className={styles.mainContainer}>
        <button
          className={styles.navButton}
          onClick={() => router.push("/why-be-vegan")}
        >
          Why be vegan
        </button>
        <button onClick={() => router.push("/tips-for-going-vegan")}>
          Tips
        </button>
        <button onClick={() => router.push("/vegan-things-for-pantry")}>
          Stock up your pantry
        </button>
        <button onClick={() => router.push("/common-vegan-substitutes")}>
          Common substitutes
        </button>
        <button onClick={() => router.push("/easy-vegan-recipes")}>
          Easy recipes
        </button>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
