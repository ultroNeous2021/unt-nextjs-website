import styles from "@/styles/components/CheckboxComponent.module.css";

function CheckboxComponent({ htmlId }) {
  return (
    <div class={styles.sbcheckbox}>
      <input
        type="checkbox"
        class={styles.sbcheckboxinput}
        id={htmlId}
        name={htmlId}
      />
      <label
        class={`${styles.sbcheckboxlabel} ${styles.sbcheckboxlabelblack}`}
        for={htmlId}
      ></label>
    </div>
  );
}

export default CheckboxComponent;
