import Layout from "@/components/Layout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Row } from "react-bootstrap";
import styles from "@/styles/PrivacyPolicy.module.css";
const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  const DataList = [
    {
      title: "1. Website Visitors",
      detail: (
        <>
          <p>
            Like most website operators, ultroNeous Technologies collects
            non-personally-identifying information of the sort that web browsers
            and servers typically make available, such as the browser type,
            language preference, referring site, and the date and time of each
            visitor request. ultroNeous Technologies' purpose in collecting
            non-personally identifying information is to better understand how
            ultroNeous Technologies' visitors use its website. From time to
            time, ultroNeous Technologies may release non-personally-identifying
            information in the aggregate, e.g., by publishing a report on trends
            in the usage of its website.
          </p>
          <p>
            ultroNeous Technologies also collects potentially
            personally-identifying information like Internet Protocol (IP)
            addresses for logged in users and for users leaving comments on
            https://ultroneous.com/ blog posts. ultroNeous Technologies only
            discloses logged in user and commenter IP addresses under the same
            circumstances that it uses and discloses personally-identifying
            information as described below.
          </p>
        </>
      ),
    },
    {
      title: "2. Personally-Identifying Information",
      detail: (
        <p>
          Certain visitors to ultroNeous Technologies' websites choose to
          interact with ultroNeous Technologies in ways that require ultroNeous
          Technologies to gather personally-identifying information. The amount
          and type of information that ultroNeous Technologies gathers depends
          on the nature of the interaction. For example, we ask visitors who
          leave a comment at https://ultroneous.com/ to provide a username and
          email address.
        </p>
      ),
    },
    {
      title: "3. Security",
      detail: (
        <p>
          The security of your Personal Information is important to us, but
          remember that no method of transmission over the Internet, or method
          of electronic storage is 100% secure. While we strive to use
          commercially acceptable means to protect your Personal Information, we
          cannot guarantee its absolute security.
        </p>
      ),
    },
    {
      title: "4. Protection of Certain Personally-Identifying Information",
      detail: (
        <>
          <p>
            ultroNeous Technologies discloses potentially personally-identifying
            and personally-identifying information only to those of its
            employees, contractors and affiliated organizations that (i) need to
            know that information in order to process it on ultroNeous
            Technologies' behalf or to provide services available at ultroNeous
            Technologies' website, and (ii) that have agreed not to disclose it
            to others. Some of those employees, contractors and affiliated
            organizations may be located outside of your home country; by using
            ultroNeous Technologies' website, you consent to the transfer of
            such information to them. ultroNeous Technologies will not rent or
            sell potentially personally-identifying and personally-identifying
            information to anyone. Other than to its employees, contractors and
            affiliated organizations, as described above, ultroNeous
            Technologies discloses potentially personally-identifying and
            personally-identifying information only in response to a subpoena,
            court order or other governmental request, or when ultroNeous
            Technologies believes in good faith that disclosure is reasonably
            necessary to protect the property or rights of ultroNeous
            Technologies, third parties or the public at large.
          </p>
          <p>
            If you are a registered user of https://ultroneous.com/ and have
            supplied your email address, ultroNeous Technologies may
            occasionally send you an email to tell you about new features,
            solicit your feedback, or just keep you up to date with what's going
            on with ultroNeous Technologies and our products. We primarily use
            our blog to communicate this type of information, so we expect to
            keep this type of email to a minimum. If you send us a request (for
            example via a support email or via one of our feedback mechanisms),
            we reserve the right to publish it in order to help us clarify or
            respond to your request or to help us support other users.
            ultroNeous Technologies takes all measures reasonably necessary to
            protect against the unauthorized access, use, alteration or
            destruction of potentially personally-identifying and
            personally-identifying information.
          </p>
        </>
      ),
    },
    {
      title: "5. Aggregated Statistics",
      detail: (
        <p>
          ultroNeous Technologies may collect statistics about the behavior of
          visitors to its website. ultroNeous Technologies may display this
          information publicly or provide it to others. However, ultroNeous
          Technologies does not disclose your personally-identifying
          information.
        </p>
      ),
    },
    {
      title: "6. Cookies",
      detail: (
        <>
          <p>
            To enrich and perfect your online experience, ultroNeous
            Technologies uses "Cookies", similar technologies and services
            provided by others to display personalized content, appropriate
            advertising and store your preferences on your computer.
          </p>
          <p>
            A cookie is a string of information that a website stores on a
            visitor's computer, and that the visitor's browser provides to the
            website each time the visitor returns. ultroNeous Technologies uses
            cookies to help ultroNeous Technologies identify and track visitors,
            their usage of https://ultroneous.com/, and their website access
            preferences. ultroNeous Technologies visitors who do not wish to
            have cookies placed on their computers should set their browsers to
            refuse cookies before using ultroNeous Technologies' websites, with
            the drawback that certain features of ultroNeous Technologies'
            websites may not function properly without the aid of cookies.
          </p>
          <p>
            By continuing to navigate our website without changing your cookie
            settings, you hereby acknowledge and agree to ultroNeous
            Technologies' use of cookies.
          </p>
        </>
      ),
    },
    {
      title: "7. Privacy Policy Changes",
      detail: (
        <p>
          Although most changes are likely to be minor, ultroNeous Technologies
          may change its Privacy Policy from time to time, and in ultroNeous
          Technologies' sole discretion. ultroNeous Technologies encourages
          visitors to frequently check this page for any changes to its Privacy
          Policy. Your continued use of this site after any change in this
          Privacy Policy will constitute your acceptance of such change.
        </p>
      ),
    },
    {
      title: "8. Contact Information & Credit",
      detail: (
        <p>
          This privacy policy was created at privacyterms.io privacy policy
          generator. If you have any questions about our Privacy Policy, please
          contact us via email or phone.
        </p>
      ),
    },
  ];
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
            {[
              "1. Website Visitors",
              "2. Personally-Identifying Information",
              "3. Security",
              "4. Protection of Certain Personally-Identifying Information",
              "5. Aggregated Statistics",
              "6. Cookies",
              "7. Privacy Policy Changes",
              "8. Contact Information & Credit",
            ].map((value, index) => (
              <p key={index} className={styles.ListParagraph}>
                {value}
              </p>
            ))}
          </div>
          <div className={styles.GroupListContainer}>
            {DataList.map((value, index) => (
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
