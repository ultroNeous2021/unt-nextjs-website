import styles from "@/styles/components/HirePageComponent.module.css";
import { useRouter } from "next/router";
import { Col, Image, Row } from "react-bootstrap";
import YellowFilledWhiteButton from "./YellowFilledWhiteButton";
const HirePageHeaderComponent = (props) => {
  const goto = useRouter();
  return (
    <Row className={styles.Hireheadercontainer}>
      <Col sm={12} xs={12} xl={7} className="p-xl-0">
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
          <div class={styles.marquee}>
            <div className={styles.marqueeCover}>
              <div class={styles.marquee__inner1} aria-hidden="true">
                <span>{props.techname}</span>
                <span>{props.techname}</span>
                <span>{props.techname}</span>
                <span>{props.techname}</span>
              </div>
              <div class={styles.marquee__inner} aria-hidden="true">
                <span>{props.techname}</span>
                <span>{props.techname}</span>
                <span>{props.techname}</span>
                <span>{props.techname}</span>
              </div>
              <div class={styles.marquee__inner1} aria-hidden="true">
                <span>{props.techname}</span>
                <span>{props.techname}</span>
                <span>{props.techname}</span>
                <span>{props.techname}</span>
              </div>
              <div class={styles.marquee__inner} aria-hidden="true">
                <span>{props.techname}</span>
                <span>{props.techname}</span>
                <span>{props.techname}</span>
                <span>{props.techname}</span>
              </div>
              <div class={styles.marquee__inner1} aria-hidden="true">
                <span>{props.techname}</span>
                <span>{props.techname}</span>
                <span>{props.techname}</span>
                <span>{props.techname}</span>
              </div>
            </div>
          </div>
          <div className={styles.ImageCover}>
            <Image
              src={"/assets/shopify-header.png"}
              className={styles.ImageWidth}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default HirePageHeaderComponent;
