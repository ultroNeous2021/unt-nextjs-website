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
import { useEffect } from "react";
const Technologies = () => {
  const goto = useRouter();
  useEffect(() => {
    AOS.init();
  }, []);
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
      <div className={styles.MainTechcontainer}>
        <div className={styles.Frontcontainer}>
          <Row className={styles.Mainrow}>
            <Col xl={4} xs={12}>
              <h2
                className={styles.Cathead}
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                Front end
              </h2>
            </Col>
            <Col xl={8} xs={12}>
              <Row>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card1}>
                    <FaReact className={styles.Icon} />
                    <h5>React Js</h5>
                    <Image
                      onClick={() => goto.push("/hire-reactjs-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card2}>
                    <FaAngular className={styles.Icon} />
                    <h5>Angular</h5>
                    <Image
                      onClick={() => goto.push("/hire-angular-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card3}>
                    <FaVuejs className={styles.Icon} />
                    <h5>Vue Js</h5>
                    <Image
                      onClick={() => goto.push("/hire-vuejs-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card4}>
                    <FaHtml5 className={styles.Icon} />
                    <h5>Html5</h5>
                    <Image
                      onClick={() => goto.push("/hire-front-end-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card5}>
                    <SiNextdotjs className={styles.Icon} />
                    <h5>Next Js</h5>
                    <Image
                      onClick={() => goto.push("/hire-front-end-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card6}>
                    <SiGatsby className={styles.Icon} />
                    <h5>Gatsby</h5>
                    <Image
                      onClick={() => goto.push("/hire-front-end-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card7}>
                    <SiNuxtdotjs className={styles.Icon} />
                    <h5>Nuxt Js</h5>
                    <Image
                      onClick={() => goto.push("/hire-front-end-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className={styles.Backendcontainer}>
          <Row className={styles.Mainrow}>
            <Col xl={4} xs={12}>
              <h2
                className={styles.Cathead}
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                Back end
              </h2>
            </Col>
            <Col xl={8} xs={12}>
              <Row>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card8}>
                    <FaNodeJs className={styles.Icon} />
                    <h5>Node Js</h5>
                    <Image
                      onClick={() => goto.push("/hire-nodejs-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card9}>
                    <FaLaravel className={styles.Icon} />
                    <h5>Laravel</h5>
                    <Image
                      onClick={() => goto.push("/hire-laravel-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card10}>
                    <FaPhp className={styles.Icon} />
                    <h5>Php</h5>
                    <Image
                      onClick={() => goto.push("/hire-php-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card11}>
                    <SiCodeigniter className={styles.Icon} />
                    <h5>Codeigniter</h5>
                    <Image
                      onClick={() => goto.push("/hire-codeigniter-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card12}>
                    <FaMagento className={styles.Icon} />
                    <h5>Magento</h5>
                    <Image
                      onClick={() => goto.push("/hire-magento-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card13}>
                    <FaWordpress className={styles.Icon} />
                    <h5>Wordpress</h5>
                    <Image
                      onClick={() => goto.push("/hire-wordpress-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card14}>
                    <FaShopify className={styles.Icon} />
                    <h5>Shopify</h5>
                    <Image
                      onClick={() => goto.push("/hire-shopify-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div className={styles.Mobilecontainer}>
          <Row className={styles.Mainrow}>
            <Col xl={4} xs={12}>
              <h2
                className={styles.Cathead}
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                Mobile App
              </h2>
            </Col>
            <Col xl={8} xs={12}>
              <Row>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card15}>
                    <SiKotlin className={styles.Icon} />
                    <h5>Kotlin</h5>
                    <Image
                      onClick={() => goto.push("/hire-android-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card16}>
                    <SiSwift className={styles.Icon} />
                    <h5>Swift</h5>
                    <Image
                      onClick={() => goto.push("/hire-ios-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card17}>
                    <SiFlutter className={styles.Icon} />
                    <h5>Flutter</h5>
                    <Image
                      onClick={() => goto.push("/hire-flutter-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card18}>
                    <FaReact className={styles.Icon} />
                    <h5>React Native</h5>
                    <Image
                      onClick={() => goto.push("/hire-react-native-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card19}>
                    <FaJava className={styles.Icon} />
                    <h5>Java</h5>
                    <Image
                      onClick={() => goto.push("/hire-reactjs-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card20}>
                    <FaFacebookF className={styles.Icon} />
                    <h5>React Js</h5>
                    <Image
                      onClick={() => goto.push("/hire-reactjs-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
                <Col xl={3} xs={6} className={styles.Containt}>
                  <div className={styles.Card21}>
                    <SiXamarin className={styles.Icon} />
                    <h5>Xamarin</h5>
                    <Image
                      onClick={() => goto.push("/hire-xamarin-developer")}
                      src={"/assets/Arrownext.svg"}
                      className={styles.Arrownxt}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.blankSpace}></div>
      <ChooseAsPerYourNeedSection />
    </Layout>
  );
};
export default Technologies;
