import { Carousel } from "3d-react-carousal";
import React, { useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";
// import Slider from "react-slick";
import Arrow from "../../assets/images/next-icon.svg";
import "./ClientTestimonials.css";

function ClientTestimonials({
  styleClass,
  headingName,
  sliderData,
  TestimonialSliderProps,
}) {
  // const testimonialImageSlider = useRef();
  // const testimonialTextSlider = useRef();

  // var settings = {
  //   arrows: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1     ,
  //   slidesToScroll: 1,
  // };

  // var settingsForText = {
  //   arrows: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  // if (window.innerWidth < 768) {
  //   var settings = {

  // }

  // const nextClicked = () => {
  //   testimonialImageSlider.current.slickNext();
  //   testimonialTextSlider.current.slickNext();
  // };

  // const prevClicked = () => {
  //   testimonialImageSlider.current.slickPrev();
  //   testimonialTextSlider.current.slickPrev();
  // };

  const slides = sliderData.map((el, ind) => (
    <div className="Testimonial-Text" key={ind}>
      <img src={el.image} alt={el.name} className={`${styleClass}`}/>
      <p>
        <FaQuoteLeft
          style={{ color: "#E49B00", fontSize: "2em", display: "block" }}
        />
        {el.details}
      </p>
      <small style={{ color: "#aaa" }}> {el.name} </small>
    </div>
  ));

  const sliderRef = useRef(null);

  return (
    <>
      {headingName ? <div className="content-font">{headingName}</div> : null}
      {/* <div
        className={`Testimonials-Container ${TestimonialSliderProps}`}
        style={{ background: "#1A1112", zIndex: "1" }}
      >
        <div className="Left-arrow-testimonials">
          <img src={Arrow} alt="right-arrow" onClick={prevClicked} />
        </div>

        <div className="Testimonial-Slides">
          <div className="Testimonial-Image-Slider">
            <Slider
              className="Testimonial-Slider-Main"
              ref={(slider) => (testimonialImageSlider.current = slider)}
              {...settings}
            >
              {sliderData.map((el, ind) => (
                <div className="Testimonial-Slide" key={ind}>
                  <img src={el.image} alt={el.title} />
                </div>
              ))}
            </Slider>
          </div>
          <Slider
            className="Testimonial-Slider-Texts"
            ref={(slider) => (testimonialTextSlider.current = slider)}
            {...settingsForText}
          >
            {sliderData.map((el, ind) => (
              <div className="Testimonial-Text" key={ind}>
                <p> {el.details}</p>
                <p> {el.name} </p>
              </div>
            ))}
          </Slider>
        </div>
        <div className="Right-arrow-testimonials">
          <img src={Arrow} alt="left-arrow" onClick={nextClicked} />
        </div>
      </div> */}
      <div
        className={`Client-Testimonial-Container ${
          TestimonialSliderProps ? TestimonialSliderProps : null
        }`}
      >
        {/* <img
          src={Arrow}
          alt="white-arrow"
          className="Client-Testimonials-Arrow"
          style={{ transform: "rotate(180deg)" }}
          onClick={}
        /> */}
        <Carousel slides={slides} arrows={false} ref={sliderRef} />
        {/* <img
          src={Arrow}
          alt="white-arrow"
          className="Client-Testimonials-Arrow"
        /> */}
      </div>
    </>
  );
}

export default ClientTestimonials;
