import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import HorizontalTabService from "@/components/HorizontalTabService";
import Layout from "@/components/Layout";
import QualitiesSection from "@/components/QualitiesSection";
import ServicesHeader from "@/components/ServicesHeader";
import PortfolioSlider from "@/components/Slider/PortfolioSlider";
import { Col, Image, Row } from "react-bootstrap";
import { WebTechnologyExpertise } from "utils/CONSTANT_DATA";
import {
  ListOfEntSoftSolService,
  ListQualitiesWebAppDev,
} from "utils/DataList/listOfData";
import styles from "@/styles/EnterpriseSolutions.module.css";
const EnterpriseSoftwareSolutions = () => {
  return (
    <Layout>
      <ServicesHeader
        numbers={"08"}
        heading={ListOfEntSoftSolService.heading}
        title={ListOfEntSoftSolService.title}
        paragraph={ListOfEntSoftSolService.paragraph}
        image={ListOfEntSoftSolService.image}
        alt={ListOfEntSoftSolService.alt}
        linkToNextService={"web-application-development"}
      />
      <Row className={styles.EntSoftSolQualitiesContainer}>
        <Col xl={4} xs={6} md={4} className={styles.EntSpace}>
          <div>
            <Image
              src={"/assets/1 E.svg"}
              height={71}
              className={styles.EntImage}
            />
            <h3 className={styles.HeadingStyle}>
              Custom Enterprise Software Development
            </h3>
          </div>
        </Col>
        <Col xl={4} xs={6} md={4} className={styles.EntSpace}>
          <div>
            <Image
              src={"/assets/2 E.svg"}
              height={71}
              className={styles.EntImage}
            />
            <h3 className={styles.HeadingStyle}>
              Enterprise Mobility Solution
            </h3>
          </div>
        </Col>
        <Col xl={4} xs={6} md={4} className={styles.EntSpace}>
          <div>
            <Image
              src={"/assets/3E.svg"}
              height={71}
              className={styles.EntImage}
            />
            <h3 className={styles.HeadingStyle}>Enterprise Data Management</h3>
          </div>
        </Col>
        {/* <div  /> */}
        <Col xl={4} xs={6} md={4} className={styles.EntSpace}>
          <div>
            <Image
              src={"/assets/4 E.svg"}
              height={71}
              className={styles.EntImage}
            />
            <h3 className={styles.HeadingStyle}>
              Legacy Application Modernisation
            </h3>
          </div>
        </Col>
        <Col xl={4} xs={6} md={4} className={styles.EntSpace}>
          <div>
            <Image
              src={"/assets/5 E.svg"}
              height={71}
              className={styles.EntImage}
            />
            <h3 className={styles.HeadingStyle}>
              Software Integration Services
            </h3>
          </div>
        </Col>
        <Col xl={4} xs={6} md={4} className={styles.EntSpace}>
          <div>
            <Image
              src={"/assets/6 E.svg"}
              height={71}
              className={styles.EntImage}
            />
            <h3 className={styles.HeadingStyle}>
              Software Maintenance & Support
            </h3>
          </div>
        </Col>

        {/*  */}
      </Row>
      {/*  */}
      <div className={styles.Softwarecontainer}>
        <Row className={styles.Softrow}>
          <Col xl={4}>
            <img src={"/assets/ent-sol.png"} className={styles.Softimg} />
          </Col>
          <Col xl={8} className={styles.Main}>
            <h2 className={styles.Softheading}>Our Process</h2>
            <div className={styles.Softsub}>
              <div className={styles.Softdetail}>
                <Row className={styles.Section}>
                  <Col xl={6} className={styles.Number}>
                    <span className={styles.Softnumber}>1</span>
                  </Col>
                  <Col xl={6} className={styles.Details}>
                    <div>
                      <h5 className={styles.Subtitle}>Planning</h5>
                      <p className={styles.Subp}>
                        Any sized business or organization can benefit from
                        Enterprise Software Solutions in numerous ways.
                      </p>
                    </div>
                  </Col>

                  <Col xl={6} className={styles.Number}>
                    <span className={styles.Softnumber}>2</span>
                  </Col>
                  <Col xl={6} className={styles.Details}>
                    <div>
                      <h5 className={styles.Subtitle}>Designing</h5>
                      <p className={styles.Subp}>
                        Any sized business or organization can benefit from
                        Enterprise Software Solutions in numerous ways.
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row className={styles.Section}>
                  <Col xl={6} className={styles.Number}>
                    <span className={styles.Softnumber}>3</span>
                  </Col>
                  <Col xl={6} className={styles.Details}>
                    <div>
                      <h5 className={styles.Subtitle}>Building</h5>
                      <p className={styles.Subp}>
                        Any sized business or organization can benefit from
                        Enterprise Software Solutions in numerous ways.
                      </p>
                    </div>
                  </Col>

                  <Col xl={6} className={styles.Number}>
                    <span className={styles.Softnumber}>4</span>
                  </Col>
                  <Col xl={6} className={styles.Details}>
                    <div>
                      <h5 className={styles.Subtitle}>Testing</h5>
                      <p className={styles.Subp}>
                        Any sized business or organization can benefit from
                        Enterprise Software Solutions in numerous ways.
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row className={styles.Section}>
                  <Col xl={6} className={styles.Number}>
                    <span className={styles.Softnumber}>5</span>
                  </Col>
                  <Col xl={6} className={styles.Details}>
                    <div>
                      <h5 className={styles.Subtitle}>Deployment</h5>
                      <p className={styles.Subp}>
                        Any sized business or organization can benefit from
                        Enterprise Software Solutions in numerous ways.
                      </p>
                    </div>
                  </Col>

                  <Col xl={6} className={styles.Number}>
                    <span className={styles.Softnumber}>6</span>
                  </Col>
                  <Col xl={6} className={styles.Details}>
                    <div>
                      <h5 className={styles.Subtitle}>Maintenance</h5>
                      <p className={styles.Subp}>
                        Any sized business or organization can benefit from
                        Enterprise Software Solutions in numerous ways.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <PortfolioSlider />
      <ChooseAsPerYourNeedSection />
    </Layout>
  );
};
export default EnterpriseSoftwareSolutions;
