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
  const title =
    "Hire Angular Developers Team from Angular Development Company | ultroNeous";
  const keyword =
    "hire angular developer, Hire angular developers, angular development company";
  const description =
    "ultroNeous Technologies is one of the top angular development company based in India. Hire angular developers for the fully-controlled and cost-effective development services.";
  return (
    <Layout title={title} description={description} keywords={keyword}>
      <HirePageHeaderComponent
        heading={
          <>
            Angular
            <br />
            Development
          </>
        }
        techname={"/assets/Angular.svg"}
        detail={
          "The Angular framework is the best choice for getting single-page or multi-page applications and websites developed, as it continues to offer new features and has a supportive community. Hire Angular developers from ultroNeous who deliver highly scalable and secure applications and use the latest tools to deliver end-to-end angular development solutions."
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
