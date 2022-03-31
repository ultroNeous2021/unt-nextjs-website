import { useRef } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./WhyClientLoveUs.css";
import Arrow from "../../assets/images/client-love.svg";
import WCLU1 from "../../assets/images/WCLU-1.svg";
import WCLU2 from "../../assets/images/WCLU-2.svg";
import WCLU3 from "../../assets/images/WCLU-3.svg";
import WCLU4 from "../../assets/images/WCLU-4.svg";
import WCLU5 from "../../assets/images/WCLU-5.svg";
import Slider from "react-slick";

function WhyClientLoveUs() {
  const SliderData = [
    {
      image: WCLU1,
      text: "Multiple Business Models",
    },
    {
      image: WCLU2,
      text: "Experienced Team Members",
    },
    {
      image: WCLU3,
      text: "Transparent Approach",
    },
    {
      image: WCLU4,
      text: "On-Time Deliveries",
    },
    {
      image: WCLU5,
      text: "Quick Turn Arounds ",
    },
  ];

  let settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: "60px",
  };

  if (window.innerWidth < 1150) {
    settings = {
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
  }

  const WCLUSlider = useRef();

  return (
    <>
      <Row className="WCLU-Container ">
        <Col xs={12} sm={12} md={4} className="WCLU-Left">
          <h3>
            Why Clients <br /> love us
          </h3>
          <div className="WCLU-Arrows">
            <img
              src={Arrow}
              alt="arrow"
              onClick={() => WCLUSlider.current.slickPrev()}
            />
            <img
              src={Arrow}
              alt="arrow"
              onClick={() => WCLUSlider.current.slickNext()}
            />
          </div>
        </Col>
        <Col xs={12} sm={12} md={8} className="WCLU-Right">
          <Slider ref={(slider) => (WCLUSlider.current = slider)} {...settings}>
            {SliderData.map((el, ind) => (
              <Card className="WCLU-Slide" key={ind}>
                <Card.Body className="WCLU-Slide-Body">
                  <Card.Title>
                    <img src={el.image} alt={el.text} />
                  </Card.Title>
                  <Card.Text className="WCLU-Text">{el.text}</Card.Text>
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
