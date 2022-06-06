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
  const title =
    "Android App Development | Hire Dedicated Android App Developer | ultroNeous";
  const keyword =
    "hire android app developers, hire android developers, android development company, android app development company";
  const description =
    "ultroNeous Technologies is a Custom Android App Development Company. Hire a dedicated Android app developer for long/short term or monthly/weekly/hourly bases.";
  return (
    <Layout title={title} description={description} keywords={keyword}>
      <HirePageHeaderComponent
        techname={"/assets/Android.svg"}
        heading={
          <>
            Android
            <br />
            Development
          </>
        }
        detail={
          "Android technology requires no introduction. It is an open-source platform offering abundant attractive features, thus encouraging businesses to build a presence on it. With ultroNeous, you will not only be able to build the presence you desire but also extend beyond your imagination. Hire Android developers who perform comprehensive research to offer you bespoke and innovative solutions with easy-to-use interfaces."
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
        techname={"Android"}
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
