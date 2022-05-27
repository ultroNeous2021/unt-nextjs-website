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
      title={"Best Digital Marketing Agency | SEO, PPC, SMM | ultroNeous"}
      description={
        "ultroNeous technologies is the leading digital marketing agency based in USA/India with expertise in SEO, PPC, SMM, and Google Ads. Call us now and Grow Digitally!"
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
        linkToNextService={"cloud-and-devops"}
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
