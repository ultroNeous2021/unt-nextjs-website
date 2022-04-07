import styles from "@/styles/nav.module.css";

function nav() {
  return (
    <div>
      <input
        type="checkbox"
        id="burgerToggle"
        className={styles.BurgerMenuCheckbox}
      />
      <label for="burgerToggle" class={styles.BurgerMenu}>
        <div className={`${styles.LineOne} ${styles.Line}`}></div>
        <div className={`${styles.LineTwo} ${styles.Line}`}></div>
        <div className={`${styles.LineThree} ${styles.Line}`}></div>
      </label>
    </div>
  );
}

export default nav;
