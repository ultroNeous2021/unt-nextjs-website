import { Tabs } from "antd";
import styles from "@/styles/components/HorizontalTab.module.css";
import { Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
const { TabPane } = Tabs;

const HorizontalTab = ({ data, title }) => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  return (
    <div className={styles.HorizontalTabContainer}>
      <Row className={styles.ExcelAtHead}>
        <h2 data-aos="zoom-in" data-aos-duration="2000">
          {" "}
          {title}
        </h2>
      </Row>
      <Tabs defaultActiveKey="0">
        {data.map((el, ind) => (
          <TabPane
            tab={el.title}
            key={ind}
            className={styles.HorizontalTabPane}
          >
            <Row className={styles.HorizontalTabRow}>
              {el.techs.map((ele, i) =>
                el.techsname[i].link === "#" ? (
                  <Col
                    xs={6}
                    sm={6}
                    md={2}
                    lg={1}
                    key={i}
                    className={styles.HorizontalTabCol}
                  >
                    <div className={styles.HorizontalTabContainerMain}>
                      <div className={styles.HorizontalTabDiv}>{ele}</div>
                      <p className={styles.HorizontalTabname}>
                        {el.techsname[i].name}
                      </p>
                    </div>
                  </Col>
                ) : (
                  <Col
                    xs={6}
                    sm={6}
                    md={2}
                    lg={1}
                    key={i}
                    className={styles.HorizontalTabCol}
                  >
                    <Link href={el.techsname[i].link}>
                      <a href={el.techsname[i].link}>
                        <div className={styles.HorizontalTabContainerMain}>
                          <div className={styles.HorizontalTabDiv}>{ele}</div>
                          <p className={styles.HorizontalTabname}>
                            {el.techsname[i].name}
                          </p>
                        </div>
                      </a>
                    </Link>
                  </Col>
                )
              )}
            </Row>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default HorizontalTab;
