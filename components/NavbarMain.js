import TransparentButton from "@/components/TransparentButton";
import styles from "@/styles/NavbarMain.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

import { GrFacebookOption } from "react-icons/gr";
import { uniqueLink } from "utils/CONSTANT_DATA";

function NavbarMain() {
  const [colorChange, setColorchange] = useState("transparent");
  const [changeDropdown, setChangeDropdown] = useState(true);

  const router = useRouter();
  const serviceinner = [
    "/web-application-development",
    "/mobile-application-development",
    "/ux-ui-design",
    "/digital-marketing",
  ];
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorchange("#1A1112");
    } else {
      setColorchange("transparent");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => changeNavbarColor());
    // console.log(router.pathname);
  });

  return (
    <>
      <div
        className={styles.Navbar}
        style={{ background: colorChange, transition: "all 0.8s ease" }}
      >
        <div className={styles.NavbarBrand}>
          <Link href="/">
            <Image
              src="/assets/ultroneous-image.svg"
              alt="ultroneous-image"
              className="navbar-brand-images"
              width={175}
              height={50}
            />
          </Link>
        </div>
        {uniqueLink.includes(router.pathname) ? null : (
          <div className={styles.Links}>
            <Link href="/about-ultroneous">
              <p
                style={
                  router.pathname == "/about-ultroneous"
                    ? { color: "#e49b00" }
                    : null
                }
              >
                About Us
              </p>
            </Link>
            <Link href="/services">
              <p
                style={
                  router.pathname == "/services" ||
                  serviceinner.includes(router.pathname)
                    ? { color: "#e49b00" }
                    : null
                }
              >
                Services
              </p>
            </Link>
            <Link href="/careers">
              <p
                style={
                  router.pathname == "/careers" ? { color: "#e49b00" } : null
                }
              >
                Careers
              </p>
            </Link>
            <span style={{ margin: "0 2.2rem 0 1rem" }}>
              <TransparentButton val={"Contact Us"} link={"/contact-us"} />
            </span>
          </div>
        )}
        <input type="checkbox" id="checkboxNav" className={styles.checkBox} />
        <label id="Bars" htmlFor="checkboxNav">
          <span className={`${styles.LineOne} LineOne`}></span>
          <span className={`${styles.LineTwo} LineTwo`}></span>
          <span className={`${styles.LineThree} LineThree`}></span>
        </label>
        <div className={`${styles.SideBarNav} SideBar`}>
          <div className={styles.ListOfMenuContainer}>
            <div
              className={`${styles.dropdown} ${styles.DropdownTitle} ${styles.dropdownone}`}
              style={
                changeDropdown
                  ? { opacity: "1", transition: "all 0.5s ease" }
                  : { opacity: "0", transition: "all 0.5s ease" }
              }
            >
              Company
              <ul className={`${styles.dropdownmenu} `}>
                <li>
                  <Link href="/about-ultroneous">About Us</Link>
                </li>
                <li>
                  <Link href="/careers">Career</Link>
                </li>
                <li>
                  <Link href="/meet-our-team">Meet our Team</Link>
                </li>
              </ul>
            </div>
            <div
              className={`${styles.dropdown} ${styles.DropdownTitle} ${styles.dropdowntwo}`}
              onMouseEnter={() => setChangeDropdown(false)}
              onMouseLeave={() => setChangeDropdown(true)}
            >
              Services
              <ul className={`${styles.dropdownmenu} `}>
                <li>
                  <Link href="/web-application-development">
                    Web Application Development
                  </Link>
                </li>
                <li>
                  <Link href="/mobile-application-development">
                    Mobile Application Development
                  </Link>
                </li>
                <li>
                  <Link href="/ux-ui-design">UX / UI Design</Link>
                </li>
                <li>
                  <Link href="/digital-marketing">Digital Marketing</Link>
                </li>
              </ul>
            </div>
            <div className={`${styles.DropdownLinks} ${styles.DropdownTitle}`}>
              <Link href="/contact-us">Contact Us</Link>
            </div>
          </div>
          <div className={styles.SocialLinksContainer}>
            <div className={styles.SocialLinks}>
              <span className={styles.IconsBorder}>
                <a
                  href="https://www.facebook.com/ultroneous.technologies"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrFacebookOption size={25} className={styles.Icon} />
                </a>
              </span>
              <span className={styles.IconsBorder}>
                <a
                  href="https://twitter.com/ultroneousTech"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsTwitter size={25} className={styles.Icon} />
                </a>
              </span>
              <span className={styles.IconsBorder}>
                <a
                  href="https://www.instagram.com/ultroneous.technologies/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram size={25} className={styles.Icon} />
                </a>
              </span>
              <span className={styles.IconsBorder}>
                <a
                  href="https://www.linkedin.com/company/ultroneous"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn size={25} className={styles.Icon} />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarMain;
