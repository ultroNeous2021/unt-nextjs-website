import { useState } from "react";
import { ContactUsFormCheckboxData } from "utils/CONSTANT_DATA";
import styles from "@/styles/ServicesPage.module.css";

function ServicePage() {
  const [check, setCheck] = useState(false);
  const [data, setData] = useState([]);

  const checkboxHandler = (e) => {
    const { value } = e.target;

    if (data.includes(value)) {
      const newData = data.filter((el) => el !== value);
      setData(newData);
    } else {
      setData([...data, value]);
    }
  };

  const clickHandler = (e) => {
    console.log(e.target);
    if (e.target.classList.contains("TextLabelActive")) {
      e.target.classList.remove("TextLabelActive");
    } else {
      e.target.classList.add("TextLabelActive");
    }
  };

  console.log(data);

  return (
    <div>
      <input type="checkbox" onChange={() => setCheck(!check)} />
      {check ? (
        <div>
          {ContactUsFormCheckboxData.developersData.map((el, ind) => (
            <div key={ind}>
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
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default ServicePage;
