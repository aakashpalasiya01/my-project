'use client';
import React, { useRef, useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import * as authReducer from "@/store/reducers/authReducer";
import { useAppDispatch } from '@/store/hooks';
import { forgotPasswordAction } from '@/store/actions/authAction';
import { forSuccess } from "@/utils/CommonService";
import { ForgetPasswordResType } from "@/types/authType"
import { ROUTES_PATH } from '@/utils/constant';
import { useRouter } from 'next/navigation';

const ForgotPasswordForm = () => {
    interface FogotPassword {
        email: string;
    }

    const defaultForm: FogotPassword = {
        email: "",
    }

    const [form, setForm] = useState<FogotPassword>(defaultForm);
    const simpleValidator = useRef(new SimpleReactValidator());
    const [, forceUpdate] = useState<number>(0);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [target.name]: target.value });
    }
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (simpleValidator.current.allValid()) {
            dispatch(authReducer.setLoader(true));
            const ForgotFormatData = new FormData();
            ForgotFormatData.append("user_email", form.email);
            await forgotPasswordAction(ForgotFormatData).then((res: ForgetPasswordResType) => {
                if (res.success) {
                    forSuccess(res.data.data.message);
                }
                setTimeout(() => {
                    router.push(ROUTES_PATH.LOGIN);
                }, 3000); 
            });
            dispatch(authReducer.setLoader(false));
        }
        else {
            simpleValidator.current.showMessages();
            forceUpdate(1);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="ele_lable">Email Address</label>
                <input type="email"
                    className="form-control ele_input"
                    placeholder="Email Address"
                    name='email'
                    id='email'
                    onChange={handleChange}
                    value={form.email}
                    onBlur={() => simpleValidator.current.showMessageFor('email')}
                />
                <div>
                    {simpleValidator.current.message('email', form.email, 'required|email')}
                </div>
            </div>
            <div className="btn_login">
                <button type='submit' className="btn_animated btn_block primary_btn width_full">
                    Continue
                </button>
            </div>
        </form>
    )
}

export default ForgotPasswordForm;