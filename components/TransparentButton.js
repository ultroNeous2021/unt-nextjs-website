import styles from "@/styles/components/TransparentButton.module.css";
import Link from "next/link";
function TransparentButton({ val, link }) {
  return (
    <Link href={link ? link : ""}>
      <button className={styles.TransparentButton}>{val}</button>
    </Link>
  );
}

export default TransparentButton;
