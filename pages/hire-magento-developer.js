import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HireMagentolist,
  HireMagentoServiceslist,
} from "utils/DataList/listOfData";

const HireMagentoDeveloper = () => {
  const keyword =
    "Hire magento developer , Hire dedicated magento developer , Magento development company , Magento development agency";
  const description =
    "ultroNeous technologies is a magneto development company that provides expert developers to its clientele. Contact us now to hire Magento developers at cost-effective rates";
  return (
    <Layout keywords={keyword} description={description}>
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
              ultroNeous helps businesses to utilize the Laravel technology for
              <br />
              delivering better services to users via the web and mobile
              applications.
            </p>
          </>
        }
      />
    </Layout>
  );
};
export default HireMagentoDeveloper;
