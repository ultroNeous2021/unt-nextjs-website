import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import Layout from "@/components/Layout";
import PagesHeaderComponent from "@/components/PagesHeaderComponent";
import styles from "@/styles/Technologies.module.css";
import { useRouter } from "next/router";
import { Col, Image, Row } from "react-bootstrap";
import {
  FaAngular,
  FaFacebookF,
  FaHtml5,
  FaJava,
  FaLaravel,
  FaMagento,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaShopify,
  FaVuejs,
  FaWordpress,
} from "react-icons/fa";
import {
  SiCodeigniter,
  SiFlutter,
  SiGatsby,
  SiKotlin,
  SiNextdotjs,
  SiNuxtdotjs,
  SiSwift,
  SiXamarin,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import Link from "next/link";
export const FrontEnd = () => {
  const goto = useRouter();
  return (
    <div className={styles.Frontcontainer}>
      <Row className={styles.Mainrow}>
        <Col xl={4} xs={12}>
          <h2
            className={styles.Cathead}
            // data-aos="zoom-in"
            // data-aos-duration="2000"
          >
            Front end
          </h2>
        </Col>
        <Col xl={8} xs={12}>
          <Row>
            <Col xl={3} xs={6} className={styles.Containt}>
              <Link href={"/reactjs-development"}>
                <a href={"/reactjs-development"}>
                  <div className={`${styles.Card1} ${styles.CardMain}`}>
                    <FaReact className={styles.Icon} />
                    <h3>React JS</h3>
                    <Image
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </a>
              </Link>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <Link href={"/angular-development"}>
                <a href={"/angular-development"}>
                  <div className={`${styles.Card2} ${styles.CardMain}`}>
                    <FaAngular className={styles.Icon} />
                    <h3>Angular</h3>
                    <Image
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </a>
              </Link>
            </Col>

            <Col xl={3} xs={6} className={styles.Containt}>
              {/* <Link href={"/front-end-development"}>
                <a href={"/front-end-development"}> */}
              <div className={`${styles.Card4} ${styles.CardMain}`}>
                <FaHtml5 className={styles.Icon} />
                <h3>HTML5</h3>
                {/* <Image
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    /> */}
              </div>
              {/* </a>
              </Link> */}
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              {/* <Link href={"/nextjs-development"}>
                <a href={"/nextjs-development"}> */}
              <div className={`${styles.Card5} ${styles.CardMain}`}>
                <SiNextdotjs className={styles.Icon} />
                <h3>Next Js</h3>
                {/* <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                /> */}
              </div>
              {/* </a>
              </Link> */}
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              {/* <Link href={"/front-end-development"}>
                <a href={"/front-end-development"}> */}
              <div className={`${styles.Card6} ${styles.CardMain}`}>
                <SiGatsby className={styles.Icon} />
                <h3>Gatsby</h3>
                {/* <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                /> */}
              </div>
              {/* </a>
              </Link> */}
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              {/* <Link href={"/front-end-development"}>
                <a href={"/front-end-development"}> */}
              <div className={`${styles.Card7} ${styles.CardMain}`}>
                <SiNuxtdotjs className={styles.Icon} />
                <h3>Nuxt Js</h3>
                {/* <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                /> */}
              </div>
              {/* </a>
              </Link> */}
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <Link href={"/vuejs-development"}>
                <a href={"/vuejs-development"}>
                  <div className={`${styles.Card3} ${styles.CardMain}`}>
                    <FaVuejs className={styles.Icon} />
                    <h3>Vue Js </h3>
                    <Image
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </a>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export const BackEnd = () => {
  const goto = useRouter();
  return (
    <div className={styles.Backendcontainer}>
      <Row className={styles.Mainrow}>
        <Col xl={4} xs={12}>
          <h2
            className={styles.Cathead}
            // data-aos="zoom-in"
            // data-aos-duration="2000"
          >
            Back end
          </h2>
        </Col>
        <Col xl={8} xs={12}>
          <Row>
            <Col xl={3} xs={6} className={styles.Containt}>
              <Link href={"/nodejs-development"}>
                <a href={"/nodejs-development"}>
                  <div className={`${styles.Card8} ${styles.CardMain}`}>
                    <FaNodeJs className={styles.Icon} />
                    <h3>Node Js </h3>
                    <Image
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </a>
              </Link>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <Link href={"/laravel-development"}>
                <a href={"/laravel-development"}>
                  <div className={`${styles.Card9} ${styles.CardMain}`}>
                    <FaLaravel className={styles.Icon} />
                    <h3>Laravel</h3>
                    <Image
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </a>
              </Link>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <Link href={"/php-development"}>
                <a href={"/php-development"}>
                  <div className={`${styles.Card10} ${styles.CardMain}`}>
                    <FaPhp className={styles.Icon} />
                    <h3>Php</h3>
                    <Image
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </a>
              </Link>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <Link href={"/codeigniter-development"}>
                <a href={"/codeigniter-development"}>
                  <div className={`${styles.Card11} ${styles.CardMain}`}>
                    <SiCodeigniter className={styles.Icon} />
                    <h3>Codeigniter</h3>
                    <Image
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </a>
              </Link>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <Link href={"/magento-development"}>
                <a href={"/magento-development"}>
                  <div className={`${styles.Card12} ${styles.CardMain}`}>
                    <FaMagento className={styles.Icon} />
                    <h3>Magento</h3>
                    <Image
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </a>
              </Link>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <Link href={"/wordpress-development"}>
                <a href={"/wordpress-development"}>
                  <div className={`${styles.Card13} ${styles.CardMain}`}>
                    <FaWordpress className={styles.Icon} />
                    <h3>Wordpress</h3>
                    <Image
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </a>
              </Link>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <Link href={"/shopify-development"}>
                <a href={"/shopify-development"}>
                  <div className={`${styles.Card14} ${styles.CardMain}`}>
                    <FaShopify className={styles.Icon} />
                    <h3>Shopify</h3>
                    <Image
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </a>
              </Link>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <Link href={"/python-development"}>
                <a href={"/python-development"}>
                  <div className={`${styles.Card22} ${styles.CardMain}`}>
                    <FaPython className={styles.Icon} />
                    <h3>Python</h3>
                    <Image
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </a>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export const MobileApp = () => {
  const goto = useRouter();
  return (
    <div className={styles.Mobilecontainer}>
      <Row className={styles.Mainrow}>
        <Col xl={4} xs={12}>
          <h2
            className={styles.Cathead}
            // data-aos="zoom-in"
            // data-aos-duration="2000"
          >
            Mobile App
          </h2>
        </Col>
        <Col xl={8} xs={12}>
          <Row>
            <Col xl={3} xs={6} className={styles.Containt}>
              <Link href={"/android-development"}>
                <a href={"/android-development"}>
                  <div className={`${styles.Card15} ${styles.CardMain}`}>
                    <SiKotlin className={styles.Icon} />
                    <h3>Kotlin</h3>
                    <Image
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </a>
              </Link>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <Link href={"/ios-development"}>
                <a href={"/ios-development"}>
                  <div className={`${styles.Card16} ${styles.CardMain}`}>
                    <SiSwift className={styles.Icon} />
                    <h3>Swift</h3>
                    <Image
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </a>
              </Link>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <Link href={"/flutter-development"}>
                <a href={"/flutter-development"}>
                  <div className={`${styles.Card17} ${styles.CardMain}`}>
                    <SiFlutter className={styles.Icon} />
                    <h3>Flutter</h3>
                    <Image
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </a>
              </Link>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <Link href={"/react-native-development"}>
                <a href={"/react-native-development"}>
                  <div className={`${styles.Card18} ${styles.CardMain}`}>
                    <FaReact className={styles.Icon} />
                    <h3>React Native</h3>
                    <Image
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </a>
              </Link>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              {/* <Link href={"/android-development"}>
                <a href={"/android-development"}> */}
              <div className={`${styles.Card19} ${styles.CardMain}`}>
                <FaJava className={styles.Icon} />
                <h3>Java</h3>
                {/* <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                /> */}
              </div>
              {/* </a>
              </Link> */}
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <Link href={"/ios-development"}>
                <a href={"/ios-development"}>
                  <div className={`${styles.Card20} ${styles.CardMain}`}>
                    <Image
                      src={"/assets/ObjectC.svg"}
                      className={styles.Icon}
                      width={100}
                      style={{ marginTop: "1.7rem" }}
                      // height={100}
                    />
                    <h3>Object-C</h3>
                    <Image
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </a>
              </Link>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <Link href={"/xamarin-development"}>
                <a href={"/xamarin-development"}>
                  <div className={`${styles.Card21} ${styles.CardMain}`}>
                    <SiXamarin className={styles.Icon} />
                    <h3>Xamarin</h3>
                    <Image
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </a>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
const Technologies = () => {
  const arrayOfTechnologies = [<FrontEnd />, <BackEnd />, <MobileApp />];
  const currentPosition = useRef();
  useEffect(() => {
    AOS.refresh();
    AOS.init();
    window.addEventListener("scroll", () => {
      // console.log(currentPosition.scroll);
    });
  }, []);
  const scrollingChalu = () => {
    window.addEventListener("scroll", () => {
      // console.log(window.scrollY);
    });
  };
  return (
    <Layout
      title={"Hire Dedicated Developers | ultroNeous"}
      description={
        "Hire expert developers with range of expertise from ultroNeous. We are one-stop solutions for all things in frontend, backend, and mobile development"
      }
    >
      <PagesHeaderComponent text={"Expertise"} heading={"We Excel at"} />
      <div className={styles.ParagraphSection}>
        <p>
          ultroNeous is not a place to do monotonous work, but a concept where
          team building and knowledge growth is the primary focus. We are
          committed to build the technology beauties and solutions which helps
          startups, SMEs as well as Fortune 500 companies to meet their smart
          goals.
        </p>
      </div>

      <div
        className={styles.MainTechcontainer}
        onScroll={() => scrollingChalu()}
      >
        <FrontEnd ref={currentPosition} />
        <BackEnd ref={currentPosition} />
        <MobileApp ref={currentPosition} />
      </div>
      <ChooseAsPerYourNeedSection />
    </Layout>
  );
};
export default Technologies;
