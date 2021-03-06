import Layout from "../components/Layout";
import styles from "@/styles/HomePage.module.css";
import HomeHero from "@/components/HomeHero";
import CounterComponent from "@/components/CounterComponent";
import {
  API_URL,
  CounterComponentData,
  TestimonialsSliderData,
  WeExcelAtData,
} from "utils/CONSTANT_DATA";
import HorizontalTab from "@/components/HorizontalTab";
import { Col, Image as Img, Row } from "react-bootstrap";
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
import Link from "next/link";
import axios from "axios";
import BlogSliderComponent from "@/components/Slider/BlogSliderComponent";
import Image from "next/image";
import ImageViewer from "@/components/ImageViewer";
import { forallschema } from "utils/schemas";
export default function HomePage({ data }) {
  const [hoverColor, setHoverColor] = useState(false);
  // const [arrowShow, setArrowShow] = useState(false);
  const [scale, setScale] = useState("z");
  const [arrowImage, setArrowImage] = useState("/assets/circlearrow.svg");
  const [showModel, setshowModal] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  const behanceRef = useRef(null);
  const dribbleRef = useRef(null);
  const githubRef = useRef(null);
  const instaRef = useRef(null);

  return (
    <Layout
      title={
        "Best Mobile & Web App Development Company in USA/India | ultroNeous "
      }
      description={
        "ultroNeous Technologies is web and mobile app development company in the USA & India. We provide cost-effective solutions for software development services, and digital marketing."
      }
      keywords={
        "Mobile app development company, Web app development, Mobile and web app development company, software development"
      }
    >
      <HomeHero />
      <div className={styles.TechnologiesContainer}>
        <Row className="mx-0">
          <Link href={"/web-application-development"}>
            <div className={styles.TechnoContainer}>
              <a href="/web-application-development">
                <Image
                  loading="lazy"
                  src={
                    "https://res.cloudinary.com/dnt0gyxrd/image/upload/v1654236777/UNT%20IMAGES/HOME/web-dev_wbnf5x.jpg"
                  }
                  layout="fill"
                  objectFit="contain"
                  className={styles.TechnologyImage}
                />
                <div className={styles.TechnologyOverlay}>
                  <div className={styles.TechnologyText}>
                    Web App Development
                  </div>
                </div>
              </a>
            </div>
          </Link>

          <Link href={"/mobile-application-development"}>
            <div className={styles.TechnoContainer}>
              <a href="/mobile-application-development">
                <Image
                  loading="lazy"
                  src={
                    "https://res.cloudinary.com/dnt0gyxrd/image/upload/v1654237945/UNT%20IMAGES/HOME/mobile_bi9fjy.jpg"
                  }
                  layout="fill"
                  objectFit="contain"
                  className={styles.TechnologyImage}
                />

                <div className={styles.TechnologyOverlay}>
                  <div className={styles.TechnologyText}>
                    Mobile App Development
                  </div>
                </div>
              </a>
            </div>
          </Link>

          <Link href={"/ux-ui-design"}>
            <div className={styles.TechnoContainer}>
              <a href="/ux-ui-design">
                <Image
                  loading="lazy"
                  src={
                    "https://res.cloudinary.com/dnt0gyxrd/image/upload/v1654238116/UNT%20IMAGES/HOME/ux_ui_s0i0fh.jpg"
                  }
                  layout="fill"
                  objectFit="contain"
                  className={styles.TechnologyImage}
                />

                <div className={styles.TechnologyOverlay}>
                  <div className={styles.TechnologyText}>UX/ UI Design</div>
                </div>
              </a>
            </div>
          </Link>

          <Link href={"/digital-marketing"}>
            <div className={styles.TechnoContainer}>
              <a href="/digital-marketing">
                <Image
                  loading="lazy"
                  src={
                    "https://res.cloudinary.com/dnt0gyxrd/image/upload/v1654238188/UNT%20IMAGES/HOME/Socialmedia_vjiyup.jpg"
                  }
                  layout="fill"
                  objectFit="contain"
                  className={styles.TechnologyImage}
                />
                <div className={styles.TechnologyOverlay}>
                  <div className={styles.TechnologyText}>Digital Marketing</div>
                </div>
              </a>
            </div>
          </Link>

          <Link href={"/cloud-and-devops"}>
            <div className={styles.TechnoContainer}>
              <a href="/cloud-and-devops">
                <Img
                  loading="lazy"
                  src={
                    "https://res.cloudinary.com/dnt0gyxrd/image/upload/v1654238388/UNT%20IMAGES/HOME/cloud_frenkb.jpg"
                  }
                  alt="Avatar"
                  className={styles.TechnologyImage}
                />
                <div className={styles.TechnologyOverlay}>
                  <div className={styles.TechnologyText}>Cloud & Devops</div>
                </div>
              </a>
            </div>
          </Link>
        </Row>
      </div>
      {/* Intro container */}
      <div className={styles.IntroContainer}>
        <div>
          <Row className={styles.IntroHeadingContainer}>
            <h2
              className={styles.IntroHeading}
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              Hello, we are
              <br />
              ultroNeous.
            </h2>
          </Row>
          <div>
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
                  ultroNeous is a concept. A concept of innovation, excellence,
                  and exceptional creativity. Being the web and mobile app
                  development company, we are building technological solutions
                  for pioneers to reach their vision and for industries to
                  automate their processes. We strive to remove technical
                  obstacles to empower the various verticals and domains.
                  <br />
                  <br />
                  <span style={{ color: "#e49b00" }}>
                    We are a strong unit of people and call ourselves
                    ultroNeours.
                  </span>
                  &nbsp;An ultroNeour always goes the extra mile to create an
                  advanced technical solution for web, mobility, and enterprise
                  software. Our expert designers and developers have deep
                  knowledge and experience building scalable solutions using
                  cutting-edge technologies and industry-proven tools.
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
                <Img
                  loading="lazy"
                  src="/assets/group-image.png"
                  alt="group of ultroneous"
                  className={styles.IntroImage}
                />
              </Col>
            </Row>
            <Row className={styles.IntroArrowContain}>
              <Col xl={3} className={styles.IntroArrow}>
                <Link href="/about-ultroneous">
                  <Img
                    loading="lazy"
                    onMouseEnter={() => {
                      setArrowImage("/assets/orange-hover.png");
                      setScale("scale(1.2)");
                    }}
                    onMouseLeave={() => {
                      setArrowImage("/assets/circlearrow.svg");
                      setScale("scale(0.9)");
                    }}
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                    src={arrowImage}
                    style={{
                      height: "10rem",
                      transform: scale,
                      cursor: "pointer",
                      transition: "all 1s ease",
                    }}
                  />
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <CounterComponent data={CounterComponentData} />
      {/*what we offer */}
      <div className={styles.WhatWeOfferContainer}>
        <Row>
          <h2
            data-aos="zoom-in"
            data-aos-duration="2000"
            className={styles.mainheading}
          >
            What We Offer
          </h2>
        </Row>
        <Row className="text-align-center">
          <Col sm={4} md={12} lg={4} xl={4} className={styles.WhatWeOfferCol}>
            <div className={styles.Whatweofferimg}>
              <Img
                loading="lazy"
                alt="ui-ux-design"
                src="/assets/ui-ux-design.svg"
              />
            </div>
            <h2 className={styles.WhatweofferHeading}>UX / UI Design</h2>
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
            // data-aos="fade-down"
            // data-aos-duration="3000"
            sm={4}
            md={12}
            lg={4}
            xl={4}
            className={styles.WhatWeOfferCol}
          >
            <div className={styles.Whatweofferimg}>
              <Img
                loading="lazy"
                alt="developement"
                src="/assets/development.svg"
              />
            </div>
            <h2 className={styles.WhatweofferHeading}>Development</h2>
            <div className={styles.WhatWeOfferParaContainerMiddle}>
              <p className={styles.WhatweofferPargraph}>
                Our team will bring life into your concept and designs. Our
                quality web app and mobile app development team along with their
                unique QA approach will result in an high-end product.
              </p>
            </div>
          </Col>
          <Col
            // data-aos="fade-up"
            // data-aos-duration="3000"
            sm={4}
            md={12}
            lg={4}
            xl={4}
            className={styles.WhatWeOfferCol}
          >
            <div className={styles.Whatweofferimg}>
              <Img
                loading="lazy"
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
        data={data.data1.data ? data.data1.data : TestimonialsSliderData}
        title={"Client???s Feedback"}
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
              <div className={styles.DivImage}>
                <Img
                  loading="lazy"
                  src={
                    data.data2
                      ? data.data2.status == "success"
                        ? data.data2.data[0] == null
                          ? "/assets/a8.svg"
                          : data.data2.data[0].image
                        : "/assets/a8.svg"
                      : "/assets/a8.svg"
                  }
                  className={styles.ImageEffect}
                  alt="look at our design"
                />
              </div>
            </Col>
            <Col xl={4} md={4} sm={6} xs={6} className={styles.SingleImage}>
              <div className={styles.DivImage}>
                <Img
                  loading="lazy"
                  src={
                    data.data2
                      ? data.data2.status == "success"
                        ? data.data2.data[1] == null
                          ? "/assets/a2.svg"
                          : data.data2.data[1].image
                        : "/assets/a2.svg"
                      : "/assets/a2.svg"
                  }
                  className={styles.ImageEffect}
                  alt="look at our design"
                />
              </div>
            </Col>
            <Col xl={4} md={4} className={styles.SingleImage}>
              <div className={styles.DivImage}>
                <Img
                  loading="lazy"
                  src={
                    data.data2
                      ? data.data2.status == "success"
                        ? data.data2.data[2] == null
                          ? "/assets/a4.svg"
                          : data.data2.data[2].image
                        : "/assets/a4.svg"
                      : "/assets/a4.svg"
                  }
                  className={styles.ImageEffect}
                  alt="look at our design"
                />
              </div>
            </Col>
          </Row>
          <Row className={[styles.MxNone, styles.ImagesForTheHomepage]}>
            <Col xl={4} md={4} sm={6} xs={6} className={styles.SingleImage}>
              <div className={styles.DivImage}>
                <Img
                  loading="lazy"
                  src={
                    data.data2
                      ? data.data2.status == "success"
                        ? data.data2.data[3] == null
                          ? "/assets/a6.svg"
                          : data.data2.data[3].image
                        : "/assets/a6.svg"
                      : "/assets/a6.svg"
                  }
                  className={styles.ImageEffect}
                  alt="look at our design"
                />
              </div>
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
              <div className={styles.DivImage}>
                <Img
                  loading="lazy"
                  src={
                    data.data2
                      ? data.data2.status == "success"
                        ? data.data2.data[4] == null
                          ? "/assets/a3.svg"
                          : data.data2.data[4].image
                        : "/assets/a3.svg"
                      : "/assets/a3.svg"
                  }
                  className={styles.ImageEffect}
                  alt="look at our design"
                />
              </div>
            </Col>
          </Row>
          <Row className={styles.MxNone}>
            <Col xl={4} md={4} sm={6} xs={6} className={styles.SingleImage}>
              <div className={styles.DivImage}>
                <Img
                  loading="lazy"
                  src={
                    data.data2
                      ? data.data2.status == "success"
                        ? data.data2.data[5] == null
                          ? "/assets/a7.svg"
                          : data.data2.data[5].image
                        : "/assets/a7.svg"
                      : "/assets/a7.svg"
                  }
                  className={styles.ImageEffect}
                  alt="look at our design"
                />
              </div>
            </Col>
            <Col xl={4} md={4} sm={6} xs={6} className={styles.SingleImage}>
              <div className={styles.DivImage}>
                <Img
                  loading="lazy"
                  src={
                    data.data2
                      ? data.data2.status == "success"
                        ? data.data2.data[6] == null
                          ? "/assets/a1.svg"
                          : data.data2.data[6].image
                        : "/assets/a1.svg"
                      : "/assets/a1.svg"
                  }
                  className={styles.ImageEffect}
                  alt="look at our design"
                />
              </div>
            </Col>
            <Col xl={4} md={4} className={styles.SingleImage}>
              <div className={styles.DivImage}>
                <Img
                  loading="lazy"
                  src={
                    data.data2
                      ? data.data2.status == "success"
                        ? data.data2.data[7] == null
                          ? "/assets/a5.svg"
                          : data.data2.data[7].image
                        : "/assets/a5.svg"
                      : "/assets/a5.svg"
                  }
                  className={styles.ImageEffect}
                  alt="look at our design"
                />
              </div>
            </Col>
          </Row>
        </div>
        {data && <BlogSliderComponent list={data.blog.data} />}
      </div>
      <ImageViewer
        show={showModel}
        hide={() => setshowModal(false)}
        img={imageSrc}
      />
    </Layout>
  );
}
export async function getServerSideProps() {
  const res = await axios
    .get(`${API_URL}admin/getclientfeedback`, {
      params: { page: 1, limit: 8 },
    })
    .catch((e) => console.log(e));

  let res2;

  await axios
    .get(`${API_URL}admin/getlookatourdesign`)
    .then((res) => (res2 = res))
    .catch((e) => console.log(e));

  let res3;

  await axios
    // .get(`${API_URL}admin/getblog`)
    .get(`${API_URL}admin/getblog`)
    .then((res) => (res3 = res))
    .catch((e) => console.log(e));

  return {
    props: {
      data: {
        data1: res ? res.data : TestimonialsSliderData,
        data2: res2 ? res2.data : null,
        blog: res3 ? res3.data : null,
      },
    },
  };
}
