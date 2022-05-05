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
    "ultroNeous offers top-notch flutter app development. Hire flutter developers from ultroNeous per your convenience. ultroNeous is a prominent app development company in US & India.";
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
          "Flutter is an open-source development platform that allows developers to create fast, flexible, and productive web and mobile apps at a low cost. The possibilities of app development with this framework are endless, and it enables fast and simple development to grab the opportunity hire flutter developers from ultroNeous. Our in-house development team has a wealth of expertise in creating feature-rich, interactive applications. For more details on flutter development, please contact us right away."
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
