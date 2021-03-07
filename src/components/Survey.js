import React, { useState } from "react";
import "../utils/css/reset.css";
import "./Survey.css";
import Survey1 from "./Survey1";
import Survey2 from "./Survey2";
import SurveyEnd from "./SurveyEnd";
import SurveyReuslt from "./SurveyReuslt";

const Survey = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    occ: "",
    tel: "",
    gender: "",
  });

  //비구조할당
  const { firstname, lastname, email, occ, tel, gender } = form;

  const onText = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onNext = () => {
    setStep(step + 1);
  };

  const onPrev = () => {
    //setStep(step - 1)
    setStep((prevStep) => prevStep - 1);
  };

  switch (step) {
    case 1:
      return <Survey1 {...form} onText={onText} onNext={onNext} />;
    case 2:
      return (
        <Survey2 {...form} onText={onText} onNext={onNext} onPrev={onPrev} />
      );
    case 3:
      return <SurveyReuslt {...form} onNext={onNext} onPrev={onPrev} />;
    case 4:
      return <SurveyEnd />;
  }
};

export default Survey;
