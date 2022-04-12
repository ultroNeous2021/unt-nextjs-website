import TransparentButton from "@/components/TransparentButton";
import styles from "@/styles/nav.module.css";
import Image from "next/image";
import Link from "next/link";
import { Nav, Navbar } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";

function nav() {
  return (
    <>
      <div className={styles.Navbar}>
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
          <Link href="/careers">
            <p>Careers</p>
          </Link>
          <Link href="/careers">
            <p>Careers</p>
          </Link>
          <Link href="/careers">
            <p>Careers</p>
          </Link>
          <Link href="/careers">
            <p>Careers</p>
          </Link>
          <Link href="/careers">
            <p>Careers</p>
          </Link>
        </div>
      </div>
      <input type="checkbox" id="checkboxNav" className={styles.checkBox} />
      <label id="Bars" htmlFor="checkboxNav">
        <span className={`${styles.LineOne} LineOne`}></span>
        <span className={`${styles.LineTwo} LineTwo`}></span>
        <span className={`${styles.LineThree} LineThree`}></span>
      </label>
      <div className={`${styles.SideBarNav} SideBar`}>
        <ul>
          <li className={`${styles.Nav1}Sidebar1`}>SideBar1</li>
          <li className={`${styles.Nav1}Sidebar1`}>SideBar2</li>
          <li className={`${styles.Nav1}Sidebar1`}>SideBar3</li>
          <li className={`${styles.Nav1}Sidebar1`}>SideBar4</li>
          <li className={`${styles.Nav1}Sidebar1`}>SideBar5</li>
        </ul>
      </div>
    </>
  );
}

export default nav;
