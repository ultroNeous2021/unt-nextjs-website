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
    "Hire codeigniter developers , codeigniter development company , codeigniter web development services , hire codeigniter";
  const description =
    "Hire  Experienced & Certified Codeigniter developers from ultroNeous Technologies. As a Codeigniter development company, we offer robust solutions and services to our clients. Contact us Now!!";
  return (
    <Layout description={description} keywords={keyword}>
      <HirePageHeaderComponent
        heading={
          <>
            Codeigniter
            <br />
            Development
          </>
        }
        techname={"Codeigniter"}
        detail={
          "For businesses who are always seeking ways to improve their business outcomes and revenue, Codeigniter development is an excellent choice. CodeIgniter creates lightweight, fast-loading web apps with clean URLs. ultroNeous is a CodeIgniter development company that has helped numerous organizations and businesses to boost their digital performance by providing world-class CodeIgniter web applications. Hire CodeIgniter developers now to enrich your business web applications with CodeIgniter advantages."
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
