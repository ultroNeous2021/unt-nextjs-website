import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import HirePageHeaderComponent from "@/components/HirePageHeaderComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HireNodeJSlist,
  HireNodeJSServiceslist,
  HireShopifylist,
  HireShopifyServiceslist,
} from "utils/DataList/listOfData";

const HireNodejsDeveloper = () => {
  const title =
    "Hire NodeJS Developers | NodeJS Development Company | ultroNeous";
  const keyword =
    "Hire nodejs developer, nodejs development company, nodejs developers, nodejs development services";
  const description =
    "Hire NodeJS developers from ultroNeous Technologies. We have an experienced team that delivers NodeJS development services globally.";
  return (
    <Layout title={title} description={description} keywords={keyword}>
      <HirePageHeaderComponent
        heading={
          <>
            NodeJS
            <br />
            Development
          </>
        }
        techname={"/assets/NodeJS.svg"}
        detail={
          "Being a reputable NodeJS development company, We understand your business requirements and expedite the whole procedure of development using NodeJS features. NodeJS is a fast and lightweight open source cross-platform JavaScript run-time environment. As it operates on a single thread, it is highly efficient and will give you the edge over your competitors."
        }
      />
      <ServicesIncludedSlider listOfserviceincluded={HireNodeJSServiceslist} />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of NodeJS
            <br />
            Development
          </>
        }
        datalist={HireNodeJSlist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="NodeJS Developer"
      />
      <QuoteComponent
        descreption={
          <>
            <p>
              ultroNeous and NodeJS provide the greatest real-time
              <br />
              web applications for organizations to improve customer support.
            </p>
          </>
        }
      />
    </Layout>
  );
};
export default HireNodejsDeveloper;
