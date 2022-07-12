import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import FaqComponent from "@/components/FaqComponent";
import HirePageHeaderComponent from "@/components/HirePageHeaderComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HireMernlist,
  HireMernServiceslist,
  MernstackFaq,
} from "utils/DataList/listOfData";

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
        "hire mern stack developer, mern stack development company, mern stack development services, hire mern stack developers"
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
        techname={"/assets/mern-slide.svg"}
        detail={
          <>
            MERN stack is a group of JavaScript-based frameworks, databases, and
            runtime environments that includes <b>M</b>ongoDB, <b>E</b>xpress
            JS, <b>R</b>eact JS, and <b>N</b>ode JS. As it enables the rapid and
            smooth development of end-to-end solutions, it has become popular
            among developers and various businesses. You can also benefit from
            ultroNeous' MERN stack development services in one click. Hire MERN
            stack developers who have a wealth of experience in developing
            exceptional applications.
          </>
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
      <FaqComponent datalist={MernstackFaq} />
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
