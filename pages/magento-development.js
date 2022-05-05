import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import HirePageHeaderComponent from "@/components/HirePageHeaderComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HireMagentolist,
  HireMagentoServiceslist,
} from "utils/DataList/listOfData";

const HireMagentoDeveloper = () => {
  const title =
    "Best Magento Development Company | Hire Magento 1 & 2 Developer | ultroNeous";
  const keyword =
    "Hire magento developer, Hire dedicated magento developer, Magento development company, Magento development agency";
  const description =
    "Hire Magento Developers from ultroNeous Technologies, the best Magento Development Company. We specialize in custom Magento Development Website. Hire Now!!";
  return (
    <Layout title={title} keywords={keyword} description={description}>
      <HirePageHeaderComponent
        heading={
          <>
            Magento
            <br />
            Development
          </>
        }
        techname={"Magento"}
        detail={
          "Magento is a popular eCommerce development platform that offers a wide range of features and services that are essential for any successful and busy eCommerce business. We are a well-known Magento development company that has successfully served a variety of businesses selling a wide range of products worldwide. Hire Magento developers from ultroNeous to create high-performing eCommerce stores that are sturdy, scalable, and user-friendly."
        }
      />
      <ServicesIncludedSlider listOfserviceincluded={HireMagentoServiceslist} />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of Magento
            <br />
            Development
          </>
        }
        datalist={HireMagentolist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="Magento Developer"
      />
      <QuoteComponent
        descreption={
          <>
            <p>
              Leverage the extensive expertise of ultroNeous’ Magento developers
              <br />
              to build a user-friendly & revenue generating eCommerce store
            </p>
          </>
        }
      />
    </Layout>
  );
};
export default HireMagentoDeveloper;
