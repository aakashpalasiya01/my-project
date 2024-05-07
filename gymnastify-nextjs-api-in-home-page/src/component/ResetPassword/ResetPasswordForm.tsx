/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import SimpleReactValidator from "simple-react-validator";
import React, { useEffect, useRef, useState } from "react";
import { resetPasswordAction } from "@/store/actions/authAction";
import * as authReducer from "../../store/reducers/authReducer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ThreeDots } from "react-loader-spinner";
import { RootState } from "@/store/store";
import { useRouter, useSearchParams } from "next/navigation";

const ResetPasswordForm = () => {
  const defaultOptions: any = {
    email: "",
    new_password: "",
    valid_token: "",
    confirm_password: "",
  };

  const [form, setForm] = useState(defaultOptions);
  const simpleValidator = useRef(new SimpleReactValidator());
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
        await resetPasswordAction(FromatDataReset);
        dispatch(authReducer.setLoader(false));
      } else {
        simpleValidator.current.showMessages();
        forceUpdate(1);
      }
  };
  return (
    <form onSubmit={submithandler}>
      <div className="mb-3">
        <label className="ele_lable">Email Address</label>
        <input
          type="email"
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
        <label className="ele_lable">New password</label>
        <input
          className="form-control ele_input"
          type="text"
          id="new_password"
          placeholder="Enter new password"
          name="new_password"
          onChange={handleChange}
          value={form.password}
          onBlur={() => {
            simpleValidator.current.showMessageFor("new_password");
          }}
        />
        {simpleValidator.current.message(
          "new_password",
          form.new_password,
          "required|min:6"
        )}
      </div>
      <div className="mb-3">
        <label className="ele_lable">Confirm password</label>
        <input
          className="form-control ele_input"
          type="text"
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
      </div>
      <div className="btn_login">
        <button type="submit" className="btn_block primary_btn width_full">
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