import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import Layout from "@/components/Layout";
import PagesHeaderComponent from "@/components/PagesHeaderComponent";
import TransparentButton from "@/components/TransparentButton";
import styles from "@/styles/EngagementModel.module.css";
import { Col, Image, Row } from "react-bootstrap";
const EngagementModel = () => {
  return (
    <Layout
      title={"Pricing & Engagement Models at ultroNeous Technologies"}
      description={
        "ultoNeous offers flexible and result-oriented engagement models for software development. Hire best software developers from us at the affordable pricing."
      }
    >
      <PagesHeaderComponent
        css2={{ margin: "0%" }}
        css={{ paddingBottom: "0%" }}
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
          Being industry experts, we are aware that every customer and business
          has different processes and plans to cater to their success.
          ultroNeous understands the same and offers various Business Engagement
          Models to suit your requirement. Whether you have a good sizable
          enterprise project, an idea with a defined scope, or a need to fill
          the place with missing experts in your team, we have a solution for
          you.
        </p>
        <p className={styles.Paragraph2}>
          It is very important to choose the right model to ensure the best
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
                      Do you want to own a team without the hassle of
                      recruitment, infrastructure investment, heavy running
                      costs, and daily team management issues? If yes, then this
                      model is for you. It’s suitable for young entrepreneurs,
                      CTOs, Product Managers, and other tech savants to hire
                      their offshore team to build a project.
                    </p>
                    <p className={styles.Carddescription}>
                      Your defined team will be devoted to working on your
                      project using agile methodologies and will follow all the
                      guidelines and reporting requirements. This model is the
                      best suited for your dream project idea which requires
                      multiple iterations and market research/ feedback.
                    </p>
                    <span className={styles.number}>
                      {/* <span style={{ margin: "" }}> */}
                      <a href="/contact-us">
                        <TransparentButton
                          val={"Contact Us"}
                          link={"/contact-us"}
                        />
                      </a>
                      {/* </span> */}
                    </span>
                  </div>

                  <div className="col">
                    <div className={styles.rowtext}>
                      <Row>
                        <Col xl={4} md={6} className={styles.SpecialImage2}>
                          <Image
                            src="/assets/1(1).svg"
                            alt="Review the candidate profile"
                            className={styles.imageSpace}
                          />
                        </Col>
                        <Col xl={5} md={6}>
                          <Image
                            src="/assets/1(2).svg"
                            alt="Meet and interact with candidate"
                            className={styles.imageSpace}
                          />
                        </Col>
                        <Col xl={4} md={6}>
                          <Image
                            style={{ paddingTop: "0%" }}
                            src="/assets/1(3).svg"
                            className={styles.imageSpace}
                          />
                        </Col>
                        <Col xl={5} md={6}>
                          <Image
                            style={{ paddingTop: "0%" }}
                            src="/assets/1(4).svg"
                            alt="Sign the contract"
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
                      When you have a clear mid-size project requirement with a
                      defined set of features, the project-based price model
                      will best meet your needs. With this model, the Business
                      Analyst team will discuss your project in detail, getting
                      the technical team involved as required to make sure the
                      concept has been understood properly. If you are sure
                      about the project flow and not anticipating run time
                      changes, then this business model is for you.
                    </p>
                    <p className={styles.Carddescription}>
                      The project manager will be the point of the contact, who
                      will give you the periodic updates and get the development
                      done by the team. This Engagement model attracts a
                      waterfall methodology with a clear set of processes. Any
                      run-time changes or feature requests might affect the
                      project plan and terms.
                    </p>
                    <span className={styles.number}>
                      <a href="/contact-us">
                        <TransparentButton
                          val={"Contact Us"}
                          link={"/contact-us"}
                        />
                      </a>
                    </span>
                  </div>
                  <div className="col">
                    <div className={styles.rowtext}>
                      <Row>
                        <Col xl={4} md={6}>
                          <Image
                            src="/assets/2(1).svg"
                            alt="Share your project requirements"
                            className={styles.imageSpace}
                          />
                        </Col>
                        <Col xl={5} md={6}>
                          <Image
                            src="/assets/2(2).svg"
                            alt="Finalize the scope of work"
                            className={styles.imageSpace}
                          />
                        </Col>
                        <Col xl={4} md={6} className={styles.SpecialSpace}>
                          <Image
                            style={{ paddingTop: "0%" }}
                            src="/assets/1(3).svg"
                            className={styles.imageSpace}
                          />
                        </Col>
                        <Col xl={5} md={6}>
                          <Image
                            style={{ paddingTop: "0%" }}
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
                      If you are running a team already and missing resources to
                      fill the team, we have this option available for you. With
                      this business model, you will be able to hire one or
                      multiple resources from various technology stacks and as
                      per the expertise to fill in your remote team. This model
                      works best for the people who like to choose their team
                      members directly, and want to take care of their progress
                      and report on a daily basis.
                    </p>
                    {/* <p className={styles.Carddescription}>
                      Your defined team would be dedicatedly working on your
                      project in Agile methodology, and follow all the
                      guidelines and reporting required from your end. This
                      business model is the best suit for your dream project
                      idea which requires multiple iterations and market
                      research/ feedbacks.
                    </p> */}
                    <span className={styles.number}>
                      <a href="/contact-us">
                        <TransparentButton
                          val={"Contact Us"}
                          link={"/contact-us"}
                        />
                      </a>
                    </span>
                  </div>
                  <div className="col">
                    <div className={styles.rowtext}>
                      <div className={styles.rowtext}>
                        <Row>
                          <Col xl={4} md={6}>
                            <Image
                              src="/assets/2(1).svg"
                              className={styles.imageSpace}
                            />
                          </Col>
                          <Col xl={5} md={6}>
                            <Image
                              src="/assets/3(2).svg"
                              alt="Review the candidate profile and meet"
                              className={styles.imageSpace}
                            />
                          </Col>
                          <Col xl={4} md={6} className={styles.SpecialSpace}>
                            <Image
                              style={{ paddingTop: "0%" }}
                              src="/assets/1(3).svg"
                              alt="Discuss pricing and finalize contract"
                              className={styles.imageSpace}
                            />
                          </Col>
                          <Col xl={5} md={6}>
                            <Image
                              style={{ paddingTop: "0%" }}
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
                {/* <div className={styles.CardUid} style={{}}>
                  <h1>4</h1>
                </div> */}
                <div className={styles.rows}>
                  <div className="col">
                    <h2 className={styles.Cardtitle}>Technology Partner</h2>
                    <p className={styles.Carddescription}>
                      As a successful organization, we understand the need of
                      establishing a B2B partnership with an agency. You can not
                      have the required technology experts all the time, and
                      with this business model, you will be getting the
                      resources/ team required on a time-to-time basis. Whether
                      it’s project-based work or a supply of resources in a
                      dedicated manner, you will always be getting the best
                      price as per agreement.
                    </p>
                    <p className={styles.Carddescription}>
                      We take pride in being on time, upfront, and transparent.
                      We respect and value your idea/clients, that is why we
                      sign the legal non-disclosure agreement (NDA) with you to
                      make sure your idea and data are completely protected.
                      Being a technology partner, we will be making sure to win
                      each project from your end by being flexible in helping
                      you win clients.
                    </p>
                    <span className={styles.number}>
                      <a href="/contact-us">
                        <TransparentButton
                          val={"Contact Us"}
                          link={"/contact-us"}
                        />
                      </a>
                    </span>
                  </div>
                  <div className="col">
                    <div className={styles.rowtext}>
                      <div className={styles.rowtext}>
                        <Row>
                          <Col xl={4} md={6} className={styles.SpecialImage2}>
                            <Image
                              src="/assets/4(1).svg"
                              alt="Discuss your needs or requirements"
                              className={styles.imageSpace}
                            />
                          </Col>
                          <Col xl={5} md={6}>
                            <Image
                              src="/assets/4(2).svg"
                              alt="Define the resources"
                              className={styles.imageSpace}
                            />
                          </Col>
                          <Col xl={4} md={6}>
                            <Image
                              style={{ paddingTop: "0%" }}
                              src="/assets/4(3).svg"
                              alt="Finalize the project time period"
                              className={styles.imageSpace}
                            />
                          </Col>
                          <Col xl={5} md={6}>
                            <Image
                              style={{ paddingTop: "0%" }}
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
      {/* <ChooseAsPerYourNeedSection /> */}
    </Layout>
  );
};
export default EngagementModel;
