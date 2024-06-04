/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from "react";
import cameraicn from "@/assets/images/icons/camera_icn.svg";
import loginUserIcn from "@/assets/images/icons/login_user.svg";
import Image from "next/image";
import { Modal } from "react-bootstrap";

const CameraComponent = () => {
 
  return (
    <div className="register_profile">
      <div className="register_profile_block">
        <div className="login_useIcn">
          <Image
            src={loginUserIcn}
            alt="icons"
            width={65}
            height={65}
          />
        </div>
        <button
          className="btn_animated btn_blockmd primary_btn register_upload"
        >
          Upload Photo
        </button>
        <input
          className="register_upload_input"
          id="user_profile_photo"
          type="file"
          name="user_profile_photo"
          style={{ display: "none" }}
        />
      </div>
   
        <div className="cameraicn">
          <button className="camera_click">
            <Image src={cameraicn} alt="camera" />
          </button>
        </div>
      
      <Modal
        className="captured_modal"
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Camera</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
            <div className="capture_videos">
              <video
                width="640"
                height="640"
                autoPlay
                playsInline
              >
                  <track src="captions_en.vtt" kind="captions" srcLang="en" label="English captions" default/>
              </video>
            </div>
          
            <div className="capture_img_btn">
              <button className="btn_animated primary_btn btn_blockmd" >
                Capture Image
              </button>
            </div>
        
          <canvas
            width="640"
            height="640"
            style={{ display: "none" }}
          />
            <>
              <div className="captured_img">
                <Image
                  src={""}
                  alt="Captured"
                  width={640}
                  height={640}
                />
              </div>
              <div className="captured_upload">
                <button
                  className="btn_animated primary_btn btn_blockmd"
                >
                  Upload Photo
                </button>
                {/* <button className="" onClick={stopCamera}>Stop</button> */}
                <button className="cancel_btn">
                  Cancel
                </button>
              </div>
            </>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CameraComponent;
