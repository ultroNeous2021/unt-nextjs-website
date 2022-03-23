import { Tabs } from "antd";
import styles from "@/styles/components/HorizontalTab.module.css";
import { Col, Row } from "react-bootstrap";
import { SiReact } from "react-icons/si";

const { TabPane } = Tabs;

const HorizontalTab = ({ data, title }) => (
  <div className={styles.HorizontalTabContainer}>
    <Row className={styles.ExcelAtHead}>
      <h2> {title}</h2>
    </Row>
    <Tabs defaultActiveKey="0">
      {data.map((el, ind) => (
        <TabPane tab={el.title} key={ind} className={styles.HorizontalTabPane}>
          <Row className={styles.HorizontalTabRow}>
            {el.techs.map((ele, i) => (
              <Col
                xs={12}
                sm={6}
                md={1}
                key={i}
                className={styles.HorizontalTabCol}
              >
                {ele}
              </Col>
            ))}
          </Row>
        </TabPane>
      ))}
    </Tabs>
  </div>
);

export default HorizontalTab;
