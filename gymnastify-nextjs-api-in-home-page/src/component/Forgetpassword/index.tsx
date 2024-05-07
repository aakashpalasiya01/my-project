
import Loginslider from "@/component/Login/LoginSlider/Loginslider";
import Link from "next/link";
import ForgotPasswordForm from "./forgotpasswordForm";
const Registernow = () => {
  return (
    <div className="login_area">
      <section className="login_block">
        <div className="login_group position-relative">
          <div className="login_frm">
          <div className="logo_title">
            <Link href="">Gymnastify</Link>
          </div>
            <h4>Reset password</h4>
            <ForgotPasswordForm />
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
export default Registernow;
