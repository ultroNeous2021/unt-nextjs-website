import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import HorizontalTabService from "@/components/HorizontalTabService";
import Layout from "@/components/Layout";
import QualitiesSection from "@/components/QualitiesSection";
import ServicesHeader from "@/components/ServicesHeader";
import PortfolioSlider from "@/components/Slider/PortfolioSlider";
import { WebTechnologyExpertise } from "utils/CONSTANT_DATA";
import {
  ListOfWebService,
  ListQualitiesWebAppDev,
} from "utils/DataList/listOfData";

function WebApplicationDevelopmentPage() {
  return (
    <Layout>
      <ServicesHeader
        numbers={"02"}
        heading={ListOfWebService.heading}
        title={ListOfWebService.title}
        paragraph={ListOfWebService.paragraph}
        image={ListOfWebService.image}
        alt={ListOfWebService.alt}
        linkToNextService={"digital-marketing"}
      />
      <QualitiesSection QualitiesList={ListQualitiesWebAppDev} />
      <PortfolioSlider />
      <HorizontalTabService
        development={true}
        heading="Web Application Development 
Technologies Expertise"
        Technology={WebTechnologyExpertise}
        hireButton
      />
      <ChooseAsPerYourNeedSection />
    </Layout>
  );
}

export default WebApplicationDevelopmentPage;
