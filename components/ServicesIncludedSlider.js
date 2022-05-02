import styles from "@/styles/components/ServicesIncludedSlider.module.css";
import { useRef } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Slider from "react-slick/lib/slider";
const ServicesIncludedSlider = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 885,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // centerMode: true,
  };
  const sliderRef = useRef();
  return (
    <div class={styles.Cardcontainer}>
      {/* <div>
        <div>
          <div></div>
          
        </div>
      </div> */}
      <Row className={styles.ArrowContainNavigate}>
        <Col xs={12} xl={6} md={10} className={styles.CardMainHeadingContain}>
          <h3 className={styles.CardMainHeading}>Services Included</h3>
        </Col>
        <Col xs={12} xl={6} md={2} className={styles.ArrowContain}>
          <div className={styles.ArrowContainSpace}>
            <Image
              src={"/assets/leftArrows.svg"}
              className={styles.ArrowSize}
              onClick={() => sliderRef.current.slickPrev()}
            />

            <Image
              src={"/assets/rightArrows.svg"}
              className={styles.ArrowSize}
              onClick={() => sliderRef.current.slickNext()}
            />
          </div>
        </Col>
      </Row>
      <Slider {...settings} className={styles.SliderSpace} ref={sliderRef}>
        {props.listOfserviceincluded.map((v, i) => (
          <div>
            <div class={styles.Card}>
              <h3 class={styles.Cardtitle}>{v.title}</h3>
              <p class={styles.Carddescription}>{v.description}</p>
            </div>
          </div>
        ))}

        {/* <div>
          <div class={styles.Card}>
            <h3 class={styles.Cardtitle}>Shopify App Development</h3>
            <p class={styles.Carddescription}>
              ultroNeous' Shopify developers excel in developing mobile apps for
              e-commerce stores. Our developers are proficient in all aspects of
              app development, including third-party app integrations and app
              installation. Hire shopify experts on project basis to develop
              scalable, flexible, and robust ecommerce mobile apps at affordable
              development cost only at ultroNeous.
            </p>
          </div>
        </div>
        <div>
          <div class={styles.Card}>
            <h3 class={styles.Cardtitle}>Shopify App Development</h3>
            <p class={styles.Carddescription}>
              ultroNeous' Shopify developers excel in developing mobile apps for
              e-commerce stores. Our developers are proficient in all aspects of
              app development, including third-party app integrations and app
              installation. Hire shopify experts on project basis to develop
              scalable, flexible, and robust ecommerce mobile apps at affordable
              development cost only at ultroNeous.
            </p>
          </div>
        </div>
        <div>
          <div class={styles.Card}>
            <h3 class={styles.Cardtitle}>Shopify App Development</h3>
            <p class={styles.Carddescription}>
              ultroNeous' Shopify developers excel in developing mobile apps for
              e-commerce stores. Our developers are proficient in all aspects of
              app development, including third-party app integrations and app
              installation. Hire shopify experts on project basis to develop
              scalable, flexible, and robust ecommerce mobile apps at affordable
              development cost only at ultroNeous.
            </p>
          </div>
        </div> */}
      </Slider>
    </div>
  );
};
export default ServicesIncludedSlider;
