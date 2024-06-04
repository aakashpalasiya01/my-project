"use client";
import Loginslider from "@/component/Login/LoginSlider/Loginslider";
import Link from "next/link";
import eyeson from "@/assets/images/icons/eyeon_icn.svg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { FormData } from "./LoginType";
import { loginAction } from "@/store/actions/authAction";
import { ThreeDots } from "react-loader-spinner";
import { ROUTES_PATH } from "@/utils/constant";

const Login = () => {
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const defaultForm = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState<FormData>(defaultForm);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setloading(true);
    try {
      let res = await dispatch(loginAction(formData));
    
      router.push(ROUTES_PATH.HOME)
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
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
              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label htmlFor="username" className="ele_lable">Email</label>
                  <input
                     type="email"
                     name="username"
                     id="username"
                     className="form-control ele_input"
                     placeholder="johnsnow@gmail.com"
                     value={formData.username}
                     onChange={handleInputChange}
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
                    value={formData.password}
                    onChange={handleInputChange}
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
                      "Login"
                    )}
                  </button>
                  <p>
                    Don’t have an account ?{" "}
                    <Link href={ROUTES_PATH.REGISTRATION}>Register</Link>
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
