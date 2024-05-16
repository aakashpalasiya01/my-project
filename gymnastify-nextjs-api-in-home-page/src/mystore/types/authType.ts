import { Timestamp } from "firebase/firestore";

export type Role = {
    id: number;
    name: string;
}

export type User = {
    first_name: string | null;
    last_name: string | null;
    age: string | null;
    group: string | null;
    branch: string | null;
    user_profile_photo: null;
    levels: string;
    guardians_info: {
        first_name: string;
        last_name: string;
        relation_with_kids: string;
        mobile: string;
        is_default: 1;
    }[];
    confirm_password: string;
    user_id?: string;
    email?: string;
    password?:string;
    company?: string;
    stripe_id?: string |null;
    stripe_default_bank_id?: string | null;
    banks_list?: string | null;
    address:string
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    phone_verified?: number | null;
    isd_code?: string | null;
    phone_no?: string | null;
    role?:string;
    status?: string | null;
    step?:string |null;
    profile_picture?: string | null;
    created_at?: Timestamp;
    updated_at?: Timestamp;
  }
  
  export type Role_type = {
    individual : string;
    business : string;
    admin : string;
    }
  

export type LoginForms = {
    username: string;
    password: string
}

export type RegisterForm = {
    first_name: string;
    last_name: string;
    age: string;
    group: string;
    levels: string;
    branch: string;
}

export type BusinessForm = {
    company: string
    phone: string
    state: string
}

export type AuthState = {
    token: string | null;
    refresh_token: string;
    user: User | undefined;
    isLoaded: boolean;
    ImageSlider: any;
    whatWeOfferList: any;
    Group: any;
    ImageLoader:boolean;
    productList: ProductType[];
    subscription: SubscribeResponseType | null;
}



export type LoginRes = {
    token: string
    data: any,
    refresh_token: string;
}

export type SignupRes = {
    access_token: string;
    user : User | undefined;
}


export interface ProductType {
    "id": string;
    "name": string;
    "description": string;
    "images": any;
    "amount": number | string;
    "currency": string;
}

export interface SubscribeResponseType {
    id: string;
    current_period_end: number;
    current_period_start: number;
    customer: string;
    plan: {
        id: string;
        interval: string;
        product: string;
        trial_period_days: string | null;
    }
}
