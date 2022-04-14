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
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
const DigitalMarketing = () => {
  return (
    <Layout>
      <ServicesHeader
        numbers={"04"}
        heading={ListOfDigitalMarketingService.heading}
        title={ListOfDigitalMarketingService.title}
        paragraph={ListOfDigitalMarketingService.paragraph}
        image={ListOfDigitalMarketingService.image}
        alt={ListOfDigitalMarketingService.alt}
        linkToNextService={"web-application-development"}
      />
      <QualitiesSection QualitiesList={ListQualitiesDigitalMarketing} />
      <HorizontalTabService
        heading="Digital Marketing
        Technologies Expertise"
        Technology={DigitalMarketingExpertise}
        hireButton
      />
      <PortfolioSlider />
      <ChooseAsPerYourNeedSection />
    </Layout>
  );
};
export default DigitalMarketing;
