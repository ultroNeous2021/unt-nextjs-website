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
    <Layout
      title={"Android & iOS Mobile App Development Company in USA | ultroNeous"}
      description={
        "ultroNeous Technologies is a mobile app development company working on Android and iOS providing mobile app development services across the globe."
      }
      keywords={
        "mobile app development company, mobile app development services, mobile app development, mobile application development services"
      }
    >
      <ServicesHeader
        numbers={"02"}
        heading={ListOfMobileService.heading}
        title={ListOfMobileService.title}
        paragraph={ListOfMobileService.paragraph}
        image={ListOfMobileService.image}
        alt={ListOfMobileService.alt}
        linkToNextService={"ux-ui-design"}
      />
      <QualitiesSection QualitiesList={ListQualitiesMobileAppDev} />
      <HorizontalTabService
        development={true}
        heading="Mobile Application Development
        Technologies Expertise"
        Technology={MobileTechnologyExpertise}
        hireButton
      />
      <PortfolioSlider />
      <ChooseAsPerYourNeedSection />
    </Layout>
  );
}

export default MobileApplicationDevelopmentPage;
