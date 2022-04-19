import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HireShopifylist,
  HireShopifyServiceslist,
} from "utils/DataList/listOfData";

const HireAngularDeveloper = () => {
  const keyword =
    "hire angular developer , Hire angular developers , angular development company";
  const description =
    "ultroNeous Technologies is one of the top angular development company based in India. Hire angular developers for the fully-controlled and cost-effective development services.";
  return (
    <Layout description={description} keywords={keyword}>
      <ServicesIncludedSlider listOfserviceincluded={HireShopifyServiceslist} />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of Shopify
            <br />
            Development
          </>
        }
        datalist={HireShopifylist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="Shopify Developer"
      />
      <QuoteComponent
        descreption={
          <>
            <p>
              Develop your feature-rich, scalable, and secured
              <br />
              Shopify stores by certified Developers at ultroNeous.
            </p>
          </>
        }
      />
    </Layout>
  );
};
export default HireAngularDeveloper;
