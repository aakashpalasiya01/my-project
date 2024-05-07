/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import cameraicn from "@/assets/images/icons/camera_icn.svg";
import profile_img from "@/assets/images/icons/profile.png";
import Image from "next/image";
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

function Profile() {
  const { Gallery, isProfileLoaded, Profile } = useAppSelector((state: RootState) => state.profile);
  const dispatch = useAppDispatch();
  const userID: any = Profile?.user_id;

  const defaultValue: any = {
    first_name: Profile?.first_name ? Profile?.first_name : "",
    last_name: Profile?.last_name ? Profile?.last_name : "",
    age: Profile?.age ? Profile?.age : "",
    group: Profile?.group ? Profile?.group : "",
    branch: Profile?.branch ? Profile?.branch : "",
    user_profile_photo: null,
    levels: Profile?.levels ? Profile?.levels : "",
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

  const simpleValidator = useRef<SimpleReactValidator>(new SimpleReactValidator());
  const [form, setForm] = useState<any>(defaultValue);
  const [isLoaded, setIsLoaded] = useState(false);
  const [, forceUpdate] = useState<number>(0);

  useEffect(() => {
    if(Profile?.guardians_info) {
      // if we direct update Profile.guardians_info then handle chage update reducer therefore we add map method to update
      setForm({...form, guardians_info: Profile.guardians_info.map((e: any) => ({...e}))})
    }
    dispatch(profileReducer.setLoader(true));
    userProfileGetData(userID).then((res: any) => {
      try {
        if (res.success && res.data !== "No Gallery images") {
          setForm((prevItem: any) => ({...prevItem, gallery: Object.values(res.data.data)}));
        }
        dispatch(profileReducer.setLoader(false));
      } catch (error: any) {
        console.log(error);
        dispatch(profileReducer.setLoader(false));
      }
      finally {
        dispatch(profileReducer.setLoader(false));
      }
    })
  }, []);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const submithandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (simpleValidator.current.allValid()) {
      try {
        setIsLoaded(true);
        const formData = new FormData();
        for (const property in form) {
          if(!["guardians_info", "gallery"].includes(property)) {
            if(form[property]) formData.append(property, form[property]);
          }
        }
        form.guardians_info.forEach((item: any, inx: number) => {
          for (const property in item) {
            if(item[property]) formData.append(`guardians_info[${inx}][${property}]`, item[property]);
          }
        });

        const formDataGallery = new FormData();
        formDataGallery.append("user_id", userID);
        form.gallery.filter((e: any) => e.file).forEach((item: any) => {
          formDataGallery.append(`gallery[]`, item.file);
        });

        dispatch(profileReducer.setLoader(true));
        const  Response1: any = await ProfileForm(formData, userID);
        if(form.gallery.filter((e: any) => e.file).length) ProfileMultiplePhoto(formDataGallery)
        if (Response1?.success) {
          if (Response1?.success) {
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
      forceUpdate(1);
    }
  };

  const getProfileImg = (file: File | null, profileURL: string | null) => {
    if(file) return URL.createObjectURL(file);
    if(profileURL) return profileURL;
    return profile_img
  }

  const handleProfile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.files) setForm({...form, user_profile_photo: event.target.files[0]})
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
              <div className="edit_img">
                <Image src={getProfileImg(form.user_profile_photo, Profile.user_profile_photo)} alt="icons" width={100} height={100} />
                <div className="edit_camera">
                  <input id="editProfile" type="file" onChange={handleProfile} />
                  <label htmlFor="editProfile">
                    <Image src={cameraicn} alt="icons" width={36} height={36} />
                  </label>
                </div>
              </div>
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
              isProfileLoaded={isProfileLoaded}
              userID={userID}
            />
            <GuardiansInfo
              form={form}
              setForm={setForm}
              simpleValidator={simpleValidator}
            />
            <div className="update_pro">
              {/* <button className="pro_cancel cancel_btn">Cancel</button> */}
              <button
                type="submit"
                className="pro_update primary_btn btn_block"
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