/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import Loginslider from "../Login/LoginSlider/Loginslider";
import Link from "next/link";
import { ROUTES_PATH } from "@/utils/constant";
import { useAppDispatch } from "@/mystore/hooks";
import { groupOption } from "@/mystore/actions/authAction";

const KidInfo = ({ nextStep }: any) => {
  const [groupOptions, setGroupOPtions] = useState();
  const dispatch = useAppDispatch();

  let GroupOptionsData = async () => {
    let res = await dispatch(groupOption());
    setGroupOPtions(res);
  };

  useEffect(() => {
    GroupOptionsData();
  }, []);
  const defaultForm = {
    first_name: "",
    last_name: "",
    age: "",
    group: "",
    levels: "",
    branch: "",
  };
  const [kidData, setKidData] = useState(defaultForm);

  const simpleValidator = useRef<SimpleReactValidator>(
    new SimpleReactValidator()
  );

  const [, forceUpdate] = useState<number>(0);

  const handleChange =(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setKidData({ ...kidData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (simpleValidator.current.allValid()) {
      const kidFormData = {
        kidInfo: kidData,
      };
      nextStep(kidFormData);
    } else {
      simpleValidator.current.showMessages();
      forceUpdate(1);
    }
  };

  return (
    <div className="login_area register_page">
      <section className="login_block">
        <div className="login_group position-relative">
          <div className="login_frm">
            <div className="logo_title">
              <Link href="">Gymnastify</Link>
            </div>
            <h4>Register Now</h4>
            <div className="Kid_info">
              <Link href="">Kid Info</Link>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row kids_row">
                <div className="col-lg-6 kids_cols">
                  <div className="mb-3">
                    <label htmlFor="first_name" className="ele_lable">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control ele_input"
                      name="first_name"
                      id="first_name"
                      placeholder="First Name"
                      value={kidData.first_name}
                      onChange={handleChange}
                      onBlur={() =>
                        simpleValidator?.current.showMessageFor("first_name")
                      }
                    />
                    {simpleValidator?.current?.message(
                      "first_name",
                      kidData?.first_name,
                      "required"
                    )}
                  </div>
                </div>
                <div className="col-lg-6 kids_cols">
                  <div className="mb-3">
                    <label htmlFor="last_name" className="ele_lable">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      className="form-control ele_input"
                      placeholder="Last Name"
                      value={kidData?.last_name}
                      onChange={handleChange}
                      onBlur={() =>
                        simpleValidator?.current?.showMessageFor("last_name")
                      }
                    />
                    {simpleValidator?.current.message(
                      "last_name",
                      kidData?.last_name,
                      "required"
                    )}
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="ele_lable">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  className="form-control ele_input"
                  placeholder="Age"
                  value={kidData?.age}
                  onChange={handleChange}
                  onBlur={() => simpleValidator?.current?.showMessageFor("age")}
                />
                {simpleValidator?.current?.message(
                  "age",
                  kidData?.age,
                  "required"
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="group" className="ele_lable">
                  Group
                </label>
                <select
                  className="ele_input form-control ele_select"
                  name="group"
                  id="group"
                  value={kidData?.group}
                  onChange={handleChange}
                  onBlur={() => simpleValidator?.current?.showMessageFor("group")}
                >
                  {groupOptions?.map((dataOption: any) => (
                    <option key={dataOption?.id} value={dataOption?.id}>
                      {dataOption?.name}
                    </option>
                  ))}
                </select>
                  {simpleValidator?.current?.message(
                    "group",
                    kidData?.group,
                    "required"
                  )}
              </div>
              <div className="mb-3">
                <label htmlFor="levels" className="ele_lable">
                  Levels
                </label>
                <select
                  className="ele_input form-control ele_select"
                  name="levels"
                  id="levels"
                  value={kidData?.levels}
                  onChange={handleChange}
                  onBlur={() =>
                    simpleValidator?.current?.showMessageFor("levels")
                  }
                >
                  {groupOptions?.find((groupOption) => groupOption?.id ===parseInt(kidData?.group))
                   
                    ?.skills?.map((skill) => (
                      <option key={skill?.id} value={skill?.slug}>
                        {skill?.name}
                      </option>
                    ))}
                </select>
                  {simpleValidator?.current?.message(
                    "levels",
                    kidData?.levels,
                    "required"
                  )}
              </div>
              <div className="mb-3">
                <label htmlFor="branch" className="ele_lable">
                  Branch
                </label>
                <select
                  className="ele_input form-control ele_select"
                  name="branch"
                  id="branch"
                  value={kidData?.branch}
                  onChange={handleChange}
                  onBlur={() =>
                    simpleValidator?.current?.showMessageFor("branch")
                  }
                >
                  <option value="">Please select</option>
                  <option value="4s Ranch">4s Ranch</option>
                  <option value="La Costa">La Costa</option>
                
                </select>
                {simpleValidator.current.message(
                    "branch",
                    kidData?.branch,
                    "required"
                  )}
              </div>
              <div className="btn_login">
                <button
                  type="submit"
                  className="btn_block primary_btn width_full"
                >
                  Continue
                </button>
                <p>
                  Already have an account ?{" "}
                  <Link href={ROUTES_PATH.LOGIN}>Login</Link>
                </p>
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

export default KidInfo;
