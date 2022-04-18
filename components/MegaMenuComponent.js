import { useState } from "react";
import styles from "@/styles/components/MegaMenuComponent.module.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

function MegaMenuComponent() {
  const [addClass, setAddClass] = useState(false);
  const [id, setId] = useState("0");

  const menuFunction = () => {
    setAddClass(!addClass);
  };

  const onHoverHandler = (e) => {
    setId(e.target.id);
  };

  return (
    <>
      <Row className={styles.NavbarContainer}>
        <Navbar
          className={
            addClass
              ? `${styles.NavbarMain} ${styles.NavbarMainHide}`
              : `${styles.NavbarMain}`
          }
          bg="transparent"
        >
          <Container className={styles.Container}>
            <Navbar.Brand href="#home" style={{ color: "#fff" }}>
              React-Bootstrap
            </Navbar.Brand>
            <Nav class="NavLinks">
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Careers</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div htmlFor="Checkbox" className={styles.MenuMain}>
          <div className={styles.MenuContainer}>
            <input type="checkbox" id="Checkbox" />
            <label
              className={addClass ? styles.LabelLines : styles.Label}
              onClick={menuFunction}
            >
              <div className={`${styles.Bars} ${styles.LineOne}`}></div>
              <div className={`${styles.Bars} ${styles.LineTwo}`}></div>
              <div className={`${styles.Bars} ${styles.LineThree}`}></div>
            </label>
          </div>
        </div>
      </Row>
      <div
        id="overlay"
        className={addClass ? styles.ShowMenu : styles.HideMenuOne}
      >
        <Row>
          <Col xs={12} sm={12} md={4} className={styles.NavbarColMiddle}>
            <ul>
              <li
                className={styles.Company}
                id="0"
                onMouseEnter={onHoverHandler}
              >
                Company
              </li>
              <li
                className={styles.Services}
                id="1"
                onMouseEnter={onHoverHandler}
              >
                Services
              </li>
              <li>Technology </li>
              <li>Engagement Model</li>
              <li>Portfolio</li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={8} className={styles.NavbarColLast}>
            <ul
              id="0"
              className={id === "0" ? styles.ShowPopup : styles.HidePopup}
            >
              <li> About Us </li>
              <li> Career </li>
              <li> Meet our Team </li>
            </ul>
            <ul
              id="1"
              className={id === "1" ? styles.ShowPopup : styles.HidePopup}
            >
              <li> Front End Development </li>
              <li> Web App Development </li>
              <li>Mobile Application Development</li>
              <li>UX/ UI Design </li>
              <li>Cloud & Devops</li>
              <li>eCommerce Development</li>
              <li>Enterprise Software Solutions</li>
              <li>Digital Marketing</li>
            </ul>
          </Col>
        </Row>
      </div>
      <div
        id="overlaytwo"
        className={addClass ? styles.ShowMenu : styles.HideMenuTwo}
      >
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </div>
    </>
  );
}

export default MegaMenuComponent;
