"use client";
import Loginslider from "@/component/Login/LoginSlider/Loginslider";
import Link from "next/link";
import { ROUTES_PATH } from "@/utils/constant";
import React, { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { forError, forSuccess } from "@/utils/CommonService";
import { useAppDispatch } from "@/mystore/hooks";
import { registerData } from "@/mystore/actions/authAction";
import { AccountInfoProps } from "./Registertype";

const AccountInfo: React.FC<AccountInfoProps> = ({ handleChange, form }) => {
  const dispatch = useAppDispatch();

  const simpleValidator = useRef(new SimpleReactValidator({}));
  const [, forceUpdate] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleChange({ [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (simpleValidator.current.allValid()) {
      try {
        const finalData = new FormData();

        // Assuming form is an object with the necessary fields
        for (const key in form) {
          if (form.hasOwnProperty(key)) {
            finalData.append(key, form[key]);
          }
        }

        // Assuming you have a function dispatch and an action creator registerData
        const res = await dispatch(registerData(finalData));
        console.log(res);
        forSuccess(res?.data?.message);

        // Reset the form state if needed
        // setForm(defaultForm);
      } catch (error) {
        console.error(error);
        forError("User Registration failed");
      }
    } else {
      simpleValidator.current.showMessages();
      forceUpdate(1);
    }
  };

  return (
    <div className="login_area">
      <section className="login_block">
        <div className="login_group position-relative">
          <div className="logo_title">
            <Link href="">Gymnastify</Link>
          </div>
          <div className="login_frm">
            <h4>Register Now</h4>
            <div className="Kid_info">
              <Link href="">Account Info</Link>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="ele_lable">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control ele_input"
                  placeholder="rabecavasin@gmail.com"
                  value={form.email}
                  onChange={handleInputChange}
                  onBlur={() => simpleValidator.current.showMessageFor("email")}
                />
                {simpleValidator.current.message(
                  "email",
                  form.email,
                  "required|email"
                )}
              </div>
              <div className="row kids_row">
                <div className="col-lg-6 kids_cols">
                  <div className="mb-3">
                    <label className="ele_lable">Password</label>
                    <div className="psw_btn position-relative">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control ele_input"
                        placeholder="*******"
                        value={form.password}
                        onChange={handleInputChange}
                        onBlur={() =>
                          simpleValidator.current.showMessageFor("password")
                        }
                      />
                      {simpleValidator.current.message(
                        "password",
                        form.password,
                        "required|min:6"
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 kids_cols">
                  <div className="mb-3">
                    <label htmlFor="confirm_password" className="ele_lable">
                      Confirm Password
                    </label>
                    <div className="psw_btn position-relative">
                      <input
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        className="form-control ele_input"
                        placeholder="*******"
                        value={form.confirm_password}
                        onChange={handleInputChange}
                        onBlur={() =>
                          simpleValidator.current.showMessageFor(
                            "confirm_password"
                          )
                        }
                      />

                      {simpleValidator.current.message(
                        "confirm_password",
                        form?.confirm_password,
                        `required|in:${form.password}`,
                        { messages: { in: "Passwords need to match!" } }
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="btn_login">
                <button
                  type="submit"
                  className="btn_block primary_btn width_full"
                >
                  Register
                </button>
                <p>
                  Already have an account{" "}
                  <Link href={ROUTES_PATH.LOGIN}>Login</Link>
                </p>
              </div>
            </form>
          </div>
          <div className="login_ftr">
            <p>
              <span>By continuing, you agree to Gymnastify </span> Terms of
              Service <span>And</span> Privacy Policy.
            </p>
          </div>
        </div>
        <Loginslider />
      </section>
    </div>
  );
};
export default AccountInfo;
