import React, { useState, useContext } from "react";
import Form from "../Components/Form";
import { ContextGlobal } from "../Components/utils/global.context";


const Contact = () => {
  const { state } = useContext(ContextGlobal);
  return (
    <div  className={state.theme}>
      <h2 className="contact">Want to know more?</h2>
      <p className="contact">Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
