import Button from "../Button/Button";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Topic from "../Topic/Topic";
import styles from "./CustomerSupportForm.module.css";
import { useState } from "react";

const CustomerSupportForm = ({ savedData }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSave = () => {
    const data = {
      fullName: fullName,
      email: email,
      message: message,
    };
    savedData.push(data);
    console.log(savedData);
  };

  const getName = (value) => {
    setFullName(value);
  };
  const getEmail = (value) => {
    setEmail(value);
  };
  const getMessage = (value) => {
    setMessage(value);
  };

  return (
    <div>
      <Topic
        title="Contact customer support"
        description="We take every request into a consideration and we will reach out to you as fast as possible"
      />
      <div className={styles.form}>
        <Input
          placeholder="Full name"
          label="Full name"
          type="text"
          id="fullName"
          changeValue={getName}
          required
        />
        <Input
          placeholder="Email"
          label="Email"
          type="email"
          id="email"
          changeValue={getEmail}
          required
        />
        <TextArea
          placeholder="Your message to us"
          label="Your message to us"
          id="message"
          changeValue={getMessage}
          required
        />
        <Button label="Save" onClick={onSave} />
      </div>
    </div>
  );
};

export default CustomerSupportForm;
