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
import ClientTestimonialSlider from "@/components/Slider/ClientTestimonialSlider";
import Verticals from "@/components/Verticals";
import WhyClientChoose from "@/components/WhyClientChoose";
export default function HomePage() {
  const [hoverColor, setHoverColor] = useState(false);
  const [arrowShow, setArrowShow] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

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
        className={styles.IntroContainer}
      >
        <div
          style={{
            cursor: `url('/assets/cursornew.png') 300 300, auto`,
            transition: "4s",
          }}
        >
          <Row className={styles.IntroHeadingContainer}>
            <h2
              className={styles.IntroHeading}
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              Hello, we are
              <br />
              ultroNeours.
            </h2>
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
              <p
                data-aos="zoom-in"
                data-aos-duration="2000"
                className={styles.IntroParagraph}
              >
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
          </Row>
        </div>
      </div>
      <CounterComponent data={CounterComponentData} />
      {/*what we offer */}
      <div className={styles.WhatWeOfferContainer}>
        <Row>
          <h2
            data-aos="zoom-in"
            data-aos-duration="3000"
            className={styles.mainheading}
          >
            What We Offer
          </h2>
        </Row>
        <Row className="text-align-center">
          <Col
            data-aos="zoom-in"
            data-aos-duration="2000"
            sm={4}
            md={12}
            lg={4}
            xl={4}
            className={styles.WhatWeOfferCol}
          >
            <div className={styles.Whatweofferimg}>
              <Image alt="ui-ux-design" src="/assets/ui-ux-design.svg" />
            </div>
            <h2 className={styles.WhatweofferHeading}>UI/UX Design</h2>
            <div className={styles.WhatWeOfferParaContainerFirst}>
              <p className={styles.WhatweofferPargraph}>
                The first impression always matters. Our attention to the
                smallest of detail while creating UX/UI, will enhance the
                customer experience with a positive, unique and well rounded
                interaction.
              </p>
            </div>
          </Col>
          <Col
            data-aos="zoom-in"
            data-aos-duration="2000"
            // data-aos="fade-down"
            // data-aos-duration="3000"
            sm={4}
            md={12}
            lg={4}
            xl={4}
            className={styles.WhatWeOfferCol}
          >
            <div className={styles.Whatweofferimg}>
              <Image alt="developement" src="/assets/development.svg" />
            </div>
            <h2 className={styles.WhatweofferHeading}>Development</h2>
            <div className={styles.WhatWeOfferParaContainerMiddle}>
              <p className={styles.WhatweofferPargraph}>
                Our team will bring life into your concept and designs. Our
                quality web and mobility development team along with their
                unique QA approach will result in an high-end product.
              </p>
            </div>
          </Col>
          <Col
            data-aos="zoom-in"
            data-aos-duration="2000"
            // data-aos="fade-up"
            // data-aos-duration="3000"
            sm={4}
            md={12}
            lg={4}
            xl={4}
            className={styles.WhatWeOfferCol}
          >
            <div className={styles.Whatweofferimg}>
              <Image
                alt="digital marketing"
                src="/assets/digital-marketing.svg"
              />
            </div>
            <h2 className={styles.WhatweofferHeading}>Digital Marketing</h2>
            <div className={styles.WhatWeOfferParaContainerLast}>
              <p className={styles.WhatweofferPargraph}>
                Our social experts know building the brand, giving a much needed
                boost on social media and search engines to spread awareness and
                bring the best ROI.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <HorizontalTab data={WeExcelAtData} title={"We Excel At"} />
      <PortfolioSlider />
      <ClientTestimonialSlider
        data={TestimonialsSliderData}
        title={"Client’s Feedback"}
      />

      {/* Why client choose to work with us */}
      <WhyClientChoose />
      {/* verticals */}
      <Verticals />
      {/* look at our design shots */}
      <div>
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
                  <h3 style={{ marginBottom: "0" }}> Shots </h3>
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
      </div>
    </Layout>
  );
}
