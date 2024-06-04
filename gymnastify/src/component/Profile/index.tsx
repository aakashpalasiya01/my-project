/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import cameraicn from "@/assets/images/icons/camera_icn.svg";
import Image from "next/image";
import dummyImg from "@/assets/images/mario-9.webp";
import InputMask from "react-input-mask";
import eyesoff from "@/assets/images/icons/eyeoff_icn.svg";

function Profile() {
  return (
    <main className="main_content">
      <section className="bred_eles">
        <div className="container">
          <Breadcrumb>
            <Breadcrumb.Item className="point_none" href="">
              Profile
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </section>
      <section className="pro_user">
        <form>
          <div className="container">
            <div className="edit_changes">
              <div className="edit_img">
                <Image src={dummyImg} alt="icons" width={100} height={100} />
                <div className="edit_camera">
                  <input id="editProfile" type="file" />
                  <label htmlFor="editProfile">
                    <Image src={cameraicn} alt="icons" width={36} height={36} />
                  </label>
                </div>
              </div>
              <div className="edit_profile">Edit Profile</div>
            </div>
            <div className="prouser_items">
              <div className="prouser_link">Kid Info</div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="first_name" className="ele_lable">
                      First Name
                    </label>
                    <input
                      className="form-control ele_input"
                      type="text"
                      name="first_name"
                      id="first_name"
                      placeholder="John"
                    />
                    <div></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="last_name" className="ele_lable">
                      Last Name
                    </label>
                    <input
                      className="form-control ele_input"
                      type="text"
                      name="last_name"
                      id="last_name"
                      placeholder="Smith"
                    />
                    <div></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="age" className="ele_lable">
                      Age
                    </label>
                    <input
                      className="form-control ele_input"
                      type="text"
                      name="age"
                      id="age"
                      placeholder="20"
                    />
                    <div></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="group" className="ele_lable">
                      Group
                    </label>
                    <select
                      className="form-control ele_input ele_select"
                      name="group"
                      id="group"
                    >
                      <option value="">Please select</option>
                      <option value="blue-room-boys-levels">
                        Blue Room Boys Levels
                      </option>
                      <option value="blue-room-girls-levels">
                        Blue Room Girls Levels
                      </option>
                      <option value="red-room-levels">Red Room Levels</option>
                      <option value="specialty-classes">
                        Specialty Classes
                      </option>
                    </select>
                    <div></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="levels" className="ele_lable">
                      Levels
                    </label>
                    <select
                      className="form-control ele_input ele_select"
                      name="levels"
                      id="levels"
                    >
                      <option value="">Please select</option>
                    </select>
                    <div></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="branch" className="ele_lable">
                      Branch
                    </label>
                    <select
                      className="form-control ele_input ele_select"
                      name="branch"
                      id="branch"
                    >
                      <option value="">Please select</option>
                      <option value="4s Ranch">4s Ranch</option>
                      <option value="La Costa">La Costa</option>
                    </select>
                    <div></div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="ele_lable" htmlFor="photo">
                      Photo
                    </label>
                    <div className="drag_area">
                      <input type="file" id="gallery" name="gallery" />
                      <div className="drag_ele">
                        <label className="drop_filed" htmlFor="gallery">
                          {"Drag & Drop File"}
                        </label>
                        <p>Maximum 10</p>
                      </div>
                      {/* <p className='gallery_text'>{form?.gallery?.length ? form?.gallery?.length+ " Photos selected" : ""}</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label htmlFor="media" className="ele_lable">
                      Media uploaded
                    </label>
                    <div className="media_wrap">
                      <p>No Gallery Images</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="prouser_items">
              <div>
                <div className="prouser_link">Guardian Info</div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor={`guardians_info.first_name`}
                        className="ele_lable"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name={`guardians_info.first_name`}
                        id={`guardians_info.first_name`}
                        className="form-control ele_input"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor={`guardians_info..last_name`}
                        className="ele_lable"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name={`guardians_info..last_name`}
                        id={`guardians_info..last_name`}
                        className="form-control ele_input"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor={`guardians_info.relation_with_kids`}
                        className="ele_lable"
                      >
                        Relation with Kid
                      </label>
                      <select
                        className="ele_input form-control ele_select"
                        name={`guardians_info.relation_with_kids`}
                        id={`guardians_info.relation_with_kids`}
                      >
                        <option value="">Please select</option>
                        <option value="sibling">sibling</option>
                        <option value="Grand Parent">Grand Parent</option>
                        <option value="Aunt/Uncle">Aunt/Uncle</option>
                        <option value="Cousin">Cousin</option>
                        <option value="Friend">Friend</option>
                        <option value="Neighbour">Neighbour</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label
                        htmlFor={`guardians_info.mobile`}
                        className="ele_lable"
                      >
                        Mobile Number
                      </label>
                      <InputMask
                        mask="(999) 999-9999"
                        name={`guardians_info.mobile`}
                        id={`guardians_info.mobile`}
                        className="form-control ele_input"
                        placeholder="(000) 000-0000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="update_pro">
              {/* <button className="pro_cancel cancel_btn">Cancel</button> */}
              <button
                type="submit"
                className="btn_animated btn_block primary_btn"
              >
                Save & Update
              </button>
            </div>
          </div>
        </form>
        <div className="container">
          <div className="prouser_items">
            <div className="prouser_link">Account Info</div>
            <form>
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <label htmlFor="email" className="ele_lable">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control ele_input"
                      placeholder="rabecavasin@gmail.com"
                      readOnly={true}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="old_password" className="ele_lable">
                      Old Password
                    </label>
                    <div className="psw_btn position-relative">
                      <input
                        type="password"
                        name="old_password"
                        id="old_password"
                        className="form-control ele_input"
                        placeholder="*******"
                        autoComplete="on"
                      />
                      <div></div>
                      <button type="button" className="btn_eyeimg">
                        <Image className="psw_hide" src={eyesoff} alt="icons" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="new_password" className="ele_lable">
                      New Password
                    </label>
                    <div className="psw_btn position-relative">
                      <input
                        type="password"
                        name="new_password"
                        id="new_password"
                        className="form-control ele_input"
                        placeholder="*******"
                        autoComplete="on"
                      />
                      <div></div>
                      <button type="button" className="btn_eyeimg">
                        <Image className="psw_hide" src={eyesoff} alt="icons" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="confirm_password" className="ele_lable">
                      Confirm Password
                    </label>
                    <div className="psw_btn position-relative">
                      <input
                        type={"text"}
                        name="confirm_password"
                        id="confirm_password"
                        className="form-control ele_input"
                        placeholder="*******"
                        autoComplete="on"
                      />
                      <div></div>
                      <button type="button" className="btn_eyeimg">
                        <Image className="psw_hide" src={eyesoff} alt="icons" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="pro_btn">
              <button
                type="submit"
                className="btn_animated btn_block primary_btn"
              >
                update password
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
