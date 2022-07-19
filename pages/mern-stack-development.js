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
      title={"MERN Stack Development Company India | Hire MERN Stack Developer"}
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
            runtime environments that includes MongoDB, ExpressJS, ReactJS, and
            NodeJS. Hire MERN stack developers to employ the features of this
            popular full stack into creating tech solutions that provide rich
            experiences across many platforms.
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
      {/* <QuoteComponent
        descreption={
          <>
            <p>
              Develop your feature-rich, scalable, and secured
              <br />
              Shopify stores by certified Developers at ultroNeous.
            </p>
          </>
        }
      /> */}
    </Layout>
  );
};
export default MernStack;
