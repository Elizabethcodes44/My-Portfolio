import { useState } from "react";
import "../components/form.css";
import { useNavigate } from "react-router-dom";
const initialState = {
  name: "",
  phoneno: "",
  email: "",
  message: "",
};
function Form() {
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();
    console.log(form);
    navigate("/contact");

    setForm(initialState);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  

  return (
    <div className="contact">
    <form className="form" onSubmit={submitForm}>
      <h3>Let`s Chat</h3>
      <h6>
        Looking for productivity and efficiency! You have come to the right
        place.
      </h6>
      <div className="form__group">
        <label>
          Name
          <input
            onChange={(event) => handleChange(event)}
            type="text"
            name="name"
            value={form.name}
            required
          />
        </label>
        <label>
          Phone number
          <input
            onChange={(event) => handleChange(event)}
            type="text"
            name="phoneno"
            value={form.phoneno}
            placeholder="12345"
            required
          />
        </label>
        <label>
          E-mail
          <input
            onChange={(event) => handleChange(event)}
            type="text"
            name="email"
            value={form.email}
            placeholder="please enter a valid e-mail"
            required
          />
        </label>
        <label>
          Message
          <textarea
            onChange={(event) => handleChange(event)}
            value = {form.message}
            type = "text"
            name="message"
            placeholder="write a message here"
            cols="30"
            rows="10">
            </textarea>
        </label>
        <input 
          onChange={(event) => handleChange(event)}
          className="form__submit"
          type="submit"
          value="submit"
        />
      </div>
    </form>
    </div>
  );
}
export default Form;
