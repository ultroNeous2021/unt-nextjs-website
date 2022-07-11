import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import FaqComponent from "@/components/FaqComponent";
import HirePageHeaderComponent from "@/components/HirePageHeaderComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import { HireMernlist, HireMernServiceslist } from "utils/DataList/listOfData";

const MernStack = () => {
  return (
    <Layout
      title={
        "MERN Stack Development Company India | Hire MERN Stack Developers"
      }
      description={
        "ultroNeous is leading MERN Stack Development Company in USA and India. Hire expert MERN Stack developers on hourly or full time basis from ultroNeous."
      }
      keywords={
        "mern stack developer, mern stack development, hire mern stack developer, mern stack development company"
      }
    >
      <HirePageHeaderComponent
        heading={
          <>
            MERN Stack
            <br />
            Development
          </>
        }
        techname={"/assets/map-mern.svg"}
        detail={
          "MERN stack is a group of JavaScript-based frameworks, databases, and runtime environments that includes MongoDB, Express JS, React JS, and Node JS. As it enables the rapid and smooth development of end-to-end solutions, it has become popular among developers and various businesses. You can also benefit from ultroNeous' MERN stack development services in one click. Hire MERN stack developers who have a wealth of experience in developing exceptional applications."
        }
      />
      <ServicesIncludedSlider listOfserviceincluded={HireMernServiceslist} />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of MERN stack
            <br />
            Development
          </>
        }
        datalist={HireMernlist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <FaqComponent />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="Mern Developer"
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
export default MernStack;
