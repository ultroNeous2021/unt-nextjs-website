import Layout from "@/components/Layout";
import { Accordion, Col, Image, Row } from "react-bootstrap";
import styles from "@/styles/CareersPage.module.css";
import PagesHeaderComponent from "@/components/PagesHeaderComponent";
import ClientTestimonialSlider from "@/components/Slider/ClientTestimonialSlider";
import { API_URL, CareersData, FeelTheCultureData } from "utils/CONSTANT_DATA";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
function CareersPage({ data }) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    AOS.refresh();
    AOS.init();
    if (window.innerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);
  function last(array) {
    return array.indexOf(array[array.length - 1]);
  }

  return (
    <Layout
      title={"Job Opportunities in #1 IT Company in Ahmedabad | ultroNeous"}
      description={
        "Are you searching for job in IT company? - ultroNeous is always in search of talents who are ready to evolve, expand and enhance the knowledge. Apply Now!!"
      }
    >
      <PagesHeaderComponent
        text={"Work with us"}
        heading={"Feel the culture in their words"}
      />
      <ClientTestimonialSlider
        forother={true}
        data={data.data1.data ? data.data1.data : FeelTheCultureData}
        css={{ paddingTop: "0rem" }}
      />
      <div className={styles.CareerMapImage}>
        <img src={"/assets/map.png"} alt="Map-image" />
      </div>
      <Row className={styles.WFTDContainer}>
        <div>
          <h2
            className={styles.WFTDHeader}
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            Waiting for the deserving
          </h2>
          <p className={styles.WFTDparagraph}>
            ultroNeous is always in search of talents who are ready to evolve,
            expand and enhance the knowledge.
          </p>
          <p className={styles.WFTDparagraph}>
            If you are ready to push your limits and reach new heights, we are
            the place for you.
          </p>
        </div>

        <Row className={`${styles.WFTDAccordion} CareersAccordion`}>
          {data.data2 && (
            <Accordion>
              {data.data2.technology.map((el, index) => (
                <>
                  <Accordion.Item eventKey={el.departmentName} key={index}>
                    <Accordion.Header className={styles.Accordionheader}>
                      {el.departmentName}{" "}
                      <span> ({el.technology.length}) </span>
                    </Accordion.Header>
                    <Accordion.Body className={styles.AccordionBody}>
                      {el.technology.map((val, ind) => (
                        <a
                          href={`mailto:hr@ultroneous.com?subject=Applying for: ${val.technologyName}`}
                        >
                          <div key={ind}>
                            <p>
                              {val.technologyName}
                              <span className={styles.JobVacancyNumber}>
                                {val.count}
                              </span>
                            </p>
                            <p>
                              <IoIosArrowForward />
                            </p>
                          </div>
                        </a>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                  {index == last(data.data2.technology) ? null : (
                    <hr
                      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                    />
                  )}
                </>
              ))}
            </Accordion>
          )}
        </Row>
      </Row>
      <Row className={styles.BenefitsAndPerks}>
        <h3 data-aos="zoom-in" data-aos-duration="2000">
          Benefits & Perks <br /> with us{" "}
        </h3>
        <Row className={styles.SixPartsRow}>
          <Col xs={6} sm={6} md={4}>
            <img
              src={"/assets/benefits-perks(4).svg"}
              alt="BenefitsPerks"
              style={{ width: "5em" }}
            />
            <p>
              On-Time <br /> Salary
            </p>
          </Col>
          <Col xs={6} sm={6} md={4}>
            <img
              src={"/assets/benefits-perks(5).svg"}
              alt="BenefitsPerks"
              style={{ width: "5em" }}
            />
            <p>
              Balanced Work <br /> Culture
            </p>
          </Col>
          <Col xs={6} sm={6} md={4}>
            <img
              src={"/assets/benefits-perks(6).svg"}
              alt="BenefitsPerks"
              style={{ width: "5em" }}
            />
            <p>
              5 days <br /> Working
            </p>
          </Col>
          <Col xs={6} sm={6} md={4}>
            <img
              src={"/assets/benefits-perks(7).svg"}
              alt="BenefitsPerks"
              style={{ width: "5em" }}
            />
            <p>
              Electrifying <br /> Celebrations
            </p>
          </Col>
          <Col xs={6} sm={6} md={4}>
            <img
              src={"/assets/benefits-perks(8).svg"}
              alt="BenefitsPerks"
              style={{ width: "5em" }}
            />
            <p>
              Transparent <br /> Policies
            </p>
          </Col>
          <Col xs={6} sm={6} md={4}>
            <img
              src={"/assets/benefits-perks(9).svg"}
              alt="BenefitsPerks"
              style={{ width: "5em" }}
            />
            <p>
              Limitless <br /> Learning
            </p>
          </Col>
        </Row>
      </Row>
      <Row className={styles.CareersOurCatchphraseRow}>
        <div className={styles.CareersOurCatchphrase}>
          <div className={styles.ZoomCatchphrase}>
            <img src={"/assets/Cover-Career.png"} alt="Our-catchphrase" />
          </div>
        </div>
        <div className={styles.CareersOurCatchphrasetext}>
          <h2>
            Our Catchphrase, <br /> We say Team,
            {mobile ? <br /> : null} Team says Client
          </h2>
          <p>
            ultroNeous believes in giving the highest priority to their
            employees in regards to their Mental, Physical & Emotional
            well-being. This approach innovated ultroGagement, to take care of
            our clients with on-time deliveries of projects, quality
            satisfaction, and clear communication.
          </p>
        </div>
      </Row>
      <Row className={styles.WTOOImages}>
        <h3 data-aos="zoom-in" data-aos-duration="2000">
          Welcome to Our Office
        </h3>
        {mobile ? (
          <>
            <Row className={styles.MainImg}>
              <div className={styles.CareersImageCover}>
                <div className={styles.ImageDiv}>
                  <img
                    className={styles.WTOOImagesSingle}
                    src={"/assets/OfficeL-1.jpg"}
                    alt="Careersimage"
                  />
                </div>
              </div>
            </Row>
            <Row className={styles.Secondimg}>
              <Col xs={6} className={styles.CareersImage}>
                {" "}
                <div className={styles.CareersImageCover}>
                  <img
                    className={styles.WTOOImagesSingle}
                    src={"/assets/OfficeL-2.jpg"}
                    alt="Careersimage"
                  />
                </div>
              </Col>

              <Col xs={6} className={styles.CareersImage}>
                <div className={styles.CareersImageCover}>
                  <img
                    className={styles.WTOOImagesSingle}
                    src={"/assets/OfficeL-3.jpg"}
                    alt="Careersimage"
                  />
                </div>
              </Col>
            </Row>
            <Row className={styles.MainImg}>
              <div className={styles.CareersImageCover}>
                <div className={styles.ImageDiv}>
                  <img
                    className={styles.WTOOImagesSingle}
                    src={"/assets/OfficeL-4.jpg"}
                    alt="Careersimage"
                  />
                </div>
              </div>
            </Row>
          </>
        ) : (
          <Row className={styles.WTOOImagesContainer}>
            <Col xs={12} sm={12} md={6} lg={3} className={styles.CareersImage}>
              <div className={styles.CareersImageCover}>
                <Image src={"/assets/Office-1.jpg"} alt="Careersimage" />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={3} className={styles.CareersImage}>
              <div className={styles.CareersImageCover}>
                <Image src={"/assets/Office-2.jpg"} alt="Careersimage" />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={3} className={styles.CareersImage}>
              <div className={styles.CareersImageCover}>
                <Image src={"/assets/Office-3.jpg"} alt="Careersimage" />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={3} className={styles.CareersImage}>
              <div className={styles.CareersImageCover}>
                <Image src={"/assets/Office-4.jpg"} alt="Careersimage" />
              </div>
            </Col>
          </Row>
        )}
      </Row>
    </Layout>
  );
}
export async function getServerSideProps() {
  const res = await axios
    .get(`${API_URL}admin/getemployefeedback`, {
      params: { page: 1, limit: 88 },
    })
    .catch((e) => console.log(e));
  const resJobReq = await axios
    .get(`${API_URL}admin/getjobrequirements`)
    .catch((e) => console.log(e));
  return {
    props: {
      data: {
        data1: res ? res.data : FeelTheCultureData,
        data2: resJobReq ? resJobReq.data : null,
      },
    },
  };
}

export default CareersPage;
