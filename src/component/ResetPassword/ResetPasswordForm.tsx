/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import SimpleReactValidator from "simple-react-validator";
import React, { useEffect, useRef, useState } from "react";
import { resetPasswordAction } from "@/store/actions/authAction";
import * as authReducer from "@/store/reducers/authReducer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ThreeDots } from "react-loader-spinner";
import { RootState } from "@/store/store";
import { useRouter, useSearchParams } from "next/navigation";
import { DefaultOptionsType } from "@/types/authType";
import { forSuccess } from "@/utils/CommonService";
import eyesoff from "@/assets/images/icons/eyeoff_icn.svg";
import eyeson from "@/assets/images/icons/eyeon_icn.svg";
import Image from "next/image";
import { ROUTES_PATH } from "@/utils/constant";

const ResetPasswordForm = () => {
  const defaultOptions: DefaultOptionsType = {
    email: "",
    password: "",
    new_password: "",
    valid_token: "",
    confirm_password: "",
  };

  const [form, setForm] = useState(defaultOptions);
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
    }));

  const [hide, setHide] = useState<boolean>(true);
  const [Chide, setCHide] = useState<boolean>(true);
  const [, forceUpdate] = useState<number>(0);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const user_login = searchParams.get("user_login");
  const token = searchParams.get("token");

  const { isLoaded } = useAppSelector((state: RootState) => state.auth);
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const pswShowHide = () => {
    setHide(!hide);
  }

  const CpswShowHide = () => {
    setCHide(!Chide);
  }

  useEffect(() => {
    if (user_login && token) {
      setForm({ ...form, valid_token: token, email: user_login });
    } else {
      router.push("/login");
    }
  }, [user_login, token]);

  const submithandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (simpleValidator.current.allValid()) {
      dispatch(authReducer.setLoader(true));
      const FromatDataReset = new FormData();
      FromatDataReset.append("email", form.email);
      FromatDataReset.append("new_password", form.new_password);
      FromatDataReset.append("valid_token", form.valid_token);
      FromatDataReset.append("confirm_password", form.confirm_password);
      await resetPasswordAction(FromatDataReset).then((res: any) => {
        if (res.success) {
          dispatch(authReducer.setLoader(false));
          forSuccess(res.data.data.message);
          router.push(ROUTES_PATH.LOGIN);
        }
      }).catch(() => {
        dispatch(authReducer.setLoader(false));
      })
    } else {
      simpleValidator.current.showMessages();
      dispatch(authReducer.setLoader(false));
      forceUpdate(1);
    }
  };

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
        {messages.map((msg, index) => (
          <div key={index + 1}>{msg}</div>
        ))}
      </>
    );
  };

  return (
    <form onSubmit={submithandler}>
      <div className="mb-3">
        <label htmlFor="email" className="ele_lable">Email Address</label>
        <input
          type="email"
          readOnly
          className="form-control ele_input"
          placeholder="Email Address"
          name="email"
          id="email"
          onChange={handleChange}
          value={form.email}
          onBlur={() => simpleValidator.current.showMessageFor("email")}
        />
        {simpleValidator.current.message("email", form.email, "required|email")}
      </div>
      <div className="mb-3">
        <label htmlFor="new_password" className="ele_lable">New password</label>
        <div className="psw_btn position-relative">
          <input
            className="form-control ele_input"
            type={hide ? "password" : "text"}
            id="new_password"
            placeholder="Enter new password"
            name="new_password"
            onChange={handleChange}
            value={form.new_password}
            onBlur={() => {
              simpleValidator.current.showMessageFor("new_password");
            }}
          />
          {getPasswordValidationMessage()}
          <button type="button" className="btn_eyeimg" onClick={pswShowHide}>
            <Image className="psw_hide" src={!hide ? eyeson : eyesoff} alt="icons" />
          </button>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="confirm_password" className="ele_lable">Confirm password</label>
        <div className="psw_btn position-relative">
          <input
            className="form-control ele_input"
            type={Chide ? "password" : "text"}
            id="confirm_password"
            placeholder="Confirm password"
            name="confirm_password"
            onChange={handleChange}
            value={form.confirm_password}
            onBlur={() => {
              simpleValidator.current.showMessageFor("password_confirmation");
            }}
          />
          {simpleValidator.current.message(
            "confirm_password",
            form.confirm_password,
            `required|in:${form.new_password}`,
            {
              messages: {
                required: "Confirm Password is required",
                in: "Passwords do not match",
              },
            }
          )}
          <button type="button" className="btn_eyeimg" onClick={CpswShowHide}>
            <Image className="psw_hide" src={!Chide ? eyeson : eyesoff} alt="icons" />
          </button>
        </div>
      </div>
      <div className="btn_login">
        <button type="submit" className="btn_animated btn_block primary_btn width_full">
          {isLoaded ? (
            <ThreeDots
              height="25"
              width="80"
              radius="9"
              color="#fff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{ display: "block" }}
              visible={true}
            />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default ResetPasswordForm;