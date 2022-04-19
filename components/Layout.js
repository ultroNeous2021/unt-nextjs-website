/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";

import styles from "@/styles/Layout.module.css";
import Footer from "./Footer";
import NavbarMain from "./NavbarMain";
import MegaMenuComponent from "./MegaMenuComponent";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="shortcut icon" href="/static/favicon.svg" />
      </Head>
      <NavbarMain />
      {/* <MegaMenuComponent /> */}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title:
    "Best Mobile & Web App Development Company in USA/India | ultroNeous Technologies",
  description:
    "ultroNeous Technologies is a top web app development company in USA & India, which also provides solutions for mobile app development and software development and cost-effective pricing.",
  keywords:
    "Mobile app development company, Web app development, Mobile and web app development company, software development",
};
