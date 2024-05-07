import { Timestamp } from "firebase/firestore";

export type Role = {
    id: number;
    name: string;
}

export type User = {
    id?: string;
    first_name?: string;
    last_name?: string;
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
  

export type LoginForm = {
    email: string;
    password: string
}

export type RegisterForm = {
    firstName: string
    lastName: string
    email: string;
    password: string
    company: string
    phone: string
    state: string
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
}

export type LoginRes = {
    access_token: string
    user: any,
    refresh_token: string;
}

export type SignupRes = {
    access_token: string;
    user : User | undefined;
}

