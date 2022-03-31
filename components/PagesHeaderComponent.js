import { Row } from "react-bootstrap";
import styles from "@/styles/components/PagesHeaderComponent.module.css";

function PagesHeaderComponent({ text, heading, css = null }) {
  return (
    <div>
      <Row className={styles.PagesHeader} style={css}>
        <div>
          <p>{text}</p>
          <h1>{heading}</h1>
        </div>
      </Row>
    </div>
  );
}

export default PagesHeaderComponent;
