import Layout from "../components/Layout";
import styles from "@/styles/HomePage.module.css";
import HomeHero from "@/components/HomeHero";
import CounterComponent from "@/components/CounterComponent";
import {
  CounterComponentData,
  TestimonialsSliderData,
  WeExcelAtData,
} from "utils/CONSTANT_DATA";
import HorizontalTab from "@/components/HorizontalTab";
import { Col, Image, Row } from "react-bootstrap";
import PortfolioSlider from "@/components/Slider/PortfolioSlider";
import { useEffect, useRef, useState } from "react";
import { AiOutlineDribbble } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { VscGithubAlt } from "react-icons/vsc";
import AOS from "aos";
import "aos/dist/aos.css";
import SvgComponent from "@/components/SvgComponent";
import useOnScreen from "@/components/customHook/useOnScreen";
import { BsBehance } from "react-icons/bs";
export default function HomePage() {
  const [image, setImage] = useState("/assets/why-client-choose-us.png");
  const [hoverColor, setHoverColor] = useState(false);
  const [arrowShow, setArrowShow] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.innerWidth >= 320 && window.innerWidth <= 720
      ? setImage("/assets/why-client-choose-us-device.png")
      : setImage("/assets/why-client-choose-us.png");
  });

  const behanceRef = useRef(null);
  const dribbleRef = useRef(null);
  const githubRef = useRef(null);
  const instaRef = useRef(null);
  return (
    <Layout>
      <HomeHero />
      <div className={styles.TechnologiesContainer}>
        <Row className="mx-0">
          <div className={styles.TechnoContainer}>
            <Image
              src={"/assets/web-dev.jpg"}
              alt="Avatar"
              className={styles.TechnologyImage}
            />
            <div className={styles.TechnologyOverlay}>
              <div className={styles.TechnologyText}>Web App Development</div>
            </div>
          </div>
          <div className={styles.TechnoContainer}>
            <Image
              src={"/assets/mobile.jpg"}
              alt="Avatar"
              className={styles.TechnologyImage}
            />
            <div className={styles.TechnologyOverlay}>
              <div className={styles.TechnologyText}>
                Mobile App Development{" "}
              </div>
            </div>
          </div>
          <div className={styles.TechnoContainer}>
            <Image
              src={"/assets/ux_ui.jpg"}
              alt="Avatar"
              className={styles.TechnologyImage}
            />
            <div className={styles.TechnologyOverlay}>
              <div className={styles.TechnologyText}>UX/ UI Design</div>
            </div>
          </div>
          <div className={styles.TechnoContainer}>
            <Image
              src={"/assets/Socialmedia.jpg"}
              alt="Avatar"
              className={styles.TechnologyImage}
            />
            <div className={styles.TechnologyOverlay}>
              <div className={styles.TechnologyText}>Digital Marketing</div>
            </div>
          </div>
          <div className={styles.TechnoContainer}>
            <Image
              src={"/assets/cloud.jpg"}
              alt="Avatar"
              className={styles.TechnologyImage}
            />
            <div className={styles.TechnologyOverlay}>
              <div className={styles.TechnologyText}>Cloud & Devops</div>
            </div>
          </div>
        </Row>
      </div>
      {/* Intro container */}
      <div
        onMouseEnter={() => setArrowShow(true)}
        onMouseMove={() => setArrowShow(false)}
        className={styles.IntroContainer}>
        <div
          style={{
            cursor: `url('/assets/cursornew.png') 300 300, auto`,
            transition:'4s'
          }}
        >
          <Row className={styles.IntroHeadingContainer}>
            <h1 className={styles.IntroHeading}>
              Hello, we are
              <br />
              ultroNeours.
            </h1>
          </Row>
          <Row className="mx-0">
            <Col
              sm={12}
              xs={12}
              md={6}
              xl={6}
              lg={6}
              className={styles.IntroParagraphSection}
            >
              <p className={styles.IntroParagraph}>
                ultroNeous is a concept – a concept of innovation, customer
                service, and exceptional creativity. We are committed to
                building technology solutions that are accessible to help
                pioneers reach their vision. We will continue to remove
                technological obstacles to the global community of movers and
                shakers.
                <br />
                <br />
                Our team is constantly creating advanced web and mobile
                applications for various domains. Our experienced developers
                have a broad working knowledge of top programming languages and
                have the sense to build scalable solutions. The robust solutions
                increase the ROI for the client, resulting in the constant
                growth of our client base and project development knowledge.
              </p>
            </Col>
            <Col
              sm={12}
              xs={12}
              md={6}
              xl={6}
              lg={6}
              className={styles.IntroImagePosition}
            >
              <Image
                src="/assets/group-image.png"
                alt="group of ultroneous"
                className={styles.IntroImage}
              />
            </Col>
            <Col sm={12} xl={12} className={styles.IntroArrowContain}>
              {arrowShow ? (
                <Image
                  data-aos-duration="2000"
                  data-aos="zoom-in-right"
                  src="/assets/circle-arrow.svg"
                  alt="arrow"
                  height={200}
                  className={styles.IntroArrow}
                />
              ) : null}
            </Col>
          </Row>
        </div>
      </div>
      <CounterComponent data={CounterComponentData} />
      {/*what we offer */}
      <div className={styles.WhatWeOfferContainer}>
        <Row>
          <h2
            // data-aos="zoom-in"
            // data-aos-duration="2000"
            className={styles.mainheading}
          >
            What We Offer
          </h2>
        </Row>
        <Row className="text-align-center">
          <Col
            // data-aos="fade-up"
            // data-aos-duration="3000"
            sm={4}
            md={12}
            lg={4}
            xl={4}
          >
            <div className={styles.Whatweofferimg}>
              <Image alt="ui-ux-design" src="/assets/ui-ux-design.svg" />
            </div>
            <h2 className={styles.WhatweofferHeading}>UI/UX Design</h2>
            <p className={styles.WhatweofferPargraph}>
              The first impression always matters. Our attention to the smallest
              of detail while creating UX/UI, will enhance the customer
              experience with a positive, unique and well rounded interaction.
            </p>
          </Col>
          <Col
            // data-aos="fade-down"
            // data-aos-duration="3000"
            sm={4}
            md={12}
            lg={4}
            xl={4}
          >
            <div className={styles.Whatweofferimg}>
              <Image alt="developement" src="/assets/development.svg" />
            </div>
            <h2 className={styles.WhatweofferHeading}>Development</h2>
            <p className={styles.WhatweofferPargraph}>
              Our team will bring life into your concept and designs. Our
              quality web and mobility development team along with their unique
              QA approach will result in an high-end product.
            </p>
          </Col>
          <Col
            // data-aos="fade-up"
            // data-aos-duration="3000"
            sm={4}
            md={12}
            lg={4}
            xl={4}
          >
            <div className={styles.Whatweofferimg}>
              <Image
                alt="digital marketing"
                src="/assets/digital-marketing.svg"
              />
            </div>
            <h2 className={styles.WhatweofferHeading}>Digital Marketing</h2>
            <p className={styles.WhatweofferPargraph}>
              Our social experts know building the brand, giving a much needed
              boost on social media and search engines to spread awareness and
              bring the best ROI.
            </p>
          </Col>
        </Row>
      </div>
      <HorizontalTab data={WeExcelAtData} title={"We Excel At"} />
      <PortfolioSlider />
      {/* <StackedCardsSlider data={TestimonialsSliderData} /> */}

      {/* Why client choose to work with us */}
      <div className={styles.WhyClientChooseContainer}>
        <Row className="mx-0 justify-content-center">
          <h1
            className={styles.WhyClientChooseHeading}
            // data-aos="zoom-in"
            // data-aos-duration="2000"
          >
            Why Clients choose to work with us
          </h1>
        </Row>
        <Row className="mx-0">
          <Image src={image} alt="why client choose us" />
        </Row>
      </div>
      {/* verticals */}
      <div className={styles.Verticalscontainer}>
        <Row>
          <h2
            // data-aos="zoom-in"
            // data-aos-duration="2000"
            className={styles.Verticalheading}
          >
            Verticals
          </h2>
        </Row>

        <Row className={styles.Verticalcard}>
          <Col
            className={styles.Verticalsinglecard}
            sm={6}
            xs={6}
            xl={1}
            md={1}
          >
            <Image alt="vertical image" className={styles.Verticalimg} />
            <h2 className={styles.Cardtext}>Finance</h2>
          </Col>
          <Col className={styles.Verticalsinglecard} xs={6} xl={1} md={1}>
            <Image alt="vertical image" className={styles.Verticalimg2} />
            <h2 className={styles.Cardtext}>Healthcare</h2>
          </Col>

          <Col className={styles.Verticalsinglecard} xs={6} xl={1} md={1}>
            <Image alt="vertical image" className={styles.Verticalimg3} />
            <h2 className={styles.Cardtext}>Education</h2>
          </Col>

          <Col className={styles.Verticalsinglecard} xs={6} xl={1} md={1}>
            <Image alt="vertical image" className={styles.Verticalimg4} />
            <h2 className={styles.Cardtext}>Hospitality</h2>
          </Col>

          <Col className={styles.Verticalsinglecard} xs={6} xl={1} md={1}>
            <Image alt="vertical image" className={styles.Verticalimg5} />
            <h2 className={styles.Cardtext}>eCommerce</h2>
          </Col>

          <Col className={styles.Verticalsinglecard} xs={6} xl={1} md={1}>
            <Image alt="vertical image" className={styles.Verticalimg6} />
            <h2 className={styles.Cardtext}>Real Estate </h2>
          </Col>

          <Col className={styles.Verticalsinglecard} xs={6} xl={1} md={1}>
            <Image alt="vertical image" className={styles.Verticalimg7} />
            <h2 className={styles.Cardtext}>Food Delivery</h2>
          </Col>

          <Col className={styles.Verticalsinglecard} xs={6} xl={1} md={1}>
            <Image alt="vertical image" className={styles.Verticalimg8} />
            <h2 className={styles.Cardtext}>Travel</h2>
          </Col>
        </Row>
      </div>
      {/* look at our design shots */}
      <>
        <a
          href="https://github.com/ultroneous"
          target="_blank"
          className="link-social"
          style={{ display: "none" }}
          ref={githubRef}
          rel="noreferrer"
        ></a>
        <a
          href="https://dribbble.com/ultroneous"
          target="_blank"
          className="link-social"
          style={{ display: "none" }}
          ref={dribbleRef}
          rel="noreferrer"
        ></a>
        <a
          href="https://www.behance.net/ultroneous"
          target="_blank"
          className="link-social"
          style={{ display: "none" }}
          ref={behanceRef}
          rel="noreferrer"
        ></a>
        <a
          href="https://www.instagram.com/ultroneous.technologies/"
          target="_blank"
          className="link-social"
          style={{ display: "none" }}
          ref={instaRef}
          rel="noreferrer"
        ></a>

        <div className={[styles.LookAtContainer]}>
          <Row className={styles.MxNone}>
            <Col xl={4} md={4} xs={6} sm={6} className={styles.SingleImage}>
              <Image
                src="/assets/a8.svg"
                className={styles.ImageEffect}
                alt="look at our design"
              />
            </Col>
            <Col xl={4} md={4} sm={6} xs={6} className={styles.SingleImage}>
              <Image
                src="/assets/a2.svg"
                className={styles.ImageEffect}
                alt="look at our design"
              />
            </Col>
            <Col xl={4} md={4} className={styles.SingleImage}>
              <Image
                src="/assets/a4.svg"
                className={styles.ImageEffect}
                alt="look at our design"
              />
            </Col>
          </Row>
          <Row className={[styles.MxNone, styles.ImagesForTheHomepage]}>
            <Col xl={4} md={4} sm={6} xs={6} className={styles.SingleImage}>
              <Image
                src="/assets/a6.svg"
                className={styles.ImageEffect}
                alt="look at our design"
              />
            </Col>
            <Col xl={4} md={4} sm={6} xs={6} className={styles.SingleImage}>
              <Row>
                <h3> Look at our </h3>
              </Row>
              <Row className={styles.ImagesForText}>
                <Col>
                  <h3> Design </h3>
                  <h3> Shots </h3>
                </Col>
                <Col className={styles.ImagesTextIcons}>
                  <BsBehance
                    style={{ cursor: "pointer" }}
                    onClick={() => behanceRef.current.click()}
                  />
                  <AiOutlineDribbble
                    style={{ cursor: "pointer" }}
                    onClick={() => dribbleRef.current.click()}
                  />
                  <VscGithubAlt
                    style={{ cursor: "pointer" }}
                    onClick={() => githubRef.current.click()}
                  />
                  <IoLogoInstagram
                    style={{ cursor: "pointer" }}
                    onClick={() => instaRef.current.click()}
                  />
                </Col>
              </Row>
            </Col>
            <Col xl={4} md={4} className={styles.SingleImage}>
              <Image
                src="/assets/a3.svg"
                className={styles.ImageEffect}
                alt="look at our design"
              />
            </Col>
          </Row>
          <Row className={styles.MxNone}>
            <Col xl={4} md={4} sm={6} xs={6} className={styles.SingleImage}>
              <Image
                src="/assets/a7.svg"
                className={styles.ImageEffect}
                alt="look at our design"
              />
            </Col>
            <Col xl={4} md={4} sm={6} xs={6} className={styles.SingleImage}>
              <Image
                src="/assets/a1.svg"
                className={styles.ImageEffect}
                alt="look at our design"
              />
            </Col>
            <Col xl={4} md={4} className={styles.SingleImage}>
              <Image
                src="/assets/a5.svg"
                className={styles.ImageEffect}
                alt="look at our design"
              />
            </Col>
          </Row>
        </div>
      </>
    </Layout>
  );
}
