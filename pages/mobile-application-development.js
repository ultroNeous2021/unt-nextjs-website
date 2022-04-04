import { useState } from "react";
import { Dropdown, Form, FormControl, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";

function MobileApplicationDevelopmentPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [dropdown, setDropdown] = useState("Select option");

  console.log(dropdown);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
          <Form.Select onChange={(e) => console.log(e.target.value)}>
            <option>Select Project budget</option>
            <option>Below $7000</option>
            <option>$7000 to $10000</option>
            <option>$10000 to $15000</option>
            <option>Above $15000</option>
          </Form.Select>
        </FormGroup>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default MobileApplicationDevelopmentPage;
