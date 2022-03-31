import Layout from "@/components/Layout";
import PagesHeaderComponent from "@/components/PagesHeaderComponent";
import { useEffect, useState } from "react";
import { Row, Image, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import styles from "@/styles/ContactUsPage.module.css";
import { ContactUsFormCheckboxData } from "utils/CONSTANT_DATA";
import axios from "axios";

function ContactUsPage({ checkboxData = ContactUsFormCheckboxData }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {}, [submitClicked]);

  const [checkList, setCheckList] = useState([]);
  const [phoneValue, setPhoneValue] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);
  const [check, setCheck] = useState(false); // opens popup
  const [data, setData] = useState([]); // array of selected checkboxes

  const checkboxHandler = (e) => {
    // handles single checkbox event
    const { value } = e.target;

    if (data.includes(value)) {
      const newData = data.filter((el) => el !== value);
      setData(newData);
    } else {
      setData([...data, value]);
    }
  };

  const clickHandler = (e) => {
    // handles single label click event

    if (e.target.classList.contains("TextLabelActive")) {
      e.target.classList.remove("TextLabelActive");
    } else {
      e.target.classList.add("TextLabelActive");
    }
  };

  const HandleCheck = (status, value) => {
    if (status) {
      setCheckList(checkList.concat(value));
    } else {
      setCheckList(checkList.filter((item) => item !== value));
    }
  };
  const onSubmit = async (values) => {
    await axios
      .post(
        "https://ultroneous-79d3f-default-rtdb.firebaseio.com/contactus.json",
        {
          ...values,
          checkList,
          phone: phoneValue,
          hireTeam: data,
        }
      )
      .then((res) => {
        setSubmitClicked(true);
        setPhoneValue("");
      })
      .catch((err) => console.log(err));

    reset();
    setTimeout(() => {
      setSubmitClicked(false);
    }, 5000);
  };

  return (
    <Layout>
      <PagesHeaderComponent
        text={"Contact Us"}
        heading={"Let’s make it happen"}
      />
      <div className={styles.FormDescription}>
        <div>
          Whether you're starting from scratch, pivoting a product, or launching
          <br />a brand into new markets—we're here to light the fire and get it
          done
        </div>
      </div>
      <div className={styles.FormContainer}>
        <Row>
          <Col xl={7}>
            <Row className={styles.SpaceLooking}>
              <h3>What are you looking for?</h3>
              <p>
                Please select your options and we shall revert back to you soon!
              </p>
            </Row>
            <Row>
              <Col xl={12}>
                <Row className={styles.CheckboxSpace}>
                  <Col xl={6}>
                    <input
                      type="checkbox"
                      value="Web & App Development"
                      onChange={(e) =>
                        HandleCheck(e.target.checked, e.target.value)
                      }
                    />
                    <span className="ms-2">Web & App Development</span>
                  </Col>
                  <Col xl={6}>
                    <input
                      type="checkbox"
                      value="Digital Marketing"
                      onChange={(e) =>
                        HandleCheck(e.target.checked, e.target.value)
                      }
                    />
                    <span className="ms-2">Digital Marketing</span>
                  </Col>
                </Row>
                <Row className={styles.CheckboxSpace}>
                  <Col xl={6}>
                    <input
                      type="checkbox"
                      value="UI/UX Design"
                      onChange={(e) =>
                        HandleCheck(e.target.checked, e.target.value)
                      }
                    />
                    <span className="ms-2">UI/UX Design</span>
                  </Col>
                  <Col xl={6}>
                    <input
                      type="checkbox"
                      value="eCommerce Development"
                      onChange={(e) =>
                        HandleCheck(e.target.checked, e.target.value)
                      }
                    />
                    <span className="ms-2">eCommerce Development</span>
                  </Col>
                </Row>
                <Row className={styles.CheckboxSpace}>
                  <Col xl={6}>
                    <input
                      type="checkbox"
                      value="Enterprise Software Solutions"
                      onChange={(e) =>
                        HandleCheck(e.target.checked, e.target.value)
                      }
                    />
                    <span className="ms-2">Enterprise Software Solutions</span>
                  </Col>
                  <Col xl={6}>
                    <input
                      type="checkbox"
                      value="Hire a Team"
                      onChange={(e) => {
                        HandleCheck(e.target.checked, e.target.value);
                        setCheck(!check);
                      }}
                    />
                    <span className="ms-2">Hire a Team/ Resource</span>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className={styles.CheckboxFormContainerMain}>
              {check ? (
                <Row className={styles.CheckboxFormContainerRow}>
                  {checkboxData.developersData.map((el, ind) => (
                    <Col
                      xs={12}
                      sm={6}
                      md={4}
                      key={ind}
                      className={styles.CheckboxFormContainer}
                    >
                      <label
                        className={styles.TextLabel}
                        htmlFor={el}
                        onClick={clickHandler}
                      >
                        {el}
                      </label>
                      <input
                        type="checkbox"
                        id={el}
                        value={el}
                        className={styles.FormCheckbox}
                        onChange={checkboxHandler}
                      />
                    </Col>
                  ))}
                </Row>
              ) : null}
            </Row>
            <Row className={styles.SpaceLooking}>
              <h3>Your Details</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col
                    xl={12}
                    className={`${styles.InputSpace} ${styles.InputHeight}`}
                  >
                    <input
                      required
                      {...register("name", {
                        required: true,
                        pattern: /^[A-Za-z]/,
                      })}
                      placeholder="Full Name*"
                      className={`${styles.InputBox} ${styles.Inputwidth}`}
                    />

                    {/* {errors.name && (
                        <p style={{ color: "red" }}>
                          Enter valid name*
                        </p>
                      )} */}
                  </Col>
                  <Col
                    xl={12}
                    className={`${styles.InputSpace} ${styles.InputHeight}`}
                  >
                    <input
                      required
                      {...register("email", {
                        required: true,
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      })}
                      placeholder="Email ID*"
                      className={`${styles.InputBox} ${styles.Inputwidth}`}
                    />
                    {/* {errors.email && (
                        <p style={{ color: "red" }}>
                          Enter valid Email*
                        </p>
                      )} */}
                  </Col>
                  <Col
                    xl={12}
                    className={`${styles.InputSpace} ${styles.InputHeight}`}
                  >
                    <PhoneInput
                      value={phoneValue}
                      onChange={(phoneValue) => setPhoneValue(phoneValue)}
                      country={"in"}
                      // {...register("phone")}
                      enableSearch={true}
                    />
                  </Col>
                  <Col
                    xl={12}
                    className={`${styles.InputSpace} ${styles.InputHeight}`}
                  >
                    <select
                      required
                      {...register("budget")}
                      className="Input-Box Input-width"
                    >
                      <option value="">Select Project budget</option>
                      <option>Below $7000</option>
                      <option>$7000 to $10000</option>
                      <option>$10000 to $15000</option>
                      <option>Above $15000</option>
                    </select>
                  </Col>
                  <Col
                    xl={12}
                    className={`${styles.InputSpace} ${styles.InputHeight}`}
                  >
                    <textarea
                      required
                      {...register("message", { required: true })}
                      placeholder="Message*"
                      className="Text-Area Input-width"
                      rows={4}
                    />
                    {/* {errors.message && (
                        <p style={{ color: "red" }}>
                          This field is required
                        </p>
                      )} */}
                  </Col>
                </Row>
                <Row className={styles.SendButtonForm}>
                  <Col sm={12}>
                    <button type="submit" className={styles.Btnsubmit}>
                      Send
                      <HiOutlineArrowNarrowRight
                        style={{ marginLeft: "0.5em" }}
                      />
                    </button>
                    {submitClicked && (
                      <p style={{ color: "#6EAC5A", marginTop: "1rem" }}>
                        Thanks for filling out the details. We shall revert back
                        to you soon with the next steps.
                      </p>
                    )}
                  </Col>
                </Row>
              </form>
            </Row>
          </Col>

          <Col xl={5} className="d-flex">
            <Image src={"/assets/telephone.png"} alt="telephone" id="tel" />
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export default ContactUsPage;
