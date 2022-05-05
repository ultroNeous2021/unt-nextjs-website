import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import HirePageHeaderComponent from "@/components/HirePageHeaderComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HireWordPresslist,
  HireWordPressServiceslist,
} from "utils/DataList/listOfData";

const HireWordPressDeveloper = () => {
  const title =
    "Wordpress development company | Hire wordpress developer | ultroNeous";
  const keyword =
    "Hire wordpress developer, Hire wordpress expert, wordpress development company, hire dedicated wordpress developer";
  const description =
    "Hire wordpress developer for Full-Time, Part-Time. ultroNeous Technologies is a wordpress development company servivng with dedicated wordpress developer in more then 15 countries. Contact us now!!";
  return (
    <Layout title={title} description={description} keywords={keyword}>
      <HirePageHeaderComponent
        model={"/assets/females.png"}
        heading={
          <>
            WordPress
            <br />
            Development
          </>
        }
        techname={"/assets/l-wp.svg"}
        detail={
          "Get dedicated WordPress developers to build your custom business web solutions using an agile methodology and the most up-to-date WordPress development strategies and practices. We are a prominent WordPress development company with an in-house team of WordPress developers with considerable experience in producing websites for various business models over the last few years. Contact us right away to hire WordPress developers for user-friendly, scalable, reliable, and secured WordPress web solutions for your business."
        }
      />
      <ServicesIncludedSlider
        listOfserviceincluded={HireWordPressServiceslist}
      />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of WordPress
            <br />
            Development
          </>
        }
        datalist={HireWordPresslist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="WordPress Developer"
      />
      <QuoteComponent
        descreption={
          <>
            <p>
              Get your high performing WordPress web solution
              <br />
              developed by industry-best developers at ultroNeous
            </p>
          </>
        }
      />
    </Layout>
  );
};
export default HireWordPressDeveloper;
