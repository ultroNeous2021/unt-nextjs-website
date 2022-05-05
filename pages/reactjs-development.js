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
  const title = "ReactJs Development Services | Hire Developers | ultroNeous";
  const keyword =
    "hire reactjs developer, reactjs developer, reactjs development company";
  const description =
    "ultroNeous Technologies is best rated Reactjs Development Company providing services in USA and India. Hire developers from top Reactjs development company.";
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
        techname={"ReactJS"}
        detail={
          "ReactJs is a JavaScript library for creating unique web apps user interface elements. You can produce paramount web applications for your organization with the help of proficient ReactJs developers. Hire ReactJs developers from reputable ReactJs development companies to help you achieve your business objectives with ReactJs web solutions."
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
