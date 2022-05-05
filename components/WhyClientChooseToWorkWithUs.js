import styles from "@/styles/components/WhyClientChooseToWorkWithUs.module.css";
import { useEffect } from "react";

function WhyClientChooseToWorkWithUs() {
  useEffect(() => {
    var path = document.getElementsByClassName("black")[0];
    let pathLength = path.getTotalLength();

    path.style.strokeDasharray = `${pathLength} ${pathLength}`;

    path.style.strokeDashoffset = pathLength * 2;

    window.addEventListener("scroll", () => {
      let scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      let drawLength = pathLength * scrollPercentage;

      path.style.strokeDashoffset = pathLength - drawLength;

      const image1 = document.getElementsByClassName("image1")[0];
      const image2 = document.getElementsByClassName("image2")[0];
      const image3 = document.getElementsByClassName("image3")[0];

      if (drawLength > 920) {
        image1.style.opacity = 1;
      } else if (drawLength < 920) {
        image1.style.opacity = 0;
      }

      if (drawLength > 700) {
        image2.style.opacity = 1;
      } else if (drawLength < 700) {
        image2.style.opacity = 0;
      }

      if (drawLength > 1200) {
        image3.style.opacity = 1;
      } else if (drawLength < 1200) {
        image3.style.opacity = 0;
      }
    });
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.animation}>
          <svg
            className={styles.SvgMain}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox=" 0 0 1200 600"
            enable-background="new 0 0 1200 600"
            xmlSpace="preserve"
          >
            <path
              className={`${styles.path} ${styles.black} black`}
              fill="none"
              stroke-width="2px"
              d="M1 27.9446C44.3857 -1.12287 152.693 -30.1207 238.837 86.4277C324.981 202.976 472.667 163.709 539.923 132.379C584.354 111.682 637.149 72.8515 700.921 124.546C762.172 174.198 808.601 337.592 938.758 191.906C1068.91 46.2208 1281.66 -10.1736 1439 102.093"
            />
            <path
              className={styles.path2}
              fill="none"
              stroke-width="8px"
              d="M1 27.9446C44.3857 -1.12287 152.693 -30.1207 238.837 86.4277C324.981 202.976 472.667 163.709 539.923 132.379C584.354 111.682 637.149 72.8515 700.921 124.546C762.172 174.198 808.601 337.592 938.758 191.906C1068.91 46.2208 1281.66 -10.1736 1439 102.093"
            />
          </svg>
        </div>
        <div className={styles.images}>
          <a href="https://www.facebook.com/">
            <img
              className={`${styles.image1} image1`}
              src={"/assets/Group907.png"}
            />
          </a>
          <a href="https://twitter.com/i/flow/login">
            <img
              className={`${styles.image2} image2`}
              src={"/assets/Group907.png"}
            />
          </a>
          <a href="https://www.instagram.com/ultroneous.technologies/">
            <img
              className={`${styles.image3} image3`}
              src={"/assets/Group907.png"}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default WhyClientChooseToWorkWithUs;
