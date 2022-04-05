import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import styles from "@/styles/components/ChooseAsPerYourNeed.module.css";
import Link from "next/link";
import YellowFilledWhiteButton from "./YellowFilledWhiteButton";
import { ChooseAsPerYourNeedData } from "utils/CONSTANT_DATA";
function ChooseAsPerYourNeed({ ChooseAsPerNeedContainerProps }) {
  return (
    <div className={styles.ChooseAsPerNeedContainer}>
      <h1 className={styles.Paddingforneed}> Choose as per your need! </h1>
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey={ChooseAsPerYourNeedData[0].title}
      >
        <Row className={styles.ChooseAsPerNeedRow}>
          <Col className={styles.ChooseAsPerNeedCol} sm={12} md={3}>
            {ChooseAsPerYourNeedData.map((el, ind) => (
              <Nav
                className={[styles.ChooseAsPerNeedTab, styles.flexcolumn]}
                variant="pills"
                key={ind}
              >
                <Nav.Item>
                  <Nav.Link eventKey={el.title}>
                    <p className={styles.ChooseTabText}>{el.title}</p>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            ))}
          </Col>
          <Col sm={12} md={9} className={styles.ChooseTabRight}>
            <Tab.Content>
              {ChooseAsPerYourNeedData.map((el, ind) => (
                <Tab.Pane eventKey={el.title} key={ind}>
                  <h1 className={styles.ChooseTabRightHead}>{el.mainTitle} </h1>
                  <p>{el.details}</p>
                  <Row className={styles.HireATeamImage}>
                    <img src={el.image} alt="hire-a-team" />
                  </Row>
                  <Link href="/contact-us">
                    <YellowFilledWhiteButton
                      style={{ marginTop: "5em" }}
                      val={el.title}
                      arrow
                    />
                  </Link>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default ChooseAsPerYourNeed;
