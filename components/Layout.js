/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";

import styles from "@/styles/Layout.module.css";
import Footer from "./Footer";
import NavbarMain from "./NavbarMain";
import MegaMenuComponent from "./MegaMenuComponent";

export default function Layout({ title, keywords, description, children }) {
  // <script
  //         type="application/ld+json"
  //         dangerouslySetInnerHTML={`__html: {
  //           "@context": "https://schema.org/",
  //           "@type": "Organization",
  //           name: "ultroNeous Technologies",
  //           url: "https://ultroneous.com/",
  //           logo: {
  //             "@type": "ImageObject",
  //             url: "https://ultroneous.com/assets/ultroneous-image.svg",
  //           },
  //           email: "hello@ultroneous.com",
  //           telephone: "1-234-253-4040",
  //           sameAs: [
  //             "https://www.linkedin.com/company/ultroneous",
  //             "https://www.instagram.com/ultroneous.technologies/",
  //             "https://twitter.com/ultroneousTech",
  //             "https://www.facebook.com/ultroneous.technologies",
  //           ],
  //         }`}
  //       ></script>

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
          key="ultroneous-key-description"
        />
        <meta
          name="keywords"
          content={keywords}
          key="ultroneous-key-keywords"
        />

        <link rel="shortcut icon" href="/static/favicon.svg" />
      </Head>
      {/* <NavbarMain /> */}
      <MegaMenuComponent />
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
  keywords: "",
};
