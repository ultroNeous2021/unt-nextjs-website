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
} from "utils/DataList/listOfData";

const HireFlutterDeveloper = () => {
  const keyword =
    "hire flutter developer , flutter app development company , flutter development company , hire flutter app developers";
  const description =
    "With our flexible models, you can hire flutter developers on a full-time, part-time basis. ultroNeous Technologies is a flutter development company located in India with the successful completion of 30+ projects.";
  return (
    <Layout description={description} keywords={keyword}>
      <HirePageHeaderComponent
        heading={
          <>
            Flutter
            <br />
            Development
          </>
        }
        techname={"Flutter"}
        detail={
          "Xamarin is the finest development framework for native app performance. Native apps perform better, are more interactive and intuitive, and have fewer bugs issues. Hire Xamarin developers to create fast-loading apps with rich visual features and a great user experience. Our Xamarin app developers are well-versed in the most up-to-date technology trends and agile methodologies"
        }
      />
      <ServicesIncludedSlider listOfserviceincluded={HireShopifyServiceslist} />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of Flutter
            <br />
            Development
          </>
        }
        datalist={HireShopifylist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="Flutter Developer"
      />
      <QuoteComponent
        descreption={
          <>
            <p>
              Enjoy unique features and functionalities with fast loading
              <br />
              on your business application using flutter and ultroNeous’
              resources.
            </p>
          </>
        }
      />
    </Layout>
  );
};
export default HireFlutterDeveloper;
