import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import HirePageHeaderComponent from "@/components/HirePageHeaderComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import { HirePHPlist, HirePHPServiceslist } from "utils/DataList/listOfData";

const HirePhpDeveloper = () => {
  const description =
    "Searching for a PHP web development company. The search is over ultroNeous Technologies provides the best PHP development services.  Hire PHP developers from India.";
  const keyword = "php development services, Hire php developers";
  const title =
    "Hire PHP Developers | Custom  PHP development services| ultroNeous ";
  return (
    <Layout title={title} description={description} keywords={keyword}>
      <HirePageHeaderComponent
        heading={
          <>
            PHP <br />
            Development
          </>
        }
        techname={"PHP"}
        detail={
          "ultroNeous serves its clients with cost-effective and result-oriented PHP development services. With an in-house dedicated PHP development team, we have successfully delivered custom, flexible, scalable, and high-performing web solutions to different businesses around the globe. Connect with us to hire PHP developers for quality development work that will boost your business revenue."
        }
      />
      <ServicesIncludedSlider listOfserviceincluded={HirePHPServiceslist} />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of PHP
            <br />
            Development
          </>
        }
        datalist={HirePHPlist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="PHP Developer"
      />
      <QuoteComponent
        descreption={
          <>
            <p>
              ultroNeous' skilled developers, who are core contributors to PHP
              <br />
              technology, can help you create flexible and personalized PHP
              websites.
            </p>
          </>
        }
      />
    </Layout>
  );
};
export default HirePhpDeveloper;
