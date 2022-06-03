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
    "Hire Python Developer | Python Development Company | ultroNeous";
  const keyword = "hire python developers, python development company";
  const description =
    "ultroNeous is your solid Python development partner. Hire Python software developers, having expertise in Django, Flask and Web2Pay frameworks.";
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
        techname={"/assets/Python.svg"}
        detail={
          "Python is a flexible programming language. It is easy to use and has a comparatively short coding structure, making it one of the top options for those who are looking to develop better tech solutions. You can count on its features and of course, ultroNeous Technologies - a Python development company to make cutting-edge web solutions. Hire Python developers who will take it upon themselves to build unique solutions for your unique business project."
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
        replaceDetail="Dedicated Python Developer"
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
