import styles from "../styles/Layout.module.css";
import Footer from "./Footer";

import Head from "next/head";
import Image from "next/image";

import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";

//TO:DO use shallow routing https://nextjs.org/docs/routing/shallow-routing

const tabs = [
  { order: 0, route: "/why-be-vegan", title: "Why be vegan" },
  { order: 1, route: "/tips-for-going-vegan", title: "Tips for going vegan" },
  {
    order: 2,
    route: "/vegan-things-for-pantry",
    title: "Stock up your pantry",
  },
  {
    order: 3,
    route: "/common-vegan-substitutes",
    title: "Common substitutes",
  },
  { order: 4, route: "/easy-vegan-recipes", title: "Easy recipes" },
];

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) setTargetReached(true);
    else setTargetReached(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) setTargetReached(true);

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

export default function Layout({ children }) {
  const router = useRouter();

  const [currentTab, setCurrentTab] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(true);

  const isMobileDevice = useMediaQuery(1200);

  useEffect(() => {
    var tab = tabs.find((x) => x.route === router.pathname);
    if (tab) {
      setCurrentTab(tab.order);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      {/* <div className={styles.header} /> */}
      <div className={styles.siteGrid}>
        <div className={styles.topNav}>
          <h1 className={styles.headerText}>Vegan Starter Guide</h1>

          <div className={styles.tabs}>
            {isNavOpen || !isMobileDevice
              ? tabs.map((tab) => {
                  return (
                    <a
                      key={tab.order}
                      className={tab.order === currentTab ? styles.active : ""}
                      onClick={() => {
                        setCurrentTab(tab.order);
                        router.push(tab.route, undefined, { shallow: true });
                      }}
                    >
                      {tab.title}
                    </a>
                  );
                })
              : null}
          </div>
          <a
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
            className={styles.icon}
          >
            <Image
              src="/hamburger.png"
              alt="Hamburger menu"
              width="23px"
              height="23px"
            />
          </a>
        </div>

        <div className={styles.mainContainer}>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
