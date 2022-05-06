import { useEffect, useState } from "react";
import styles from "@/styles/components/MegaMenuComponent.module.css";
import { Accordion, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import {
  LinksOfAllpages,
  NavbarMenuFirstColImageList,
  NavbarMenuList,
  TechnologiesAllData,
  uniqueLink,
} from "utils/CONSTANT_DATA";
import Link from "next/link";
import Image from "next/image";
import TransparentButton from "./TransparentButton";
import { useRouter } from "next/router";

function MegaMenuComponent() {
  const [addClass, setAddClass] = useState(false); // change bars
  const [id, setId] = useState("0"); // sets id for navbar list hover
  const [imageHover, setImageHover] = useState(false); // make img hover change on text
  const [imageId, setImageId] = useState("");
  const [colorChange, setColorchange] = useState("transparent");
  const [activeMenu, setActiveMenu] = useState(["Company"]);
  const router = useRouter();

  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorchange("#1A1112");
    } else {
      setColorchange("transparent");
    }
  };
  const menuFunction = () => {
    setAddClass(!addClass);
  };

  const onHoverHandler = (e) => {
    setId(e.target.id);
    setActiveMenu([]);
    setActiveMenu(e.target.innerHTML);
  };

  const imageHoverFunc = (e) => {
    setImageHover(true);
    setImageId(e.target.id);
  };

  const removeImageHoverFunc = () => {
    setImageId("");
  };
  const CheckActive = (value) => {
    if (activeMenu.includes(value)) {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => changeNavbarColor());
  });
  const serviceinner = [
    "/web-application-development",
    "/mobile-application-development",
    "/ux-ui-design",
    "/digital-marketing",
    "/web-application-development",
    "/mobile-application-development",
    "/ux-ui-design",
    "/digital-marketing",
    "/cloud-and-devops",
    "/front-end-development",
    "/ecommerce-development",
    "/enterprise-software-solutions",
  ];

  return (
    <>
      <Row
        className={styles.NavbarContainer}
        style={{ background: colorChange, transition: "all 0.8s ease" }}
      >
        <Navbar
          className={
            addClass
              ? `${styles.NavbarMain} ${styles.NavbarMainHide}`
              : `${styles.NavbarMain}`
          }
          bg="transparent"
        >
          <Container className={styles.Container}>
            <Navbar.Brand style={{ cursor: "pointer" }}>
              <Link href="/" style={{ color: "#fff" }}>
                <img
                  src={"/assets/ultroneous-image.svg"}
                  width={175}
                  className={styles.BrandLogo}
                />
              </Link>
            </Navbar.Brand>
            <div className={styles.NavUnique}>
              {uniqueLink.includes(router.pathname) ? null : (
                <Nav className={styles.NavLinks}>
                  <Nav className={styles.NavLink}>
                    <Link href={LinksOfAllpages.mainPages.aboutUltroneous}>
                      <a
                        href="/about-ultroneous"
                        style={
                          router.pathname == "/about-ultroneous"
                            ? { color: "#e49b00" }
                            : null
                        }
                      >
                        About Us
                      </a>
                    </Link>
                  </Nav>
                  <Nav className={styles.NavLink}>
                    <Link href={LinksOfAllpages.services.servicesMain}>
                      <a
                        href="/services"
                        style={
                          router.pathname == "/services" ||
                          serviceinner.includes(router.pathname)
                            ? { color: "#e49b00" }
                            : null
                        }
                      >
                        Services
                      </a>
                    </Link>
                  </Nav>
                  <Nav className={styles.NavLink}>
                    <Link href={LinksOfAllpages.mainPages.expertise}>
                      <a
                        href="/expertise"
                        style={
                          router.pathname == "/expertise"
                            ? { color: "#e49b00" }
                            : null
                        }
                      >
                        Expertise
                      </a>
                    </Link>
                  </Nav>
                  <Nav className={styles.NavLink}>
                    <Link href={LinksOfAllpages.mainPages.careers}>
                      <a
                        href="/careers"
                        style={
                          router.pathname == "/careers"
                            ? { color: "#e49b00" }
                            : null
                        }
                      >
                        Careers
                      </a>
                    </Link>
                  </Nav>
                  {/* <Nav className={styles.NavLink}>
                    <a href="https://blog.ultroneous.com/" target={"_blank"}>
                      Blog
                    </a>
                  </Nav> */}
                  <Nav id={styles.ContactUsBtn} className={styles.NavLink}>
                    <a href="/contact-us">
                      <TransparentButton
                        val={"Contact Us"}
                        link={"/contact-us"}
                      />
                    </a>
                  </Nav>
                </Nav>
              )}
            </div>
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
        <Row className={styles.overlaySpace}>
          <Col xs={12} sm={12} md={4} className={styles.NavbarColMiddle}>
            <ul>
              <li
                style={
                  CheckActive("Company") === true
                    ? {
                        color: "#e49b00",
                        borderRight: "0.5rem solid #e49b00",
                      }
                    : null
                }
                className={styles.Company}
                id="0"
                onClick={() => router.push("/about-ultroneous")}
                onMouseEnter={onHoverHandler}
              >
                Company
              </li>
              <li
                className={styles.Services}
                id="1"
                style={
                  CheckActive("Services") === true
                    ? { color: "#e49b00", borderRight: "0.5rem solid #e49b00" }
                    : null
                }
                onClick={() => router.push("/services")}
                onMouseEnter={onHoverHandler}
              >
                Services
              </li>
              <li
                className={styles.Services}
                id="2"
                style={
                  CheckActive("Technology") === true
                    ? { color: "#e49b00", borderRight: "0.5rem solid #e49b00" }
                    : null
                }
                onClick={() => router.push("/expertise")}
                onMouseEnter={onHoverHandler}
              >
                Expertise
              </li>
              {/* <li
                className={styles.Services}
                id="3"
                style={
                  CheckActive("Engagement Model") === true
                    ? { color: "#e49b00", borderRight: "0.5rem solid #e49b00" }
                    : null
                }
                onClick={() => router.push("/")}
                onMouseEnter={onHoverHandler}
              >
                Engagement Model
              </li> */}
              {/* <li
                className={styles.Services}
                id="3"
                style={
                  CheckActive("Portfolio") === true
                    ? { color: "#e49b00", borderRight: "0.5rem solid #e49b00" }
                    : null
                }
                onClick={() => router.push("/portfolio")}
                onMouseEnter={onHoverHandler}
              >
                Portfolio
              </li> */}
            </ul>
          </Col>
          <Col xs={12} sm={12} md={8} className={styles.NavbarColLast}>
            <div className={styles.LastColLinks}>
              <ul
                id="0"
                className={id === "0" ? styles.ShowPopup : styles.HidePopup}
              >
                {NavbarMenuList[0].Company.map((el, ind) => (
                  <li key={ind}>
                    <Link href={el.link}>{el.name}</Link>
                  </li>
                ))}
              </ul>
              <ul
                id="1"
                className={id === "1" ? styles.ShowPopup : styles.HidePopup}
              >
                {NavbarMenuList[1].Services.map((el, ind) => (
                  <li key={ind}>
                    <Link href={el.link}>{el.name}</Link>
                  </li>
                ))}
              </ul>
              <div className={id === "2" ? styles.ShowPopup : styles.HidePopup}>
                <Accordion
                  id="2"
                  className={`${styles.NavAccordion} AccordionNav`}
                  defaultActiveKey="0"
                >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header
                      className={`${styles.AccordionHeader} AccordionHeader`}
                    >
                      Front End
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className={`${styles.Accordionul}`}>
                        {TechnologiesAllData.frontend.map((el, ind) => (
                          <li className={`${styles.Accordionli}`}>
                            <Link href={el.link} key={ind}>
                              {el.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header
                      className={`${styles.AccordionHeader} AccordionHeader`}
                    >
                      Back End
                    </Accordion.Header>
                    <Accordion.Body>
                      {TechnologiesAllData.backend.map((el, ind) => (
                        <li className={`${styles.Accordionli}`}>
                          <Link href={el.link} key={ind}>
                            {el.name}
                          </Link>
                        </li>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header
                      className={`${styles.AccordionHeader} AccordionHeader`}
                    >
                      Mobile Application
                    </Accordion.Header>
                    <Accordion.Body>
                      {TechnologiesAllData.mobile.map((el, ind) => (
                        <li className={`${styles.Accordionli}`}>
                          <Link href={el.link} key={ind}>
                            {el.name}
                          </Link>
                        </li>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className={styles.LastColSocialMedia}>
              {LinksOfAllpages.socialMedia.map((el, ind) => (
                <div className={`${styles.IconsParent} SocialMediaParent`}>
                  <a href={el.link} target="_blank" rel="noreferrer">
                    {el.icon}
                  </a>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
      <div
        id="overlaytwo"
        className={addClass ? styles.ShowMenu : styles.HideMenuTwo}
      >
        <div className={styles.ImageDivParent}>
          {NavbarMenuFirstColImageList.map((el, ind) => (
            <Link href={el.link ? el.link : ""} key={ind} target="blank">
              <a target={el.new && el.link ? "_blank" : "_self"}>
                <div className={styles.ParentDivMain}>
                  <div className={styles.ImageDiv}>
                    <img src={el.image} className={styles.NavImage} />
                  </div>
                  <p
                    className={styles.ImageText}
                    onMouseEnter={imageHoverFunc}
                    onMouseLeave={removeImageHoverFunc}
                    id={ind}
                  >
                    {el.name}
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default MegaMenuComponent;
