import Layout from "@/components/Layout";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Row } from "react-bootstrap";
import styles from "@/styles/PrivacyPolicy.module.css";
import { DataSubListPrivacy, ListOfPrivacy } from "utils/DataList/listOfData";
import { FaArrowUp } from "react-icons/fa";
const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop + -100);

  const [currentRefs, setCurrentRefs] = useState();
  const [topVisible, setTopVisible] = useState(false);

  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);
  const section6 = useRef(null);
  const section7 = useRef(null);
  const section8 = useRef(null);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setTopVisible(true);
    } else if (scrolled <= 300) {
      setTopVisible(false);
    }
  };
  useEffect(() => window.addEventListener("scroll", toggleVisible));
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const HandleScrolling = () => {
    switch (currentRefs) {
      case "section1":
        scrollToRef(section1);
        break;
      case "section2":
        scrollToRef(section2);
        break;
      case "section3":
        scrollToRef(section3);
        break;
      case "section4":
        scrollToRef(section4);
        break;
      case "section5":
        scrollToRef(section5);
        break;
      case "section6":
        scrollToRef(section6);
        break;
      case "section7":
        scrollToRef(section7);
        break;
      case "section8":
        scrollToRef(section8);
        break;
      default:
        console.log("default");
    }
  };
  return (
    <Layout title={"Privacy Policy"} description={""} keywords={""}>
      <div
        onClick={() => scrollToTop()}
        className={styles.BottomToTop}
        style={topVisible ? { opacity: "1" } : { opacity: "0" }}
      >
        <FaArrowUp />
      </div>
      <Row className={styles.PagesHeader}>
        <div className={styles.PaddingNull}>
          <p>Privacy Policy</p>
          <h1 data-aos="zoom-in" data-aos-duration="2000">
            Your privacy is important to us
          </h1>
        </div>
      </Row>
      <Row className={styles.DetailContainer}>
        <Col>
          <p>
            It is ultroNeous Technologies' policy to respect your privacy
            regarding any information we may collect while operating our
            website. This Privacy Policy applies to ultroneous.com/
            (hereinafter, "us", "we", or "ultroneous.com/"). We respect your
            privacy and are committed to protecting personally identifiable
            information you may provide us through the Website. We have adopted
            this privacy policy ("Privacy Policy") to explain what information
            may be collected on our Website, how we use this information, and
            under what circumstances we may disclose the information to third
            parties. This Privacy Policy applies only to information we collect
            through the Website and does not apply to our collection of
            information from other sources.
          </p>
          <p>
            This Privacy Policy, together with the Terms of service posted on
            our Website, set forth the general rules and policies governing your
            use of our Website. Depending on your activities when visiting our
            Website, you may be required to agree to additional terms of
            service.
          </p>
          <div>
            <h3 className={styles.ContentHeading}>Contents</h3>
            <p className={styles.ListGuideline}>
              Click below to jump to any section of this privacy policy
            </p>
            {ListOfPrivacy.map((value, index) => (
              <p
                key={index}
                className={styles.ListParagraph}
                onMouseOver={() => setCurrentRefs("section" + (index + 1))}
                onClick={() => HandleScrolling()}
              >
                {value}
              </p>
            ))}
          </div>
          <div className={styles.GroupListContainer}>
            <section ref={section1}>
              <div className={styles.GroupSection}>
                <h4 className={styles.GroupTitle}>1. Website Visitors</h4>
                <p className={styles.GroupDetail}>
                  <p>
                    Like most website operators, ultroNeous Technologies
                    collects non-personally-identifying information of the sort
                    that web browsers and servers typically make available, such
                    as the browser type, language preference, referring site,
                    and the date and time of each visitor request. ultroNeous
                    Technologies' purpose in collecting non-personally
                    identifying information is to better understand how
                    ultroNeous Technologies' visitors use its website. From time
                    to time, ultroNeous Technologies may release
                    non-personally-identifying information in the aggregate,
                    e.g., by publishing a report on trends in the usage of its
                    website.
                  </p>
                  <p>
                    ultroNeous Technologies also collects potentially
                    personally-identifying information like Internet Protocol
                    (IP) addresses for logged in users and for users leaving
                    comments on https://ultroneous.com/ blog posts. ultroNeous
                    Technologies only discloses logged in user and commenter IP
                    addresses under the same circumstances that it uses and
                    discloses personally-identifying information as described
                    below.
                  </p>
                </p>
              </div>
            </section>
            <section ref={section2}>
              <div className={styles.GroupSection}>
                <h4 className={styles.GroupTitle}>
                  2. Personally-Identifying Information
                </h4>
                <p className={styles.GroupDetail}>
                  <p>
                    Certain visitors to ultroNeous Technologies' websites choose
                    to interact with ultroNeous Technologies in ways that
                    require ultroNeous Technologies to gather
                    personally-identifying information. The amount and type of
                    information that ultroNeous Technologies gathers depends on
                    the nature of the interaction. For example, we ask visitors
                    who leave a comment at https://ultroneous.com/ to provide a
                    username and email address.
                  </p>
                </p>
              </div>
            </section>
            <section ref={section3}>
              <div className={styles.GroupSection}>
                <h4 className={styles.GroupTitle}>3. Security</h4>
                <p className={styles.GroupDetail}>
                  <p>
                    The security of your Personal Information is important to
                    us, but remember that no method of transmission over the
                    Internet, or method of electronic storage is 100% secure.
                    While we strive to use commercially acceptable means to
                    protect your Personal Information, we cannot guarantee its
                    absolute security.
                  </p>
                </p>
              </div>
            </section>
            <section ref={section4}>
              <div className={styles.GroupSection} ref={section4}>
                <h4 className={styles.GroupTitle}>
                  4. Protection of Certain Personally-Identifying Information
                </h4>
                <p className={styles.GroupDetail}>
                  <p>
                    ultroNeous Technologies discloses potentially
                    personally-identifying and personally-identifying
                    information only to those of its employees, contractors and
                    affiliated organizations that (i) need to know that
                    information in order to process it on ultroNeous
                    Technologies' behalf or to provide services available at
                    ultroNeous Technologies' website, and (ii) that have agreed
                    not to disclose it to others. Some of those employees,
                    contractors and affiliated organizations may be located
                    outside of your home country; by using ultroNeous
                    Technologies' website, you consent to the transfer of such
                    information to them. ultroNeous Technologies will not rent
                    or sell potentially personally-identifying and
                    personally-identifying information to anyone. Other than to
                    its employees, contractors and affiliated organizations, as
                    described above, ultroNeous Technologies discloses
                    potentially personally-identifying and
                    personally-identifying information only in response to a
                    subpoena, court order or other governmental request, or when
                    ultroNeous Technologies believes in good faith that
                    disclosure is reasonably necessary to protect the property
                    or rights of ultroNeous Technologies, third parties or the
                    public at large.
                  </p>
                  <p>
                    If you are a registered user of https://ultroneous.com/ and
                    have supplied your email address, ultroNeous Technologies
                    may occasionally send you an email to tell you about new
                    features, solicit your feedback, or just keep you up to date
                    with what's going on with ultroNeous Technologies and our
                    products. We primarily use our blog to communicate this type
                    of information, so we expect to keep this type of email to a
                    minimum. If you send us a request (for example via a support
                    email or via one of our feedback mechanisms), we reserve the
                    right to publish it in order to help us clarify or respond
                    to your request or to help us support other users.
                    ultroNeous Technologies takes all measures reasonably
                    necessary to protect against the unauthorized access, use,
                    alteration or destruction of potentially
                    personally-identifying and personally-identifying
                    information.
                  </p>
                </p>
              </div>
            </section>
            <section ref={section5}>
              <div className={styles.GroupSection} ref={section5}>
                <h4 className={styles.GroupTitle}>5. Aggregated Statistics</h4>
                <p className={styles.GroupDetail}>
                  <p>
                    ultroNeous Technologies may collect statistics about the
                    behavior of visitors to its website. ultroNeous Technologies
                    may display this information publicly or provide it to
                    others. However, ultroNeous Technologies does not disclose
                    your personally-identifying information.
                  </p>
                </p>
              </div>
            </section>
            <section ref={section6}>
              <div className={styles.GroupSection} ref={section6}>
                <h4 className={styles.GroupTitle}>6. Cookies</h4>
                <p className={styles.GroupDetail}>
                  <p>
                    To enrich and perfect your online experience, ultroNeous
                    Technologies uses "Cookies", similar technologies and
                    services provided by others to display personalized content,
                    appropriate advertising and store your preferences on your
                    computer.
                  </p>
                  <p>
                    A cookie is a string of information that a website stores on
                    a visitor's computer, and that the visitor's browser
                    provides to the website each time the visitor returns.
                    ultroNeous Technologies uses cookies to help ultroNeous
                    Technologies identify and track visitors, their usage of
                    https://ultroneous.com/, and their website access
                    preferences. ultroNeous Technologies visitors who do not
                    wish to have cookies placed on their computers should set
                    their browsers to refuse cookies before using ultroNeous
                    Technologies' websites, with the drawback that certain
                    features of ultroNeous Technologies' websites may not
                    function properly without the aid of cookies.
                  </p>
                  <p>
                    By continuing to navigate our website without changing your
                    cookie settings, you hereby acknowledge and agree to
                    ultroNeous Technologies' use of cookies.
                  </p>
                </p>
              </div>
            </section>
            <section ref={section7}>
              <div className={styles.GroupSection} ref={section7}>
                <h4 className={styles.GroupTitle}>7. Privacy Policy Changes</h4>
                <p className={styles.GroupDetail}>
                  <p>
                    Although most changes are likely to be minor, ultroNeous
                    Technologies may change its Privacy Policy from time to
                    time, and in ultroNeous Technologies' sole discretion.
                    ultroNeous Technologies encourages visitors to frequently
                    check this page for any changes to its Privacy Policy. Your
                    continued use of this site after any change in this Privacy
                    Policy will constitute your acceptance of such change.
                  </p>
                </p>
              </div>
            </section>
            <section ref={section8}>
              <div className={styles.GroupSection} ref={section8}>
                <h4 className={styles.GroupTitle}>
                  8. Contact Information & Credit
                </h4>
                <p className={styles.GroupDetail}>
                  <p>
                    This privacy policy was created at privacyterms.io privacy
                    policy generator. If you have any questions about our
                    Privacy Policy, please contact us via{" "}
                    <a
                      href="mailto:hello@ultroneous.com"
                      className="uniqueLink"
                    >
                      email
                    </a>
                    .
                  </p>
                </p>
              </div>
            </section>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};
export default PrivacyPolicy;
