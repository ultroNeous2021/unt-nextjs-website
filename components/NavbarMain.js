import TransparentButton from "@/components/TransparentButton";
import styles from "@/styles/nav.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";

function NavbarMain() {
  const [colorChange, setColorchange] = useState("transparent");

  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorchange("#1A1112");
    } else {
      setColorchange("transparent");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => changeNavbarColor());
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
              width={200}
              height={50}
            />
          </Link>
        </div>
        <div className={styles.Links}>
          <Link href="/about-ultroneous">
            <p>About Us</p>
          </Link>
          <Link href="/services">
            <p>Services</p>
          </Link>
          <Link href="/careers">
            <p>Careers</p>
          </Link>
          <TransparentButton val={"Contact Us"} link={"/contact-us"} />
        </div>
        <input type="checkbox" id="checkboxNav" className={styles.checkBox} />
        <label id="Bars" htmlFor="checkboxNav">
          <span className={`${styles.LineOne} LineOne`}></span>
          <span className={`${styles.LineTwo} LineTwo`}></span>
          <span className={`${styles.LineThree} LineThree`}></span>
        </label>
        <div className={`${styles.SideBarNav} SideBar`}>
          <div className={`${styles.dropdown} ${styles.DropdownTitle}`}>
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
                <Link href="/digital-marketing">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/ux-ui-design">UX / UI Design</Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.DropdownLinks} ${styles.DropdownTitle}`}>
            <Link href="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarMain;
