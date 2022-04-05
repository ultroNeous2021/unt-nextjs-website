import Layout from "@/components/Layout";
import QualitiesSection from "@/components/QualitiesSection";
import PortfolioSlider from "@/components/Slider/PortfolioSlider";
import HorizontalTabService from "@/components/HorizontalTabService";
import { DigitalMarketingExpertise } from "utils/CONSTANT_DATA";
import {
  ListQualitiesDigitalMarketing,
  ListOfDigitalMarketingService,
} from "utils/DataList/listOfData";
import ServicesHeader from "@/components/ServicesHeader";
const DigitalMarketing = () => {
  return (
    <Layout>
      <ServicesHeader
        numbers={"03"}
        heading={ListOfDigitalMarketingService.heading}
        title={ListOfDigitalMarketingService.title}
        paragraph={ListOfDigitalMarketingService.paragraph}
        image={ListOfDigitalMarketingService.image}
        alt={ListOfDigitalMarketingService.alt}
        linkToNextService={"mobile-application-development"}
      />
      <QualitiesSection QualitiesList={ListQualitiesDigitalMarketing} />
      <PortfolioSlider />
      <HorizontalTabService
        heading="Mobile Application Development
          Technologies Expertise"
        Technology={DigitalMarketingExpertise}
        hireButton
      />
    </Layout>
  );
};
export default DigitalMarketing;
