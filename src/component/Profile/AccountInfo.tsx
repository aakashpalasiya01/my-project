import { useAppSelector } from '@/store/hooks';
import React, { useRef, useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import { forSuccess } from '@/utils/CommonService';
import { changePassword } from '@/store/actions/authAction';
import { RootState } from '@/store/store';
import { ThreeDots } from 'react-loader-spinner';
import { ChangePasswordForm } from './ProfileType';
import eyesoff from "@/assets/images/icons/eyeoff_icn.svg";
import eyeson from "@/assets/images/icons/eyeon_icn.svg";
import Image from 'next/image';

const AccountInfo = () => {
    const { user } = useAppSelector((state: RootState) => state.auth);

    const defaultForm: ChangePasswordForm = {
        email: user?.email ? user?.email : '',
        old_password: "",
        new_password: "",
        confirm_password: "",
    }

    const [form, setForm] = useState<ChangePasswordForm>(defaultForm);
    const [hide, setHide] = useState<boolean>(true);
    const [Chide, setCHide] = useState<boolean>(true);
    const [Ohide, setOhide] = useState<boolean>(true);

    const pswShowHide = () => {
        setHide(!hide);
    }

    const CpswShowHide = () => {
        setCHide(!Chide);
    }
    const OpswShowHide = () => {
        setOhide(!Ohide);
    }
    const simpleValidator = useRef(
        new SimpleReactValidator({
            validators: {
                passwordComplexity: {
                    message: 'The password must contain at least one lowercase letter, one uppercase letter, one numeric digit and one special character.',
                    rule: (val: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,15}$/.test(val),
                    // required: true
                }
            },
            messages: {
                min: 'The :attribute must not be less than :min characters.',
                max: 'The :attribute must not exceed :max characters.'
            }
        })
    );
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [, forceUpdate] = useState<number>(0);

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [target.name]: target.value });
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if (simpleValidator.current.allValid()) {
            const passwardPayload = new FormData();
            passwardPayload.append('email', form.email);
            passwardPayload.append('confirm_password', form.confirm_password);
            passwardPayload.append('old_password', form.old_password);
            passwardPayload.append('new_password', form.confirm_password);
            setIsLoaded(true);
            await changePassword(passwardPayload).then((res: any) => {
                forSuccess(res.data.message);
                setIsLoaded(false);
            }).catch(() => {
                setIsLoaded(false);
            })
        }
        else {
            simpleValidator.current.showMessages();
            forceUpdate(1);
        }
    }

    const getPasswordValidationMessage = () => {
        let messages = [];
        if (!form.new_password) {
            messages.push(simpleValidator.current.message('new_password', form.new_password, 'required'));
        } else if (form.new_password.length < 6) {
            messages.push(simpleValidator.current.message('new_password', form.new_password, 'min:6'));
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(form.new_password)) {
            messages.push(simpleValidator.current.message('new_password', form.new_password, 'passwordComplexity'))
        } else {
            messages.push(simpleValidator.current.message('new_password', form.new_password, 'max:15'));
        }

        return (
            <>
                {messages?.map((msg, index) => (
                    <div key={index + 1}>{msg}</div>
                ))}
            </>
        );
    };


    return (
        <div className="prouser_items">
            <div className="prouser_link">
                Account Info
            </div>
            <form>
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
                            <div className="psw_btn position-relative">
                                <input
                                    type={Ohide ? "password" : "text"}
                                    name="old_password"
                                    id="old_password"
                                    className="form-control ele_input"
                                    onChange={handleChange}
                                    value={form.old_password}
                                    placeholder="*******"
                                    autoComplete="on"
                                    onBlur={() => { simpleValidator.current.showMessageFor('old_password') }}
                                />
                                <div>
                                    {simpleValidator.current.message(
                                        "old_password",
                                        form.old_password,
                                        "required|min:6")}
                                </div>
                                <button type="button" className="btn_eyeimg" onClick={OpswShowHide}>
                                    <Image className="psw_hide" src={!Ohide ? eyeson : eyesoff} alt="icons" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor='new_password' className="ele_lable">New Password</label>
                            <div className="psw_btn position-relative">
                                <input
                                    type={hide ? "password" : "text"}
                                    name="new_password"
                                    id="new_password"
                                    className="form-control ele_input"
                                    onChange={handleChange}
                                    value={form.new_password}
                                    placeholder="*******"
                                    autoComplete="on"
                                    onBlur={() => { simpleValidator.current.showMessageFor('new_password') }}
                                />
                                <div>
                                    {getPasswordValidationMessage()}
                                </div>
                                <button type="button" className="btn_eyeimg" onClick={pswShowHide}>
                                    <Image className="psw_hide" src={!hide ? eyeson : eyesoff} alt="icons" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor='confirm_password' className="ele_lable">Confirm Password</label>
                            <div className="psw_btn position-relative">
                                <input
                                    type={Chide ? "password" : "text"}
                                    name="confirm_password"
                                    id="confirm_password"
                                    onChange={handleChange}
                                    value={form.confirm_password}
                                    className="form-control ele_input"
                                    placeholder="*******"
                                    autoComplete="on"
                                    onBlur={() =>
                                        simpleValidator.current.showMessageFor("confirm_password")
                                    }
                                />
                                <div>
                                    {simpleValidator.current.message(
                                        "confirm_password",
                                        form.confirm_password,
                                        `required|in:${form.new_password}`,
                                        { messages: { required: "The confirm password field is required.", in: "Passwords do not match." } }
                                    )}
                                </div>
                                <button type="button" className="btn_eyeimg" onClick={CpswShowHide}>
                                    <Image className="psw_hide" src={!Chide ? eyeson : eyesoff} alt="icons" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="pro_btn">
                <button type="submit" className="btn_animated btn_block primary_btn" onClick={handleSubmit}>
                    {isLoaded ?
                        <ThreeDots
                            height="25"
                            width="80"
                            radius="9"
                            color="#fff"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{ display: "block" }}
                            visible={true}
                        /> : "Update Password"}
                </button>
            </div>
        </div>
    )
}

export default AccountInfo