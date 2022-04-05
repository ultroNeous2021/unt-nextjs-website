import Layout from "@/components/Layout";
import ServicesHeader from "@/components/ServicesHeader";
import PortfolioSlider from "@/components/Slider/PortfolioSlider";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  ListOfMobileService,
  ListQualitiesMobileAppDev,
} from "utils/DataList/listOfData";
import QualitiesCard from "@/components/QualitiesCard";
import QualitiesSection from "@/components/QualitiesSection";
import HorizontalTabService from "@/components/HorizontalTabService";
import { MobileTechnologyExpertise } from "utils/CONSTANT_DATA";
import ChooseAsPerYourNeed from "@/components/ChooseAsPerYourNeed";
function MobileApplicationDevelopmentPage() {
  return (
    <Layout>
      <ServicesHeader
        numbers={"01"}
        heading={ListOfMobileService.heading}
        title={ListOfMobileService.title}
        paragraph={ListOfMobileService.paragraph}
        image={ListOfMobileService.image}
        alt={ListOfMobileService.alt}
        linkToNextService={"web-application-development"}
      />
      <QualitiesSection QualitiesList={ListQualitiesMobileAppDev} />
      <PortfolioSlider />
      <HorizontalTabService
        development={true}
        heading="Mobile Application Development
          Technologies Expertise"
        Technology={MobileTechnologyExpertise}
        hireButton
      />
      {/* <ChooseAsPerYourNeed /> */}
    </Layout>
  );
}

export default MobileApplicationDevelopmentPage;
