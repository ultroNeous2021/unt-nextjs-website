import React from "react";
import styles from '@/styles/components/ButtonComponent.module.css'
function ButtonComponent({ val, clickHandler }) {
  return (
    <button className={styles.ButtonComponent} onClick={clickHandler}>
      {val}
    </button>
  );
}

export default ButtonComponent;
