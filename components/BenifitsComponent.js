import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/BenifitsComponent.module.css";
const BenifitsComponent = (props) => {
  return (
    <div className={styles.Hirecontainer}>
      <h2 className={styles.Heading}>{props.maintitle}</h2>

      <Row className={styles.Subsection}>
        {props.datalist.map((value, index) => (
          <Col xs={12} xl={3} className={styles.Containt} key={index}>
            <Image src={value.src} alt={value.title} width={71} />
            <span className={styles.Subtitle}>{value.title}</span>
            <p className={styles.Description}>{value.Description}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default BenifitsComponent;
