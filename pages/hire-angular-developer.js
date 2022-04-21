import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import HirePageHeaderComponent from "@/components/HirePageHeaderComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HireAngularlist,
  HireAngularServiceslist,
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
      <HirePageHeaderComponent
        heading={
          <>
            Angular
            <br />
            Development
          </>
        }
        detail={
          "The Angular framework is the ideal development framework to use if you want a single page or even multiple page application or website with great performance, elegant UI elements, and dynamic nature. Hire angular developers from ultroNeous to make the most of angular's unique capabilities, such as two-way binding, modularization, AJAX handling, and others."
        }
      />
      <ServicesIncludedSlider listOfserviceincluded={HireAngularServiceslist} />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of Angular
            <br />
            Development
          </>
        }
        datalist={HireAngularlist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="Angular Developer"
      />
      <QuoteComponent
        descreption={
          <>
            <p>
              Enrich your online business with powerful customer-centric
              <br />
              web apps only with Angular and ultroNeous.
            </p>
          </>
        }
      />
    </Layout>
  );
};
export default HireAngularDeveloper;
