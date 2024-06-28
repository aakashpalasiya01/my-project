"use server";
import Loginslider from "@/component/Login/LoginSlider/Loginslider";
import LoginForm from "./LoginForm";
import Link from "next/link";
import { loginAction } from "@/store/actions/authAction";
import { ROUTES_PATH } from "@/utils/constant";

const Login = async () => {
  return (
    <main>
      <div className="login_area">
        <section className="login_block">
          <div className="login_group position-relative">
            <div className="login_frm">
              <div className="logo_title">
                <Link href={ROUTES_PATH.GUEST}>Gymnastify</Link>
                <h3>Welcome Back!</h3>
              </div>
              <h4>Login</h4>
              <LoginForm loginAction={loginAction} />
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
    </main>
  );
};

export default Login;
