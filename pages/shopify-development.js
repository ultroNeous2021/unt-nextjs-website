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
} from "utils/DataList/listOfData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HireShopifyDeveloper = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const title =
    "Shopify Development Services | Hire Shopfiy Developer | ultroNeous";
  const description =
    "Get your next Shopify app built with our Shopify experts. Hire Shopify developers from ultroNeous technologies the best Shopify development company.";
  const keywords =
    "shopify website developer, hire shopify developer, shopify development company, hire shopify expert";

  return (
    <Layout title={title} description={description} keywords={keywords}>
      <HirePageHeaderComponent
        heading={
          <>
            Shopify
            <br />
            Development
          </>
        }
        techname={"/assets/ll-s.svg"}
        detail={
          "Shopify is an excellent platform for setting up an online store. Think of it as a medium, working to make the process of selling products online easier. You can also develop an online store-front with the help of ultroNeous Technologies’s Shopify developers. Hire Shopify experts who will help you build a highly conversion-focused site so you can hit a bullseye on your growth goals."
        }
      />
      {/* <div className={styles.HireContainer}></div> */}
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
export default HireShopifyDeveloper;
