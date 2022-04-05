import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import styles from "@/styles/components/HireButton.module.css";
function HireButton(props) {
  return (
    <p className={styles.HireButton} {...props} onClick={props.clickHandler}>
      {props.val}
      <span>
        <HiOutlineArrowNarrowRight className={styles.ArrowHireIcon} />
      </span>
    </p>
  );
}

export default HireButton;
