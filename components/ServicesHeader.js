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
          <Link href="/contact-us">
            <div className={styles.Button}>
              <YellowFilledWhiteButton
                val={"Get in touch"}
                arrow={true}
                style={{ width: "11em" }}
              />
            </div>
          </Link>
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
              src={props.image}
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
