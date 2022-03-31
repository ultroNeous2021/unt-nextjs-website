import Layout from "@/components/Layout";
import ClientTestimonialSlider from "@/components/Slider/ClientTestimonialSlider";
import { TestimonialsSliderData } from "utils/CONSTANT_DATA";

function AboutUltroneousPage() {
  return (
    <>
      <Layout>
        <ClientTestimonialSlider data={TestimonialsSliderData} />
      </Layout>
    </>
  );
}

export default AboutUltroneousPage;
