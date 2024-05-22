"use client";
import {useState } from "react";
import KidInfo from "./KidInfo";
import AccountInfo from "./AccountInfo";
import GuardiansInfo from "./GuardiansInfo";

const Registernow = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    kidInfo: {},
    guardiansInfo: {},
    accountInfo: {},
  });

  const nextStep = (stepData: any) => {
    setFormData({ ...formData, ...stepData });
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  switch (currentStep) {
    case 1:
      return (
        <KidInfo
          nextStep={nextStep}
          prevStep={prevStep}
          currentStep={currentStep}
        />
      );

    case 2:
      return <GuardiansInfo nextStep={nextStep} currentStep={currentStep} />;

    case 3:
      return (
        <AccountInfo
          prevStep={prevStep}
          currentStep={currentStep}
          formData={formData}
        />
      );

    default:
      return <div>Form Completed</div>;
  }
};

export default Registernow;
