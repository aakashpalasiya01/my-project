"use client";
import React, { useRef, useState } from "react";
import eyesoff from "@/assets/images/icons/eyeoff_icn.svg";
import eyeson from "@/assets/images/icons/eyeon_icn.svg";
import Image from "next/image";
import type { LoginForms, LoginRes } from "@/types/authType";
import * as authReducer from "@/store/reducers/authReducer";
import SimpleReactValidator from "simple-react-validator";
import { useDispatch } from "react-redux";
import { ROUTES_PATH } from "@/utils/constant";
import { ThreeDots } from "react-loader-spinner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoginApiResponse, LoginFormProps } from "./LoginType";

const LoginForm = ({ loginAction }: LoginFormProps) => {

  const defaultForm = {
    username: "",
    password: "",
  }

  const simpleValidator = useRef(new SimpleReactValidator());
  const dispatch = useDispatch();
  const router = useRouter();

  const [form, setForm] = useState<LoginForms>(defaultForm);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(true);
  const [, forceUpdate] = useState<number>(0);

  const pswShowHide = () => {
    setHide(!hide);
  }

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [target.name]: target.value });
  };
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (simpleValidator.current.allValid()) {
      const formData = new FormData();
      formData.append('username', form.username);
      formData.append('password', form.password);
      setIsLoaded(true);
      dispatch(loginAction(formData)).then((response: LoginApiResponse) => {
        if (response.data.token) {
          dispatch(authReducer.login(response.data as LoginRes));
          router.push(ROUTES_PATH.HOME);
        }
        setIsLoaded(false);
      }).catch(() => {
        setIsLoaded(false);
      })
    } else {
      simpleValidator.current.showMessages();
      setIsLoaded(false);
      forceUpdate(1);
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="ele_lable">Email</label>
        <input
          type="email"
          name="username"
          id="username"
          onChange={handleChange}
          value={form.username}
          className="form-control ele_input"
          placeholder="johnsnow@gmail.com"
          onBlur={() => simpleValidator.current.showMessageFor("username")}
        />
        <div>
          {simpleValidator.current.message(
            "email",
            form.username,
            "required|email"
          )}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="ele_lable">Password</label>
        <div className="psw_btn position-relative">
          <input
            type={hide ? "password" : "text"}
            name="password"
            id="password"
            onChange={handleChange}
            value={form.password}
            className="form-control ele_input"
            placeholder="********"
            autoComplete="on"
            onBlur={() =>
              simpleValidator.current.message(
                "password",
                form.password,
                "required"
              )
            }    
          />
          <div>
            {simpleValidator.current.message(
              "password",
              form.password,
              "required"
            )}
          </div>
          <button type="button" className="btn_eyeimg" onClick={pswShowHide}>
            <Image className="psw_hide" src={!hide ? eyeson : eyesoff} alt="icons" />
          </button>
        </div>
      </div>
      <div className="forgot_psw">
        <Link href={ROUTES_PATH.FORGOTPASSWORD}>Forgot password?</Link>
      </div>
      <div className="btn_login">
        <button type="submit" className="btn_animated btn_block primary_btn width_full">
          {isLoaded ? (
            <ThreeDots
              height="25"
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
  );
};

export default LoginForm;
