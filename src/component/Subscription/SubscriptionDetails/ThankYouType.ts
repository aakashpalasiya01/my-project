interface Plan {
    id: string;
    interval: string;
    product_name: string;
    product: string;
    trial_period_days: number | null;
    price: number;
    currency: string;
    created: number;
  }
  
  interface LastInvoice {
    id: string;
    amount_due: number;
    currency: string;
    date: number;
  }
  
  interface PaymentMethod {
    id: string;
    brand: string;
    last4: string;
    exp_month: number;
    exp_year: number;
  }
  
export interface Subscription {
    id: string;
    status: string;
    paused: boolean;
    start_date: number;
    end_date: number;
    plan: Plan;
    last_invoice: LastInvoice;
    payment_method: PaymentMethod;
  }


  interface GuardianInfo {
    id: string;
    first_name: string;
    last_name: string;
    relation_with_kids: string;
    mobile: string;
    is_default: string;
  }
  
  export interface User {
    user_id: string;
    first_name: string;
    last_name: string;
    email: string;
    age: string;
    group: string;
    levels: string;
    branch: string;
    user_profile_photo: string;
    guardians_info: GuardianInfo[];
    registration_date: string;
    ipAddress: string;
  }

  export interface PropsThankYou {
    params: Record<string, unknown>;
    searchParams: {
      sub_id: string;
    };
  }
  