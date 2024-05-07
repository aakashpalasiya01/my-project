'use client';
import Loginslider from "@/component/Login/LoginSlider/Loginslider";
import Link from "next/link";
import { ROUTES_PATH } from "@/utils/constant";

const AccountInfo = ({ prevStep }: any) => {


  //onsubmit
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
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
                <label htmlFor="email" className="ele_lable">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control ele_input"
                  placeholder="rabecavasin@gmail.com"
                />
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
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 kids_cols">
                  <div className="mb-3">
                    <label htmlFor="confirm_password" className="ele_lable">Confirm Password</label>
                    <div className="psw_btn position-relative">
                      <input
                        type="text"
                        name="confirm_password"
                        id="confirm_password"
                        className="form-control ele_input"
                        placeholder="*******"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="btn_login">
                <button type="submit" className="btn_block primary_btn width_full">
                  Register
                </button>
                <p>Already have an account <Link href={ROUTES_PATH.LOGIN}>Login</Link></p>
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
