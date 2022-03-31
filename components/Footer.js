import { useRef } from "react";
import { Row, Col, Image } from "react-bootstrap";
import styles from "@/styles/components/Footer.module.css";
import { BsEnvelope } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import ButtonComponent from "./ButtonComponent";
import Link from "next/link";
function Footer({ FooterContainerStyle }) {
  return (
    <div className="FooterContainer">
      <Row className={styles.MxNone}>
        <div className={styles.FooterTopText}>
          <h2
          //    data-aos="fade-down"
          //    data-aos-duration="3000"
          >
            Let’s Discuss your Ideas.
          </h2>
          <ButtonComponent val={"Yes, Let's do it"} />
        </div>
      </Row>
      <Row className={[styles.MxNone, styles.FooterContainer]}>
        <Col
          // data-aos="fade-down"
          // data-aos-duration="3000"
          xs={12}
          sm={12}
          lg={3}
          xl={2}
          className={styles.FooterColOne}
        >
          <Image
            src="/assets/ultroneous-image.svg"
            alt="ultroneous-image"
            className={styles.FooterIcon}
          />
          <ul className={styles.IconListContain}>
            <li className={styles.IconContain}>
              <span className={styles.IconBox}>
                <a
                  href="https://www.facebook.com/ultroneous.technologies"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF color="#fff" />
                </a>
              </span>
              <span className={styles.IconBox}>
                <a
                  href="https://twitter.com/ultroneousTech"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter color="#fff" />
                </a>
              </span>
              <span className={styles.IconBox}>
                <a
                  href="https://www.instagram.com/ultroneous.technologies/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram color="#fff" />
                </a>
              </span>
              <span className={styles.IconBox}>
                <a
                  href="https://www.linkedin.com/company/ultroneous"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn color="#fff" />
                </a>
              </span>
            </li>
          </ul>
        </Col>
        <Col
          // data-aos="fade-up"
          // data-aos-duration="3000"
          xs={12}
          sm={12}
          lg={6}
          className={styles.NonePadding}
        >
          <Row className={`${styles.FooterColOne} mx-0`}>
            <Col xs={12} sm={4} lg={4} className={styles.QuickLinks}>
              <h3> Quick Links</h3>
              <ul>
                <li>
                  <Link href="">About us</Link>
                </li>
                <li>
                  <Link href="">Team</Link>
                </li>
                <li>
                  <Link href="">Career</Link>
                </li>
                <li>
                  <Link href="">Contact</Link>
                </li>
              </ul>
            </Col>
            <Col
              //  data-aos="fade-up"
              //  data-aos-duration="3000"
              xs={12}
              sm={4}
              lg={4}
              className={styles.QuickLinks}
            >
              <h3>Services</h3>
              <ul>
                <li>
                  <Link href="">Web Development</Link>
                </li>
                <li>
                  <Link href="">Mobile Application</Link>
                </li>
                <li>
                  <Link href="">UX/UI Design</Link>
                </li>
                <li>
                  <Link href="">Cloud & Devops</Link>
                </li>
                <li>
                  <Link href="">Digital Marketing</Link>
                </li>
              </ul>
            </Col>
            <Col
              //  data-aos="fade-up"
              //  data-aos-duration="3000"
              xs={12}
              sm={4}
              lg={4}
              className={styles.QuickLinks}
            >
              <h3>Keep In Touch</h3>
              <ul>
                <li>
                  <span style={{ marginRight: "5px" }}>
                    <Image src="/assets/INDIA.svg" alt="india" />
                  </span>
                  <span className="Ultroneous-Call-Mail-Text">
                    <a href="tel:+91-78748-13131"> +91-78748-13131</a>
                  </span>
                </li>
                <li>
                  <span style={{ marginRight: "5px" }}>
                    <Image src="/assets/USA.svg" alt="usa" />
                  </span>
                  <span className="Ultroneous-Call-Mail-Text">
                    <a href="tel:+1-234-253-4040">+1-234-253-4040</a>
                  </span>
                </li>
                <li>
                  <span style={{ marginRight: "9px" }}>
                    <BsEnvelope />
                  </span>
                  <span className="Ultroneous-Call-Mail-Text">
                    <a href="mailto:hello@ultroneous.com">
                      hello@ultroneous.com
                    </a>
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col
          //  data-aos="fade-down"
          //  data-aos-duration="3000"
          xs={12}
          sm={12}
          lg={3}
          xl={2}
          className={styles.QuickLinks}
        >
          <h3>Our Newsletter</h3>
          <div className={styles.SignupForNewsLetterContainer}>
            <input
              className={styles.SignupForNewsLetterEmail}
              type="email"
              placeholder="xyz@gmail.com"
            />
            <input
              className={styles.SignupForNewsLetterSubmit}
              type="button"
              value="Submit"
            />
          </div>
          <p
            className={styles.SubscribeNewsletter}
            style={{ marginBottom: "0" }}
          >
            Subscribe to our newsletter to stay informed.
          </p>
          <p style={{ fontSize: "12px" }}>
            © 2022 ultroNeous. All Rights Reserved.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
