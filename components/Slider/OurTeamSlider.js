import { Carousel, Col, Row } from "react-bootstrap";
import styles from "@/styles/components/OurTeamSlider.module.css";
import { OurTeamSliderData } from "utils/CONSTANT_DATA";
import { useEffect, useState } from "react";

function OurTeamSlider({ data = OurTeamSliderData }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  // console.log(isMobile);

  return (
    <div>
      {!isMobile ? (
        <Carousel
          prevIcon={" "}
          nextIcon={" "}
          className={styles.OurTeamSliderContainer}
          interval={4000}
        >
          {data.map((el) => (
            <Carousel.Item className={styles.Slide}>
              <Row className={styles.SlideRow}>
                <Col xs={12} sm={12} md={4} className={styles.SlideNameCol}>
                  <h2> {el.name} </h2>
                  <p> {el.title} </p>
                </Col>
                <Col xs={12} sm={12} md={4}>
                  <div className={styles.ImageDiv}>
                    <img src={el.image} alt={el.name} />
                  </div>
                </Col>
                <Col xs={12} sm={12} md={4} className={styles.SlideQuoteCol}>
                  <div className={styles.QuoteContainer}>
                    <div className={styles.QuoteDiv}>
                      <img src={"/assets/quoteicon.png"} alt="quote" />
                    </div>
                    <p> {el.quote} </p>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <Carousel
          prevIcon={" "}
          nextIcon={" "}
          className={styles.OurTeamSliderContainer}
          interval={4000}
        >
          {data.map((el) => (
            <Carousel.Item className={styles.Slide}>
              <Row className={styles.SlideRow}>
                <h2> {el.name} </h2>

                <Col xs={6} sm={6} md={4} className={styles.SlideQuoteCol}>
                  <p className={styles.Title}> {el.title} </p>
                  <div className={styles.QuoteContainer}>
                    <div className={styles.QuoteDiv}>
                      <img src={"/assets/quoteicon.png"} alt="quote" />
                    </div>
                    <p className={styles.Quote}> {el.quote} </p>
                  </div>
                </Col>
                <Col xs={6} sm={6} md={4} className={styles.SlideImageCol}>
                  <div className={styles.ImageDiv}>
                    <img src={el.image} alt={el.name} />
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default OurTeamSlider;
