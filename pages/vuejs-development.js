import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import HirePageHeaderComponent from "@/components/HirePageHeaderComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HireShopifylist,
  HireShopifyServiceslist,
  HireVueJSlist,
  HireVueJSServiceslist,
} from "utils/DataList/listOfData";

const HireVuejsDeveloper = () => {
  const title =
    "VueJS Development Company | Hire Vuejs developer | ultroNeous ";
  const keyword =
    "vuejs developer, hire vuejs developer, vuejs development company";
  const description =
    "Get your applications designed and developed by ultroNeous' in-house VueJS developers. Hire VueJS developers from the best Vuejs development company.";
  return (
    <Layout title={title} description={description} keywords={keyword}>
      <HirePageHeaderComponent
        heading={
          <>
            VueJS
            <br />
            Development
          </>
        }
        techname={"/assets/VueJS.svg"}
        detail={
          "VueJS framework is ideal when you want to develop lightweight and smooth-running applications. This advanced framework focuses on the view layer and allows easy integration and highly intuitive user interfaces. Hire our VueJS Developers, who meet your requirements for a fine creative digital experience, and make sure your app sets the bar for high performance and interaction."
        }
      />
      <ServicesIncludedSlider listOfserviceincluded={HireVueJSServiceslist} />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of VueJS
            <br />
            Development
          </>
        }
        datalist={HireVueJSlist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="VueJS Developer"
      />
      <QuoteComponent
        descreption={
          <>
            <p>
              Connect with us right away to hire the industry best
              <br />
              VueJs developers for quality development work.
            </p>
          </>
        }
      />
    </Layout>
  );
};
export default HireVuejsDeveloper;
