import { useRef, useState } from "react";
import styles from "@/styles/components/ClientTestimonialSlider.module.css";
import Slider from "react-slick";
import "animate.css";

function ClientTestimonialSlider({ data }) {
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
    <div className={styles.SliderContainer}>
      <div className={styles.ArrowContainer} onClick={prevClicked}>
        <img
          className={styles.LeftArrow}
          src="/assets/clientTestimonial.svg"
          alt="left"
        />
      </div>
      <div style={{ width: "90%" }}>
        <Slider
          {...settings}
          ref={(slider) => (testimonialImageSlider.current = slider)}
        >
          {data.map((el, index) => (
            <div
              className={`${styles.Slider} `}
              style={{ width: "80%", margin: "0 auto" }}
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
                <p className={`${styles.Details} TextAnimate`}>{el.details}</p>
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
  );
}

export default ClientTestimonialSlider;
