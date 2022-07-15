import styles from "@/styles/components/HirePageComponent.module.css";
import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import YellowFilledWhiteButton from "./YellowFilledWhiteButton";
import AOS from "aos";
import "aos/dist/aos.css";
const HirePageHeaderComponent = (props) => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <Row className={styles.Hireheadercontainer}>
      <Col sm={12} xs={12} xl={7} className="p-xl-0">
        <div className={styles.Heading}>
          <h1 data-aos="zoom-in" data-aos-duration="2000">
            {props.heading}
          </h1>
          <p>{props.detail}</p>
        </div>
        <div className={styles.BtnContainer}>
          <YellowFilledWhiteButton
            link={"/contact-us"}
            val={"Let's get started"}
            arrow={true}
          />
        </div>
      </Col>
      <Col sm={12} xs={12} xl={5} className={styles.ColSpace}>
        <div className={styles.ImageBox}>
          <div class={styles.marquee}>
            <div className={styles.marqueeCover}>
              <div class={styles.marquee__inner1} aria-hidden="true">
                <span>
                  <Image
                    src={props.techname}
                    className={styles.techimgs}
                    alt={props.alt}
                  />
                </span>
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
              </div>
              <div class={styles.marquee__inner} aria-hidden="true">
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
              </div>
              <div class={styles.marquee__inner1} aria-hidden="true">
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
              </div>
              <div class={styles.marquee__inner} aria-hidden="true">
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
              </div>
              <div class={styles.marquee__inner1} aria-hidden="true">
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
              </div>
              <div class={styles.marquee__inner} aria-hidden="true">
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
                <span>
                  <Image src={props.techname} className={styles.techimgs} />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.ImageCover}>
            <Image
              src={
                props.model ? props.model : "/assets/development-header.webp"
              }
              className={styles.ImageWidth}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default HirePageHeaderComponent;
