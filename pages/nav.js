import styles from "@/styles/nav.module.css";

function nav() {
  return (
    <main className={styles.main}>
      <h1>
        Fullscreen menu
        <span> with cool links </span>
      </h1>
      <input type="checkbox" id="myInput" className={styles.Checkbox} />
      <label htmlFor="myInput" className={styles.Label}>
        <span class={`${styles.bar} ${styles.top}`}></span>
        <span class={`${styles.bar} ${styles.middle}`}></span>
        <span class={`${styles.bar} ${styles.bottom}`}></span>
      </label>
      <aside className={styles.AsideMain}>
        <div class={`${styles.asidesection} ${styles.asideleft}`}>
          <div class={styles.asidecontent}>
            <p> Some text that will make you click the cta </p>
            <button class={styles.button}> CTA </button>
          </div>
        </div>
        <div class={`${styles.asidesection} ${styles.asideright}`}>
          <ul class={styles.asidelist}>
            <li className={styles.ListItems}>
              <a href="" class={styles.asideanchor}>
                Link
              </a>
            </li>
            <li className={styles.ListItems}>
              <a href="" class={styles.asideanchor}>
                Link
              </a>
            </li>
            <li className={styles.ListItems}>
              <a href="" class={styles.asideanchor}>
                Link
              </a>
            </li>
            <li className={styles.ListItems}>
              <a href="" class={styles.asideanchor}>
                Link
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </main>
  );
}

export default nav;
