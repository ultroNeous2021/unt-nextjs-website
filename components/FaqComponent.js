import { Accordion, Col, Row } from "react-bootstrap";
import { MernstackFaq } from "utils/DataList/listOfData";
import styles from "@/styles/components/Faq.module.css";

const FaqComponent = ({ datalist }) => {
  return (
    <div className={styles.FaqContainer}>
      <div>
        <h4 className={styles.FaqHeading}>FAQs</h4>
      </div>
      <Row className={styles.FaqRow}>
        {/* {MernstackFaq.map((v, i) => ( */}
        <Col xl={6} className={styles.FaqCol}>
          <Accordion className="forfaq">
            {datalist.left.map((v, i) => (
              <Accordion.Item eventKey={v.num} key={i}>
                <Accordion.Header>
                  <span className={styles.FaqNum}>{v.num}</span>
                  {v.que}
                </Accordion.Header>
                <Accordion.Body>{v.ans}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
        <Col xl={6} className={styles.FaqCol}>
          <Accordion className="forfaq">
            {datalist.right.map((v, i) => (
              <Accordion.Item eventKey={v.num} key={i}>
                <Accordion.Header>
                  <span className={styles.FaqNum}>{v.num}</span>
                  {v.que}
                </Accordion.Header>
                <Accordion.Body>{v.ans}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </div>
  );
};
export default FaqComponent;
