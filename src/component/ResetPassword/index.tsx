'use client';
import Loginslider from "@/component/Login/LoginSlider/Loginslider";
import Link from "next/link";
import ResetPasswordForm from "./ResetPasswordForm";
import { ROUTES_PATH } from "@/utils/constant";

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
            <ResetPasswordForm />
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

