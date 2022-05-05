import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import HirePageHeaderComponent from "@/components/HirePageHeaderComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HirePythonlist,
  HirePythonServiceslist,
  HireShopifylist,
  HireShopifyServiceslist,
} from "utils/DataList/listOfData";

const HirePythonDeveloper = () => {
  const title =
    "Python Development | Hire Developer from India ASAP! | ultroNeous";
  const keyword = "hire python developers, python development company";
  const description =
    "ultroNeous is your solid python development partner. Hire python software developers, having expertise in Django, Flask and Web2Pay frameworks.";
  return (
    <Layout description={description} keywords={keyword} title={title}>
      <HirePageHeaderComponent
        heading={
          <>
            Python
            <br />
            Development
          </>
        }
        techname={"Python"}
        detail={
          "Python is an object-oriented programming language that can be used to develop a wide variety of web apps and websites. It is a high-level language with huge libraries and a dynamic nature, as well as GUI (Graphical User Interface) support for optimal development and performance. ultroNeous offers the freedom to hire Python developers who have massive experience in developing productive and responsive web solutions for clients."
        }
      />
      <ServicesIncludedSlider listOfserviceincluded={HirePythonServiceslist} />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of Python
            <br />
            Development
          </>
        }
        datalist={HirePythonlist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="Python Developer"
      />
      <QuoteComponent
        descreption={
          <>
            <p>
              Exert the power of Python and the expertise of ultroNeous
              <br />
              for productive and scalable web solutions for your business.
            </p>
          </>
        }
      />
    </Layout>
  );
};
export default HirePythonDeveloper;
