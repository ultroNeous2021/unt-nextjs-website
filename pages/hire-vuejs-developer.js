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
  const keyword =
    "vuejs developer , hire vuejs developer , vuejs development company";
  const description =
    "ultroNeous Technologies arranges to hire vuejs developers and programmers for high-quality web and mobile app development. We are a vuejs development company with experienced developers. Hire Now!!";
  return (
    <Layout description={description} keywords={keyword}>
      <HirePageHeaderComponent
        heading={
          <>
            VueJS
            <br />
            Development
          </>
        }
        detail={
          "Leverage the VueJS framework's capabilities to create progressive and reliable web and mobile applications for your business. Improve the productivity and performance of your real-time business apps using VueJs development to increase revenue and efficiency. Hire VueJS developers from ultroNeous or other well-known VueJS development company to bring your vision to life."
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
