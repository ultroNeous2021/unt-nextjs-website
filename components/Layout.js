/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "@/styles/Layout.module.css";
import NavbarComponent from "./Navbar";
import Footer from "./Footer";
import Script from "next/script";
import Link from "next/link";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link
          rel="stylesheet"
          href="https://code.jquery.com/mobile/1.4.4/jquery.mobile-1.4.4.min.css"
        ></link>

        <Script src="https://code.jquery.com/jquery-1.11.1.min.js" />
        <Script src="https://code.jquery.com/mobile/1.4.4/jquery.mobile-1.4.4.min.js" />
        <Script
          type="module"
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"
        />
        <Script
          type="module"
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js"
        />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.5/utils/Draggable.min.js" />
      </Head>

      <NavbarComponent />
      <div className={styles.container}>{children}</div>
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
