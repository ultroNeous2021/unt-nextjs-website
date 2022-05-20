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
    <Layout
      title={
        "Enterprise Software Development Company in USA/India | ultroNeous"
      }
      description={
        "Our enterprise level software development services have helped many international brands to streamline the process. Use our expertise to develop your next application Let’s talk!"
      }
      keywords={
        "Enterprise software development company, Enterprise software company, Enterprise software companies, Enterprise software development services"
      }
    >
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
        <Col xl={4} xs={12} md={4} className={styles.EntSpace}>
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
        <Col xl={4} xs={12} md={4} className={styles.EntSpace}>
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
        <Col xl={4} xs={12} md={4} className={styles.EntSpace}>
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
        <Col xl={4} xs={12} md={4} className={styles.EntSpace}>
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
        <Col xl={4} xs={12} md={4} className={styles.EntSpace}>
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
        <Col xl={4} xs={12} md={4} className={styles.EntSpace}>
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
                      <h3 className={styles.Subtitle}>Planning</h3>
                      <p className={styles.Subp}>
                        Analyzing the requirements & finalizing the scope work
                        for the project from the client & developer end.
                      </p>
                    </div>
                  </Col>

                  <Col xl={6} className={styles.Number}>
                    <span className={styles.Softnumber}>2</span>
                  </Col>
                  <Col xl={6} className={styles.Details}>
                    <div>
                      <h3 className={styles.Subtitle}>Designing</h3>
                      <p className={styles.Subp}>
                        Creating UX/UI design that is interactive and
                        user-friendly according to the scope of the project.
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
                      <h3 className={styles.Subtitle}>Building</h3>
                      <p className={styles.Subp}>
                        Once the design is approved our developers bifurcate the
                        work from the developer side.
                      </p>
                    </div>
                  </Col>

                  <Col xl={6} className={styles.Number}>
                    <span className={styles.Softnumber}>4</span>
                  </Col>
                  <Col xl={6} className={styles.Details}>
                    <div>
                      <h3 className={styles.Subtitle}>Testing</h3>
                      <p className={styles.Subp}>
                        After the development is completed, the QA team will
                        ensure the bug-free solution at the individual & Mass
                        levels.
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
                      <h3 className={styles.Subtitle}>Deployment</h3>
                      <p className={styles.Subp}>
                        Final staging is deployment, once QA will submit the
                        report our developers will upload the build.
                      </p>
                    </div>
                  </Col>

                  <Col xl={6} className={styles.Number}>
                    <span className={styles.Softnumber}>6</span>
                  </Col>
                  <Col xl={6} className={styles.Details}>
                    <div>
                      <h3 className={styles.Subtitle}>Maintenance</h3>
                      <p className={styles.Subp}>
                        Once the software goes live all we need to look after is
                        regular updates and frequent maintenance checks.
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
