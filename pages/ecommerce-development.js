import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import HorizontalTabService from "@/components/HorizontalTabService";
import Layout from "@/components/Layout";
import QualitiesSection from "@/components/QualitiesSection";
import ServicesHeader from "@/components/ServicesHeader";
import PortfolioSlider from "@/components/Slider/PortfolioSlider";
import {
  EcommerceExpertise,
  WebTechnologyExpertise,
} from "utils/CONSTANT_DATA";
import {
  ListOfEcommDevService,
  ListQualitiesEcommerce,
  ListQualitiesWebAppDev,
} from "utils/DataList/listOfData";

const EcommerceDevelopment = () => {
  return (
    <Layout title={""} description={""}>
      <ServicesHeader
        numbers={"07"}
        heading={ListOfEcommDevService.heading}
        title={ListOfEcommDevService.title}
        paragraph={ListOfEcommDevService.paragraph}
        image={ListOfEcommDevService.image}
        alt={ListOfEcommDevService.alt}
        linkToNextService={"enterprise-software-solutions"}
      />
      <QualitiesSection QualitiesList={ListQualitiesEcommerce} />
      <HorizontalTabService
        development={true}
        heading="E-Commerce Development 
        Technologies Expertise"
        Technology={EcommerceExpertise}
        hireButton
      />
      <PortfolioSlider />
      <ChooseAsPerYourNeedSection />
    </Layout>
  );
};
export default EcommerceDevelopment;
