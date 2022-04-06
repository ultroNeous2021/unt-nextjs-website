import Layout from "@/components/Layout";
import ServicesHeader from "@/components/ServicesHeader";
import PortfolioSlider from "@/components/Slider/PortfolioSlider";
import { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  ListOfMobileService,
  ListQualitiesMobileAppDev,
} from "utils/DataList/listOfData";
import QualitiesCard from "@/components/QualitiesCard";
import QualitiesSection from "@/components/QualitiesSection";
import HorizontalTabService from "@/components/HorizontalTabService";
import {
  ChooseAsPerYourNeedData,
  MobileTechnologyExpertise,
} from "utils/CONSTANT_DATA";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
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
      <ChooseAsPerYourNeedSection />
    </Layout>
  );
}

export default MobileApplicationDevelopmentPage;
