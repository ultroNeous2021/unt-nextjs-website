import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import Layout from "@/components/Layout";
import PagesHeaderComponent from "@/components/PagesHeaderComponent";
import styles from "@/styles/EngagementModel.module.css";
import { Col, Image, Row } from "react-bootstrap";
const EngagementModel = () => {
  return (
    <Layout
    // title={"Pricing & Engagement Models at ultroNeous Technologies"}
    // description={
    //   "ultoNeous offers flexible and result-oriented engagement models for software development. Hire best software developers from us at the affordable pricing."
    // }
    >
      <PagesHeaderComponent
        css2={{ margin: "0%" }}
        // css={{ }}
        heading={<>Every Business is different</>}
        text={"Engagement Model"}
      />
      <div className={styles.PheadingContainer}>
        <h1
          className={styles.Pheading}
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          We have a business model for all!
        </h1>
      </div>
      <div className={styles.ParagraphContainer}>
        <p className={styles.Paragraph1}>
          Being an industry expert, we are aware that every customer and
          business carries the different processes and plans to cater their
          success. We are ultroNeous understands the same and carries various
          Business Engagement Models to suit your requirement. Whether you have
          a good sizable enterprise project, an idea with a defined scope or a
          need to fill the place of missing experts in your team; we have a
          solution for you.
        </p>
        <p className={styles.Paragraph2}>
          It is very important to choose the correct model to get the best
          progress in your project. Talk to our expert now to identify the one
          suitable for you.
        </p>
      </div>
      <div
        className={`${styles.section}  ${styles.sectionCards}`}
        data-anim-scroll-group="cards"
      >
        <div className={`${styles.sectionContent}`}>
          <div className={styles.cardsWrapper}>
            <ul>
              <li className={styles.card01}>
                <div className={styles.rows}>
                  <div className="col">
                    <h2 className={styles.Cardtitle}>Hire a Team</h2>
                    <p className={styles.Carddescription}>
                      Do you want to own a team but without the hassle of
                      recruitment, infrastructure investment, heavy running
                      costs and daily team management issues? If yes then this
                      business model is for you. It’s suitable for the young
                      entrepreneurs, CTO, Product managers and other technical
                      people to hire their offshore team to build a project.
                    </p>
                    <p className={styles.Carddescription}>
                      Your defined team would be dedicatedly working on your
                      project in Agile methodology, and follow all the
                      guidelines and reporting required from your end. This
                      business model is the best suit for your dream project
                      idea which requires multiple iterations and market
                      research/ feedbacks.
                    </p>
                    <span className={styles.number}>01</span>
                  </div>
                  <div className="col">
                    <div className={styles.rowtext}>
                      <Row>
                        <Col xl={6} md={6}>
                          <Image
                            src="/assets/1(1).svg"
                            className={styles.imageSpace}
                          />
                        </Col>
                        <Col xl={6} md={6}>
                          <Image
                            src="/assets/1(2).svg"
                            className={styles.imageSpace}
                          />
                        </Col>
                        <Col xl={6} md={6}>
                          <Image
                            src="/assets/1(3).svg"
                            className={styles.imageSpace}
                          />
                        </Col>
                        <Col xl={6} md={6}>
                          <Image
                            src="/assets/1(4).svg"
                            className={styles.imageSpace}
                          />
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </li>
              <li className={styles.card02}>
                <div className={styles.rows}>
                  <div className="col">
                    <h2 className={styles.Cardtitle}>Project Basis</h2>
                    <p className={styles.Carddescription}>
                      When you have a clear mid size project requirement with
                      the defined set of features, the project-based price model
                      works best for you. With this model, the Business Analyst
                      team will discuss your project in detail, getting the
                      technical team involved as required to make sure the
                      concept has been understood properly. If you are sure
                      about the project flow and not anticipating run time
                      changes then this business model is for you.
                    </p>
                    <p className={styles.Carddescription}>
                      The project manager would be the point of the contact who
                      will be giving you the periodic updates and get the
                      development done from the team. With this waterfall
                      methodology, the run time changes and requests would
                      attract the cost and timeframe changes.
                    </p>
                    <span className={styles.number}>02</span>
                  </div>
                  <div className="col">
                    <div className={styles.rowtext}>
                      <Row>
                        <Col xl={6} md={6}>
                          <Image
                            src="/assets/2(1).svg"
                            className={styles.imageSpace}
                          />
                        </Col>
                        <Col xl={6} md={6}>
                          <Image
                            src="/assets/2(2).svg"
                            className={styles.imageSpace}
                          />
                        </Col>
                        <Col xl={6} md={6}>
                          <Image
                            src="/assets/1(3).svg"
                            className={styles.imageSpace}
                          />
                        </Col>
                        <Col xl={6} md={6}>
                          <Image
                            src="/assets/1(4).svg"
                            className={styles.imageSpace}
                          />
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </li>
              <li className={styles.card03}>
                <div className={styles.rows}>
                  <div className="col">
                    <h2 className={styles.Cardtitle}>Hire a Resource</h2>
                    <p className={styles.Carddescription}>
                      If you are running a team already and having missing
                      resources to fill the team, we have this option available
                      for you. With this business model, you will be able to
                      hire one or multiple resources from various technology
                      stack and as per the expertise to fill in your remote
                      team. This model works best for the people who likes to
                      choose their team member directly, and want to take care
                      of their progress and reporting on the daily basis.
                    </p>
                    {/* <p className={styles.Carddescription}>
                      Your defined team would be dedicatedly working on your
                      project in Agile methodology, and follow all the
                      guidelines and reporting required from your end. This
                      business model is the best suit for your dream project
                      idea which requires multiple iterations and market
                      research/ feedbacks.
                    </p> */}
                    <span className={styles.number}>03</span>
                  </div>
                  <div className="col">
                    <div className={styles.rowtext}>
                      <div className={styles.rowtext}>
                        <Row>
                          <Col xl={6} md={6}>
                            <Image
                              src="/assets/2(1).svg"
                              className={styles.imageSpace}
                            />
                          </Col>
                          <Col xl={6} md={6}>
                            <Image
                              src="/assets/3(2).svg"
                              className={styles.imageSpace}
                            />
                          </Col>
                          <Col xl={6} md={6}>
                            <Image
                              src="/assets/1(3).svg"
                              className={styles.imageSpace}
                            />
                          </Col>
                          <Col xl={6} md={6}>
                            <Image
                              src="/assets/1(4).svg"
                              className={styles.imageSpace}
                            />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className={`${styles.card04}  ${styles.lastCard}`}>
                <div className={styles.rows}>
                  <div className="col">
                    <h2 className={styles.Cardtitle}>Technology Partner</h2>
                    <p className={styles.Carddescription}>
                      As a successful organization, we understand the need of
                      establishing the B2B partnership with an agency. You can
                      not have the require technology experts all the time, and
                      with this business model you will be getting the
                      resources/ team required on time to time to basis. Whether
                      it’s a project basis work or a supply of resource on a
                      dedicated manner, you always will be getting the best
                      price as per agreement.
                    </p>
                    <p className={styles.Carddescription}>
                      We value the privacy and will sign the NDA with you to
                      make sure you data and client information is completely
                      secured. Being a technology partner, we will be making
                      sure to win each project from your end by being flexible
                      in helping you win clients.
                    </p>
                    <span className={styles.number}>04</span>
                  </div>
                  <div className="col">
                    <div className={styles.rowtext}>
                      <div className={styles.rowtext}>
                        <Row>
                          <Col xl={6} md={6}>
                            <Image
                              src="/assets/4(1).svg"
                              className={styles.imageSpace}
                            />
                          </Col>
                          <Col xl={6} md={6}>
                            <Image
                              src="/assets/4(2).svg"
                              className={styles.imageSpace}
                            />
                          </Col>
                          <Col xl={6} md={6}>
                            <Image
                              src="/assets/4(3).svg"
                              className={styles.imageSpace}
                            />
                          </Col>
                          <Col xl={6} md={6}>
                            <Image
                              src="/assets/1(4).svg"
                              className={styles.imageSpace}
                            />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ChooseAsPerYourNeedSection />
    </Layout>
  );
};
export default EngagementModel;
