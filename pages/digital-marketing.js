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
    <Layout
      title={
        "Best Digital Marketing Agency | Digital Marketing Services | ultroNeous "
      }
      description={
        "ultroNeous Technologies are the leading digital marketing company with expertise in SEO, PPC, Social Media Marketing, and Google Ads. Call us Now !!!"
      }
      keywords={
        "Digital marketing company, Digital marketing agency, digital marketing services, internet marketing company"
      }
    >
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
      />
      <PortfolioSlider />
      <ChooseAsPerYourNeedSection />
    </Layout>
  );
};
export default DigitalMarketing;
