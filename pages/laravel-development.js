import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import HirePageHeaderComponent from "@/components/HirePageHeaderComponent";
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
    "Hire dedicated Laravel developer from ultroNeous Technologies, we are a Laravel development company which offer low-cost services, with 100% client satisfaction and maintenance services.";
  const title =
    "Hire Laravel Developer | Laravel Development Company | ultroNeous";
  return (
    <Layout title={title} keywords={keyword} description={description}>
      <HirePageHeaderComponent
        heading={
          <>
            Laravel
            <br />
            Development
          </>
        }
        techname={"/assets/Laravel.svg"}
        detail={
          "Laravel is one of the most favorable choices for developing integral websites and mobile apps. This PHP framework offers multiple built-in functions and helps to improve the performance of applications. We are a Laravel development company and tend to come up with secure and scalable tech solutions for our clients. Hire dedicated Laravel Developers to boost your business's revenue with versatile web and mobile applications."
        }
      />
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
