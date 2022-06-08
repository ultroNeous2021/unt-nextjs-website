import { Row } from "react-bootstrap";
import styles from "@/styles/components/PagesHeaderComponent.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function PagesHeaderComponent({ text, heading, css = null, css2 = null }) {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <div>
      <Row className={styles.PagesHeader} style={css}>
        <div>
          <p>{text}</p>
          <h1 data-aos="zoom-in" data-aos-duration="2000" style={css2}>
            {heading}
          </h1>
        </div>
      </Row>
    </div>
  );
}

export default PagesHeaderComponent;
