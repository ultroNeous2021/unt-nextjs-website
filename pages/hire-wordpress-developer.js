import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HireWordPresslist,
  HireWordPressServiceslist,
} from "utils/DataList/listOfData";

const HireWordPressDeveloper = () => {
  const keyword =
    "Hire wordpress developer , Hire wordpress expert , wordpress development company , hire dedicated wordpress developer";
  const description =
    "Hire wordpress developer for Full-Time, Part-Time. ultroNeous Technologies is a wordpress development company servivng with dedicated wordpress developer in more then 15 countries. Contact us now!!";
  return (
    <Layout description={description} keywords={keyword}>
      <ServicesIncludedSlider
        listOfserviceincluded={HireWordPressServiceslist}
      />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of WordPress
            <br />
            Development
          </>
        }
        datalist={HireWordPresslist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="WordPress Developer"
      />
      <QuoteComponent
        descreption={
          <>
            <p>
              Get your high performing WordPress web solution
              <br />
              developed by industry-best developers at ultroNeous
            </p>
          </>
        }
      />
    </Layout>
  );
};
export default HireWordPressDeveloper;
