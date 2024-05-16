"use client";
import Loginslider from "@/component/Login/LoginSlider/Loginslider";
import Link from "next/link";
import { ROUTES_PATH } from "@/utils/constant";
import { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { forError, forSuccess } from "@/utils/CommonService";
import { useAppDispatch } from "@/mystore/hooks";
import { registerData } from "@/mystore/actions/registerAction";

const AccountInfo = ({ prevStep, formData }: any) => {
  const dispatch = useAppDispatch();
  console.log(formData);
  const defaultForm = {
    email: "",
    password: "",
    confirm_password: "",
  };
  const [accountData, setAccountData] = useState(defaultForm);
  const simpleValidator = useRef(new SimpleReactValidator({}));
  const [, forceUpdate] = useState<number>(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountData({
      ...accountData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (simpleValidator.current.allValid()) {
      const finalData = new FormData();

      try {
        formData?.guardiansInfo?.guardians_info?.forEach((guardian, index) => {
          finalData.append(
            `guardians_info[${index}][first_name]`,
            guardian.first_name
          );
          finalData.append(
            `guardians_info[${index}][last_name]`,
            guardian.last_name
          );
          finalData.append(
            `guardians_info[${index}][relation_with_kids]`,
            guardian.relation_with_kids
          );
          finalData.append(`guardians_info[${index}][mobile]`, guardian.mobile);
          finalData.append(
            `guardians_info[${index}][is_default]`,
            guardian.is_default
          );
        });

        Object?.entries(formData?.kidInfo)?.forEach(([key, value]) => {
          finalData?.append(key, value);
        });

        Object?.entries(accountData)?.forEach(([key, value]) => {
          finalData?.append(key, value);
        });

        let res = await dispatch(registerData(finalData));
        console.log(res);
        forSuccess(res?.data?.message);
      } catch (error) {
        console.log(error);
        forError("User Registered failed");
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
                  onChange={handleChange}
                  onBlur={() => simpleValidator.current.showMessageFor("email")}
                />
                {simpleValidator.current.message(
                  "email",
                  accountData.email,
                  "required"
                )}
              </div>
              <div className="row kids_row">
                <div className="col-lg-6 kids_cols">
                  <div className="mb-3">
                    <label className="ele_lable">Password</label>
                    <div className="psw_btn position-relative">
                      <input
                        type="text"
                        name="password"
                        id="password"
                        className="form-control ele_input"
                        placeholder="*******"
                        onChange={handleChange}
                        onBlur={() =>
                          simpleValidator.current.showMessageFor("password")
                        }
                      />
                      {simpleValidator.current.message(
                        "password",
                        accountData.password,
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
                        type="text"
                        name="confirm_password"
                        id="confirm_password"
                        className="form-control ele_input"
                        placeholder="*******"
                        onChange={handleChange}
                        onBlur={() =>
                          simpleValidator.current.showMessageFor(
                            "confirm_password"
                          )
                        }
                      />

                      {simpleValidator.current.message(
                        "confirm_password",
                        accountData.confirm_password,
                        `required|in:${accountData.password}`,
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
