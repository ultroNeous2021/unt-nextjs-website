import HorizontalTab from "@/components/HorizontalTab";
import Layout from "@/components/Layout";
import PortfolioSlider from "@/components/Slider/PortfolioSlider";
import Verticals from "@/components/Verticals";
import WhyClientChoose from "@/components/WhyClientChoose";
import YellowFilledWhiteButton from "@/components/YellowFilledWhiteButton";
import { Col, Image, Row } from "react-bootstrap";
import { WeExcelAtData } from "utils/CONSTANT_DATA";
import styles from "@/styles/Service.module.css";
import { ArrayOfServices } from "utils/DataList/listOfData";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import PagesHeaderComponent from "@/components/PagesHeaderComponent";
import Link from "next/link";
import { useRouter } from "next/router";

const CardServicesForMobile = (props) => {
  return (
    <Row className={styles.CardServiceSections}>
      {ArrayOfServices.map((values, index) => (
        <Col
          key={index}
          xl={3}
          xs={12}
          md={6}
          className={styles.CardServiceCol}
        >
          <div className={styles.CardServiceIcon}>
            <Image alt="icons-for-services" src={values.icon} />
          </div>
          <h2 className={styles.CardServiceSecName}>{values.name}</h2>
          <p className={styles.CardServiceContent}>{values.content}</p>
          <Link href={values.link}>
            <div className={styles.CardServiceKnowMoreButton}>
              Know More
              <span>
                <HiOutlineArrowNarrowRight
                  size={30}
                  style={{ marginLeft: "0.2em" }}
                />
              </span>
            </div>
          </Link>
        </Col>
      ))}
    </Row>
  );
};
const CardServicesForDesk = () => {
  return (
    <div className={styles.Servicecardcontainer}>
      <Row>
        {ArrayOfServices.map((values, index) => (
          <Col xl={3} md={4} className={styles.Services}>
            <div className={styles.flipcard}>
              <div
                className={styles.flipcardinner}
                style={{ background: `url('${values.background}')` }}
              >
                <div className={styles.flipcardfront} />
                <div className={styles.flipcardback}>
                  <p className={styles.FlipP}>
                    {values.content}
                    <Link href={values.link}>
                      <div className={styles.CardServiceKnowMoreButton}>
                        Know More
                        <span>
                          <HiOutlineArrowNarrowRight
                            size={30}
                            style={{ marginLeft: "0.2em" }}
                          />
                        </span>
                      </div>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
function ServicePage() {
  const [mobileMode, setMobileMode] = useState(false);
  const goto = useRouter();
  useEffect(() => {
    window.innerWidth >= 320 && window.innerWidth <= 1080
      ? setMobileMode(true)
      : setMobileMode(false);
  });
  return (
    <Layout>
      <PagesHeaderComponent
        text={"Services"}
        heading={"We are great at this "}
      />
      {/* starting paragraph */}
      <Row className={styles.HeadPragraphSectionService}>
        <Col sm={8} md={12} xl={12} className={styles.Headerpragraphspace}>
          <p className={styles.Headerpragraphservices}>
            ultroNeous is a full-service software development and consulting
            firm with rich technical expertise and proven business experience.
            Our talented tech-geeks will get you covered from the very early
            stage of idea generation, technology stack consultation, design &
            development to post-development maintenance support. We offer
            cutting-edge technology solutions for each mentioned service in a
            structured and methodical way.
            <br />
            <br />
            We deliver exceptional web and mobility solutions that will meet the
            demands of startups as well as big enterprise level businesses. Our
            tech-expertise will help you obtain the real value of your business
            through custom software development. Have a look at our extensive
            range of service offerings and get tech-expertise, business
            expertise and innovative ideas under one roof.
          </p>
        </Col>
      </Row>
      {/* cards */}
      {mobileMode ? <CardServicesForMobile /> : <CardServicesForDesk />}
      {/* Not sure.... */}
      <Row className={styles.NotSureContainer}>
        <Col sm={12} className={styles.NotSureParagraphCol}>
          <p className={styles.NotSureParagraph}>
            Not sure what service you need?
            <br />
            Let us carefully analyze your business situation
            <br />
            and goals to offer you a proper solution.
          </p>
        </Col>
        <div className={styles.NotSureButton}>
          <YellowFilledWhiteButton
            clickhandle={() => goto.push("/contact-us")}
            val={"Contact us"}
            arrow={true}
          />
        </div>
      </Row>
      <HorizontalTab data={WeExcelAtData} title={"We Excel At"} />
      <PortfolioSlider />
      <WhyClientChoose />
      <Verticals />
    </Layout>
  );
}

export default ServicePage;
