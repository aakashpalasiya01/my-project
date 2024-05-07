import { useAppDispatch, useAppSelector } from '@/store/hooks';
import React, { useRef, useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import * as authReducer from "../../store/reducers/authReducer";
import { forSuccess } from '@/utils/CommonService';
import { changePassword } from '@/store/actions/authAction';
import { RootState } from '@/store/store';
import { ThreeDots } from 'react-loader-spinner';
import { changePasswordForm } from './ProfileType';

const AccountInfo = () => {
    const { user, isLoaded } = useAppSelector((state: RootState) => state.auth);
    const defaultForm: changePasswordForm = {
        email: user?.email ? user?.email : '',
        old_password: "",
        new_password: "",
        confirm_password: "",
    }

    const [form, setForm] = useState<changePasswordForm>(defaultForm);
    const simpleValidator = useRef(new SimpleReactValidator());
    const [, forceUpdate] = useState<number>(0);
    const dispatch = useAppDispatch();

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [target.name]: target.value });
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if (simpleValidator.current.allValid()) {
            dispatch(authReducer.setLoader(true));
            const passwardPayload = new FormData();
            passwardPayload.append('email', form.email);
            passwardPayload.append('confirm_password', form.confirm_password);
            passwardPayload.append('old_password', form.old_password);
            passwardPayload.append('new_password', form.confirm_password);
            await changePassword(passwardPayload).then((res: any) => {
                forSuccess(res.data.message);
            });
            dispatch(authReducer.setLoader(false));
        }
        else {
            simpleValidator.current.showMessages();
            forceUpdate(1);
        }
    }

    return (
        <div className="prouser_items">
            <div className="prouser_link">
                Account Info
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="mb-3">
                        <label htmlFor='email' className="ele_lable">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control ele_input"
                            value={user?.email}
                            placeholder="rabecavasin@gmail.com"
                            readOnly={true}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor='old_password' className="ele_lable">Old Password</label>
                        <input
                            type="text"
                            name="old_password"
                            id="old_password"
                            className="form-control ele_input"
                            onChange={handleChange}
                            value={form.old_password}
                            placeholder="*******"
                            onBlur={() => { simpleValidator.current.showMessageFor('old_password') }}
                        />
                        <div>
                            {simpleValidator.current.message(
                                "old_password",
                                form.old_password,
                                "required|min:6")}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor='new_password' className="ele_lable">New Password</label>
                        <input
                            type="text"
                            name="new_password"
                            id="new_password"
                            className="form-control ele_input"
                            onChange={handleChange}
                            value={form.new_password}
                            placeholder="*******"
                            onBlur={() => { simpleValidator.current.showMessageFor('new_password') }}
                        />
                        <div>
                            {simpleValidator.current.message(
                                "password",
                                form.new_password,
                                "required|min:6"
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor='confirm_password' className="ele_lable">Confirm Password</label>
                        <input
                            type="text"
                            name="confirm_password"
                            id="confirm_password"
                            onChange={handleChange}
                            value={form.confirm_password}
                            className="form-control ele_input"
                            placeholder="*******"
                            onBlur={() =>
                                simpleValidator.current.showMessageFor("confirm_password")
                            }
                        />
                        <div>
                            {simpleValidator.current.message(
                                "confirm_password",
                                form.confirm_password,
                                `required|in:${form.new_password}`,
                                { messages: { required: "Confirm Password is required", in: "Passwords do not match" } }
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="pro_btn">
              <button type="submit" className="btn_block primary_btn width_full" onClick={handleSubmit}>
                {isLoaded ?
                    <ThreeDots
                        height="25"
                        width="80"
                        radius="9"
                        color="#fff"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{ display: "block" }}
                        visible={true}
                    /> : "update password"}
                </button>
            </div>
        </div>
    )
}

export default AccountInfo