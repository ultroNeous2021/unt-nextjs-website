import CounterComponent from "@/components/CounterComponent";
import Layout from "@/components/Layout";
import ClientTestimonialSlider from "@/components/Slider/ClientTestimonialSlider";
import { TestimonialsSliderData } from "utils/CONSTANT_DATA";

import YellowFilledWhiteButton from "@/components/YellowFilledWhiteButton";
import styles from "@/styles/AboutPage.module.css";
import girlStyle from "@/styles/components/GirlsOnCounter.module.css";
import backContain from "@/styles/components/BackContain.module.css";
import { useEffect, useRef, useState } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { BsDot } from "react-icons/bs";
import Slider from "react-slick";
import { AboutUsCounter } from "utils/CONSTANT_DATA";
import { ArrayOfTalent } from "utils/DataList/listOfData";
import WhyClientLoveUs from "@/components/Slider/WhyClientLoveUs";
import CheckboxComponent from "@/components/CheckboxComponent";
function AboutUltroneousPage() {
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
  const [showMe, setShowMe] = useState(false);

  let settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: "60px",
  };

  const WCLUSlider = useRef();

  useEffect(() => {
    if (window.innerWidth < 992) {
      setShowMe(true);
    } else {
      setShowMe(false);
    }
  });

  return (
    <Layout>
      {/* About us header */}
      <Row className={styles.PagesHeader}>
        <div className={styles.PaddingNull}>
          <p>About Us</p>
          <h1>We are,</h1>
        </div>
      </Row>
      <div className={styles.UltroneousHContainer}>
        <h2>ultroNeours</h2>
      </div>
      {/*---------- A place for Expanding Horizons and Team Building -----------*/}
      <Row className={styles.PlaceForContainer}>
        <Col sm={8} xl={8} xs={12} md={12} lg={8}>
          <h2 className={styles.PlaceForHeading}>
            A place for Expanding
            <br />
            Horizons and Team Building
          </h2>
          <p className={styles.PlaceForParagraph}>
            ultroNeous is not a place to do monotonous work, but a concept where
            team building and knowledge growth is the primary focus. We are
            committed to build the technology beauties and solutions which helps
            startups, SMEs as well as Fortune 500 companies to meet their smart
            goals.
            <br />
            <br />
            Each ultroNeour is gifted with a special power, which always helps
            in building the robust solutions for multiple vertices. Our team of
            skilled mobile and web developers, creative designers and social
            media marketing geniuses makes us stand out in the crowd.
          </p>
        </Col>
      </Row>
      {/* image section */}
      {showMe ? (
        <Row className={[styles.AboutUsImages, styles.AboutUsRowMargin]}>
          <Row className={styles.AboutUsRowMargin}>
            <Col xs={6} sm={6} className={styles.AboutUsImage}>
              <Image src="/assets/Team1.png" alt="ultroneous team" />
            </Col>
            <Col xs={6} sm={6} className={styles.AboutUsImage}>
              <Image src="/assets/Team3.png" alt="ultroneous team" />
            </Col>
          </Row>
          <Row className={[styles.AboutUsImage, , styles.AboutUsRowMargin]}>
            <Image src="/assets/Team2.png" alt="ultroneous team" />
          </Row>
          <Row className={styles.AboutUsRowMargin}>
            <Col xs={6} sm={6} className={styles.AboutUsImage}>
              <Image src="/assets/Team4.png" alt="ultroneous team" />
            </Col>
            <Col xs={6} sm={6} className={styles.AboutUsImage}>
              <Image src="/assets/Team5.png" alt="ultroneous team" />
            </Col>
          </Row>
        </Row>
      ) : (
        <>
          <Row className={[styles.AboutUsImages, styles.AboutUsRowMargin]}>
            <Col xs={12} sm={4} className={styles.AboutUsImage}>
              <Image src="/assets/Team1.png" alt="ultroneous team" />
            </Col>
            <Col xs={12} sm={8} className={styles.AboutUsImage}>
              <Image src="/assets/Team2.png" alt="ultroneous team" />
            </Col>
          </Row>
          <Row className={[styles.AboutUsImages, styles.AboutUsRowMargin]}>
            <Col xs={12} sm={4} className={styles.AboutUsImage}>
              <Image src="/assets/Team3.png" alt="ultroneous team" />
            </Col>
            <Col xs={12} sm={4} className={styles.AboutUsImage}>
              <Image src="/assets/Team4.png" alt="ultroneous team" />
            </Col>
            <Col xs={12} sm={4} className={styles.AboutUsImage}>
              <Image src="/assets/Team5.png" alt="ultroneous team" />
            </Col>
          </Row>
        </>
      )}
      {/* values */}
      <Row className={styles.ValuesContainer}>
        <Col sm={8} xl={9} xs={12} md={12} lg={8}>
          <label className={styles.ValueHeading}>
            Values
            <Image
              src="/assets/values.svg"
              className={styles.ImgHeight}
              alt="values"
            />
          </label>
          <p className={styles.ParagraphValue}>
            Core values of excellence, growth, customer satisfaction and
            freedom. We are committed to finding the best solutions with
            exceeding your expectations and gaining trust. We are focused on
            exploring the ever-evolving web & mobility technology landscape. We
            are sure to remove the technology obstacles, product quality issues,
            lack of suggestions and many other issues which global clients are
            facing at the moment, with our ultroGagement.
          </p>
        </Col>
      </Row>
      {/*  Why Clients....slider */}
      <WhyClientLoveUs />
      {/*  */}
      <Row className={girlStyle.GirlonCounter}>
        <Col xs={8} sm={8} className={girlStyle.GirlOnCounterHeading}>
          <h3>
            We are achieving <br /> new heights everyday
          </h3>
        </Col>
        <Col xs={4} sm={4} className={girlStyle.GirlonCounterDiv}>
          <Image src="/assets/girl-on-counter.svg" alt="girl-on-counter" />
        </Col>
        <CounterComponent
          style={{
            borderRadius: "20px",
            paddingBottom: "5rem",
            paddingLeft: "0",
            textAlign: "center",
          }}
          data={AboutUsCounter}
        />
      </Row>
      {/*---------- Why does talent choose us? ----------*/}
      <div className={styles.WDTCUContainer}>
        {/* main section */}
        <div className={styles.WDTCUmainsection}>
          <h2 className={styles.HeadingTalent}>Why does talent choose us?</h2>
          <p className={styles.ParagraphTalent}>
            ultroNeous is always in search of talents who are ready to evolve,
            expand and enhance the knowledge.
            <br />
            If you are ready to push your limits and reach new heights, we are
            the place for you.
          </p>
        </div>

        {/* list section */}
        <Row className={styles.WDTCUlistsection}>
          <Col
            sm={12}
            xs={12}
            md={5}
            xl={3}
            className={styles.WDTCUlistcontain}
          >
            <div className={styles.WDTCUlist}>
              <BsDot color="#e49b00" fontSize={40} />
              Exhilarating Work Culture
            </div>
            <div className={styles.WDTCUlist}>
              <BsDot color="#e49b00" fontSize={40} />
              High Exposure in different Areas
            </div>
            <div className={styles.WDTCUlist}>
              <BsDot color="#e49b00" fontSize={40} />
              Prominent Workspace
            </div>
            <div className={styles.WDTCUlist}>
              <BsDot color="#e49b00" fontSize={40} />
              An Open Hierarchical Structure
            </div>
          </Col>
          <Col
            sm={12}
            xs={12}
            xl={3}
            md={5}
            className={[
              styles.WDTCUlistcontain,
              styles.WDTCUlistcontainPadding,
            ]}
          >
            <div className={styles.WDTCUlist}>
              <BsDot color="#e49b00" fontSize={40} />
              Advanced Technology Stacks
            </div>
            <div className={styles.WDTCUlist}>
              <BsDot color="#e49b00" fontSize={40} />
              Appealing Payscale
            </div>
            <div className={styles.WDTCUlist}>
              <BsDot color="#e49b00" fontSize={40} />
              No Secret Policies
            </div>
            <div className={styles.WDTCUlist}>
              <BsDot color="#e49b00" fontSize={40} />
              Exponential Career Opportunity
            </div>
          </Col>
        </Row>
        <div className={styles.CheckOutButtonSection}>
          <YellowFilledWhiteButton val={"Check out Careers"} arrow={true} />
        </div>
      </div>
      <CheckboxComponent htmlId={"val"} />
    </Layout>
  );
}

export default AboutUltroneousPage;
