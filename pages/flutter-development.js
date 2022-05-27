import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import HirePageHeaderComponent from "@/components/HirePageHeaderComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HireFlutterlist,
  HireFlutterServiceslist,
  HireShopifylist,
  HireShopifyServiceslist,
} from "utils/DataList/listOfData";

const HireFlutterDeveloper = () => {
  const title =
    "Flutter App Development Company | Developer for Hire | ultroNeous";
  const keyword =
    "hire flutter developer, flutter app development company, flutter development company, hire flutter app developers";
  const description =
    "ultroNeous offers top-notch Flutter app development. Hire Flutter developers from ultroNeous per your convenience. we are a prominent app development company in US & India.";
  return (
    <Layout description={description} title={title} keywords={keyword}>
      <HirePageHeaderComponent
        heading={
          <>
            Flutter
            <br />
            Development
          </>
        }
        techname={"/assets/Flutter.svg"}
        detail={
          "Flutter is a leading technology in building cross-platform apps and a popular choice when you want to reach a wider set of audiences with minimal effort. As a Flutter App development company, we do more than just app development. We make sure your business reaches its highest potential with a flawlessly running app. Hire Flutter developers who are proficient in the Dart programming language and deliver your desired business-ready application with an appealing interface."
        }
      />
      <ServicesIncludedSlider listOfserviceincluded={HireFlutterServiceslist} />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of Flutter
            <br />
            Development
          </>
        }
        datalist={HireFlutterlist}
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
