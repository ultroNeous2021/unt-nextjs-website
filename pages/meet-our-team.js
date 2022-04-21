import Layout from "@/components/Layout";
import { Col, Image, Row } from "react-bootstrap";
import { TeamAList, TeamGList, Teamlist } from "utils/DataList/listOfData";
import styles from "@/styles/MeetOurTeam.module.css";
import OurTeamSlider from "@/components/Slider/OurTeamSlider";
import PagesHeaderComponent from "@/components/PagesHeaderComponent";
import YellowFilledWhiteButton from "@/components/YellowFilledWhiteButton";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useRouter } from "next/router";

const MeetOurTeam = () => {
  const goto = useRouter();
  return (
    <Layout
      title={"Meet our ultroNeours | ultroNeous"}
      description={
        "ultroNeous has an enthusiast team of developers, designers, and marketers. All of us at ultroNeous have a single goal in mind, to serve better."
      }
    >
      <PagesHeaderComponent text={"ultroNeous"} heading={"Meet our Pillars"} />
      <div className={styles.Teamcontainer}>
        <OurTeamSlider />
        <Row>
          <h2 className={styles.TeamheadingFrontRunner}>The Front Runner</h2>

          {Teamlist.map((value, index) => (
            <Col xs={6} xl={3} className={styles.Team} key={index}>
              <div className={styles.ImageDiv}>
                <Image
                  src={value.image}
                  className={styles.Teamimg}
                  alt={value.name}
                />
              </div>
              <h2 className={styles.Teamname}>{value.name}</h2>
              <p className={styles.Teamdetail}>{value.detail}</p>
            </Col>
          ))}
        </Row>
        {/* {/ <div className='GlobalSales'> /} */}
        <Row>
          <h2 className={styles.Teamheading}>Global Sales</h2>
          {TeamGList.map((value, index) => (
            <Col xs={6} xl={3} className={styles.Team} key={index}>
              <div className={styles.ImageDiv}>
                <Image
                  src={value.image}
                  className={styles.Teamimg}
                  alt={value.name}
                />
              </div>
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
            <Col xs={6} xl={3} className={styles.Team} key={index}>
              <div className={styles.ImageDiv}>
                <Image
                  src={value.image}
                  className={styles.Teamimg}
                  alt={value.name}
                />
              </div>
              <h2 className={styles.Teamname}>{value.name}</h2>
              <p className={styles.Teamdetail}>{value.detail}</p>
            </Col>
          ))}
        </Row>
        {/* {/ </div> /} */}
      </div>
      <div className={styles.Teamcontentcontainer}>
        <h2 className={styles.Contentheading}>
          Each & every <span>ultroNeour</span> <br /> has a power, making their
          own <br />
          impact in the best possible way.
        </h2>
        <h3 className={styles.Subcontent}>You have a power too.. Right?</h3>
        <div className={styles.SubcontentButton}>
          <button
            className={styles.YellowButton}
            onClick={() => goto.push("/careers")}
          >
            Be a part of our Team
            <HiOutlineArrowNarrowRight
              size={30}
              style={{ marginLeft: "0.7em" }}
            />
          </button>
        </div>
      </div>
    </Layout>
  );
};
export default MeetOurTeam;
