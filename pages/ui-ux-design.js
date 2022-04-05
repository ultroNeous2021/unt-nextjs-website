import Layout from "@/components/Layout";
import PortfolioSlider from "@/components/Slider/PortfolioSlider";
import ServicesHeader from "@/components/ServicesHeader";
import { ListOfUiUxDesign, ListQualitiesUIUX } from "utils/DataList/listOfData";
import QualitiesSection from "@/components/QualitiesSection";
const UiUxDesign = () => {
  return (
    <Layout>
      <ServicesHeader
        numbers={"04"}
        heading={ListOfUiUxDesign.heading}
        title={ListOfUiUxDesign.title}
        paragraph={ListOfUiUxDesign.paragraph}
        image={ListOfUiUxDesign.image}
        alt={ListOfUiUxDesign.alt}
        linkToNextService={"web-app-developement"}
      />
      <QualitiesSection QualitiesList={ListQualitiesUIUX} />
      <PortfolioSlider />
    </Layout>
  );
};
export default UiUxDesign;
