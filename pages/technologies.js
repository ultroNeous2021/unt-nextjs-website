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
              <a href="">
                <div
                  className={`${styles.Card1} ${styles.CardMain}`}
                  onClick={() => goto.push("/reactjs-development")}
                >
                  <FaReact className={styles.Icon} />
                  <h5>React JS</h5>
                  <Image
                    src={"/assets/Arrownext.svg"}
                    className={styles.Arrownxt}
                  />
                </div>
              </a>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <div
                className={`${styles.Card2} ${styles.CardMain}`}
                onClick={() => goto.push("/angular-development")}
              >
                <FaAngular className={styles.Icon} />
                <h5>Angular</h5>
                <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                />
              </div>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <div
                className={`${styles.Card3} ${styles.CardMain}`}
                onClick={() => goto.push("/vuejs-development")}
              >
                <FaVuejs className={styles.Icon} />
                <h5>Vue Js </h5>
                <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                />
              </div>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <div
                className={`${styles.Card4} ${styles.CardMain}`}
                // onClick={() => goto.push("/front-end-development")}
              >
                <FaHtml5 className={styles.Icon} />
                <h5>HTML5</h5>
                <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                />
              </div>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <div
                className={`${styles.Card5} ${styles.CardMain}`}
                // onClick={() => goto.push("/front-end-development")}
              >
                <SiNextdotjs className={styles.Icon} />
                <h5>Next Js</h5>
                <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                />
              </div>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <div
                className={`${styles.Card6} ${styles.CardMain}`}
                // onClick={() => goto.push("/front-end-development")}
              >
                <SiGatsby className={styles.Icon} />
                <h5>Gatsby</h5>
                <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                />
              </div>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <div
                className={`${styles.Card7} ${styles.CardMain}`}
                // onClick={() => goto.push("/front-end-development")}
              >
                <SiNuxtdotjs className={styles.Icon} />
                <h5>Nuxt Js</h5>
                <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                />
              </div>
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
              <div
                className={`${styles.Card8} ${styles.CardMain}`}
                onClick={() => goto.push("/nodejs-development")}
              >
                <FaNodeJs className={styles.Icon} />
                <h5>Node Js </h5>
                <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                />
              </div>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <div
                className={`${styles.Card9} ${styles.CardMain}`}
                onClick={() => goto.push("/laravel-development")}
              >
                <FaLaravel className={styles.Icon} />
                <h5>Laravel</h5>
                <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                />
              </div>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <div
                className={`${styles.Card10} ${styles.CardMain}`}
                onClick={() => goto.push("/php-development")}
              >
                <FaPhp className={styles.Icon} />
                <h5>Php</h5>
                <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                />
              </div>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <div
                className={`${styles.Card11} ${styles.CardMain}`}
                onClick={() => goto.push("/codeigniter-development")}
              >
                <SiCodeigniter className={styles.Icon} />
                <h5>Codeigniter</h5>
                <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                />
              </div>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <div
                className={`${styles.Card12} ${styles.CardMain}`}
                onClick={() => goto.push("/magento-development")}
              >
                <FaMagento className={styles.Icon} />
                <h5>Magento</h5>
                <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                />
              </div>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <div
                className={`${styles.Card13} ${styles.CardMain}`}
                onClick={() => goto.push("/wordpress-development")}
              >
                <FaWordpress className={styles.Icon} />
                <h5>Wordpress</h5>
                <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                />
              </div>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <div
                className={`${styles.Card14} ${styles.CardMain}`}
                onClick={() => goto.push("/shopify-development")}
              >
                <FaShopify className={styles.Icon} />
                <h5>Shopify</h5>
                <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                />
              </div>
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
              <div
                className={`${styles.Card15} ${styles.CardMain}`}
                onClick={() => goto.push("/android-development")}
              >
                <SiKotlin className={styles.Icon} />
                <h5>Kotlin</h5>
                <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                />
              </div>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <div
                className={`${styles.Card16} ${styles.CardMain}`}
                onClick={() => goto.push("/ios-development")}
              >
                <SiSwift className={styles.Icon} />
                <h5>Swift</h5>
                <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                />
              </div>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <div
                className={`${styles.Card17} ${styles.CardMain}`}
                onClick={() => goto.push("/flutter-development")}
              >
                <SiFlutter className={styles.Icon} />
                <h5>Flutter</h5>
                <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                />
              </div>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <div
                className={`${styles.Card18} ${styles.CardMain}`}
                onClick={() => goto.push("/react-native-development")}
              >
                <FaReact className={styles.Icon} />
                <h5>React Native</h5>
                <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                />
              </div>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <div
                className={`${styles.Card19} ${styles.CardMain}`}
                // onClick={() => goto.push("/reactjs-development")}
              >
                <FaJava className={styles.Icon} />
                <h5>Java</h5>
                <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                />
              </div>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <div
                className={`${styles.Card20} ${styles.CardMain}`}
                onClick={() => goto.push("/ios-development")}
              >
                <Image
                  src={"/assets/ObjectC.svg"}
                  className={styles.Icon}
                  width={100}
                  style={{ marginTop: "1.7rem" }}
                  // height={100}
                />
                <h5>Object-C</h5>
                <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                />
              </div>
            </Col>
            <Col xl={3} xs={6} className={styles.Containt}>
              <div
                className={`${styles.Card21} ${styles.CardMain}`}
                onClick={() => goto.push("/xamarin-development")}
              >
                <SiXamarin className={styles.Icon} />
                <h5>Xamarin</h5>
                <Image
                  src={"/assets/Arrownext.svg"}
                  className={styles.Arrownxt}
                />
              </div>
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
      console.log(currentPosition.scroll);
    });
  }, []);
  const scrollingChalu = () => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
    });
  };
  return (
    <Layout>
      <PagesHeaderComponent text={"Technologies"} heading={"We Excel at"} />
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
      <div className={styles.blankSpace}></div>
      <ChooseAsPerYourNeedSection />
    </Layout>
  );
};
export default Technologies;
