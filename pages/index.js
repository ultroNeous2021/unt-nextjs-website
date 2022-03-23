import Link from "next/link";
import Layout from "../components/Layout";
import styles from "@/styles/HomePage.module.css";
import { Container } from "react-bootstrap";
import HomeHero from "@/components/HomeHero";
import CounterComponent from "@/components/CounterComponent";
import { CounterComponentData, WeExcelAtData } from "utils/CONSTANT_DATA";
import HorizontalTab from "@/components/HorizontalTab";

import { Col, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
export default function HomePage() {
  const [image, setImage] = useState('/assets/why-client-choose-us.png')
  useEffect(() => {
    window.innerWidth >= 320 && window.innerWidth <= 720 ?
      setImage('/assets/why-client-choose-us-device.png')
      : setImage('/assets/why-client-choose-us.png')
  })
  return (
    <Layout>
      <HomeHero />
      <CounterComponent data={CounterComponentData} />
      <HorizontalTab data={WeExcelAtData} title={"We Excel At"} />
      {/*what we offer */}
      <div className={styles.WhatWeOfferContainer}>
        <Row>
          <h2 className={styles.mainheading}>What We Offer</h2>
        </Row>

        <Row className='text-align-center'>
          <Col sm={4} md={12} lg={4} xl={4}>
            <div className={styles.Whatweofferimg}>
              <Image 
              alt="ui-ux-design"
              src="/assets/ui-ux-design.svg" />
            </div>
            <h2 className={styles.WhatweofferHeading}>UI/UX Design</h2>
            <p className={styles.WhatweofferPargraph}>The first impression always matters. Our attention to the smallest of detail while creating UX/UI, will enhance the customer experience with a positive, unique and well rounded interaction.</p>
          </Col>
          <Col sm={4} md={12} lg={4} xl={4}>
            <div className={styles.Whatweofferimg}>
              <Image
              alt="developement"
              src="/assets/development.svg"/>
            </div>
            <h2 className={styles.WhatweofferHeading}>Development</h2>
            <p className={styles.WhatweofferPargraph}>
              Our team will bring life into your concept and designs. Our quality web and mobility development team along with their unique QA approach will result in an high-end product.
              </p>
          </Col>
          <Col sm={4} md={12} lg={4} xl={4}>
            <div className={styles.Whatweofferimg}>
              <Image 
              alt="digital marketing"
              src="/assets/digital-marketing.svg" />
            </div>
            <h2 className={styles.WhatweofferHeading}>Digital Marketing</h2>
            <p className={styles.WhatweofferPargraph}>
              
              Our social experts know building the brand, giving a much needed boost on social media and search engines to spread awareness and bring the best ROI.
              </p>
          </Col>
        </Row>
      </div>
      {/* Intro container */}
      <div className={styles.IntroContainer}>
        <Row className={styles.IntroHeadingContainer}>
          <h1 className={styles.IntroHeading}>
            Hello, we are<br />
            ultroNeours.
          </h1>
        </Row>
        <Row className="mx-0">
          <Col sm={12} xs={12} md={6} xl={6} lg={6} className={styles.IntroParagraphSection}>
            <p className={styles.IntroParagraph}>
              ultroNeous is a concept – a concept of innovation, customer service, and exceptional creativity. We are committed to building technology solutions that are accessible to help pioneers reach their vision. We will continue to remove technological obstacles to the global community of movers and shakers.
              <br /><br />
              Our team is constantly creating advanced web and mobile applications for various domains. Our experienced developers have a broad working knowledge of top programming languages and have the sense to build scalable solutions. The robust solutions increase the ROI for the client, resulting in the constant growth of our client base and project development knowledge.
            </p>
          </Col>
          <Col sm={12} xs={12} md={6} xl={6} lg={6} className={styles.IntroImagePosition}>
            <Image src="/assets/group-image.png" alt="group of ultroneous" className={styles.IntroImage} />
          </Col>
        </Row>
      </div>
      {/* Why client choose to work with us */}
      <div className={styles.WhyClientChooseContainer}>
        <Row className="mx-0 justify-content-center">
          <h1 className={styles.WhyClientChooseHeading}>
            Why Clients choose to
            work with us
          </h1>
        </Row>
        <Row className="mx-0">
          <Image
            src={image}
            alt="why client choose us"
          />
        </Row>
      </div>
    </Layout>
  );
}
