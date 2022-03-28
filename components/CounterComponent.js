import { Col, Row } from "react-bootstrap";
import CountUp from "react-countup";
import styles from "@/styles/components/CounterComponent.module.css";
import { useEffect, useRef, useState } from "react";
import { Waypoint } from "react-waypoint";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useInViewport } from "react-in-viewport";
import AOS from "aos";
import "aos/dist/aos.css";
function CounterComponent(props) {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    AOS.init();
    setLoad(true);
  //   document.addEventListener("contextmenu", function (e){
  //     e.preventDefault();
  // }, false);
  }, []);

  return (
    <>
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
                  start={20}
                  end={el.end}
                  sta
                />
                <span className={styles.CounterSign}>{el.sign}</span>
              </div>
              <p className={styles.CounterText}>{el.title}</p>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default CounterComponent;
