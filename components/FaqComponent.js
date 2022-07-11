import { Accordion, Col, Row } from "react-bootstrap";
import { MernstackFaq } from "utils/DataList/listOfData";
import styles from "@/styles/components/Faq.module.css";

const FaqComponent = () => {
  return (
    <div className={styles.FaqContainer}>
      <div>
        <h4 className={styles.FaqHeading}>FAQs</h4>
      </div>
      <Row className={styles.FaqRow}>
        {/* {MernstackFaq.map((v, i) => ( */}
        <Col xl={6} className={styles.FaqCol}>
          <Accordion className="forfaq">
            <Accordion.Item eventKey={0}>
              <Accordion.Header>
                <span className={styles.FaqNum}>{MernstackFaq[0].num}</span>
                {MernstackFaq[0].que}
              </Accordion.Header>
              <Accordion.Body>{MernstackFaq[0].ans}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={1}>
              <Accordion.Header>
                <span className={styles.FaqNum}>{MernstackFaq[1].num}</span>
                {MernstackFaq[1].que}
              </Accordion.Header>
              <Accordion.Body>{MernstackFaq[1].ans}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={2}>
              <Accordion.Header>
                <span className={styles.FaqNum}>{MernstackFaq[2].num}</span>
                {MernstackFaq[2].que}
              </Accordion.Header>
              <Accordion.Body>{MernstackFaq[2].ans}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col xl={6} className={styles.FaqCol}>
          <Accordion className="forfaq">
            <Accordion.Item eventKey={0}>
              <Accordion.Header>
                <span className={styles.FaqNum}>{MernstackFaq[3].num}</span>
                {MernstackFaq[3].que}
              </Accordion.Header>
              <Accordion.Body>{MernstackFaq[3].ans}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={1}>
              <Accordion.Header>
                <span className={styles.FaqNum}>{MernstackFaq[4].num}</span>
                {MernstackFaq[4].que}
              </Accordion.Header>
              <Accordion.Body>{MernstackFaq[4].ans}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={2}>
              <Accordion.Header>
                <span className={styles.FaqNum}>{MernstackFaq[5].num}</span>
                {MernstackFaq[5].que}
              </Accordion.Header>
              <Accordion.Body>{MernstackFaq[5].ans}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </div>
  );
};
export default FaqComponent;
