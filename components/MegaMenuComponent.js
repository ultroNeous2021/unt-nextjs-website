import { useState } from "react";
import styles from "@/styles/components/MegaMenuComponent.module.css";
import { Accordion, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import {
  LinksOfAllpages,
  NavbarMenuFirstColImageList,
  NavbarMenuList,
  TechnologiesAllData,
} from "utils/CONSTANT_DATA";
import Link from "next/link";
import Image from "next/image";

function MegaMenuComponent() {
  const [addClass, setAddClass] = useState(false); // change bars
  const [id, setId] = useState("0"); // sets id for navbar list hover
  const [imageHover, setImageHover] = useState(false); // make img hover change on text
  const [imageId, setImageId] = useState("");

  const menuFunction = () => {
    setAddClass(!addClass);
  };

  const onHoverHandler = (e) => {
    setId(e.target.id);
  };

  const imageHoverFunc = (e) => {
    setImageHover(true);
    setImageId(e.target.id);
  };

  const removeImageHoverFunc = () => {
    setImageId("");
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
            <Navbar.Brand>
              <Link href="/" style={{ color: "#fff" }}>
                <img src={"/assets/ultroneous-image.svg"} width={175} />
              </Link>
            </Navbar.Brand>
            <Nav class={styles.NavLinks}>
              <Nav className={styles.NavLink}>
                <Link href={LinksOfAllpages.mainPages.aboutUltroneous}>
                  About Us
                </Link>
              </Nav>
              <Nav className={styles.NavLink}>
                <Link href={LinksOfAllpages.services.servicesMain}>
                  Services
                </Link>
              </Nav>
              <Nav className={styles.NavLink}>
                <Link href={LinksOfAllpages.mainPages.careers}>Careers</Link>
              </Nav>
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
              <li
                className={styles.Services}
                id="2"
                onMouseEnter={onHoverHandler}
              >
                Technology
              </li>
              <li>Engagement Model</li>
              <li>Portfolio</li>
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
            <Link href={el.link} key={ind}>
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
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default MegaMenuComponent;
