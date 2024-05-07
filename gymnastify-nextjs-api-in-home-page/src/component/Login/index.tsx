"use server";
import Loginslider from "@/component/Login/LoginSlider/Loginslider";
import Link from "next/link";
import eyeson from "@/assets/images/icons/eyeon_icn.svg";
import Image from "next/image";

const Login = async() => {
  return (
    <main>
      <div className="login_area">
        <section className="login_block">
          <div className="login_group position-relative">
            <div className="login_frm">
            <div className="logo_title">
              <Link href="">Gymnastify</Link>
              <h3>Welcome Back!</h3>
            </div>
              <h4>Login</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="ele_lable">Email</label>
                  <input
                    type="email"
                    name="username"
                    id="username"
                    className="form-control ele_input"
                    placeholder="johnsnow@gmail.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="ele_lable">Password</label>
                  <div className="psw_btn position-relative">
                    <input
                      type={"password"}
                      name="password"
                      id="password"
                      className="form-control ele_input"
                      placeholder="********"
                    />
                    <button type="button" className="btn_eyeimg">
                      <Image className="psw_hide" src={eyeson} alt="icons" />
                    </button>
                  </div>
                </div>
                <div className="forgot_psw">
                  <Link href={""}>Forgot password?</Link>
                </div>
                <div className="btn_login">
                  <button type="submit" className="btn_block primary_btn width_full">
                      Login
                  </button>
                  <p>
                    Don’t have an account ?{" "}
                    <Link href={""}>Register</Link>
                  </p>
                </div>
              </form>
            </div>
            <div className="login_ftr">
              <p>
                <span>By continuing, you agree to Gymnastify</span> Terms of
                Service <span>And</span> Privacy Policy.
              </p>
            </div>
          </div>
          <Loginslider/>
        </section>
      </div>
    </main>
  );
};

export default Login;
