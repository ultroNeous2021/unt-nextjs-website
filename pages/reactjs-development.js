import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import HirePageHeaderComponent from "@/components/HirePageHeaderComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HireReactJSlist,
  HireReactJSServiceslist,
  HireShopifylist,
  HireShopifyServiceslist,
} from "utils/DataList/listOfData";

const HireReactjsDeveloper = () => {
  const title = "ReactJS Development Services | Hire Developers | ultroNeous";
  const keyword =
    "hire reactjs developer, reactjs developer, reactjs development company";
  const description =
    "ultroNeous Technologies is best rated ReactJS Development Company providing services in USA and India. Hire developers from top ReactJS development company.";
  return (
    <Layout title={title} description={description} keywords={keyword}>
      <HirePageHeaderComponent
        heading={
          <>
            ReactJS
            <br />
            Development
          </>
        }
        techname={"/assets/ReactJS.svg"}
        detail={
          "When you want a fast, dynamic, and engaging website, ReactJS is an excellent pick as it offers rich UI components and is easier to test. We will help you develop futuristic, scalable, and engaging web apps. Hire ReactJS developers from ultroNeous who are experienced and have an extensive knowledge base to provide unique ReactJS web solutions."
        }
      />
      <ServicesIncludedSlider listOfserviceincluded={HireReactJSServiceslist} />

      <BenifitsComponent
        maintitle={
          <>
            Benefits of ReactJS
            <br />
            Development
          </>
        }
        datalist={HireReactJSlist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="ReactJS Developer"
      />
      <QuoteComponent
        descreption={
          <>
            <p>
              Hiring ultroNeous’ ReactJs developers means
              <br />
              guaranteed quality, performance, and support.
            </p>
          </>
        }
      />
    </Layout>
  );
};
export default HireReactjsDeveloper;
