import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import HorizontalTabService from "@/components/HorizontalTabService";
import Layout from "@/components/Layout";
import QualitiesSection from "@/components/QualitiesSection";
import ServicesHeader from "@/components/ServicesHeader";
import PortfolioSlider from "@/components/Slider/PortfolioSlider";
import {
  CloudandDevopsExpertise,
  WebTechnologyExpertise,
} from "utils/CONSTANT_DATA";
import {
  ListOfCloudandDevopsService,
  ListQualitiesCloudDevops,
  ListQualitiesWebAppDev,
} from "utils/DataList/listOfData";
const CloudAndDevops = () => {
  return (
    <Layout
      title={"Cloud & Devops Computing Services | ultroNeous"}
      description={
        "Searching for cloud computing services and devops services? We are the leading cloud computing company and devops company globally providing with all solutions at one place."
      }
      keywords={
        "cloud computing services, devops service, cloud computing company, devops company"
      }
    >
      <ServicesHeader
        numbers={"05"}
        heading={ListOfCloudandDevopsService.heading}
        title={ListOfCloudandDevopsService.title}
        paragraph={ListOfCloudandDevopsService.paragraph}
        image={ListOfCloudandDevopsService.image}
        alt={ListOfCloudandDevopsService.alt}
        linkToNextService={"front-end-development"}
      />
      <QualitiesSection QualitiesList={ListQualitiesCloudDevops} />
      <HorizontalTabService
        development={true}
        heading="Cloud and Devops Expertise"
        Technology={CloudandDevopsExpertise}
        hireButton
      />
      <PortfolioSlider />
      <ChooseAsPerYourNeedSection />
    </Layout>
  );
};
export default CloudAndDevops;
