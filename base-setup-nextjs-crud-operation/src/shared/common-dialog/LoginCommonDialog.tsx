'use client'
import React, { useRef, useState } from "react";
import { CommonDialog } from "./types";

import { ThreeDots } from "react-loader-spinner";
import { isDialogOpen } from "@/utils/CommonService";
import Image from "next/image";
import crossicon from "@/assets/images/close_icon.svg"
import google from "@/assets/images/google.png"
import appstore from "@/assets/images/app_store.png"
import showicon from "@/assets/images/show_icon.svg"

import { LoginForm } from "@/types/authType";
import SimpleReactValidator from "simple-react-validator";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { login } from "@/store/actions/authAction";


const LoginCommonDialog = () => {
    const defaultOptions = {
        loginIsOpen: false,
        onConfirm: () => { },
    };

    const [dialogOptions, setDialogOptions] =
        useState<any>(defaultOptions);

    isDialogOpen.subscribe((data: CommonDialog) => {
        if (data.loginIsOpen && !dialogOptions.loginIsOpen) setDialogOptions(data);
        else if (!data.loginIsOpen && dialogOptions.loginIsOpen) setDialogOptions(defaultOptions);
    });

    const { loginIsOpen } = dialogOptions;

    const handleClose = () => {
        isDialogOpen.onNext(defaultOptions);
    };
    // const loading = useAppSelector((state) => state.auth.isLoaded);
    const loading = false

    interface Form {
        user: {
            email: string;
            password: string;
            session_info: {
                app_version: string;
                os_version: string;
                device_manufacturer: string;
                device_model: string;
                platform: string;
            };
        };
    }
    const defaultForm: Form = {
        user: {
            email: "",
            password: "",
            session_info: {
                app_version: "1.1",
                os_version: "ox_1.6",
                device_manufacturer: "sss",
                device_model: "xc1",
                platform: "web",

            }
        }
    }
    const simpleValidator = useRef(new SimpleReactValidator());
    const [passwordvisible, setpasswordvisible] = useState<boolean>(false);
    const [, forceUpdate] = useState<number>();
    const [form, setForm] = useState(defaultForm.user);
    const dispatch = useAppDispatch();

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [target.name]: target.value });
    }

    const togglePasswordVisibility = () => {
        setpasswordvisible(!passwordvisible);
    }

    const submithandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (simpleValidator.current.allValid()) {
            await dispatch(login(form));
            setForm(defaultForm.user);
            forceUpdate(0);
            isDialogOpen.onNext(defaultOptions);
        } else {
            simpleValidator.current.showMessages();
            forceUpdate(1);
        }
    }

    return (
        <>
            {loginIsOpen && (
                <>
                    <div className="react-confirm-alert-overlay inharmony_login_modal_wrap">
                        <div className="confirmModel">
                            <div className="modal_wrapper">
                                <div className="modal_left_part">

                                </div>
                                <div className="modal_right_part">
                                    <form className="auth_form_wrapper" onSubmit={submithandler}>
                                        <article className="main_article">
                                            <p>
                                                Welcome Back!
                                            </p>
                                            <div className="text_link_wrapper">
                                                <h3>
                                                    Please Login
                                                </h3>
                                                <a href="#" className="sign_up_link">
                                                    Sign Up
                                                </a>
                                            </div>

                                        </article>
                                        <div className="form-grp">
                                            <label htmlFor="exampleFormControlInput1" className="form-label label_modify">Email address</label>
                                            <input
                                                type="email"
                                                className="form-control input_modify"
                                                id="email"
                                                name="email"
                                                placeholder="name@example.com"
                                                value={form.email}
                                                autoComplete="email"
                                                onChange={handleChange}
                                                onBlur={() => { simpleValidator.current.showMessageFor('password') }}
                                            />
                                            <div style={{ color: 'red' }}>
                                                {simpleValidator.current.message(
                                                    "email",
                                                    form.email,
                                                    "required|email"
                                                )}
                                            </div>
                                        </div>
                                        <div className="form-grp">
                                            <label htmlFor="exampleFormControlInput1" className="form-label label_modify">Password</label>
                                            <div className="input_icon_wrap">
                                                <input
                                                    type={passwordvisible === true ? "text" : "password"}
                                                    className="form-control input_modify"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Enter password"
                                                    value={form.password}
                                                    autoComplete="password"
                                                    onChange={handleChange}
                                                    onBlur={() => { simpleValidator.current.showMessageFor('password') }}
                                                />
                                                <Image src={showicon} alt="card img" className="show_icon" />
                                            </div>
                                            <button type="button"
                                                onClick={togglePasswordVisibility}>{passwordvisible ? "show" : "hide"}</button>
                                            <div style={{ color: 'red' }}>
                                                {simpleValidator.current.message(
                                                    "password",
                                                    form.password,
                                                    "required"
                                                )}
                                            </div>
                                        </div>
                                        <div className="frgt_pswd_link_wrap">
                                            <a href="#" className="sign_up_link">Forgot Password?</a>
                                        </div>
                                        <div className="login_btn_wrap">
                                            <button type="submit" className="theme-btn theme-primary text-white">{loading ?
                                                <ThreeDots
                                                    height="25"
                                                    width="80"
                                                    radius="9"
                                                    color="#fff"
                                                    ariaLabel="three-dots-loading"
                                                    wrapperStyle={{ display: "block" }}
                                                    visible={true}
                                                /> : "Login"}
                                            </button>
                                        </div>
                                    </form>
                                    <div className="available_wrap">

                                    </div>
                                </div>
                                <button onClick={handleClose} className="cross_btn_wrap">
                                    <Image src={crossicon} alt="card img" />
                                </button>


                                <div className="comonWdth btnWrap commonModelFooter">
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )


};

export default LoginCommonDialog;