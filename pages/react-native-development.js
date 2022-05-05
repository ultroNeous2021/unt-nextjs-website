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
          "Business Android applications are the most crucial platform for business success. You can hire android developers from ultroNeous, who have extensive expertise and experience in developing high-performing, scalable, and secured android apps for different types of business. We are an android development company that has assisted countless businesses in increasing revenue and expanding their operations through the use of android applications."
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
