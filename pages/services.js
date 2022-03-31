import HorizontalTab from "@/components/HorizontalTab";
import Layout from "@/components/Layout";
import PortfolioSlider from "@/components/Slider/PortfolioSlider";
import Verticals from "@/components/Verticals";
import WhyClientChoose from "@/components/WhyClientChoose";
import YellowFilledWhiteButton from "@/components/YellowFilledWhiteButton";
import { Col, Row } from "react-bootstrap";
import { WeExcelAtData } from "utils/CONSTANT_DATA";
import styles from "@/styles/Service.module.css"

function ServicePage() {
  return (
    <Layout>
      <Row className={styles.ServiceHeaderRow}>
        <div className={styles.ServiceHeaderContainer}>
          <p className={styles.ServiceHeaderParagraphMain}>Services</p>
          <h1 className={styles.ServiceHeaderHeadingMain}>We are great at this </h1>
        </div>
      </Row>
      {/* starting paragraph */}
      <Row className={styles.HeadPragraphSectionService}>
        <Col sm={6}>
          <p className={styles.Headerpragraphservices}>
            ultroNeous is a full-service software development and consulting firm with rich technical expertise and proven business experience. Our talented tech-geeks will get you covered from the very early stage of idea generation, technology stack consultation, design & development to post-development maintenance support. We offer cutting-edge technology solutions for each mentioned service in a structured and methodical way.<br /><br />
            We deliver exceptional web and mobility solutions that will meet the demands of startups as well as big enterprise level businesses. Our tech-expertise will help you obtain the real value of your business through custom software development. Have a look at our extensive range of service offerings and get tech-expertise, business expertise and innovative ideas under one roof.
          </p>
        </Col>
      </Row>
      {/* Not sure.... */}
      <Row className={styles.NotSureContainer}>
        <Col sm={12}>
          <p className={styles.NotSureParagraph}>
            Not sure what service you need?<br />
            Let us carefully analyze your business situation<br />
            and goals to offer you a proper solution.
          </p>
        </Col>
        <div className={styles.NotSureButton}>
          <YellowFilledWhiteButton val={"Contact us"} arrow={true} />
        </div>
      </Row>
      <HorizontalTab data={WeExcelAtData} title={"We Excel At"} />
      <PortfolioSlider />
      <WhyClientChoose />
      <Verticals />
    </Layout>
  )
}

export default ServicePage;
