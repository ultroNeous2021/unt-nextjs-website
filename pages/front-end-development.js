import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import HorizontalTabService from "@/components/HorizontalTabService";
import Layout from "@/components/Layout";
import QualitiesSection from "@/components/QualitiesSection";
import ServicesHeader from "@/components/ServicesHeader";
import PortfolioSlider from "@/components/Slider/PortfolioSlider";
import { FrontEndExpertise, WebTechnologyExpertise } from "utils/CONSTANT_DATA";
import {
  ListOfFrontEndService,
  ListQualitiesFrontEndDevelopment,
  ListQualitiesWebAppDev,
} from "utils/DataList/listOfData";

const FrontEndDevelopment = () => {
  return (
    <Layout
      title={"Top Frontend App Development Services | ultroNeous "}
      description={
        "Looking for Front-End app development services? ultroNeous Technologies provide the best front-end development services from development to maintenance support. Contact us Now!"
      }
      keywords={
        "frontend development services, reactjs development company, Angular development company, app development services"
      }
    >
      <ServicesHeader
        numbers={"06"}
        heading={ListOfFrontEndService.heading}
        title={ListOfFrontEndService.title}
        paragraph={ListOfFrontEndService.paragraph}
        image={ListOfFrontEndService.image}
        alt={ListOfFrontEndService.alt}
        linkToNextService={"ecommerce-development"}
      />
      <QualitiesSection QualitiesList={ListQualitiesFrontEndDevelopment} />
      <HorizontalTabService
        development={true}
        heading="Front End Development 
        Technologies Expertise"
        Technology={FrontEndExpertise}
        hireButton
      />
      <PortfolioSlider />
      <ChooseAsPerYourNeedSection />
    </Layout>
  );
};
export default FrontEndDevelopment;
