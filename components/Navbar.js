import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
  Dropdown,
} from "react-bootstrap";
import styles from "@/styles/components/Navbar.module.css";
import TransparentButton from "./TransparentButton";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function NavbarComponent() {
  const [colorChange, setColorchange] = useState("#1B141433");
  const [show, setShow] = useState(false);
  const [showSiderbar, setshowSiderbar] = useState(false);
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
  useEffect(() => {
    window.addEventListener("scroll", () => changeNavbarColor());
  });

  return (
    <>
      <Offcanvas
        show={showSiderbar}
        onHide={() => setshowSiderbar(false)}
        placement="end"
        className={styles.offcanvasMain}
      >
        <Offcanvas.Header className={styles.offcanvasHeader}>
          {/* {/ <Offcanvas.Title>Offcanvas</Offcanvas.Title > /} */}
          <div
            className={styles.closeButton}
            onClick={() => setshowSiderbar(false)}
          >
            <div className={styles.closeButtonContain}>
              <IoClose style={{ color: "#fff", fontSize: "40px" }} />
            </div>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles.Offcanvas}>
          <div className={styles.Megamenu}>
            <div className={styles.dropdown}>
              <span className={styles.dropdownHead}>Company</span>
              <div className={styles.dropdownContent}>
                <p>
                  <Link href="/about-ultroneous">About us</Link>
                </p>
                <p>
                  <Link href="/careers">Career</Link>
                </p>
                <p>
                  <Link href="">Meet our team</Link>
                </p>
              </div>
            </div>
            <li className={styles.menu}>
              <Link href="/services">Services</Link>
            </li>
            <li className={styles.menu}>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </div>
          <div className={styles.Sociallink}>
            <FaFacebookF className={styles.Facebook} />
            <FaTwitter className={styles.Twitter} />
            <FaInstagram className={styles.Instagram} />
            <FaLinkedinIn className={styles.Linkedin} />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/*  */}
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
              <div>
                <Nav.Link
                  className={styles.NavSingleItem}
                  style={{ margin: "0 1em" }}
                >
                  <Link href="/services">Services</Link>
                </Nav.Link>
              </div>
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
          onClick={() => {
            setNavExpanded(!navExpanded);
            setshowSiderbar(!showSiderbar);
          }}
        >
          <BiMenuAltRight
            className={styles.NavbarIcons}
            style={{ fontSize: "350%" }}
          />
        </div>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
