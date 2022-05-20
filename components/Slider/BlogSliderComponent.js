import styles from "@/styles/components/BlogSliderComponent.module.css";
import Link from "next/link";
import { useRef } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Slider from "react-slick/lib/slider";
const BlogSliderComponent = (props) => {
  const list = [
    {
      name: "What is Progressive Web App (PWA)?",
      des: "PWA stands for Progressive Web App. These are the apps that are built with well-known technologies, such as HTML, CSS, and JavaScript.",
    },
    {
      name: "What is M-Commerce? How it's different from e-Commerce?",
      des: "M-commerce, also known as mobile commerce, is buying goods online via handheld devices like mobile phones, which lets you shop from anywhere.",
    },
    {
      name: " What is Serverless Architecture?",
      des: "Learn about Serverless Architecture, its applications, and how it is becoming important in the coming years.",
    },
    {
      name: "What is MERN Stack? A Complete Explanation of MERN Stack",
      des: "What is MERN Stack? MERN and its technologies explained. MERN stands for MongoDB, ExpressJS, ReactJS, and NodeJS.",
    },
    {
      name: "PHP vs JavaScript - Guide to Choose the Best One for Your Project",
      des: "PHP or JavaScript? Comparisons between the programming language is going on for years among the programmer. It is hard to decide to choose which technology.",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    // centerMode: true,
    // centerPadding: "60px",
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
          centerPadding: "75px",
        },
      },
      {
        breakpoint: 885,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: false,
        },
      },
    ],
  };
  const sliderRef = useRef();

  return (
    <div className={styles.BlogSliderContainer}>
      <Row>
        <Col xl={6} md={8}>
          <h2 className={styles.BlogSliderHeading}>News & Blog</h2>
        </Col>
        <Col xl={6} md={4} className={styles.arrowSetup}>
          <Image
            src={"/assets/blog-left.png"}
            className={`${styles.ArrowSize} ${styles.ArrowSpace}`}
            onClick={() => sliderRef.current.slickPrev()}
          />

          <Image
            src={"/assets/blog-right.png"}
            className={`${styles.ArrowSize} ${styles.ArrowSpace}`}
            onClick={() => sliderRef.current.slickNext()}
          />
        </Col>
      </Row>
      <Row>
        <Slider {...settings} ref={sliderRef}>
          {props.list
            ? props.list.length > 0
              ? props.list.map((v) => (
                  <div className={styles.BlogContainer}>
                    <div>
                      <Image src={v.image} fluid className={styles.BlogImage} />
                    </div>
                    <div className={styles.BlogDescription}>
                      <div className={styles.TitleSection}>
                        <a href={v.link} target={"_blank"}>
                          <Image
                            src="/assets/blog-arrow.svg"
                            className={styles.blogArrow}
                          />
                        </a>
                        <h3>{v.title}</h3>
                      </div>
                      {/* <p>{v.description}</p> */}
                    </div>
                  </div>
                ))
              : null
            : null}
        </Slider>
      </Row>
    </div>
  );
};
export default BlogSliderComponent;
