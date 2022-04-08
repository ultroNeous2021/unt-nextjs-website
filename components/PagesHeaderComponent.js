import { Row } from "react-bootstrap";
import styles from "@/styles/components/PagesHeaderComponent.module.css";

function PagesHeaderComponent({ text, heading, css = null }) {
  return (
    <div>
      <Row className={styles.PagesHeader} style={css}>
        <div>
          <p>{text}</p>
          <h1 data-aos="zoom-in" data-aos-duration="2000">
            {heading}
          </h1>
        </div>
      </Row>
    </div>
  );
}

export default PagesHeaderComponent;
