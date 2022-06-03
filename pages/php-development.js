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
    "Hire PHP Developers | Custom PHP Development Services| ultroNeous";
  return (
    <Layout title={title} description={description} keywords={keyword}>
      <HirePageHeaderComponent
        heading={
          <>
            PHP <br />
            Development
          </>
        }
        techname={"/assets/PHP.svg"}
        detail={
          "Web platforms are a crucial part of brands' images, and when it comes to slaying the competition, the innovative one always stands out. Get your consumers' attention and stay connected with them with our PHP development services. We deliver future-proof web platforms that are flexible and refined. Hire PHP developers to make the most of PHP's reliable features."
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
