import Layout from "@/components/Layout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Row } from "react-bootstrap";
import styles from "@/styles/PrivacyPolicy.module.css";
import { DataSubListPrivacy, ListOfPrivacy } from "utils/DataList/listOfData";
const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);

  return (
    <Layout>
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
            <h5 className={styles.ContentHeading}>Contents</h5>
            <p className={styles.ListGuideline}>
              Click below to jump to any section of this privacy policy
            </p>
            {ListOfPrivacy.map((value, index) => (
              <p key={index} className={styles.ListParagraph}>
                {value}
              </p>
            ))}
          </div>
          <div className={styles.GroupListContainer}>
            {DataSubListPrivacy.map((value, index) => (
              <div key={index} className={styles.GroupSection}>
                <h4 className={styles.GroupTitle}>{value.title}</h4>
                <p className={styles.GroupDetail}>{value.detail}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Layout>
  );
};
export default PrivacyPolicy;
