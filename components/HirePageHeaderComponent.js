import styles from "@/styles/components/HirePageComponent.module.css";
import { useRouter } from "next/router";
import { Col, Image, Row } from "react-bootstrap";
import YellowFilledWhiteButton from "./YellowFilledWhiteButton";
const HirePageHeaderComponent = (props) => {
  const goto = useRouter();
  return (
    <Row className={styles.Hireheadercontainer}>
      <Col sm={12} xs={12} xl={7}>
        <div className={styles.Heading}>
          <h1>{props.heading}</h1>
          <p>{props.detail}</p>
        </div>
        <div className={styles.BtnContainer}>
          <YellowFilledWhiteButton
            clickhandle={() => goto.push("/contact-us")}
            val={"Let's get started"}
            arrow={true}
          />
        </div>
      </Col>
      <Col sm={12} xs={12} xl={5} className={styles.ColSpace}>
        <div className={styles.ImageBox}>
          {/* <marquee>
              <p>Shopify</p>
              <p>Shopify</p>
              <p>Shopify</p>
            </marquee> */}
          {/* </div> */}
          <div class={styles.marquee}>
            <div className={styles.marqueeCover}>
              <div class={styles.marquee__inner} aria-hidden="true">
                <span> Shopify </span>
                <span> Shopify </span>
                <span> Shopify </span>
                <span> Shopify </span>
              </div>
              <div class={styles.marquee__inner} aria-hidden="true">
                <span> Shopify </span>
                <span> Shopify </span>
                <span> Shopify </span>
                <span> Shopify </span>
              </div>
              <div class={styles.marquee__inner} aria-hidden="true">
                <span> Shopify </span>
                <span> Shopify </span>
                <span> Shopify </span>
                <span> Shopify </span>
              </div>
            </div>
          </div>
          {/* <div className={styles.MarqueeAnim}>
            <div className={styles.marquee}>
              <div className={styles.marquee__inner}>
                <span>Hello</span>
              </div>
            </div> */}
          {/* <div className={styles.text}>Shopify</div>
            <div className={styles.text2}>Shopify</div>
            <div className={styles.text}>Shopify</div>
            <div className={styles.text2}>Shopify</div>
            <div className={styles.text}>Shopify</div> */}
          {/* </div> */}
          {/* <div className={styles.MarqueeAnim}>
            <div className={styles.MarqueeAnimLabel}>Shopify </div>
            <div className={styles.MarqueeAnimLabel}>Shopify </div>
            <div className={styles.MarqueeAnimLabel}>Shopify </div>
          </div> */}
          <div className={styles.ImageCover}>
            <Image src={"/assets/shopify-header.png"} />
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default HirePageHeaderComponent;
