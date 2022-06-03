import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import HirePageHeaderComponent from "@/components/HirePageHeaderComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HireCodeigniterlist,
  HireCodeigniterServiceslist,
  HireShopifylist,
  HireShopifyServiceslist,
} from "utils/DataList/listOfData";

const HireCodeigniterDeveloper = () => {
  const keyword =
    "Hire codeigniter developers, codeigniter development company, codeigniter web development services, hire codeigniter";
  const title =
    "Hire CodeIgniter Developers | Top CodeIgniter Development Company | ultroNeous";
  const description =
    "Hire  Experienced & Certified CodeIgniter developers from ultroNeous Technologies. As a CodeIgniter development company, we offer robust solutions and services to our clients.";
  return (
    <Layout title={title} description={description} keywords={keyword}>
      <HirePageHeaderComponent
        heading={
          <>
            CodeIgniter
            <br />
            Development
          </>
        }
        techname={"/assets/Codeigniter.svg"}
        detail={
          "CodeIgniter is a PHP framework with a small footprint to develop elegant, blazing-fast, and full-featured websites and applications. Being a CodeIgniter development company, we are into crafting CodeIgniter development solutions with exceptional performance. Our team of developers has an extensive background in web application development and will help you reach your desired growth. Hire CodeIgniter developers who have high-quality talent with a push of a button."
        }
      />
      <ServicesIncludedSlider
        listOfserviceincluded={HireCodeigniterServiceslist}
      />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of Codeigniter
            <br />
            Development
          </>
        }
        datalist={HireCodeigniterlist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="Codeigniter Developer"
      />
      <QuoteComponent
        descreption={
          <>
            <p>
              Improve the performance of your business with a light-weight,
              secure
              <br />
              and interactive web application constructed by ultroNeous and
              CodeIgniter.
            </p>
          </>
        }
      />
    </Layout>
  );
};
export default HireCodeigniterDeveloper;
