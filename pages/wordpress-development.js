import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import HirePageHeaderComponent from "@/components/HirePageHeaderComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HireWordPresslist,
  HireWordPressServiceslist,
} from "utils/DataList/listOfData";

const HireWordPressDeveloper = () => {
  const title =
    "WordPress Development Company | Hire WordPress Developer | ultroNeous";
  const keyword =
    "Hire wordpress developer, Hire wordpress expert, wordpress development company, hire dedicated wordpress developer";
  const description =
    "ultroNeous Technologies is the best WordPress development company with headquarters located in India. Hire our WordPress Developers at the best price!!";
  return (
    <Layout title={title} description={description} keywords={keyword}>
      <HirePageHeaderComponent
        heading={
          <>
            WordPress
            <br />
            Development
          </>
        }
        techname={"/assets/lnew-wp.svg"}
        detail={
          "WordPress is one of the most preferred choices for formulating websites. It helps you to edit the content of your website without technical interventions. We are a WordPress development company, and our team is made up of tech-savvies who are eager to build second-to-none web projects. Make a positive impact on your prospects with unique WordPress features. Hire WordPress experts to build unrivaled platforms."
        }
      />
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
