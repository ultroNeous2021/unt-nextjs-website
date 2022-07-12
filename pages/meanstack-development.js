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
  HireMeanlist,
  HireMeanServiceslist,
  HireMernlist,
  HireMernServiceslist,
  MeanstackFaq,
} from "utils/DataList/listOfData";

const MeanStack = () => {
  return (
    <Layout
      title={
        "MEAN Stack Development Company India | Hire MEAN Stack Developers"
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
            MEAN Stack
            <br />
            Development
          </>
        }
        techname={"/assets/mean-slide.svg"}
        detail={
          "MEAN is an open-source web stack named after MongoDB, ExpressJS, AngularJS, and NodeJS- all JavaScript-based open-source technologies. These are predominantly used to develop dynamic cloud-ready applications. Utilize our MEAN stack development services to create and enhance grade-A web and mobile applications that cover all your business scenarios from operations to profitability and scalability."
        }
      />
      <ServicesIncludedSlider listOfserviceincluded={HireMeanServiceslist} />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of MERN stack
            <br />
            Development
          </>
        }
        datalist={HireMeanlist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <FaqComponent datalist={MeanstackFaq} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="Mean Developer"
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
export default MeanStack;
