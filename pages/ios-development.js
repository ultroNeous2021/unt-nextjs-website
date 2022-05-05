import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import HirePageHeaderComponent from "@/components/HirePageHeaderComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HireiOSlist,
  HireiOSServiceslist,
  HireShopifylist,
  HireShopifyServiceslist,
} from "utils/DataList/listOfData";

const HireIosDeveloper = () => {
  const title = "iOS App Development India | Hire iOS Developers | ultroNeous";
  const keyword =
    "hire iphone app developers, hire ios app developer, hire ios developer, ios app development company, ios development company";
  const description =
    "We are a leading iOS/iPhone app development company, having headquarter in India. Hire iOS/iPhone developers from ultroNeous Technologies as per your demand.";
  return (
    <Layout title={title} description={description} keywords={keyword}>
      <HirePageHeaderComponent
        heading={
          <>
            iOS
            <br />
            Development
          </>
        }
        techname={"/assets/ios.svg"}
        detail={
          "In the software development sector, ultroNeous is continuously evolving and setting new quality standards. With our iOS app development services, we are the market leaders in producing scalable, dependable, and user-centric iOS apps for businesses in various disciplines. Hire iOS app developers that will work on your project according to your goals and specifications, ensuring high-quality apps that run well, provide a rich user experience, and are easy to use."
        }
      />
      <ServicesIncludedSlider listOfserviceincluded={HireiOSServiceslist} />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of iOS
            <br />
            Development
          </>
        }
        datalist={HireiOSlist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="iOS Developer"
      />
      <QuoteComponent
        descreption={
          <>
            <p>
              Reach a quality audience with Apple applications and
              <br />
              ultroNeous for the exceptional growth of your business.
            </p>
          </>
        }
      />
    </Layout>
  );
};
export default HireIosDeveloper;
