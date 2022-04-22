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
  HireWebApplist,
  HireWebAppServiceslist,
} from "utils/DataList/listOfData";

const HireWebappDeveloper = () => {
  const keyword =
    "web app development company , hire web app developer , web application development services";
  const description =
    "ultroNeous Technologies is a top web app development company based in India that also provides clientele to hire web app developers who are compatible with the latest tools and technology. Hire Now!! ";
  return (
    <Layout description={description} keywords={keyword}>
      <HirePageHeaderComponent
        heading={
          <>
            Web App <br />
            Development
          </>
        }
        techname={"Web App"}
        detail={
          "Web applications for business are a fantastic way to reach out to a bigger audience and consumers. Its customizable qualities, easy internet accessibility, quick loading time, and other features serve visitors with a unique user experience. Hire web app developers from ultroNeous, a reputable web app development company, to create scalable and secure business web applications with a wide range of features."
        }
      />
      <ServicesIncludedSlider listOfserviceincluded={HireWebAppServiceslist} />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of Web App
            <br />
            Development
          </>
        }
        datalist={HireWebApplist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="Web App Developer"
      />
      <QuoteComponent
        descreption={
          <>
            <p>
              Leverage the benefits and features of web applications
              <br />
              to reach more customers and provide better services to them.
            </p>
          </>
        }
      />
    </Layout>
  );
};
export default HireWebappDeveloper;
