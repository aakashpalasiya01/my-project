'use client';
import Loginslider from "@/component/Login/LoginSlider/Loginslider";
import { useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import { registerAction } from "@/store/actions/authAction";
import Link from "next/link";
import { PUBLIC_PATH, ROUTES_PATH } from "@/utils/constant";
import { ThreeDots } from "react-loader-spinner";
import { useRouter } from "next/navigation";
import { forError, forSuccess } from "@/utils/CommonService";
import Image from "next/image";
import eyesoff from "@/assets/images/icons/eyeoff_icn.svg";
import eyeson from "@/assets/images/icons/eyeon_icn.svg";
import { AccInfoPropsType, GuardiansInfoType, RegActionResType } from "./Registertype"

const AccountInfo = ({ form, handleChange }: AccInfoPropsType) => {
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
  const router = useRouter();

  const [, forceUpdate] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hide, setHide] = useState<boolean>(true);
  const [Chide, setCHide] = useState<boolean>(true);

  const pswShowHide = () => {
    setHide(!hide);
  }

  const CpswShowHide = () => {
    setCHide(!Chide);
  }

  //onsubmit
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoaded(true);
    if (simpleValidator.current.allValid()) {
      const formData = new FormData();
      for (const property in form) {
        if (!["guardians_info"].includes(property)) {
          if (form[property]) formData.append(property, form[property]);
        }
      }
      form.guardians_info.forEach((item: GuardiansInfoType, inx: number) => {
        for (const property in item) {
          if (item[property]) formData.append(`guardians_info[${inx}][${property}]`, item[property]);
        }
      });

      await registerAction(formData).then((res: RegActionResType) => {
        if (res.data.data.profileData) {
          forSuccess(res.data.data.message);
          router.push(PUBLIC_PATH.THANKYOU);
        } else {
          const msg = res?.data?.data?.message ? res?.data?.data?.message : "Somthing went wrong!";
          forError(msg);
        }
        setIsLoaded(false);
      })
      setIsLoaded(false);
    }
    else {
      simpleValidator.current.showMessages();
      forceUpdate(1);
      setIsLoaded(false);
    }
  }

  const getPasswordValidationMessage = () => {
    let messages = [];


    if (!form.password) {
      messages.push(simpleValidator.current.message('password', form.password, 'required'));
    } else if (form.password.length < 6) {
      messages.push(simpleValidator.current.message('password', form.password, 'min:6'));
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(form.password)) {
      messages.push(simpleValidator.current.message('password', form.password, 'passwordComplexity'))
    } else {
      messages.push(simpleValidator.current.message('password', form.password, 'max:15'));
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
                  onChange={handleChange}
                  value={form.email}
                  placeholder="rabecavasin@gmail.com"
                  onBlur={() => simpleValidator.current.showMessageFor('email')}
                />
                <div>
                  {simpleValidator.current.message('email', form.email, 'required|email')}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="ele_lable">Password</label>
                <div className="psw_btn position-relative">
                  <input
                    type={hide ? "password" : "text"}
                    name="password"
                    id="password"
                    className="form-control ele_input"
                    onChange={handleChange}
                    value={form.password}
                    placeholder="*******"
                    onBlur={() => { simpleValidator.current.showMessageFor('password') }}
                  />
                  <div>
                    {getPasswordValidationMessage()}
                  </div>
                  <button type="button" className="btn_eyeimg" onClick={pswShowHide}>
                    <Image className="psw_hide" src={!hide ? eyeson : eyesoff} alt="icons" />
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="confirm_password" className="ele_lable">Confirm Password</label>
                <div className="psw_btn position-relative">
                  <input
                    type={Chide ? "password" : "text"}
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
                      `required|in:${form.password}`,
                      { messages: { required: "Confirm Password is required", in: "Passwords do not match" } }
                    )}
                  </div>
                  <button type="button" className="btn_eyeimg" onClick={CpswShowHide}>
                    <Image className="psw_hide" src={!Chide ? eyeson : eyesoff} alt="icons" />
                  </button>
                </div>
              </div>

              <div className="btn_login">
                <button type="submit" className="btn_animated btn_block primary_btn width_full">
                  {isLoaded ?
                    <ThreeDots
                      height="25"
                      width="80"
                      radius="9"
                      color="#fff"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{ display: "block" }}
                      visible={true}
                    /> : "Register"}
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
