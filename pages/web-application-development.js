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
    <Layout
      title={"Custom Web Application Development Services | ultroNeous"}
      description={
        "ultroNeous Technologies is one of the leading custom web app development company based in the USA/India & 15 other countries. Call us today for web development services"
      }
      keywords={
        "Web development company, Web application development company, Web app development services"
      }
    >
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
