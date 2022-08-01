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
  GolangFaq,
  HireFlutterlist,
  HireFlutterServiceslist,
  HireGolanglist,
  HireGolangServiceslist,
  HireShopifylist,
  HireShopifyServiceslist,
  MernstackFaq,
} from "utils/DataList/listOfData";
import { golangschema } from "utils/schemas";

const HireFlutterDeveloper = () => {
  const title = "Hire Dedicated Golang Developer | Golang Development Services";
  const keyword =
    "hire golang developer, golang development company, golang development services";
  const description =
    "Hire Golang Developers from a renowned Golang Development Company. ultroNeous helps you materialize your dream project from scratch with our finest development services.";
  return (
    <Layout
      description={description}
      title={title}
      keywords={keyword}
      schema={golangschema}
    >
      <HirePageHeaderComponent
        heading={
          <>
            Golang
            <br />
            Development
          </>
        }
        techname={"/assets/Golang5.svg"}
        detail={
          "Golang is a statically-typed, compiled programming language designed at Google to optimize coding productivity in multicore, networked, and large codebase environments. Being a leading Golang development company, we offer development solutions to materialize your vision and make them unparalleled."
        }
      />
      <ServicesIncludedSlider listOfserviceincluded={HireGolangServiceslist} />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of Golang
            <br />
            Development
          </>
        }
        datalist={HireGolanglist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <FaqComponent datalist={GolangFaq} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="Golang Developer"
      />
      {/* <QuoteComponent
        descreption={
          <>
            <p>
              Enjoy unique features and functionalities with fast loading
              <br />
              on your business application using flutter and ultroNeous’
              resources.
            </p>
          </>
        }
      /> */}
    </Layout>
  );
};
export default HireFlutterDeveloper;
