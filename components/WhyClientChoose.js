import { Image, Row } from "react-bootstrap";
import styles from "@/styles/components/WhyClientChoose.module.css";
import { useEffect, useState } from "react";
const WhyClientChoose = ({ css }) => {
  const [image, setImage] = useState("/assets/why-client-choose-us.png");

  useEffect(() => {
    window.innerWidth >= 320 && window.innerWidth <= 720
      ? setImage("/assets/why-client-choose-us-device.png")
      : setImage("/assets/why-client-choose-us.png");
  });

  return (
    <div className={styles.WhyClientChooseContainer} style={css ? css : null}>
      <Row className="mx-0 justify-content-center">
        <h3
          data-aos="zoom-in"
          data-aos-duration="2000"
          className={styles.WhyClientChooseHeading}
        >
          Why Clients choose to work with us
        </h3>
      </Row>
      <Row className="mx-0">
        <Image
          className={styles.WhyClientChooseImage}
          src={image}
          alt="why client choose us"
        />
      </Row>
    </div>
  );
};
export default WhyClientChoose;
