import styles from "@/styles/components/ButtonComponent.module.css";
import Link from "next/link";
function ButtonComponent({ val, clickHandler, link }) {
  return (
    <Link href={link ? link : ""}>
      <a className={styles.ButtonComponent} onClick={clickHandler}>
        {val}
      </a>
    </Link>
  );
}

export default ButtonComponent;
