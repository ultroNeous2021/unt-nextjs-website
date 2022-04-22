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
  const descreption =
    "Your search to hire shopify developer is now over. Hire shopify experts from ultroNeous Technologies and relax. We will take care of your website & it's solutions at a competitive rates. Call now";
  const keywords =
    "shopify website developer, hire shopify developer, shopify development company, hire shopify expert";

  return (
    <Layout description={descreption} keywords={keywords}>
      <HirePageHeaderComponent
        heading={
          <>
            Shopify
            <br />
            Development
          </>
        }
        techname={"Shopify"}
        detail={
          "Hire shopify developers from ultroNeous to develop responsive and user-friendly ecommerce websites and apps. Since we are a leading shopify development company, we know what elements and functions or features are required for a successful ecommerce store. Our certified developers are experienced in writing  codes that are optimized for search engines, faster loading time, and for higher efficiency. Connect with us for more discussion on shopify ecommerce development. "
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
