import Layout from "@/components/Layout";
import PagesHeaderComponent from "@/components/PagesHeaderComponent";
import YellowFilledWhiteButton from "@/components/YellowFilledWhiteButton";
import styles from "@/styles/Portfolio.module.css";
import { Tabs } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import { Col, Image, Row } from "react-bootstrap";
import { API_URL } from "utils/CONSTANT_DATA";
const { TabPane } = Tabs;
const portfolio = ({ data }) => {
  const router = useRouter();
  const listdata = [
    // {
    //   name: "allprojects",
    //   ori: "All projects",
    // },
    {
      name: "mobileApp",
      ori: "Mobile App",
    },
    {
      name: "webApp",
      ori: "Web App",
    },
    {
      name: "platform",
      ori: "Platform",
    },
    {
      name: "other",
      ori: "Other",
    },
  ];
  const listOfportfolioItems = [
    {
      title: "All Projects",
      data: [
        {
          src: "/assets/PP1.png",
          pname: "****",
          clientname: "****",
        },
        {
          src: "/assets/PP2.png",
          pname: "****",
          clientname: "****",
        },
        {
          src: "/assets/PP3.png",
          pname: "****",
          clientname: "****",
        },
        {
          src: "/assets/PP1.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP2.png",
          pname: "****",
          clientname: "****",
        },
        {
          src: "/assets/PP1.png",
          pname: "****",
          clientname: "****",
        },
        {
          src: "/assets/PP2.png",
          pname: "****",
          clientname: "****",
        },
        {
          src: "/assets/PP3.png",
          pname: "****",
          clientname: "****",
        },
      ],
    },
    {
      title: "Mobile App",
      data: [
        {
          src: "/assets/PP2.png",
          pname: "mobile",
          clientname: "mobile",
        },
        {
          src: "/assets/PP2.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP3.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP1.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP2.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP1.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP2.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP3.png",
          pname: "",
          clientname: "",
        },
      ],
    },
    {
      title: "Web App",
      data: [
        {
          src: "/assets/PP3.png",
          pname: "",
          clientname: "web",
        },
        {
          src: "/assets/PP2.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP3.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP1.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP2.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP1.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP2.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP3.png",
          pname: "",
          clientname: "",
        },
      ],
    },
    {
      title: "Platform",
      data: [
        {
          src: "/assets/PP1.png",
          pname: "",
          clientname: "platform",
        },
        {
          src: "/assets/PP2.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP3.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP1.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP2.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP1.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP2.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP3.png",
          pname: "",
          clientname: "",
        },
      ],
    },
    {
      title: "Other",
      data: [
        {
          src: "/assets/PP2.png",
          pname: "other",
          clientname: "other",
        },
        {
          src: "/assets/PP2.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP3.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP1.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP2.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP1.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP2.png",
          pname: "",
          clientname: "",
        },
        {
          src: "/assets/PP3.png",
          pname: "",
          clientname: "",
        },
      ],
    },
  ];
  return (
    <Layout>
      <PagesHeaderComponent
        text={"Our Portfolio"}
        heading={"We are proud of our work"}
      />
      {/* <div className={styles.TabsContainer}>
        <Tabs defaultActiveKey="0">
          {listdata.map((v, i) => {
            return (
              <TabPane tab={v.ori} key={i} className={styles.HorizontalTabPane}>
                {data.data[v.name].map((v) => console.log(v.type))}
              </TabPane>
            );
          })}
        </Tabs>
      </div> */}
      <div className={styles.TabsContainer}>
        <Tabs defaultActiveKey="0">
          {listOfportfolioItems.map((el, ind) => (
            <TabPane
              tab={el.title}
              key={ind}
              className={styles.HorizontalTabPane}
            >
              <div className={styles.Wanttodiscuss}>
                <Row className={styles.ProjectContain}>
                  <Col xl={6} xs={12} className={styles.TechnoSpacing}>
                    <div className={styles.TechnoContainer}>
                      <Image
                        src={el.data[0].src}
                        alt="Avatar"
                        className={styles.TechnologyImage}
                        fluid
                      />
                      <div className={styles.TechnologyOverlay}>
                        <div className={styles.TechnologyText}>
                          <p>{el.data[0].clientname}</p>
                          <h1>{el.data[0].src}</h1>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xl={6} className={styles.TechnoSpacing}>
                    <div className={styles.TechnoContainer}>
                      <Image
                        src={el.data[1].src}
                        alt="Avatar"
                        className={styles.TechnologyImage}
                        fluid
                      />
                      <div className={styles.TechnologyOverlay}>
                        <div className={styles.TechnologyText}>
                          <p>{el.data[1].clientname}</p>
                          <h1>{el.data[1].src}</h1>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xl={12} className={styles.TechnoSpacing}>
                    <div className={styles.TechnoContainer}>
                      <Image
                        src={el.data[2].src}
                        alt="Avatar"
                        className={styles.TechnologyImage}
                        fluid
                      />
                      <div className={styles.TechnologyOverlay}>
                        <div className={styles.TechnologyText}>
                          <p>{el.data[2].clientname}</p>
                          <h1>{el.data[2].src}</h1>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xl={6} className={styles.TechnoSpacing}>
                    <div className={styles.TechnoContainer}>
                      <Image
                        src={"/assets/PP1.png"}
                        alt="Avatar"
                        className={styles.TechnologyImage}
                        fluid
                      />
                      <div className={styles.TechnologyOverlay}>
                        <div className={styles.TechnologyText}>
                          <p>client name</p>
                          <h1>Project Name</h1>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xl={6} className={styles.TechnoSpacing}>
                    <div className={styles.TechnoContainer}>
                      <Image
                        src={"/assets/PP1.png"}
                        alt="Avatar"
                        className={styles.TechnologyImage}
                        fluid
                      />
                      <div className={styles.TechnologyOverlay}>
                        <div className={styles.TechnologyText}>
                          <p>client name</p>
                          <h1>Project Name</h1>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className={styles.Portmain}>
                  <Col xl={6} className={styles.Pimg}>
                    <Image src={"/assets/Port1.png"} fluid />
                  </Col>

                  <Col xl={6}>
                    <h2 className={styles.Pheading}>
                      Want to discuss a project ?
                    </h2>
                    <p className={styles.Ppera}>
                      ultroNeous is a concept – a concept of innovation,
                      customer service and exceptional creativity. We are
                      committed to build technological solutions that are
                      accessible to help pioneers reach their vision.
                    </p>
                    <div className={styles.BtnSpace}>
                      <YellowFilledWhiteButton
                        val={"Contact Us"}
                        arrow={true}
                        clickhandle={() => router.push("/contact-us")}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className={styles.ProjectContain}>
                  <Col xl={6} className={styles.TechnoSpacing}>
                    <div className={styles.TechnoContainer}>
                      <Image
                        src={"/assets/PP1.png"}
                        alt="Avatar"
                        className={styles.TechnologyImage}
                        fluid
                      />
                      <div className={styles.TechnologyOverlay}>
                        <div className={styles.TechnologyText}>
                          <p>client name</p>
                          <h1>Project Name</h1>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xl={6} className={styles.TechnoSpacing}>
                    <div className={styles.TechnoContainer}>
                      <Image
                        src={"/assets/PP2.png"}
                        alt="Avatar"
                        className={styles.TechnologyImage}
                        fluid
                      />
                      <div className={styles.TechnologyOverlay}>
                        <div className={styles.TechnologyText}>
                          <p>client name</p>
                          <h1>Project Name</h1>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xl={12} className={styles.TechnoSpacing}>
                    <div className={styles.TechnoContainer}>
                      <Image
                        src={"/assets/PP3.png"}
                        alt="Avatar"
                        className={styles.TechnologyImage}
                        fluid
                      />
                      <div className={styles.TechnologyOverlay}>
                        <div className={styles.TechnologyText}>
                          <p>client name</p>
                          <h1>Project Name</h1>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </TabPane>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};
export async function getServerSideProps() {
  const res = await axios
    .get(`${API_URL}admin/getportfolio`)
    .catch((e) => console.log(e));

  return {
    props: {
      data: res ? res.data : null,
    },
  };
}

export default portfolio;
