import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/BenifitsComponent.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const BenifitsComponent = (props) => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <div className={styles.Hirecontainer}>
      <h2
        className={styles.Heading}
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        {props.maintitle}
      </h2>

      <Row className={styles.Subsection}>
        {props.datalist.map((value, index) => (
          <Col xs={12} xl={3} md={6} className={styles.Containt} key={index}>
            <div>
              <Image src={value.src} alt={value.title} />
            </div>
            <span className={styles.Subtitle}>{value.title}</span>
            <p className={styles.Description}>{value.Description}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default BenifitsComponent;
