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
        techname={"/assets/Magento.svg"}
        detail={
          "Magento is an open-source eCommerce Technology and has a fantastic set of features, including scalability, constant algorithmic improvements, and responsive web design. As it is an excellent option to choose as the medium for an eCommerce store, the setup can take up too much of your time and effort. And that's where we come in to help you. Hire Magento developers who help your company reduce the time-to-market and grow fast with a sturdy and user-friendly eCommerce store."
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
