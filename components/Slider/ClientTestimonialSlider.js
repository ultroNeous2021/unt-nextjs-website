import { useRef, useState } from "react";
import styles from "@/styles/components/ClientTestimonialSlider.module.css";
import Slider from "react-slick";
import "animate.css";

function ClientTestimonialSlider({ data, title, css = null }) {
  const [reload, setReload] = useState(false);

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
      <h2 className={styles.ClientTestimonialHeading}> {title} </h2>
      <div className={styles.SliderContainer}>
        <div className={styles.ArrowContainer} onClick={prevClicked}>
          <img
            className={styles.LeftArrow}
            src="/assets/clientTestimonial.svg"
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
                    className="TextAnimateImage"
                    src={el.image}
                    alt={el.name}
                    style={{ display: "inline-block" }}
                  />
                  <p className={`${styles.Details} TextAnimate`}>
                    {el.details}
                  </p>
                  <p
                    className="TextAnimateName"
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                  >
                    {el.name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.ArrowContainer} onClick={nextClicked}>
          <img
            src="/assets/clientTestimonial.svg"
            alt="left"
            className={styles.RightArrow}
          />
        </div>
      </div>
    </div>
  );
}

export default ClientTestimonialSlider;
