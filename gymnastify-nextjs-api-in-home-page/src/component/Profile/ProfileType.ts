export interface ProfileFormState {
    first_name: string;
    last_name: string;
    age: string;
    group: string;
    branch: string;
    user_profile_photo: { image_id: number; image_url: string }[];
    levels: string;
    guardians_info: {
        first_name: string;
        last_name: string;
        relation_with_kids: string;
        mobile: string;
        is_default: number;
    }[];
}

export interface changePasswordForm {
    email: string;
    old_password: string;
    new_password: string;
    confirm_password: string;
}