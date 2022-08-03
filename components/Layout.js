/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";

import styles from "@/styles/Layout.module.css";
import Footer from "./Footer";
import NavbarMain from "./NavbarMain";
import MegaMenuComponent from "./MegaMenuComponent";
import { getCookie, setCookie } from "cookies-next";
import { ListOfCookies } from "utils/DataList/listOfData";
import { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import { MdOutlineClose } from "react-icons/md";
import ButtonComponent from "./ButtonComponent";
import Link from "next/link";
import Script from "next/script";
import { forallschema } from "utils/schemas";

export default function Layout({
  title,
  keywords,
  description,
  children,
  uniqueMeta,
  schema,
}) {
  const [cookieModel, setCookieModel] = useState(false);
  useEffect(() => {
    if (getCookie("userentry") === true) {
      setCookieModel(false);
    } else {
      setCookieModel(true);
    }
  }, []);

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

        {uniqueMeta ? uniqueMeta : null}
        {!uniqueMeta ? <meta name="robots" content="index, follow" /> : null}
        <link rel="shortcut icon" href="/static/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(forallschema) }}
        ></script>
        {schema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          ></script>
        ) : null}
      </Head>
      <div
        className={`${styles.CookieContainer} ${
          cookieModel ? `fade-in-left-anim` : ``
        }`}
        style={!cookieModel ? { display: "none" } : null}
      >
        <p>
          We use cookies to improve user experience and analyze website traffic.
          By clicking “Accept“, you agree to our website's cookie use as
          described in our Cookie Policy.
        </p>
        <div className={styles.ButtonContainer}>
          <div
            className={styles.ButtonCookie}
            onClick={() => {
              setCookie("userentry", true, {
                maxAge: 365 * 24 * 60 * 60,
              }),
                setCookieModel(false);
            }}
          >
            Accept
          </div>
          <Link href={"/privacy-policy"}>
            <div className={styles.ButtonCookie}>Privacy Policy</div>
          </Link>
        </div>
      </div>
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
