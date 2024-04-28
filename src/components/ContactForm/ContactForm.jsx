import { useState } from "react";
import css from "./ContactForm.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || phoneNumber.trim() === "") {
      toast("Name and phone number are required.");
    } else {
      dispatch(addContact({ name, phoneNumber }));
      setName("");
      setPhoneNumber("");
    }
  };

  function handleChangeName(e) {
    setName(e.target.value);
  }

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Toaster />
        <input
          type="text"
          value={name}
          onChange={handleChangeName}
          placeholder="Name"
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={handleChangePhoneNumber}
          placeholder="Phone number"
        />
        <button type="submit" className={css.button}>
          Add contacts
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
