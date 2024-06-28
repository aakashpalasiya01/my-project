
export type GuardianInfoType = {
    [key: string]: any;
    id:string ,
    first_name: string;
    last_name: string;
    relation_with_kids: string;
    mobile: string;
    is_default: number;
}

export type ProfileFormState = {
    [key: string]: any;
    first_name: string;
    last_name: string;
    age: string | number;
    group: string;
    branch: string;
    user_profile_photo:File|null;
    levels: string;
    guardians_info: GuardianInfoType[];
    gallery:[]
}

export interface ChangePasswordForm {
    email: string;
    old_password: string;
    new_password: string;
    confirm_password: string;
}

 export interface ProfileDataInterface {
    "user_id": string,
    "first_name": string,
    "last_name": string,
    "email": string,
    "age": string,
    "group": string,
    "levels": string,
    "branch": string,
    "user_profile_photo": string,
    "guardians_info": GuardianInfoInterface[],
    "registration_date": string,
    "ipAddress": string
}

 export interface GuardianInfoInterface {
    "id": string,
    "first_name": string,
    "last_name": string,
    "relation_with_kids": string,
    "mobile": string,
    "is_default": number
}

 interface DataProfileInterface {
    "message":string,
    "profileData": ProfileDataInterface
}

export interface ProfileInterface {
    "success":boolean,
    "data": DataProfileInterface
}

export type InitialProfileState = {
    Profile : ProfileDataInterface,
    isProfileLoaded: boolean,
    isProfileImageLoaded:boolean
    Gallery:null,
  };



type ResponseOnePayLoadType = {
    message: string,
    profileData: ProfileDataInterface,
}


type ResponseOneDataType = {
    data: ResponseOnePayLoadType,
    success: boolean
}

export type ResponseOneType = {
    data: ResponseOneDataType,
    success: boolean
}

export type ProfImgDataType = {
    image_id: number,
    image_url: string,
    file: File
  }
  
  type UserProfDataType = {
    data: ProfImgDataType[],
    success: boolean
  }
  
  type FetchUserProfTypeSuccess = {
    data: any,
    success: true
  }
  
  type FetchUserProfTypeFailure = {
    data: any,
    success: false
  }
  
  export type FetchUserProfType = FetchUserProfTypeSuccess | FetchUserProfTypeFailure;

  type ChangePassMessType = {
    message:string
  }

   type ChangePassDataType = {
    data:ChangePassMessType,
    success:boolean
  }
  
  export type ChangePassResType = {
    data: ChangePassDataType,
    success:boolean
  }

  export type GuardiansPropInfoType = {
    form:ProfileFormState,
    setForm:Function,
    simpleValidator: any,
    handleBlur:Function,
    forceUpdate:Function,
    setIsValidatorVisible:Function,
    simpleValidatorOptional:Function |any,
}

export type KidInfoPropType = {
    form: ProfileFormState;
    handleChange: any;
    simpleValidator:any;
    setForm:Function;
    Gallery: any;
    isProfileImageLoaded:boolean,
    userID:string|number|undefined;
    handleBlur:Function
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

  export interface PrflGrpResInterface{
    data: SingleSkillGrp[],
    success: boolean
  }

  type MetadataType = {
    image:string,
    label_name:string
}

export type SkillsType = {
    id:string,
    name:string,
    slug:string
}

type AboutType = {
    href:string
}

type CollectionType = {
    href:string
}

type CuriesType = {
    name:string,
    href:string,
    templated:boolean
}

type SelfType = {
    href:string
}

type WPPType = {
    href:string
}

interface LinksType {
    "about":AboutType,
    "collection":CollectionType,
    "curies":CuriesType,
    "self":SelfType,
    "wp:post_type":WPPType,

}

type ExploreSkillDataType = {
    acf:[],
    count:number,
    description:string,
    id:number,
    link:string,
    meta:MetadataType,
    name:string,
    parent:number,
    skills:SkillsType[],
    slug:string,
    taxonomy: string,
    _links:LinksType
}

export type ExploreSkillResType = {
    data: ExploreSkillDataType[],
    success:boolean
}


interface ResponseMessage {
  message: string;
}

interface NestedResponse {
  success: boolean;
  data: ResponseMessage;
}

export interface ApiRemovePhotoResponse {
  success: boolean;
  data?: NestedResponse;  // Assuming NestedResponse is a defined type
  message?: string;
}

export interface CropPhotoImagProps {
  setForm: Function;
}

export interface UploadImageProps {
  setForm: Function;
  form: ProfileFormState;
}

export type ProfileIdType = string|number|undefined;
