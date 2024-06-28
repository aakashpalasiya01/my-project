"use client"
import { useState } from "react";
import { FormState, GuardiansInfoType } from "./Registertype";
import KidInfo from "./KidInfo";
import AccountInfo from "./AccountInfo";
import GuardiansInfo from "./GuardiansInfo";


const Registernow = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [form, setForm] = useState<FormState>({
    first_name: '',
    last_name: '',
    age: '',
    group: '',
    branch: '',
    user_profile_photo: null,
    levels: '',
    guardians_info: [
      {
        first_name: "",
        last_name: "",
        relation_with_kids: "",
        mobile: "",
        is_default: 1
      },
      {
        first_name: "",
        last_name: "",
        relation_with_kids: "",
        mobile: "",
        is_default: 0
      }
    ],
    email: '',
    password: '',
    confirm_password: '',
  });

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };



  const opt_FN_Cond: boolean = form.guardians_info[1].first_name.length > 0;
  const opt_LN_Cond: boolean = form.guardians_info[1].last_name.length > 0;
  const opt_RWK_Cond: boolean = form.guardians_info[1].relation_with_kids.length > 0;
  const opt_MOBILE_Cond: boolean = form.guardians_info[1].mobile.length > 0;


  const isOptionalFieldsEnteredCondn: boolean = opt_FN_Cond || opt_LN_Cond || opt_RWK_Cond || opt_MOBILE_Cond;

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.name == "group") {
      setForm({ ...form, [target.name]: target.value, levels: "" })
    }
    else {
      setForm({ ...form, [target.name]: target.value });
    }
  };

  const handleGaudianChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const Split_name = name.split('.');
    const index_no = Split_name[1];
    const key = Split_name[2];
    const newState = [...form.guardians_info];
    newState.map((items: GuardiansInfoType, index: number) => {
      if (index == parseInt(index_no, 10)) {
        items[key] = value
      }
      return items;
    })
    setForm({ ...form, guardians_info: newState });
  }

  switch (currentStep) {
    case 1:
      return <KidInfo form={form} handleChange={handleChange} nextStep={nextStep} setForm={setForm} />;

    case 2:
      return <GuardiansInfo form={form} handleGaudianChange={handleGaudianChange} nextStep={nextStep} isOptionalFieldsEnteredCondn={isOptionalFieldsEnteredCondn} />;

    case 3:
      return <AccountInfo form={form} handleChange={handleChange} />;

    default:
      return <div>Form Completed</div>;

  }
}

export default Registernow;
