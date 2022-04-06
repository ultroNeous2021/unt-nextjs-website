import Layout from "@/components/Layout";
import { Col, Image, Row } from "react-bootstrap";
import { TeamAList, TeamGList, Teamlist } from "utils/DataList/listOfData";
import styles from "@/styles/MeetOurTeam.module.css";
import OurTeamSlider from "@/components/Slider/OurTeamSlider";
import PagesHeaderComponent from "@/components/PagesHeaderComponent";

const MeetOurTeam = () => {
  return (
    <Layout>
      <PagesHeaderComponent text={"ultroNeous"} heading={"Meet our Pillars"} />
      <div className={styles.Teamcontainer}>
        <OurTeamSlider />
        <Row>
          <h2 className={styles.Teamheading}>The Front Runner</h2>

          {Teamlist.map((value, index) => (
            <Col xs={6} xl={3} className={styles.Team}>
              <Image src={value.image} className={styles.Teamimg} />
              <h2 className={styles.Teamname}>{value.name}</h2>
              <p className={styles.Teamdetail}>{value.detail}</p>
            </Col>
          ))}
        </Row>
        {/* {/ <div className='GlobalSales'> /} */}
        <Row>
          <h2 className={styles.Teamheading}>Global Sales</h2>
          {TeamGList.map((value, index) => (
            <Col xs={6} xl={3} className={styles.Team}>
              <Image src={value.image} className={styles.Teamimg} />
              <h2 className={styles.Teamname}>{value.name}</h2>
              <p className={styles.Teamdetail}>{value.detail}</p>
            </Col>
          ))}
        </Row>
        {/* {/ </div> /} */}

        {/* {/ <div className='OurAchievers'> /} */}
        <Row>
          <h2 className={styles.Teamheading}>Our Achievers</h2>
          {TeamAList.map((value, index) => (
            <Col xs={6} xl={3} className={styles.Team}>
              <Image src={value.image} className={styles.Teamimg} />
              <h2 className={styles.Teamname}>{value.name}</h2>
              <p className={styles.Teamdetail}>{value.detail}</p>
            </Col>
          ))}
        </Row>

        {/* {/ </div> /} */}
      </div>
      <div className={styles.Teamcontentcontainer}>
        <h2 className={styles.Contentheading}>
          Each & every ultroNeour has a power, making their own impact in the
          best possible way.
        </h2>
        <h3 className={styles.Subcontent}>You have a power too.. Right?</h3>
      </div>
    </Layout>
  );
};
export default MeetOurTeam;
