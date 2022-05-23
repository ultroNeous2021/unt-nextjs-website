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
    "Hire NodeJS Developers | NodeJS Development Company in India | ultroNeous";
  const keyword =
    "Hire nodejs developer, nodejs development company, nodejs developers, nodejs development services";
  const description =
    "Hire NodeJS developers from ultroNeous Technologies. We have an experienced team that delivers NodeJS development services globally. Hire Now!!";
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
          "ultroNeous is an established name in the software industry that provides top-notch NodeJS development services to clients from all over the globe. Hire NodeJS developers from our in-house dedicated team to develop high-performing, data-intensive, highly-scalable, and real-time web applications to propel your business forward."
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
