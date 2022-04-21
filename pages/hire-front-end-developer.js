import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import HirePageHeaderComponent from "@/components/HirePageHeaderComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HireFrontEndlist,
  HireFrontEndServiceslist,
  HireShopifylist,
  HireShopifyServiceslist,
} from "utils/DataList/listOfData";

const HireFrontendDeveloper = () => {
  const keyword =
    "hire frontend developers , frontend development company , frontend web development";
  const description =
    "Searching for a reliable front end development company You can hire front end developers right from consulting, development, maintenance support";
  return (
    <Layout description={description} keywords={keyword}>
      <HirePageHeaderComponent
        heading={
          <>
            Front End
            <br />
            Development
          </>
        }
        detail={
          "Client-side development of websites and applications is the responsibility of front-end developers. Highly talented and experienced front-end developers at ultroNeous have created a number of web-based applications and websites with eye-catching, user-friendly, and dynamic UI features. As a veteran frontend development company, we understand the value of a positive user experience and offer the best frontend web development services to businesses and organizations of all sizes."
        }
      />
      <ServicesIncludedSlider
        listOfserviceincluded={HireFrontEndServiceslist}
      />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of Front-End
            <br />
            Development
          </>
        }
        datalist={HireFrontEndlist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="Front-End Developer"
      />
      <QuoteComponent
        descreption={
          <>
            <p>
              Enjoy the extensive expertise of ultroNeous’ front-end developers
              <br />
              for highly interactive and feature-rich applications for your
              business.
            </p>
          </>
        }
      />
    </Layout>
  );
};
export default HireFrontendDeveloper;
