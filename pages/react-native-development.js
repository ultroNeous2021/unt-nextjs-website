import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import HirePageHeaderComponent from "@/components/HirePageHeaderComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HireReactNativelist,
  HireReactNativeServiceslist,
  HireShopifylist,
  HireShopifyServiceslist,
} from "utils/DataList/listOfData";

const HireReactnativeDeveloper = () => {
  const keyword =
    "react native development company, hire react native developer, react native developer, hire dedicated react native developer, react native app development company";
  const title =
    "React Native Development Services | Hire Developer | ultroNeous";
  const description =
    "ultroNeous offers services in React Native development for your iOS, Android, and Cross-Platform app requirements. Hire the best React Native developer.";
  return (
    <Layout title={title} description={description} keywords={keyword}>
      <HirePageHeaderComponent
        heading={
          <>
            React Native
            <br />
            Development
          </>
        }
        techname={"/assets/ReactNative.svg"}
        detail={
          "As a prominent React Native development company, we come up with secure, fast, and elegant solutions that meet your business needs. React Native lets you build applications that run on multiple operating systems and helps you save time. Hire dedicated React Native developers who deliver next-gen cross-platform applications."
        }
      />
      <ServicesIncludedSlider
        listOfserviceincluded={HireReactNativeServiceslist}
      />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of React Native
            <br />
            Development
          </>
        }
        datalist={HireReactNativelist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="React Native Developer"
      />
      <QuoteComponent
        descreption={
          <>
            <p>
              Get high-performance applications for business
              <br />
              growth only with React Native and ultroNeous.
            </p>
          </>
        }
      />
    </Layout>
  );
};
export default HireReactnativeDeveloper;
