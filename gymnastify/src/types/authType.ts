export type Role = {
  id: number;
  name: string;
};

export type GuardiansInfoType = {
  id: string;
  first_name: string;
  last_name: string;
  relation_with_kids: string;
  mobile: string;
  is_default: 1;
};

// export type User = {
//     first_name: string | null;
//     last_name: string | null;
//     age: string | null;
//     group: string | null;
//     branch: string | null;
//     user_profile_photo: null;
//     levels: string;
//     guardians_info: GuardiansInfoType[];
//     confirm_password: string;
//     user_id?: string;
//     email?: string;
//     password?:string;
//     company?: string;
//     stripe_id?: string |null;
//     stripe_default_bank_id?: string | null;
//     banks_list?: string | null;
//     address:string
//     city?: string | null;
//     state?: string | null;
//     zip_code?: string | null;
//     country?: string | null;
//     phone_verified?: number | null;
//     isd_code?: string | null;
//     phone_no?: string | null;
//     role?:string;
//     status?: string | null;
//     step?:string |null;
//     profile_picture?: string | null;
//     created_at?: Timestamp;
//     updated_at?: Timestamp;
//   }

export type Role_type = {
  individual: string;
  business: string;
  admin: string;
};

export type LoginForms = {
  username: string;
  password: string;
};

export type RegisterForm = {
  first_name: string;
  last_name: string;
  age: string;
  group: string;
  levels: string;
  branch: string;
};

export type BusinessForm = {
  company: string;
  phone: string;
  state: string;
};

export type AuthState = {
  token: string | null;
  refresh_token: string;
  user: UserDataType ;
  isLoaded: boolean;
  ImageSlider: any;
  whatWeOfferList: any;
  Group: any;
  ImageLoader: boolean;
  productList: ProductType[];
  subscription: SubscribeResponseType | null;
};

export type UserDataType = {
  user_id: string ;
  first_name: string;
  last_name: string;
  email: string;
  age: string | number;
  group: string;
  levels: string;
  branch: string;
  user_profile_photo: string | null | undefined;
  guardians_info: GuardiansInfoType[];
  registration_date: string;
  ipAddress: string;
  subscription?: SubscribeResponseType;
};

export type LoginRes = {
  token: string;
  data: UserDataType;
  refresh_token: string;
};

export type SignupRes = {
  access_token: string;
  user: UserDataType | undefined;
};

export interface ProductType {
  id: string;
  name: string;
  description: string;
  images: any;
  amount: number | string;
  currency: string;
  interval_name: string;
  interval: string;
}

type PlanType = {
  id: string;
  interval: string;
  product: string;
  trial_period_days: string | null;
  price: string | number;
};
export interface SubscribeResponseType {
  id: string;
  current_period_end: number;
  current_period_start: number;
  customer: string;
  plan: PlanType;
  status: string;
  paused: boolean;
}

export interface SliderImageListItem {
  image: {
    ID: number;
    id: number;
    title: string;
    filename: string;
    filesize: number;
    url: string;
    link: string;
    alt: string;
    author: string;
    description: string;
    caption: string;
    name: string;
    status: string;
    uploaded_to: number;
    date: string;
    modified: string;
    menu_order: number;
    mime_type: string;
    type: string;
    subtype: string;
    icon: string;
    width: number;
    height: number;
    sizes: {
      thumbnail: string;
      "thumbnail-width": number;
      "thumbnail-height": number;
      medium: string;
      "medium-width": number;
      "medium-height": number;
      medium_large: string;
      "medium_large-width": number;
      "medium_large-height": number;
      large: string;
      "large-width": number;
      "large-height": number;
      "1536x1536": string;
      "1536x1536-width": number;
      "1536x1536-height": number;
      "2048x2048": string;
      "2048x2048-width": number;
      "2048x2048-height": number;
    };
  };
  description: "Kids has offered fun and fitness to all ages. We hire career coaches and office administrators, so we attract the best long-term associates to work with your child in a safe, clean, climate-controlled facility.";
}

export interface SliderImageList {
  slider_image: readonly SliderImageListItem[];
}

interface AboutInterface {
  href: string;
}

interface CollectionInterface {
  href: string;
}

interface CuriesInterface {
  name: string;
  href: string;
  templated: boolean;
}

interface SelfInterface {
  href: string;
}

interface WPPTInterface {
  href: string;
}

interface LinkInterface {
  about: AboutInterface[];
  collection: CollectionInterface[];
  curies: CuriesInterface[];
  self: SelfInterface[];
  "wp:post_type": WPPTInterface[];
}

export interface RgstrGrpLstItem {
  id: number;
  count: number;
  description: string;
  link: string;
  meta: [];
  name: string;
  parent: number;
  slug: string;
  taxonomy: string;
  _links?: LinkInterface;
}

export interface RgstrGrpIntrfce {
  rgstrgrpList: RgstrGrpLstItem[];
}

export type setCardDataBodyType = {
  user_id: string | number | undefined;
  product_id: string;
  payment_token: string | undefined;
};

interface ButtonInterface {
  name: string;
  link: string;
}

export interface WhatWeOfferInterface {
  image: string;
  top_heading: string;
  title: string;
  description: string;
  button: ButtonInterface;
}

interface WhatWeOfferDataInterface {
  what_we_offer: WhatWeOfferInterface[];
}

export interface WhatWeOfferResInterface {
  success: boolean;
  data: WhatWeOfferDataInterface;
}

interface MetaInterface {
  image: string;
  label_name: string;
}

interface SkillInterface {
  id: string;
  name: string;
  slug: string;
}

export interface SingleSkillGrp {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  meta: MetaInterface;
  parent: number;
  skills: SkillInterface[];
  slug: string;
  taxonomy: string;
}

export type DefaultOptionsType = {
  email: string;
  password: string;
  new_password: string;
  valid_token: string;
  confirm_password: string;
};

export type ForgetPasswordResType = {
  data: ResFavType;
  success: boolean;
};

type ResFavType = {
  data: ResMessageType;
  success: boolean;
};

type ResMessageType = {
  message: string;
  token: string;
};

export interface AddStripCardBodyType {
  card_token: string;
  is_default?: number;
}

interface Subscription {
  id: string;
}

interface ResponseData {
  success: boolean;
  data: {
    message: string;
    subscription: Subscription;
  };
}

export interface ApiResponseCancelSubscription {
  data: ResponseData;
  success: boolean;
}

interface InnerData {
  message: string;
}

interface Data {
  success: boolean;
  data: InnerData;
}

export interface PauseandResumeApiResponse {
  data: Data;
  success: boolean;
}

export interface NewsLetterFormValue {
  email: string;
}
interface ResMessage {
  success: boolean;
  data: {
    message: string;
  };
}
export interface NewsLetterResType {
  success: boolean;
  data: ResMessage;
}
