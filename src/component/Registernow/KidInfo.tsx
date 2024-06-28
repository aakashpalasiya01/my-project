/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, {useEffect, useRef, useState} from "react"
import SimpleReactValidator from "simple-react-validator"
import Loginslider from "../Login/LoginSlider/Loginslider"
import Link from "next/link"
import {useAppDispatch, useAppSelector} from "@/store/hooks"
import {BranchNameRegisterForm, registerGroup} from "@/store/actions/authAction"
import {RootState} from "@/store/store"
import {exploreSkillHome} from "@/store/actions/homeAction"
import * as homeReducer from "@/store/reducers/homeReducer"
import * as authReducer from "@/store/reducers/authReducer"
import {ROUTES_PATH} from "@/utils/constant"
import {RgtstrGrpResInterface, KidInfoPropsType} from "./Registertype"
import {ExploreSkillResType, SkillsType} from "@/types/HomeType"
import CameraComponent from "./CameraCapture"
import {BranchLevels, BranchResponse} from "@/types/authType"

const KidInfo = ({form, handleChange, nextStep, setForm}: KidInfoPropsType) => {
  const simpleValidator = useRef<SimpleReactValidator>(
    new SimpleReactValidator({
      messages: {
        alpha: "The :attribute field should only contain letters.",
        regex: "The age field cannot start with a zero."
      }
    })
  )
  const {Group} = useAppSelector((state: RootState) => state.auth)
  const {BranchName} = useAppSelector((state: RootState) => state.home)
  const dispatch = useAppDispatch()
  const [, forceUpdate] = useState<number>(0)

  useEffect(() => {
    const FetchData = async () => {
      await registerGroup().then((res: RgtstrGrpResInterface) => {
        dispatch(authReducer.setRegisterGroup(res.data))
      })
      await exploreSkillHome().then((res: ExploreSkillResType) => {
        dispatch(homeReducer.setTaxonomy(res.data))
      })
      await BranchNameRegisterForm().then((res: BranchResponse) => {
        if (res?.data?.success) {
          dispatch(homeReducer.setBranchName(res.data?.data || []))
        }
      })
    }
    FetchData()
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (simpleValidator.current.allValid()) {
      nextStep()
    } else {
      simpleValidator.current.showMessages()
      forceUpdate(1)
    }
  }

  return (
    <div className="login_area register_page">
      <section className="login_block">
        <div className="login_group position-relative">
          <div className="login_frm">
            <div className="logo_title">
              <Link href={ROUTES_PATH.GUEST}>Gymnastify</Link>
            </div>
            <h4>Register Now</h4>
            <div className="Kid_info">
              <Link href="">Kid Info</Link>
            </div>
            {/* <div className="register_profile">
              <div className="register_profile_block">
                <div className="login_useIcn">
                  <Image src={imageUrl ? imageUrl : loginUserIcn} alt="icons" width={65} height={65}></Image>
                </div>
                <button
                  className="btn_animated btn_blockmd primary_btn register_upload" onClick={handleChangeOpenFile}>
                  Upload Photo
                </button>
                <input className="register_upload_input" id="user_profile_photo" ref={fileInputRef} type="file" name="user_profile_photo" onChange={handleChangeprofilephoto} />
              </div>
              <div className="cameraicn">
                <button className="camera_click"><Image src={cameraicn} alt="camera"></Image></button>
              </div>
            </div> */}
            <CameraComponent form={form} setForm={setForm} />
            <form onSubmit={handleSubmit}>
              <div className="row kids_row">
                <div className="col-lg-6 kids_cols">
                  {/* <input id="user_profile_photo" className="user_profile_photo" type="file" name="user_profile_photo" onChange={handleChangeprofilephoto}/> */}
                  <div className="mb-3">
                    <label htmlFor="first_name" className="ele_lable">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control ele_input"
                      name="first_name"
                      id="first_name"
                      value={form.first_name}
                      onChange={handleChange}
                      placeholder="First Name"
                      onBlur={() => {
                        simpleValidator.current.showMessageFor("first_name")
                      }}
                    />
                    <div>
                      {simpleValidator.current.message(
                        "first_name",
                        form.first_name,
                        "required|alpha"
                      )}
                    </div>
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
                      value={form.last_name}
                      onChange={handleChange}
                      className="form-control ele_input"
                      placeholder="Last Name"
                      onBlur={() => {
                        simpleValidator.current.showMessageFor("last_name")
                      }}
                    />
                    <div>
                      {simpleValidator.current.message(
                        "last_name",
                        form.last_name,
                        "required|alpha"
                      )}
                    </div>
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
                  className="form-control ele_input inputno_remove"
                  onChange={handleChange}
                  onKeyDown={(event) => {
                    if (
                      event.key === "e" ||
                      event.key === "+" ||
                      event.key === "-" ||
                      event.key === "E" || 
                      event.key === "ArrowUp" ||
                      event.key === "ArrowDown"
                    ) {
                      event.preventDefault()
                    }
                  }}
                  value={form.age}
                  placeholder="Age"
                  onBlur={() => {
                    simpleValidator.current.showMessageFor("age")
                  }}
                />
                <div>
                  {simpleValidator.current.message(
                    "age",
                    form.age,
                    "required|numeric|max:2|regex:^[1-9][0-9]*$",
                    {
                      className: "srv-validation-message",
                    }
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="group" className="ele_lable">
                  Group
                </label>
                <select
                  className="ele_input form-control ele_select"
                  name="group"
                  id="group"
                  value={form.group}
                  onChange={(e) => {
                    handleChange(e)
                  }}
                  onBlur={() => simpleValidator.current.showMessageFor("group")}
                >
                  <option value="">Please select</option>
                  {Group.map((item: SkillsType) => (
                    <option
                      key={item?.slug}
                      value={item?.slug ? item?.slug : "-"}
                    >
                      {item?.name ? item?.name : "-"}
                    </option>
                  ))}
                </select>
                <div>
                  {simpleValidator.current.message(
                    "group",
                    form.group,
                    "required"
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="levels" className="ele_lable">
                  Levels
                </label>
                <select
                  className="ele_input form-control ele_select"
                  name="levels"
                  id="levels"
                  value={form.levels}
                  onChange={handleChange}
                  onBlur={() => {
                    simpleValidator.current.showMessageFor("levels")
                  }}
                >
                  <option value="">Please select</option>
                  {Group.find(
                    (singleGrp: SkillsType) => singleGrp?.slug === form?.group
                  )?.skills.map((item: SkillsType) => (
                    <option
                      key={item?.slug}
                      value={item?.slug ? item?.slug : "-"}
                    >
                      {item?.name ? item?.name : "-"}
                    </option>
                  ))}
                </select>
                <div>
                  {simpleValidator.current.message(
                    "levels",
                    form.levels,
                    "required"
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="branch" className="ele_lable">
                  Branch
                </label>
                <select
                  className="ele_input form-control ele_select"
                  name="branch"
                  id="branch"
                  value={form.branch}
                  onChange={handleChange}
                  onBlur={() => {
                    simpleValidator.current.showMessageFor("branch")
                  }}
                >
                  <option value="">Please select</option>
                  {BranchName?.map((item: BranchLevels) => (
                    <option
                      key={item?.branch_name}
                      value={item?.branch_name ? item?.branch_name : "-"}
                    >
                      {item?.branch_name ? item?.branch_name : "-"}
                    </option>
                  ))}
                </select>
                <div>
                  {simpleValidator.current.message(
                    "branch",
                    form.branch,
                    "required"
                  )}
                </div>
              </div>
              {/* <div className="regist_gallery">
                <div className="mb-3">
                  <label className="ele_lable">Photo</label>
                  <div className="drag_area">
                    <div className="drag_ele">
                      <label className="drop_filed" htmlFor="gallery">
                        Drag &amp; Drop File
                      </label>
                      <p>Maximum 10</p>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="ele_lable">Media uploaded</label>
                  <div className="media_wrap">
                    <div className="media_imgup">
                      <Image
                        className="media_img"
                        src={levels2}
                        alt="media"
                        width={100}
                        height={100}
                      ></Image>
                      <button className="closed_circle">
                        <Image src={closeCircle} alt="media"></Image>
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="btn_login">
                <button
                  type="submit"
                  className="btn_animated btn_block primary_btn width_full"
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
              <span>By continuing, you agree to Gymnastify </span>
              <Link
                href={ROUTES_PATH.TERMSANDCONDITIONS}
                style={{textDecoration: "none", color: "black"}}
              >
                Terms of Service
              </Link>
              <span> and </span>
              <Link
                href={ROUTES_PATH.PRIVACYPOLICY}
                style={{textDecoration: "none", color: "black"}}
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
        <Loginslider />
      </section>
    </div>
  )
}

export default KidInfo
