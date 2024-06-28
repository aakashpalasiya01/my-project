/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import profile_img from "@/assets/images/icons/profile.png";
import KidInfo from "./KidInfo";
import GuardiansInfo from "./Guardians";
import AccountInfo from "./AccountInfo";
import SimpleReactValidator from "simple-react-validator";
import { ProfileForm, ProfileMultiplePhoto, userProfileGetData } from "@/store/actions/profileAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import * as profileReducer from "@/store/reducers/profileReducer";
import { ThreeDots } from "react-loader-spinner";
import Swal from "sweetalert2";
import { ResponseOneType, FetchUserProfType, GuardianInfoType, ProfileFormState, GuardianInfoInterface } from "./ProfileType";
import * as authReducer from "@/store/reducers/authReducer";
import { forError } from '@/utils/CommonService';
import UploadImageProfile from "./UploadImage/UploadImageProfile";

function Profile() {
  const { Gallery, isProfileImageLoaded, Profile } = useAppSelector((state: RootState) => state.profile);
  const { user } = useAppSelector((state: RootState) => state.auth);

  const dispatch = useAppDispatch();
  const userID: string | number | undefined = user?.user_id;

  const defaultValue: ProfileFormState = {
    first_name: user?.first_name ? user?.first_name : "",
    last_name: user?.last_name ? user?.last_name : "",
    age: user?.age ? user?.age : "",
    group: user?.group ? user?.group : "",
    branch: user?.branch ? user?.branch : "",
    user_profile_photo: null,
    levels: user?.levels ? user?.levels : "",
    guardians_info: [
      {
        id: "1",
        first_name: "",
        last_name: "",
        relation_with_kids: "",
        mobile: "",
        is_default: 1,
      },
      {
        id: "2",
        first_name: "",
        last_name: "",
        relation_with_kids: "",
        mobile: "",
        is_default: 0,
      },
    ],
    gallery: []
  };




  const simpleValidator = useRef<SimpleReactValidator>(new SimpleReactValidator({
    messages: {
      regex: "The age field cannot start with a zero."
    }
  }));
  const simpleValidatorOptional = useRef<SimpleReactValidator>(new SimpleReactValidator());

  const [form, setForm] = useState<ProfileFormState>(defaultValue);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isValidatorVisible, setIsValidatorVisible] = useState(true);

  const [, forceUpdate] = useState<number>(0);


  const [errors, setErrors] = useState({});

  const handleBlur = (field: string, index: number) => {
      if (simpleValidator.current.fieldValid(field) && simpleValidatorOptional.current.fieldValid(field)) {
        setErrors(prevErrors => ({ ...prevErrors, [field]: "" }));
      } else {
        setErrors(prevErrors => ({ ...prevErrors, [field]: simpleValidator.current.errorMessages[field] }));
      }
  }


  const opt_FN_Cond: boolean = form.guardians_info[1].first_name.length === 0;
  const opt_LN_Cond: boolean = form.guardians_info[1].last_name.length === 0;
  const opt_RWK_Cond: boolean = form.guardians_info[1].relation_with_kids.length === 0;
  const opt_MOBILE_Cond: boolean = form.guardians_info[1].mobile.length === 0;

  const isOptionalFieldsEmpty: boolean = opt_FN_Cond && opt_LN_Cond && opt_RWK_Cond && opt_MOBILE_Cond;

  useEffect(() => {
    if (user?.guardians_info !== undefined && user?.guardians_info.length > 1) {
      setForm({ ...form, guardians_info: user.guardians_info?.map((e: GuardianInfoInterface) => ({ ...e })) })
    } else if (user?.guardians_info.length === 1) {
      setForm({
        ...form, guardians_info: [...user.guardians_info, {
          id: "",
          first_name: "",
          last_name: "",
          relation_with_kids: "",
          mobile: "",
          is_default: 0,
        }]
      })
    }



    dispatch(profileReducer.setProfileImgLoader(true));
    userProfileGetData(userID).then((res: FetchUserProfType) => {
      try {
        if (res.success && res.data !== "No Gallery images") {
          setForm((prevItem: any) => ({ ...prevItem, gallery: Object.values(res.data.data) }));
        }
        dispatch(profileReducer.setProfileImgLoader(false));
      } catch (error: any) {
        console.log(error);
        dispatch(profileReducer.setProfileImgLoader(false));
      }
      finally {
        dispatch(profileReducer.setProfileImgLoader(false));
      }
    })
  }, []);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.name == "group") {
      setForm({ ...form, [target.name]: target.value, levels: "" })
    }
    else {
      setForm({ ...form, [target.name]: target.value });
    }
  };

  const submithandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (simpleValidator.current.allValid() && isValidatorVisible) {
      try {
        setIsLoaded(true);
        const formData = new FormData();
        for (const property in form) {
          if (!["guardians_info", "gallery"].includes(property)) {
            if (form[property]) formData.append(property, form[property]);
          }
        }
        form.guardians_info.forEach((item: GuardianInfoType, inx: number) => {
          for (const property in item) {
            if (item[property]) formData.append(`guardians_info[${inx}][${property}]`, item[property]);
          }
        });


        const formDataGallery = new FormData();
        if (typeof userID === 'string') {
          formDataGallery.append("user_id", userID);
        } else if (typeof userID === 'number') {
          const stringUserID = userID.toString();
          formDataGallery.append("user_id", stringUserID);
        } else {
          console.error("userID is undefined")
        }

        form.gallery.filter((e: any) => e.file).forEach((item: any) => {
          formDataGallery.append(`gallery[]`, item.file);
        });

        if (isOptionalFieldsEmpty) {
          formData.set('guardians_info[1][first_name]', "");
          formData.set('guardians_info[1][last_name]', "");
          formData.set('guardians_info[1][relation_with_kids]', "");
          formData.set('guardians_info[1][mobile]', "");
          formData.set('guardians_info[1][is_default]', "0")
        }
        dispatch(profileReducer.setLoader(true));
        const Response1: ResponseOneType = await ProfileForm(formData, userID);
        if (form.gallery.filter((e: any) => e.file).length) ProfileMultiplePhoto(formDataGallery)
        if (Response1?.success) {
          if (Response1?.success) {
            dispatch(authReducer.setProfileUpdate(Response1.data.data.profileData));
            dispatch(profileReducer.setProfileUpdate(Response1.data));
            Swal.fire({
              title: "Profile",
              text: "Profile Updated Successfully!",
              icon: "success"
            });
          }
        }
        setIsLoaded(false);
      } catch (error: any) {
        setIsLoaded(false);
        console.log(error.message);
      }
    } else {
      simpleValidator.current.showMessages();
      if (!isValidatorVisible) {
        simpleValidatorOptional.current.showMessages();
      }
      forceUpdate((prev: any) => prev + 1);
    }
  };

  const getProfileImg = (file: File | null, profileURL: string | null | undefined) => {
    if (file) return URL.createObjectURL(file);
    if (profileURL) return profileURL;
    return profile_img
  }

  const handleProfile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null && (event.target.files[0].type === "image/jpeg" || event.target.files[0].type === "image/png")) {
      if (event.target.files) setForm({ ...form, user_profile_photo: event.target.files[0] })
    } else {
      forError("This is an unsupported format please only use jpeg/png format")
    }
  }

  return (
    <main className="main_content">
      <section className="bred_eles">
        <div className="container">
          <Breadcrumb>
            <Breadcrumb.Item className="point_none" href="">Profile</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </section>
      <section className="pro_user">
        <form onSubmit={submithandler}>
          <div className="container">
            <div className="edit_changes">
              {/* <div className="edit_img">
                <Image src={getProfileImg(form.user_profile_photo, user?.user_profile_photo)} alt="icons" width={100} height={100} />
                <div className="edit_camera">
                  <input id="editProfile" type="file" onChange={handleProfile} />
                  <label htmlFor="editProfile">
                    <Image src={cameraicn} alt="icons" width={36} height={36} />
                  </label>
                </div>
              </div> */}

              <UploadImageProfile setForm={setForm} form={form} />

              <div className="edit_profile">
                Edit Profile
              </div>
            </div>
            <KidInfo
              form={form}
              handleChange={handleChange}
              simpleValidator={simpleValidator}
              setForm={setForm}
              Gallery={Gallery}
              isProfileImageLoaded={isProfileImageLoaded}
              userID={userID}
              handleBlur={handleBlur}
            />
            <GuardiansInfo
              form={form}
              setForm={setForm}
              simpleValidator={simpleValidator}
              handleBlur={handleBlur}
              forceUpdate={forceUpdate}
              setIsValidatorVisible={setIsValidatorVisible}
              simpleValidatorOptional={simpleValidatorOptional}
            />
            <div className="update_pro">
              {/* <button className="pro_cancel cancel_btn">Cancel</button> */}
              <button
                type="submit"
                className="btn_animated btn_block primary_btn"
              >
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
                  "Save & Update"
                )}
              </button>
            </div>

          </div>
        </form>
        <div className="container">
          <AccountInfo />
        </div>
      </section>
    </main>
  );
}

export default Profile;