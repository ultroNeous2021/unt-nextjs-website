import styles from "@/styles/components/YellowFilledWhiteButton.module.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function YellowFilledWhiteButton({ val, arrow, style }) {
  return (
    <button className={styles.ButtonYellowFilled} style={style}>
      {val}
      {arrow ? (
        <HiOutlineArrowNarrowRight size={30} style={{ marginLeft: "0.7em" }} />
      ) : null}
    </button>
  );
}

export default YellowFilledWhiteButton;
