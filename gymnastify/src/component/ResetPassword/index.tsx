'use client';
import Loginslider from "@/component/Login/LoginSlider/Loginslider";
import Link from "next/link";
import { ROUTES_PATH } from "@/utils/constant";
import eyesoff from "@/assets/images/icons/eyeoff_icn.svg";
import Image from "next/image";

const ResetPasswordComponent = () => {
  return (
    <div className="login_area">
      <section className="login_block">
        <div className="login_group position-relative">
          <div className="login_frm">
            <div className="logo_title">
              <Link href={ROUTES_PATH.GUEST}>Gymnastify</Link>
            </div>
            <h4>Reset password</h4>
            <form >
      <div className="mb-3">
        <label htmlFor="email" className="ele_lable">Email Address</label>
        <input
          type="email"
          readOnly
          className="form-control ele_input"
          placeholder="Email Address"
          name="email"
          id="email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="new_password" className="ele_lable">New password</label>
        <div className="psw_btn position-relative">
          <input
            className="form-control ele_input"
            type={"password" }
            id="new_password"
            placeholder="Enter new password"
            name="new_password"
          />
          <button type="button" className="btn_eyeimg" >
            <Image className="psw_hide" src={ eyesoff} alt="icons" />
          </button>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="confirm_password" className="ele_lable">Confirm password</label>
        <div className="psw_btn position-relative">
          <input
            className="form-control ele_input"
            type={"password" }
            id="confirm_password"
            placeholder="Confirm password"
            name="confirm_password"
          />
          <button type="button" className="btn_eyeimg" >
            <Image className="psw_hide" src={eyesoff} alt="icons" />
          </button>
        </div>
      </div>
      <div className="btn_login">
        <button type="submit" className="btn_animated btn_block primary_btn width_full">
            Submit
        </button>
      </div>
    </form>
          </div>
          <div className="login_ftr">
            <p>
              <span>By continuing, you agree to Gymnastify </span>
              <Link href={ROUTES_PATH.TERMSANDCONDITIONS} style={{ textDecoration: 'none', color: 'black' }}>Terms of Service</Link>
              <span> and </span>
              <Link href={ROUTES_PATH.PRIVACYPOLICY} style={{ textDecoration: 'none', color: 'black' }}>Privacy Policy</Link>.
            </p>
          </div>
        </div>
        <Loginslider />
      </section>
    </div>
  );
};
export default ResetPasswordComponent;

