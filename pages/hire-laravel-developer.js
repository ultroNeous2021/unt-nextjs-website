import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HireLaravellist,
  HireLaravelServiceslist,
} from "utils/DataList/listOfData";

const HireLaravelDeveloper = () => {
  const keyword =
    "hire dedicated laravel developer , hire laravel developer , laravel development company , laravel web development company";
  const description =
    "Hire dedicated laravel developer from India. ultroNeous Technologies is a laravel development company which offer low-cost services, with 100% client satisfaction and maintenance services.";
  return (
    <Layout keywords={keyword} description={description}>
      <ServicesIncludedSlider listOfserviceincluded={HireLaravelServiceslist} />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of Laravel
            <br />
            Development
          </>
        }
        datalist={HireLaravellist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="Laravel Developer"
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
export default HireLaravelDeveloper;
