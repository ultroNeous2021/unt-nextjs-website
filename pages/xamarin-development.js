import BenifitsComponent from "@/components/BenifitsComponent";
import ChooseAsPerYourNeedSection from "@/components/ChooseAsPerYourNeedSection";
import CounterComponent from "@/components/CounterComponent";
import HirePageHeaderComponent from "@/components/HirePageHeaderComponent";
import Layout from "@/components/Layout";
import QuoteComponent from "@/components/QuoteComponent";
import ServicesIncludedSlider from "@/components/ServicesIncludedSlider";
import { CounterPersonalPage } from "utils/CONSTANT_DATA";
import {
  HireShopifylist,
  HireShopifyServiceslist,
  HireXamarinlist,
  HireXamarinServiceslist,
} from "utils/DataList/listOfData";

const HireXamarinDeveloper = () => {
  const title =
    "Xamarin App Development Company | Hire a Developer | ultroNeous";
  const keyword =
    "hire xamarin developer, hire xamarin app developers, xamarin development company, xamarin app development company, Xamarin app developers";
  const description =
    "Best Xamarin mobile app development company in the USA, India. Hire Xamarin app developer for your cross-platform iOS and Android application from ultroNeous.";
  return (
    <Layout title={title} description={description} keywords={keyword}>
      <HirePageHeaderComponent
        heading={
          <>
            Xamarin
            <br />
            Development
          </>
        }
        techname={"/assets/Xamarin.svg"}
        detail={
          "With Xamarin, developers can create Android, iOS, and Windows apps, with native user interfaces under one platform. ultroNeous Technologies is one of the reputable companies providing Xamarin app development services. Hire Xamarin app developers who are highly skilled and focus on scalability, speed, and unique UI to distinguish your app and boost revenue."
        }
      />
      <ServicesIncludedSlider listOfserviceincluded={HireXamarinServiceslist} />
      <BenifitsComponent
        maintitle={
          <>
            Benefits of Xamarin
            <br />
            Development
          </>
        }
        datalist={HireXamarinlist}
      />
      <CounterComponent data={CounterPersonalPage} />
      <ChooseAsPerYourNeedSection
        replace="Project Basis"
        replaceDetail="Xamarin Developer"
      />
      <QuoteComponent
        descreption={
          <>
            <p>
              Hiring ultroNeous' Xamarin developers ensure top-notch
              <br />
              quality in terms of native app performance and features,
              <br />
              enhancing the user experience.
            </p>
          </>
        }
      />
    </Layout>
  );
};
export default HireXamarinDeveloper;
