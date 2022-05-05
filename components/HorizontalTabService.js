import React, { useEffect, useRef } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import styles from "@/styles/components/HorizontalTabService.module.css";
// import TechImage from "../../assets/images/tech-image.jpg";
import HireButton from "./HireButton";
import Link from "next/link";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";

function HorizontalTabService(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  const hireDeveloper = useRef(null);
  const goto = useRouter();

  return (
    <>
      {/* <Link href="#" style={{ display: "none" }} ref={hireDeveloper}></Link> */}
      <div className={styles.HorizontalTabContainer}>
        <h2
          className={`${styles.TabHeading} TabHeadingService`}
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          {props.heading}
        </h2>
        <Tabs
          defaultActiveKey={props.Technology[0].title}
          id="uncontrolled-tab-example"
        >
          {props.Technology.map((el, ind) => (
            <Tab
              tabClassName={styles.TechTabHead}
              eventKey={el.title}
              title={el.title}
              key={ind}
            >
              <Row className={styles.TechMainRow}>
                <Col xs={12} sm={12} md={6}>
                  <Row className={styles.TechImagesRow}>
                    {el.techIcons.map((el) => el)}
                  </Row>
                  <h3 className={styles.TechTitle}>
                    {el.title} {props.development ? "development" : ""}
                  </h3>
                  <p>{el.detail}</p>
                  {props.hireButton ? (
                    <HireButton
                      val={`Hire ${el.title} Developer`}
                      style={{ marginTop: "2em" }}
                      onclick
                      link={"/contact-us"}
                    />
                  ) : null}
                </Col>
                <Col xs={12} sm={12} md={6} className={styles.TechImageRow}>
                  <div className={styles.TechImageRowCover}>
                    <img
                      className={styles.TechImage}
                      src={"/assets/tech-image.jpg"}
                      alt="tech-image"
                    />
                  </div>
                </Col>
              </Row>
            </Tab>
          ))}
        </Tabs>
      </div>
    </>
  );
}

export default HorizontalTabService;
