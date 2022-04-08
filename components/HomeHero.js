import styles from "@/styles/components/HomeHero.module.css";
import { useEffect } from "react";
import $ from "jquery";

function HomeHero() {
  useEffect(() => {
    if (window.innerWidth > 1024) {
      $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        $(".HomeHeroImage").css({
          backgroundSize: 100 + scroll / 20 + "%",
          top: -(scroll / 10) + "%",
        });
      });
    }
  }, []);

  return (
    <div className={styles.HomeHeroContainer}>
      <div className={`${styles.HomeHero} HomeHeroImage`}>
        <div className={styles.HomeHeroTextContainer}>
          <div className={styles.herotext} id={styles.first}>
            <h1>
              Empowering <br /> Enterprise Solutions
            </h1>
            <p>
              A highly experienced team, developing scalable Enterprise
              Solutions
            </p>
          </div>
          <div className={styles.herotext} id={styles.second}>
            <h1>
              Driving SME <br /> Forces
            </h1>
            <p>We drive the SME talent, building global Business Solutions</p>
          </div>
          <div className={styles.herotext} id={styles.third}>
            <h1>
              From Vision <br /> to Reality
            </h1>
            <p>A Startup or an idea, we are ready to discuss your Vision</p>
          </div>
          <div className={styles.herotext} id={styles.fourth}>
            <h1>
              Powering Digital <br /> Transformations
            </h1>
            <p>
              We are transforming the World, planning powerful Digital
              Solutions.
            </p>
          </div>
          <div className={styles.herotext} id={styles.fifth}>
            <h1>
              Nurturing Talent <br /> Transfiguration
            </h1>
            <p>Embracing the talent to meet up the future world</p>
          </div>
        </div>
        <div className={styles.VerticalIndicatorContainer}>
          <div
            className={styles.VerticalIndicatorContentDiv}
            id={styles.firstLine}
          >
            <span id={styles.firstNumber}>1</span>
            <div className={styles.VerticalIndicator}></div>
          </div>

          <div
            className={styles.VerticalIndicatorContentDiv}
            id={styles.secondLine}
          >
            <span id={styles.secondNumber}>2</span>
            <div className={styles.VerticalIndicator}></div>
          </div>
          <div
            className={styles.VerticalIndicatorContentDiv}
            id={styles.thirdLine}
          >
            <span id={styles.thirdNumber}>3</span>
            <div className={styles.VerticalIndicator}></div>
          </div>
          <div
            className={styles.VerticalIndicatorContentDiv}
            id={styles.fourthLine}
          >
            <span id={styles.fourthNumber}>4</span>
            <div className={styles.VerticalIndicator}></div>
          </div>
          <div
            className={styles.VerticalIndicatorContentDiv}
            id={styles.fifthLine}
          >
            <span id={styles.fifthNumber}>5</span>
            <div className={styles.VerticalIndicator}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
