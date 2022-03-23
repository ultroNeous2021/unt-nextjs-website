import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import styles from "@/styles/components/Navbar.module.css";
import TransparentButton from "./TransparentButton";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

function NavbarComponent() {
  const [colorChange, setColorchange] = useState("#1B141433");
  const [show, setShow] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);
  const changeNavbarColor = () => {
    if (navExpanded) {
      setNavExpanded(false);
    }
    if (window.scrollY >= 50) {
      setColorchange("#1A1112");
    } else {
      setColorchange("#1B141433");
    }
  };

  const showDropdown = (e) => {
    setShow(!show);
  };

  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <Navbar
      onToggle={() =>
        navExpanded ? setNavExpanded(false) : setNavExpanded(true)
      }
      style={{ background: colorChange, transition: "0.8s" }}
      expanded={navExpanded}
      fixed="top"
      className={styles.NavbarUltroneous}
    >
      <Container fluid className="p-0">
        <Navbar.Brand className={styles.NavbarBrand}>
          <Link href="/">
            <Image
              src="/assets/ultroneous-image.svg"
              alt="ultroneous-image"
              className="navbar-brand-images"
              width={200}
              height={50}
            />
          </Link>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
          <div className={styles.ToggleMenu}></div>
        </Navbar.Toggle> */}
        <Navbar id="basic-navbar-nav" className={styles.NavbarItems}>
          <Nav>
            <Nav.Link
              className={styles.NavSingleItem}
              style={{ margin: "0 1em" }}
            >
              <Link href="/about-ultroneous">About us</Link>
            </Nav.Link>
            <Nav.Link
              className={styles.NavSingleItem}
              style={{ margin: "0 1em" }}
            >
              <Link href="/services">Services</Link>
            </Nav.Link>
            <Nav.Link
              className={styles.NavSingleItem}
              style={{ margin: "0 1em" }}
            >
              <Link href="/careers">Career</Link>
            </Nav.Link>
            <div className={styles.ContactUsButton}>
              <TransparentButton val={"Contact Us"} link={"/contact-us"} />
            </div>
          </Nav>
        </Navbar>
      </Container>
      <div
        className={styles.ToggleMenu}
        onClick={() => setNavExpanded(!navExpanded)}
      >
        {!navExpanded ? (
          <BiMenuAltRight
            className={styles.NavbarIcons}
            style={{ fontSize: "200%" }}
          />
        ) : (
          <IoClose
            className={styles.NavbarIcons}
            style={{ fontSize: "180%" }}
          />
        )}
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
