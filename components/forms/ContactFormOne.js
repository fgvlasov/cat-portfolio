import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Alert from "./Alert";
import Input from "./Input";

const ContactFormOne = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mxdohie",
        "template_z5cioqm",
        form.current,
        "jpLEXw_LKyA6GgI_U"
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
      <Input name="company" label="Компания" isClear={isMessageSent} />
      <Input name="phone" label="Телефон" isClear={isMessageSent} />
      <div className="form-group">
        <button className="axil-button btn-large btn-transparent w-100">
          <span className="button-text">Получите цену сейчас</span>
          <span className="button-icon" />
        </button>
      </div>
      {showAlert && (
        <Alert
          message={
            isMessageSent
              ? "Ваше сообщение было успешно отправлено"
              : "Что-то пошло не так"
          }
          type={isMessageSent ? "success" : "danger"}
        />
      )}
    </form>
  );
};

export default ContactFormOne;
