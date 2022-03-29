import { Col, Row } from "react-bootstrap";
import CountUp from "react-countup";
import styles from "@/styles/components/CounterComponent.module.css";
import { useEffect, useRef, useState } from "react";
import { Waypoint } from "react-waypoint";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useInViewport } from "react-in-viewport";
import AOS from "aos";
import "aos/dist/aos.css";
import useOnScreen from "./customHook/useOnScreen";
function CounterComponent(props) {
  const [load, setLoad] = useState(false);

  const countRef = useRef(null);
  const isOnScreen = useOnScreen(countRef);

  useEffect(() => {
    AOS.init();
    setLoad(true);
  //   document.addEventListener("contextmenu", function (e){
  //     e.preventDefault();
  // }, false);
  }, []);

  return (
    <div ref={countRef}>
      {load && (
        <Row
          id="CounterComponent"
          className={`${styles.CounterContainer} mx-0`}
          {...props}
        >
          {props.data.map((el, ind) => (
            <Col
              data-aos="zoom-in"
              data-aos-duration="2000"
              xs={12}
              sm={4}
              lg={2}
              className={styles.CounterComponentCol}
              key={ind}
            >
              <div>
                <CountUp
                  className={styles.Counter}
                  start={isOnScreen ? 5 : null}
                  end={el.end}
                  delay={0.5}
                  duration={3}
                />
                <span className={styles.CounterSign}>{el.sign}</span>
              </div>
              <p className={styles.CounterText}>{el.title}</p>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default CounterComponent;
