import { Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/components/Verticals.module.css";
const Verticals = () => {
  return (
    <div className={styles.Verticalscontainer}>
      <Row>
        <h2 className={styles.Verticalheading}>Verticals</h2>
      </Row>

      <Row className={styles.Verticalcard}>
        <Col className={styles.Verticalsinglecard} xs={6} sm={6} xl={1} md={3}>
          <Image alt="vertical image" className={styles.Verticalimg} />
          <h2 className={styles.Cardtext}>Finance</h2>
        </Col>
        <Col className={styles.Verticalsinglecard} xs={6} sm={6} xl={1} md={3}>
          <Image alt="vertical image" className={styles.Verticalimg2} />
          <h2 className={styles.Cardtext}>Healthcare</h2>
        </Col>

        <Col className={styles.Verticalsinglecard} xs={6} sm={6} xl={1} md={3}>
          <Image alt="vertical image" className={styles.Verticalimg3} />
          <h2 className={styles.Cardtext}>Education</h2>
        </Col>

        <Col className={styles.Verticalsinglecard} xs={6} sm={6} xl={1} md={3}>
          <Image alt="vertical image" className={styles.Verticalimg4} />
          <h2 className={styles.Cardtext}>Hospitality</h2>
        </Col>

        <Col className={styles.Verticalsinglecard} xs={6} sm={6} xl={1} md={3}>
          <Image alt="vertical image" className={styles.Verticalimg5} />
          <h2 className={styles.Cardtext}>eCommerce</h2>
        </Col>

        <Col className={styles.Verticalsinglecard} xs={6} sm={6} xl={1} md={3}>
          <Image alt="vertical image" className={styles.Verticalimg6} />
          <h2 className={styles.Cardtext}>Real Estate </h2>
        </Col>

        <Col className={styles.Verticalsinglecard} xs={6} sm={6} xl={1} md={3}>
          <Image alt="vertical image" className={styles.Verticalimg7} />
          <h2 className={styles.Cardtext}>Food Delivery</h2>
        </Col>

        <Col className={styles.Verticalsinglecard} xs={6} sm={6} xl={1} md={3}>
          <Image alt="vertical image" className={styles.Verticalimg8} />
          <h2 className={styles.Cardtext}>Travel</h2>
        </Col>
      </Row>
    </div>
  );
};
export default Verticals;
