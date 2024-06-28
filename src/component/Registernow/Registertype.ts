import { ChangeEventHandler } from "react";

export type GuardiansInfoType = {
  first_name: string;
  last_name: string;
  relation_with_kids: string;
  mobile: string;
  is_default: number;
  [key: string]: any; 
}

export interface FormState {
    first_name: string;
    last_name: string;
    age: string;
    group: string;
    branch: string;
    user_profile_photo: File | null;
    levels: string;
    guardians_info: GuardiansInfoType[];
    email: string;
    password: string;
    confirm_password: string;
}

interface MetaInterface {
    image:string,
    label_name:string,
  }
  
  interface SkillInterface{
    id:string,
    name:string,
    slug:string,
  }
  export interface SingleSkillGrp {
    "id":number,
    "count":number,
    "description":string,
    "link":string,
    "name":string,
    "meta":MetaInterface,
    "parent":number,
    "skills":SkillInterface[];
    "slug":string,
    "taxonomy":string
  }

  export interface RgtstrGrpResInterface{
    data: SingleSkillGrp[],
    success: boolean
  }

  export type KidInfoPropsType = {
    form:FormState,
    handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
    nextStep: Function,
    setForm:Function,
  }

  export type GuardInfoPropsType = {
    form:FormState,
    handleGaudianChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
    nextStep: Function,
    isOptionalFieldsEnteredCondn:boolean;
  }

  export type AccInfoPropsType = {
    form: Record<string, any>;
    handleChange: ChangeEventHandler<HTMLInputElement>;
  }

  export type GuardiansRegType = {
    first_name: string;
    last_name: string;
    relation_with_kids: string;
    mobile: string;
    is_default: number;
    id:string
  }

  export type RegProfDataType = {
    age:string,
    branch:string,
    email:string,
    first_name:string,
    group:string,
    guardiansInfo:GuardiansRegType,
    ipAddress:string,
    last_name:string,
    levels:string,
    registration_date:string,
    user_id:number,
    user_profile_photo:string
  }


  export type RegProfActType = {
    message:string,
    profileData: RegProfDataType,
  }

  export type RegActionDataType = {
    data: RegProfActType,
    success:boolean
  }

  export type RegActionResType = {
    data:RegActionDataType,
    success:boolean
  }
  
  export type UploadImagePageProps = {
    setForm:Function, 
    form: FormState,
    imageUploadUrl:string | null,
    setImageUploadUrl:Function
  }

  export type CameraCaptureProps = {
    form: FormState, 
    setForm: Function
  }