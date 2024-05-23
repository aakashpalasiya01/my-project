"use client";
import { useState } from "react";
import KidInfo from "./KidInfo";
import AccountInfo from "./AccountInfo";
import GuardiansInfo from "./GuardiansInfo";
import { RegisterDataType } from "./Registertype";

const Registernow = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [form, setForm] = useState<RegisterDataType>({
    first_name: "",
    last_name: "",
    age: 24,
    group: 5,
    levels: "",
    branch: "",
    email: "",
    password: "",
    confirm_password: "",
    guardians_info: [
      {
        first_name: "",
        last_name: "",
        relation_with_kids: "",
        mobile: "",
        is_default: 1,
      },
      {
        first_name: "",
        last_name: "",
        relation_with_kids: "",
        mobile: "",
        is_default: 0,
      },
    ],
  });

  const handleChange = (stepData: Partial<RegisterDataType>) => {
    setForm((prevForm) => ({ ...prevForm, ...stepData }));
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  switch (currentStep) {
    case 1:
      return (
        <KidInfo nextStep={nextStep} handleChange={handleChange} form={form} />
      );

    case 2:
      return (
        <GuardiansInfo
          nextStep={nextStep}
          handleChange={handleChange}
          form={form}
        />
      );

    case 3:
      return (
        <AccountInfo
       
          handleChange={handleChange}
          form={form}
        />
      );

    default:
      return <div>Form Completed</div>;
  }
};

export default Registernow;
