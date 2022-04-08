import QualitiesCard from "./QualitiesCard";
import styles_qualities from "@/styles/components/Qualities.module.css";
import { Col, Row } from "react-bootstrap";

const QualitiesSection = (props) => {
  return (
    <Row className={styles_qualities.PaddingSliderRow}>
      {props.QualitiesList.map((value, index) => (
        <Col
          xs={12}
          sm={12}
          xl={3}
          md={6}
          lg={3}
          key={index}
          className={styles_qualities.PaddingSliderCol}
        >
          <QualitiesCard
            img={value.image}
            alter={value.name}
            heading={value.name}
            paragraph={value.descreption}
          />
        </Col>
      ))}
    </Row>
  );
};
export default QualitiesSection;
