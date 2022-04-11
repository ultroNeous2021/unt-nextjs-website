/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "@/styles/Layout.module.css";
import NavbarComponent from "./Navbar";
import Footer from "./Footer";
import Script from "next/script";
import Link from "next/link";
import MegaMenuComponent from "./MegaMenuComponent";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <NavbarComponent />
      <div className={styles.container}>{children}</div>
      {/* <MegaMenuComponent> */}
      {/* </MegaMenuComponent> */}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title:
    "Best mobile & web app development company in USA/India | ultroNeous Technologies",
  description:
    "ultroNeous Technologies is a top web app development company in USA & India, which also provides solutions for mobile app development and software development and cost-effective pricing.",
  keywords:
    "Mobile app development company, Web app development, Mobile and web app development company, software development   ",
};
