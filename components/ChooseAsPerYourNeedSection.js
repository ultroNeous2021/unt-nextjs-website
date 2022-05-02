import YellowFilledWhiteButton from "./YellowFilledWhiteButton";

import styles from "@/styles/components/ChooseAsPerYourNeedSection.module.css";
import { Col, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ChooseAsPerYourNeedData } from "utils/CONSTANT_DATA";
import { VscGoToFile } from "react-icons/vsc";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
const ChooseAsPerYourNeedSection = (props) => {
  const [viewByIndex, setViewByIndex] = useState(0);
  const [mobileMode, setMobileMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const goto = useRouter();
  const checkDevice = () => {
    // var isMobile = /iPhone|Android|BlackBerry|IEMobile/i.test(
    //   navigator.userAgent
    // );
    // if (isMobile) {
    //   setMobileMode(true);
    // } else {
    //   setMobileMode(false);
    // }

    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return setMobileMode(false);
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(
        ua
      )
    ) {
      return setMobileMode(true);
    }
    return setMobileMode(false);
  };
  useEffect(() => {
    setIsLoaded(true);
    AOS.init();
  }, []);
  useEffect(() => {
    if (isLoaded) {
      checkDevice();
    }
  }, [isLoaded]);

  const ListOfTab = [
    "Hire a Team",
    props.replace ? props.replace : "Give us a Project",
    "T & M",
  ];

  return (
    <Row className={styles.ChooseAsPerYourNeedContainer}>
      <Col sm={12} xl={12} className={styles.CAPYN}>
        <h2
          className={styles.CAPYNHEADING}
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          Choose as per your need!
        </h2>
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
          {props.replaceDetail
            ? ChooseAsPerYourNeedData[0] == ChooseAsPerYourNeedData[viewByIndex]
              ? (ChooseAsPerYourNeedData[0].details = `Hire ${props.replaceDetail} or Build your own team with ultroNeous.`)
              : ChooseAsPerYourNeedData[viewByIndex].details
            : ChooseAsPerYourNeedData[viewByIndex].details}
        </p>
        {}
        <Image
          src={
            mobileMode
              ? ChooseAsPerYourNeedData[viewByIndex].image2
              : ChooseAsPerYourNeedData[viewByIndex].image
          }
          className={styles.DetailSectionImage}
        />
        <div className={styles.DetailBtn}>
          <YellowFilledWhiteButton
            clickhandle={() => goto.push("/contact-us")}
            val={ListOfTab[viewByIndex]}
            arrow={true}
          />
        </div>
      </Col>
    </Row>
  );
};
export default ChooseAsPerYourNeedSection;
