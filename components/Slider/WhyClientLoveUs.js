import { useEffect, useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "@/styles/components/WhyClientLoveUs.module.css";

import Slider from "react-slick";

function WhyClientLoveUs() {
  const SliderData = [
    {
      image: "/assets/WCLU-1.svg",
      text: "Multiple Business Models",
    },
    {
      image: "/assets/WCLU-2.svg",
      text: "Experienced Team Members",
    },
    {
      image: "/assets/WCLU-3.svg",
      text: "Transparent Approach",
    },
    {
      image: "/assets/WCLU-4.svg",
      text: "On-Time Deliveries",
    },
    {
      image: "/assets/WCLU-5.svg",
      text: "Quick Turn Arounds ",
    },
  ];

  const [settingsForSlider, setSettingsForSlider] = useState({
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: "60px",
  });

  let settings = useEffect(() => {
    if (window.innerWidth < 1150) {
      setSettingsForSlider({
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
      });
    }
  }, []);

  const WCLUSlider = useRef();

  return (
    <>
      <Row className={styles.WCLUContainer}>
        <Col xs={12} sm={12} md={4} className={styles.WCLULeft}>
          <h3>
            Why Clients <br /> love us
          </h3>
          <div className={styles.WCLUArrows}>
            <img
              src={"/assets/whitearrowcircle-transparent.svg"}
              alt="arrow"
              onClick={() => WCLUSlider.current.slickPrev()}
            />
            <img
              src={"/assets/whitearrowcircle-transparent.svg"}
              alt="arrow"
              onClick={() => WCLUSlider.current.slickNext()}
            />
          </div>
        </Col>
        <Col xs={12} sm={12} md={8} className={styles.WCLURight}>
          <Slider
            ref={(slider) => (WCLUSlider.current = slider)}
            {...settingsForSlider}
          >
            {SliderData.map((el, ind) => (
              <Card className={styles.WCLUSlide} key={ind}>
                <Card.Body className={styles.WCLUSlideBody}>
                  <Card.Title>
                    <img src={el.image} alt={el.text} />
                  </Card.Title>
                  <Card.Text className={styles.WCLUText}>{el.text}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Slider>
        </Col>
      </Row>
    </>
  );
}

export default WhyClientLoveUs;
