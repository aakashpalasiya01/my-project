export interface GroupDataType {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    parent: number;
    meta: {
      image: string;
      label_name: string;
    };
    acf: any[]; 
    skills: {
      id: string;
      name: string;
      slug: string;
    }[];
    _links: {
      self: { href: string }[];
      collection: { href: string }[];
      about: { href: string }[];
      "wp:post_type": { href: string }[];
      curies: {
        name: string;
        href: string;
        templated: boolean;
      }[];
    };
  }
  
  export interface GuardianInfo {
    first_name: string;
    last_name: string;
    relation_with_kids: string;
    mobile: string;
    is_default: number;
  }
  
  export interface RegisterDataType {
    first_name: string;
    last_name: string;
    age: number;
    group: number |string;
    levels: string;
    branch: string;
    guardians_info: GuardianInfo[];
    email: string;
    password: string;
    confirm_password: string;
    
  }
  
  
  export type InitialRegistrationState = {
    group: GroupDataType[];
    register: RegisterDataType | null;
  };
  export interface FormData {
    email?: string;
    password?: string;
    confirm_password?: string;
    // Add other fields as necessary
  }
  
  export interface AccountInfoProps {
    handleChange: (newData: Partial<RegisterDataType>) => void;
    form: RegisterDataType;
  }
  
  export interface GuardiansInfoProps {
    nextStep: () => void;
    handleChange: (newData: Partial<RegisterDataType>) => void;
    form: RegisterDataType;
  }
  
  export interface KidInfoProps {
    nextStep: () => void;
    handleChange: (newData: Partial<FormData>) => void;
    form: RegisterDataType;
  }
  export interface Skill {
    id: number;
    name: string;
    slug: string;
  }
  
  export interface GroupOption {
    id: number;
    name: string;
    skills: Skill[];
  }