import Layout from "@/components/Layout";
import PortfolioSlider from "@/components/Slider/PortfolioSlider";
import ServicesHeader from "@/components/ServicesHeader";
import { ListOfUiUxDesign, ListQualitiesUIUX } from "utils/DataList/listOfData";
import QualitiesSection from "@/components/QualitiesSection";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/UiuxPage.module.css";
import { useEffect, useState } from "react";
import YellowFilledWhiteButton from "@/components/YellowFilledWhiteButton";
const UiUxDesign = () => {
  const [image, setImage] = useState("/assets/process web.png");

  useEffect(() => {
    window.innerWidth >= 320 && window.innerWidth <= 720
      ? setImage("/assets/process res.png")
      : setImage("/assets/process web.png");
  });

  return (
    <Layout>
      <ServicesHeader
        numbers={"04"}
        heading={ListOfUiUxDesign.heading}
        title={ListOfUiUxDesign.title}
        paragraph={ListOfUiUxDesign.paragraph}
        image={ListOfUiUxDesign.image}
        alt={ListOfUiUxDesign.alt}
        linkToNextService={"mobile-application-development"}
      />
      <QualitiesSection QualitiesList={ListQualitiesUIUX} />
      <Row className={styles.NotableContainer}>
        <Col className={styles.NotableBack}>
          <div className={styles.NotableContainsContainer}>
            <h2 className={styles.NotableHeading}>
              Not able to interact with
              <br />
              users through design?
            </h2>
            <div className={styles.NotableBtnContainer}>
              <div className={styles.NotableBtn}>
                Lets us Help <span></span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className={styles.WeTrustContainer}>
        <Col xl={12}>
          <h2 className={styles.WeTrustHeading}>We Trust & Follow Process</h2>
        </Col>
        <Col sm={12} xl={12} className={styles.WeTrustImageContainer}>
          <Image src={image} fluid />
          <p className={styles.WeTrustParagraph}>
            Enhanced user experience, better user engagement, building a
            consumer base, increase in brand awareness, improved ROI, increased
            repeating users- all are common advantages of having good UI/UX on
            your business web solutions when it is done by an experienced UI UX
            design company.
          </p>
          <div className={styles.WeTrustBtnContainer}>
            <YellowFilledWhiteButton val={"Let's get connected"} arrow={true} />
          </div>
        </Col>
      </Row>
      <PortfolioSlider />
      <ChooseAsPerYourNeedSection />
    </Layout>
  );
};
export default UiUxDesign;
