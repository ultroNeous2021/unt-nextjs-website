import YellowFilledWhiteButton from "./YellowFilledWhiteButton";

import styles from "@/styles/Capyn.module.css";
import { Col, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ChooseAsPerYourNeedData } from "utils/CONSTANT_DATA";

const ChooseAsPerYourNeedSection = () => {
  const [viewByIndex, setViewByIndex] = useState(0);
  const [mobileMode, setMobileMode] = useState(false);
  useEffect(() => {
    window.innerWidth >= 320 && window.innerWidth <= 720
      ? setMobileMode(true)
      : setMobileMode(false);
  });
  const ListOfTab = ["Hire a Team", "Give us a Project", "T & M"];
  return (
    <Row className={styles.ChooseAsPerYourNeedContainer}>
      <Col sm={12} xl={12} className={styles.CAPYN}>
        <h2 className={styles.CAPYNHEADING}>Choose as per your need!</h2>
      </Col>
      <Col xl={2} className={styles.CAPYNTabMainContainer}>
        <Row className={styles.CAPYNTabcontainer}>
          {ListOfTab.map((value, index) => (
            <Col
              xl={12}
              xs={4}
              className={styles.TabsCapynt}
              style={
                index == viewByIndex
                  ? mobileMode
                    ? {
                        backgroundColor: "#fff",
                        border: "none",
                        color: "#e49b00",
                      }
                    : {
                        backgroundColor: "#fff",
                        color: "#e49b00",
                        borderLeft: "15px solid #e49b00",
                        borderTopLeftRadius: "10px",
                        borderBottomLeftRadius: "10px",
                      }
                  : null
              }
              onClick={() => setViewByIndex(index)}
            >
              {value}
            </Col>
          ))}
        </Row>
      </Col>
      <Col xl={9} className={styles.DetailSectionContainer}>
        <div className={styles.DetailSectionMainTitle}>
          {ChooseAsPerYourNeedData[viewByIndex].mainTitle}
        </div>
        <p className={styles.DetailSectionDetails}>
          {ChooseAsPerYourNeedData[viewByIndex].details}
        </p>
        {}
        <Image
          src={ChooseAsPerYourNeedData[viewByIndex].image}
          className={styles.DetailSectionImage}
        />
        <div className={styles.DetailBtn}>
          <YellowFilledWhiteButton val={ListOfTab[viewByIndex]} arrow={true} />
        </div>
      </Col>
    </Row>
  );
};
export default ChooseAsPerYourNeedSection;
