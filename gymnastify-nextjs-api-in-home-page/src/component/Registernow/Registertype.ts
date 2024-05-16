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
  
  export interface RegisterDataType {
    first_name: string;
    last_name: string;
    age: number;
    group: number;
    levels: string;
    branch: string;
    guardians_info: {
      first_name: string;
      last_name: string;
      relation_with_kids: string;
      mobile: string;
      is_default: number;
    }[];
    email: string;
    password: string;
    confirm_password: string;
  }
  
  export type InitialRegistrationState = {
    group: GroupDataType[];
    register: RegisterDataType | null;
  };
  