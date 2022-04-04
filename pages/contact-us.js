import Layout from "@/components/Layout";
import PagesHeaderComponent from "@/components/PagesHeaderComponent";
import { useEffect, useState } from "react";
import { Row, Image, Col, Form, Dropdown, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import styles from "@/styles/ContactUsPage.module.css";
import { ContactUsFormCheckboxData } from "utils/CONSTANT_DATA";
import axios from "axios";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactUsPage({ checkboxData = ContactUsFormCheckboxData }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [checkList, setCheckList] = useState([]);
  const [phoneValue, setPhoneValue] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);
  const [check, setCheck] = useState(false); // opens popup
  const [data, setData] = useState([]); // array of selected checkboxes
  const [showPhoneImage, setShowPhoneImage] = useState(true); // phone image
  const [dropdownValue, setDropdownValue] = useState("");

  useEffect(() => {
    if (window.innerWidth < 992) {
      setShowPhoneImage(false);
    } else {
      setShowPhoneImage(true);
    }
  }, []);

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
          budget: dropdownValue,
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

  const handleSelect = (e) => {
    console.log(e);
  };

  return (
    <Layout>
      <PagesHeaderComponent
        text={"Contact Us"}
        heading={"Let’s make it happen"}
      />
      <div className={styles.FormDescription}>
        <p>
          Whether you're starting from scratch, pivoting a product, or launching
          a brand into new markets—we're here to light the fire and get it done
        </p>
      </div>
      <div className={styles.FormMainContainer}>
        <div className={styles.FormContainer}>
          <Row className="mx-0">
            <Col
              xl={setShowPhoneImage ? 7 : 12}
              className={styles.ContactUsForm}
            >
              <Row className={styles.SpaceLooking}>
                <h3>What are you looking for?</h3>
                <p>
                  Want to be partners in design? Looking for UX/ UI research or
                  product branding? Post your query now, and we’ll get in touch
                  with you soon!
                </p>
              </Row>
              <Row className={styles.CheckboxSpaceRow}>
                <Col xl={12} className={styles.CheckboxSpaceColTop}>
                  <Row className={styles.CheckboxSpace}>
                    <Col xl={6} className={styles.CheckboxSpaceCol}>
                      <input
                        type="checkbox"
                        value="Web & App Development"
                        onChange={(e) =>
                          HandleCheck(e.target.checked, e.target.value)
                        }
                      />
                      <span className="ms-2">Web & App Development</span>
                    </Col>
                    <Col xl={6} className={styles.CheckboxSpaceCol}>
                      <input
                        type="checkbox"
                        value="Digital Marketing"
                        onChange={(e) =>
                          HandleCheck(e.target.checked, e.target.value)
                        }
                      />
                      <span className="ms-2">Digital Marketing</span>
                    </Col>
                    <Col xl={6} className={styles.CheckboxSpaceCol}>
                      <input
                        type="checkbox"
                        value="UI/UX Design"
                        onChange={(e) =>
                          HandleCheck(e.target.checked, e.target.value)
                        }
                      />
                      <span className="ms-2">UI/UX Design</span>
                    </Col>
                    <Col xl={6} className={styles.CheckboxSpaceCol}>
                      <input
                        type="checkbox"
                        value="eCommerce Development"
                        onChange={(e) =>
                          HandleCheck(e.target.checked, e.target.value)
                        }
                      />
                      <span className="ms-2">eCommerce Development</span>
                    </Col>
                    <Col xl={6} className={styles.CheckboxSpaceCol}>
                      <input
                        type="checkbox"
                        value="Enterprise Software Solutions"
                        onChange={(e) =>
                          HandleCheck(e.target.checked, e.target.value)
                        }
                      />
                      <span className="ms-2">
                        Enterprise Software Solutions
                      </span>
                    </Col>
                    <Col xl={6} className={styles.CheckboxSpaceCol}>
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
              <Row className={check ? styles.CheckboxFormContainerMain : null}>
                {check ? (
                  <Row className={styles.CheckboxFormContainerRow}>
                    <p className={styles.CheckBoxFormHeadText}>
                      Select Technologies
                    </p>
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
                    <p className={styles.CheckBoxFormHeadText}>
                      {" "}
                      Select Others{" "}
                    </p>
                    {checkboxData.othersData.map((el, ind) => (
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
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={styles.FormParent}
                >
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
                      <FormGroup>
                        <Form.Select
                          onChange={(e) => setDropdownValue(e.target.value)}
                          className={`${styles.InputBox} ${styles.Inputwidth} ${styles.DropdownStyle}`}
                        >
                          <option value="">Select Project budget</option>
                          <option>Below $7000</option>
                          <option>$7000 to $10000</option>
                          <option>$10000 to $15000</option>
                          <option>Above $15000</option>
                        </Form.Select>
                      </FormGroup>
                    </Col>
                    <Col
                      xl={12}
                      className={`${styles.InputSpace} ${styles.InputHeight}`}
                    >
                      <textarea
                        required
                        {...register("message", { required: true })}
                        placeholder="Message*"
                        className={`${styles.TextArea} ${styles.Inputwidth}`}
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
                          Thanks for filling out the details. We shall revert
                          back to you soon with the next steps.
                        </p>
                      )}
                    </Col>
                  </Row>
                </form>
              </Row>
            </Col>

            {showPhoneImage ? (
              <Col xl={5} className="d-flex">
                <Image
                  src={"/assets/telephone.png"}
                  alt="telephone"
                  id="tel"
                  className={styles.PhoneImage}
                />
              </Col>
            ) : null}
          </Row>
        </div>
      </div>
      <div className={`${styles.bgcolor} ${styles.WALAContainer}`}>
        <h2 className={styles.imagehead}>We are located in</h2>
        <Row className={`${styles.WALAImages} mx-0 `}>
          <Col xs={12} sm={12} md={6} xl={6} className={styles.ImageContainer}>
            <Image
              src={"/assets/office-ahmd.png"}
              className={styles.imgwidthfull}
            />
          </Col>
          <Col xs={12} sm={12} md={6} xl={6} className={styles.WALAImagesText}>
            <h2 className={styles.headlabel}>INDIA</h2>
            <p className={styles.plabel}>
              C/906, Ganesh Meridian, Opp. Kargil Petrol
              <br />
              Pump, S.G. Highway, Sola, Ahmedabad,
              <br />
              Gujarat, India - 380060
            </p>
            <div className={styles.EmailPhoneContainer}>
              <FaPhoneAlt style={{ color: "#E49B00", fontSize: "20px" }} />
              <span className={styles.EmailPhoneText}>
                <a href="tel:+91 78748 13131">+91 78748 13131</a>
              </span>
            </div>
            <div className={styles.EmailPhoneContainer}>
              <MdEmail style={{ color: "#E49B00", fontSize: "20px" }} />
              <span className={styles.EmailPhoneText}>
                <a href="mailto:hello@ultroneous.com">hello@ultroneous.com</a>
              </span>
            </div>
          </Col>
        </Row>
        <Row
          className={`justify-content-center ${styles.WALAImagesTwo} ${styles.WALAImages} mx-0 `}
        >
          <Col
            xs={12}
            sm={12}
            md={6}
            xl={6}
            className={styles.WALAImagesTextTwo}
          >
            <h2 className={styles.headlabel}>USA</h2>
            <p className={styles.plabel}>
              West 51st Avenue, Denver, CO 80212USA
            </p>
            <div className={styles.EmailPhoneContainer}>
              <FaPhoneAlt style={{ color: "#E49B00", fontSize: "20px" }} />
              <span className={styles.EmailPhoneText}>
                <a href="tel:+1-234-253-4040">+1-234-253-4040</a>
              </span>
            </div>
            <div className={styles.EmailPhoneContainer}>
              <MdEmail style={{ color: "#E49B00", fontSize: "20px" }} />
              <span className={styles.EmailPhoneText}>
                <a href="mailto:usa@ultroneous.com">usa@ultroneous.com</a>
              </span>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} xl={6} className={styles.ImageContainer}>
            <Image
              src={"/assets/office-usa.png"}
              className={`${styles.pos} ${styles.imgwidthfull}`}
            />
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export default ContactUsPage;
