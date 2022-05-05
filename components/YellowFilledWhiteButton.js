import styles from "@/styles/components/YellowFilledWhiteButton.module.css";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function YellowFilledWhiteButton({ val, arrow, style, clickhandle, link }) {
  return (
    <Link href={link ? link : ""}>
      <a
        className={styles.ButtonYellowFilled}
        style={style}
        onClick={() => (clickhandle ? clickhandle() : null)}
      >
        {val}
        {arrow ? (
          <HiOutlineArrowNarrowRight
            size={30}
            style={{ marginLeft: "0.7em" }}
          />
        ) : null}
      </a>
    </Link>
  );
}

export default YellowFilledWhiteButton;
