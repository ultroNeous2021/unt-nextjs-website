import React, { useRef } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import styles from "@/styles/components/HorizontalTabService.module.css";
// import TechImage from "../../assets/images/tech-image.jpg";
import HireButton from "./HireButton";
import Link from "next/link";

function HorizontalTabService(props) {
  const hireDeveloper = useRef(null);

  const clickHandler = () => {
    hireDeveloper.current.click();
  };

  return (
    <>
      {/* <Link href="#" style={{ display: "none" }} ref={hireDeveloper}></Link> */}
      <div className={styles.HorizontalTabContainer}>
        <h2 className={styles.TabHeading}>{props.heading}</h2>
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
                      clickHandler={clickHandler}
                      val={`Hire ${el.title} Developer`}
                      style={{ marginTop: "2em" }}
                      onclick
                    />
                  ) : null}
                </Col>
                <Col xs={12} sm={12} md={6} className={styles.TechImageRow}>
                  <img
                    className={styles.TechImage}
                    src={"/assets/tech-image.jpg"}
                    alt="tech-image"
                  />
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
