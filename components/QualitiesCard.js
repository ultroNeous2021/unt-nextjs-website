import { Image } from "react-bootstrap";
import styles from "@/styles/components/Qualities.module.css";
const QualitiesCard = (props) => {
  return (
    <div>
      <Image src={props.img} alt={props.alter} height={71} />
      <h3 className={styles.HeadingStyle}>{props.heading}</h3>
      <p className={styles.ParagraphStylesQ}>{props.paragraph}</p>
    </div>
  );
};
export default QualitiesCard;
