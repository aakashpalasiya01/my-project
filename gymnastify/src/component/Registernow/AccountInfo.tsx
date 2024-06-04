'use client';
import Loginslider from "@/component/Login/LoginSlider/Loginslider";
import Link from "next/link";
import {  ROUTES_PATH } from "@/utils/constant";
import Image from "next/image";
import eyesoff from "@/assets/images/icons/eyeoff_icn.svg";
import { AccountInfoProps, RegisterDataType } from "./Registertype";
import { useRef, useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { useRouter } from "next/navigation";
import SimpleReactValidator from "simple-react-validator";
import { registerData } from "@/store/actions/authAction";
import { ThreeDots } from "react-loader-spinner";
import { forError } from "@/utils/CommonService";

const AccountInfo: React.FC<AccountInfoProps> = ({ handleChange, form }) => {
  const [loading, setloading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();


  const simpleValidator = useRef(new SimpleReactValidator({}));
  const [, forceUpdate] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleChange({ [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setloading(true);
    if (simpleValidator.current.allValid()) {
      try {
        const finalData = new FormData();

        for (const key in form) {
          if (form.hasOwnProperty(key)) {
            const value = form[key as keyof RegisterDataType];
            finalData.append(key, value.toString());
          }
        }
      console.log(form)
      debugger
        const res = await dispatch(registerData(finalData));
        router.push(ROUTES_PATH.THANKYOU)
      } catch (error) {
        console.error(error);
        forError("User Registration failed");
      } finally{
        setloading(false);
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
        <div className="login_frm">
          <div className="logo_title">
            <Link href={ROUTES_PATH.GUEST}>Gymnastify</Link>
          </div>
            <h4>Register Now</h4>
            <div className="Kid_info">
              <Link href="">Account Info</Link>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="ele_lable">Email</label>
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
                <div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="ele_lable">Password</label>
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
                  <div>
                  </div>
                  <button type="button" className="btn_eyeimg" >
                    <Image className="psw_hide" src={eyesoff} alt="icons" />
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="confirm_password" className="ele_lable">Confirm Password</label>
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
                  <div>
                  </div>
                  <button type="button" className="btn_eyeimg" >
                    <Image className="psw_hide" src={eyesoff} alt="icons" />
                  </button>
                </div>
              </div>

              <div className="btn_login">
                <button type="submit" className="btn_animated btn_block primary_btn width_full">
                {loading ? (
                      <ThreeDots
                      height="20"
                      width="80"
                      radius="9"
                      color="#fff"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{ display: "block" }}
                      visible={true}
                      />
                    ) : (
                      "Register"
                    )}
                  
                </button>
                <p>Already have an account <Link href={ROUTES_PATH.LOGIN}>Login</Link></p>
              </div>
            </form>
          </div>
          <div className="login_ftr">
          <p>
              <span>By continuing, you agree to Gymnastify </span>
              <Link href={ROUTES_PATH.TERMSANDCONDITIONS} style={{textDecoration: 'none',color:'black'}}>Terms of Service</Link>
              <span> and </span>
              <Link href={ROUTES_PATH.PRIVACYPOLICY} style={{textDecoration: 'none',color:'black'}}>Privacy Policy</Link>.
            </p>
          </div>
        </div>
        <Loginslider />
      </section>
    </div>
  );
};
export default AccountInfo;
