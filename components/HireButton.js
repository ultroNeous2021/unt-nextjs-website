import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import styles from "@/styles/components/HireButton.module.css";
import Link from "next/link";
function HireButton(props) {
  return (
    <Link href={props.link ? props.link : ""}>
      <a className={styles.HireButton} {...props} onClick={props.clickHandler}>
        {props.val}
        <span>
          <HiOutlineArrowNarrowRight className={styles.ArrowHireIcon} />
        </span>
      </a>
    </Link>
  );
}

export default HireButton;
