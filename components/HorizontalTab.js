import { Tabs } from "antd";
import styles from "@/styles/components/HorizontalTab.module.css";
import { Col, Row } from "react-bootstrap";

const { TabPane } = Tabs;

const HorizontalTab = ({ data, title }) => (
  <div className={styles.HorizontalTabContainer}>
    <Row className={styles.ExcelAtHead}>
      <h2 data-aos="fade-down" data-aos-duration="2000">
        {" "}
        {title}
      </h2>
    </Row>
    <Tabs defaultActiveKey="0">
      {data.map((el, ind) => (
        <TabPane tab={el.title} key={ind} className={styles.HorizontalTabPane}>
          <Row className={styles.HorizontalTabRow}>
            {el.techs.map((ele, i) => (
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
                  <p className={styles.HorizontalTabname}>{el.techsname[i]}</p>
                </div>
              </Col>
            ))}
          </Row>
        </TabPane>
      ))}
    </Tabs>
  </div>
);

export default HorizontalTab;
