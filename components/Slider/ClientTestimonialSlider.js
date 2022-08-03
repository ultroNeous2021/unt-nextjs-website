import { useEffect, useRef, useState } from "react";
import styles from "@/styles/components/ClientTestimonialSlider.module.css";
import Slider from "react-slick";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function ClientTestimonialSlider({
  data,
  title,
  css = null,
  forother = false,
}) {
  const [reload, setReload] = useState(false);

  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const testimonialImageSlider = useRef();

  const nextClicked = () => {
    testimonialImageSlider.current.slickNext();
    setReload(!reload);
  };

  const prevClicked = () => {
    testimonialImageSlider.current.slickPrev();
    setReload(!reload);
  };

  return (
    <div className={styles.ClientTestimonialSliderContainer} style={css}>
      <h2
        className={styles.ClientTestimonialHeading}
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        {title}
      </h2>
      <div className={styles.SliderContainer}>
        <div className={styles.ArrowContainer} onClick={prevClicked}>
          <img
            loading="lazy"
            className={styles.LeftArrow}
            src="/assets/leftArw.svg"
            alt="left"
          />
        </div>
        <div className={styles.SliderParent}>
          <Slider
            {...settings}
            ref={(slider) => (testimonialImageSlider.current = slider)}
          >
            {data.map((el, index) => (
              <div
                className={`${styles.Slider} `}
                style={{ width: "80%", margin: "0 auto" }}
                key={index}
              >
                <div
                  className={`${styles.SlideContainer}  SlideAnimate`}
                  key={index}
                >
                  <img
                    loading="lazy"
                    className="TextAnimateImage"
                    src={el.image}
                    alt={el.name}
                    style={{ display: "inline-block" }}
                  />
                  <p className={`${styles.Details} TextAnimate`}>
                    {el.description ? el.description : el.details}
                  </p>
                  <p
                    className="TextAnimateName"
                    style={{
                      color: "rgba(255, 255, 255, 0.5)",
                      fontSize: "16px",
                    }}
                  >
                    {forother == true
                      ? el.name + " " + el.designation + " "
                      : el.name +
                        (el.company && el.designation
                          ? "( " + el.company + ",  " + el.designation + " )"
                          : "")}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.ArrowContainer} onClick={nextClicked}>
          <img
            loading="lazy"
            src="/assets/rightArw.svg"
            alt="left"
            className={styles.RightArrow}
          />
        </div>
      </div>
    </div>
  );
}
