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
        numbers={"01"}
        heading={ListOfWebService.heading}
        title={ListOfWebService.title}
        paragraph={ListOfWebService.paragraph}
        image={ListOfWebService.image}
        alt={ListOfWebService.alt}
        linkToNextService={"mobile-application-development"}
      />
      <QualitiesSection QualitiesList={ListQualitiesWebAppDev} />
      <HorizontalTabService
        development={true}
        heading="Web Application Development 
        Technologies Expertise"
        Technology={WebTechnologyExpertise}
        hireButton
      />
      <PortfolioSlider />
      <ChooseAsPerYourNeedSection />
    </Layout>
  );
}

export default WebApplicationDevelopmentPage;
