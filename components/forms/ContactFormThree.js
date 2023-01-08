import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Alert from "./Alert";
import Input from "./Input";

const ContactFormThree = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pnhpygi",
        "template_1ge8xiu",
        form.current,
        "NzYnkLhXngOlItll-"
      )
      .then(
        (result) => {
          console.log(result);

          setShowAlert(true);
          setIsMessageSent(true);

          setTimeout(() => {
            setShowAlert(false);
          }, 4000);
        },
        (error) => {
          console.log(error.text);

          setIsMessageSent(false);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Input name="name" label="Имя" isClear={isMessageSent} />
      <Input name="email" label="Email" type="email" isClear={isMessageSent} />
      <Input name="phone" label="Телефон" isClear={isMessageSent} />
      <Input
        name="message"
        label="Ваше сообщение"
        type="textarea"
        isClear={isMessageSent}
      />
      <div className="form-group">
        <input type="submit" value="Отправить сообщение" />
        <p className="form-messege"></p>
      </div>
      {showAlert && (
        <Alert
          message={
            isMessageSent
              ? "Ваше сообщение было успешно отправлено"
              : "Что-то пошло нет, котик потерялся"
          }
          type={isMessageSent ? "success" : "danger"}
        />
      )}
    </form>
  );
};

export default ContactFormThree;
