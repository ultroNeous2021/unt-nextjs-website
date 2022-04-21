import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import HirePageHeaderComponent from "@/components/HirePageHeaderComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HireAndroidlist,
  HireAndroidServiceslist,
  HireShopifylist,
  HireShopifyServiceslist,
} from "utils/DataList/listOfData";

const HireAndroidDeveloper = () => {
  const keyword =
    "hire android app developers , hire android developers , android development company , android app development company";
  const description =
    "Hire android app developers from ultroNeous Technologies for custom android app development. We provide android developers for full-time, part-time, and contract basis. Hire Now!!";
  return (
    <Layout description={description} keywords={keyword}>
      <HirePageHeaderComponent
        heading={
          <>
            Android
            <br />
            Development
          </>
        }
        detail={
          "Business Android applications are the most crucial platform for business success. You can hire android developers from ultroNeous, who have extensive expertise and experience in developing high-performing, scalable, and secured android apps for different types of business. We are an android development company that has assisted countless businesses in increasing revenue and expanding their operations through the use of android applications."
        }
      />
      <ServicesIncludedSlider listOfserviceincluded={HireAndroidServiceslist} />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of Android
            <br />
            Development
          </>
        }
        datalist={HireAndroidlist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="Android Developer"
      />
      <QuoteComponent
        descreption={
          <>
            <p>
              Building an android app for your business with <br />
              ultroNeous means assured app quality and performance.
            </p>
          </>
        }
      />
    </Layout>
  );
};
export default HireAndroidDeveloper;
