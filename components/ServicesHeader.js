import React from "react";
import { Col, Image, Row } from "react-bootstrap";

import YellowFilledWhiteButton from "./YellowFilledWhiteButton";
import styles from "@/styles/components/ServicesHeader.module.css";
import Link from "next/link";
function ServicesHeader(props) {
  return (
    <div className={styles.ServicesContainer}>
      <Row className={styles.ServicesNumber}> {props.numbers} </Row>
      <Row className={styles.ServicesRow}>
        <Col xs={12} sm={12} md={6} className={styles.ServicesLeft}>
          <p>{props.heading}</p>
          <h1>{props.title}</h1>
          <p className={styles.ServicesLeftParagraph}>{props.paragraph}</p>
          <div className={styles.Button}>
            <Link href="/contact-us">
              <YellowFilledWhiteButton
                val={"Get in touch"}
                arrow={true}
                style={{ width: "11em" }}
              />
            </Link>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} className={styles.ServicesRight}>
          <div className={styles.ServicesWhiteArrow}>
            <Link href={`/${props.linkToNextService}`}>
              <Image
                className={styles.ServicesWhiteArrowImage}
                src={"/assets/whitearrowcircle.svg"}
                alt="white-arrow"
              />
            </Link>
          </div>
          <div className={styles.ImageDiv}>
            <Image
              src={"/assets/mobile.png"}
              alt={props.alt}
              className={styles.ServicesRightMainImage}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ServicesHeader;
