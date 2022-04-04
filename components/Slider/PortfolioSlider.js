import { useRef } from "react";

import Slider from "react-slick";
import { PortfolioSliderData } from "../../utils/CONSTANT_DATA";
import styles from "@/styles/components/PortfolioSlider.module.css";
import TransparentButton from "../TransparentButton";

function PortfolioSlider({ sliderBlack, containerBlack }) {
  const customSlider = useRef();
  const titleSlider = useRef();
  var settings = {
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: false,
    draggable: false,
    touchMove: false,
  };

  const nextClicked = () => {
    customSlider.current.slickNext();
    titleSlider.current.slickNext();
  };

  const prevClicked = () => {
    customSlider.current.slickPrev();
    titleSlider.current.slickPrev();
  };

  return (
    <div className={styles.PortfolioSliderContainerWhite}>
      <div className={styles.PortfolioWhiteContainerMain}>
        <h2
          data-aos="zoom-in"
          data-aos-duration="2000"
          className={styles.wehead}
        >
          We are proud of
          <br /> our work...
        </h2>
        <div className={styles.PortfolioContainer}>
          <Slider
            ref={(slider) => (customSlider.current = slider)}
            {...settings}
          >
            {PortfolioSliderData.map((el, ind) => (
              <div className={styles.PortfolioSlide} key={ind}>
                <img src={el.image} alt={el.title} />
              </div>
            ))}
          </Slider>
          <div className={styles.PortfolioSliderArrows}>
            <img
              src="/assets/arrow.svg"
              alt="right-arrow"
              onClick={prevClicked}
            />
            <img
              src="/assets/arrow.svg"
              alt="left-arrow"
              onClick={nextClicked}
            />
          </div>
        </div>
      </div>
      <div className={styles.PortfolioSliderContainerBlack}>
        <Slider
          className={styles.PortfolioBlackSlider}
          ref={(slider) => (titleSlider.current = slider)}
          {...settings}
        >
          {PortfolioSliderData.map((el, ind) => (
            <>
              <div key={ind} className={styles.PortfolioDetails}>
                <h3> {el.title} </h3>
                <p> {el.details} </p>
              </div>
              <div className={styles.ViewButton}>
                <TransparentButton val={"View All"} />
              </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default PortfolioSlider;
