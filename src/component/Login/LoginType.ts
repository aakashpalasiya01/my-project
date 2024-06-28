export type FormValues = {
  username: string;
  password: string;
};

export type UserData = {
    user_id: string;
    first_name: string;
    last_name: string;
    email: string;
    age: string;
    group: string;
    levels: string;
    branch: string;
    user_profile_photo: string;
    guardians_info: any[]; // You might want to specify a more specific type here
    registration_date: string;
    ipAddress: string;
  };
  
export type LoginApiResponse = {
    data: {
      token: string;
      user_email: string;
      user_nicename: string;
      user_display_name: string;
      data: UserData;
      refresh_token?: string;
    };
    success: boolean;
  };

export type LoginFormProps = {
  loginAction: any;
};
