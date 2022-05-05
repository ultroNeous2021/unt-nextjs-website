import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import HirePageHeaderComponent from "@/components/HirePageHeaderComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HireWoocommercelist,
  HireWoocommerceServiceslist,
} from "utils/DataList/listOfData";

const HireWooCommerceDeveloper = () => {
  const description =
    "Hire woocommerce developers to develop an efficient website at cost effective pricing with our woocommerce development services. Hire Now!!!";
  const keyword =
    "woocommerce experts , hire woocommerce developer , woocommerce development company , woocommerce development services";
  return (
    <Layout description={description} keywords={keyword}>
      <HirePageHeaderComponent
        heading={
          <>
            Woo-Commerce
            <br />
            Development
          </>
        }
        techname={"Woo-Commerce"}
        detail={
          "ultroNeous is a well-known woo-commerce development company that has crafted elegant, responsive, and feature-rich eCommerce stores using the woo-commerce development technology. You can hire woo-commerce developers or an entire dedicated development team for accomplishing the different woo-commerce development tasks or build a new eCommerce website or app from scratch. "
        }
      />
      <ServicesIncludedSlider
        listOfserviceincluded={HireWoocommerceServiceslist}
      />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of Woo-Commerce
            <br />
            Development
          </>
        }
        datalist={HireWoocommercelist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="Woo-Commerce Developer"
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
export default HireWooCommerceDeveloper;
