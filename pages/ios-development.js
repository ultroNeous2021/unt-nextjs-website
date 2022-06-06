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
    "We are a leading iOS app development company, having headquarter in India. Hire iOS/iPhone app developers from ultroNeous Technologies as per your demand.";
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
          "iOS technology is hailed for its security and intuitive features. No wonder why entrepreneurs and founders are taking an interest and venturing into iOS development services. If you are also looking to build elite-level apps, let us end your search. We are an iOS development company and offer our clients outstanding iOS applications according to their requirements. Hire iOS developers who are well-experienced in building exquisite business-ready solutions."
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
