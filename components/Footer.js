import { Row, Col, Image } from "react-bootstrap";
import styles from "@/styles/components/Footer.module.css";
import { BsEnvelope } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import ButtonComponent from "./ButtonComponent";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
function Footer({ FooterContainerStyle }) {
  const [value, setValue] = useState("");
  const [newsletterPopup, setNewsletterPopup] = useState(false);
  const goto = useRouter();
  const submitHandler = async () => {
    const filter = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (value && filter.test(value)) {
      await axios
        .post(
          "https://ultroneous-79d3f-default-rtdb.firebaseio.com/newsletter.json",
          { email: value }
        )
        .then((res) => {
          setNewsletterPopup(true);
          setValue("");
        })
        .catch((err) => console.log(err));

      setTimeout(() => {
        setNewsletterPopup(false);
      }, 5000);
    }
  };

  return (
    <div className="FooterContainer">
      <Row className={styles.MxNone}>
        <div className={styles.FooterTopText}>
          <h2>Let’s Discuss your Ideas.</h2>

          <ButtonComponent
            clickHandler={() => goto.push("/contact-us")}
            val={"Yes, Let's do it"}
          />
        </div>
      </Row>
      <Row className={[styles.MxNone, styles.FooterContainer]}>
        <Col xs={12} sm={12} lg={3} xl={2} className={styles.FooterColOne}>
          <Image
            src="/assets/ultroneous-image.svg"
            alt="ultroneous-image"
            className={styles.FooterIcon}
          />
          <ul className={styles.IconListContain}>
            <li className={styles.IconContain}>
              <a
                href="https://www.facebook.com/ultroneous.technologies"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.IconBox}>
                  <FaFacebookF color="#fff" />
                </span>
              </a>
              <a
                href="https://twitter.com/ultroneousTech"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.IconBox}>
                  <FaTwitter color="#fff" />
                </span>
              </a>
              <a
                href="https://www.instagram.com/ultroneous.technologies/"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.IconBox}>
                  <AiFillInstagram color="#fff" />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/company/ultroneous"
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.IconBox}>
                  <FaLinkedinIn color="#fff" />
                </span>
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={12} sm={12} lg={6} className={styles.NonePadding}>
          <Row className={`${styles.FooterColOne} mx-0`}>
            <Col xs={12} sm={4} lg={4} className={styles.QuickLinks}>
              <h3> Quick Links</h3>
              <ul>
                <li>
                  <Link href="/about-ultroneous">About us</Link>
                </li>
                <li>
                  <Link href="/meet-our-team">Team</Link>
                </li>
                <li>
                  <Link href="/careers">Career</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact</Link>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={4} lg={4} className={styles.QuickLinks}>
              <h3>Services</h3>
              <ul>
                <li>
                  <Link href="/web-application-development">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/mobile-application-development">
                    Mobile Application
                  </Link>
                </li>
                <li>
                  <Link href="/ux-ui-design">UX/UI Design</Link>
                </li>
                <li>
                  <Link href="/digital-marketing">Digital Marketing</Link>
                </li>
                {/* <li>
                  <Link href="/cloud-and-devops">Cloud & Devops</Link>
                </li> */}
              </ul>
            </Col>
            <Col xs={12} sm={4} lg={4} className={styles.QuickLinks}>
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
        <Col xs={12} sm={12} lg={3} xl={2} className={styles.QuickLinks}>
          <h3 className={styles.OurNewsletter}>Our Newsletter</h3>
          <div className={styles.SignupForNewsLetterContainer}>
            <input
              className={styles.SignupForNewsLetterEmail}
              type="email"
              placeholder="xyz@gmail.com"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <input
              className={styles.SignupForNewsLetterSubmit}
              type="button"
              value="Submit"
              onClick={submitHandler}
              style={
                newsletterPopup
                  ? { background: "green", transition: "all 0.5s ease" }
                  : { background: "#e49b00", transition: "all 0.5s ease" }
              }
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
