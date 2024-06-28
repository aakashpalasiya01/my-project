/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";
import cameraicn from "@/assets/images/icons/camera_icn.svg";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import UploadImage from "./uploadimage";
import { CameraCaptureProps } from "../Registertype";

const CameraComponent = ({ form, setForm }: CameraCaptureProps) => {
  const videoRef = useRef<any>(null);
  const canvasRef = useRef<any>(null);
  const [imageCameraFile, setCameraFileImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageUploadUrl, setImageUploadUrl] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [StreamStop, setStreamStop] = useState<any>(null);
  const [hasCamera, setHasCamera] = useState(false);
// Find the System has camera or not 
  useEffect(() => {
    if (navigator?.mediaDevices?.enumerateDevices) {
      navigator.mediaDevices.enumerateDevices()
        .then(devices => {
          const videoDevices = devices.filter(device => device.kind === 'videoinput');
          setHasCamera(videoDevices.length > 0);
        })
        .catch(err => {
          console.error("Error accessing device list:", err);
          setHasCamera(false);
        });
    } else {
      console.log("MediaDevices API not supported.");
      setHasCamera(false);
    }
  }, []);
// getting the video system and capture the image
  useEffect(() => {
    if (isModalOpen) {
      setImageUrl('');
      const getVideo = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
          });
          videoRef.current.srcObject = stream;
          setStreamStop(videoRef.current);
        } catch (error) {
          console.error("Error accessing the camera:", error);
        }
      };
      getVideo();
    } else if (videoRef?.current?.srcObject) {
      videoRef.current.srcObject
        .getTracks()
        .forEach((track: any) => track.stop());
    }

    return () => {
      stopCamera();
    };
  }, [isModalOpen]);

// stpoing the camera Functionality
  const stopCamera = async () => {
    if (StreamStop?.srcObject) {
      const tracks = StreamStop?.srcObject.getTracks();
      tracks.forEach((track: any) => track.stop());
      console.log("Camera stopped successfully.");
    }
  };
// capture the image
  const handleCapture = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (canvas && video) {
      const context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob: any) => {
        const file = new File([blob], "captured-image.png", {
          type: "image/png",
        });
        setCameraFileImage(file);
        const url = URL.createObjectURL(file);
        setImageUrl(url);
      }, "image/png");
    }
  };
// cancel the Camera
  const handleCancel = () => {
    setImageUrl("");
    if (!videoRef?.current?.srcObject) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((error) => {
          console.error("Error accessing the camera:", error);
        });
      stopCamera();
      setImageUrl('');
    }
  };

// Capture Image pass to API.
  const handleCameraprofilephoto = () => {;
    if (!videoRef?.current?.srcObject) {
      if (imageCameraFile) {
        const url = URL.createObjectURL(imageCameraFile);
        setImageUploadUrl(url);
        setForm({ ...form, user_profile_photo: imageCameraFile });
      }
    }
    setModalOpen(false);
    stopCamera();
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    stopCamera();
  }



  return (
    <div className="register_profile">
      <div className="register_profile_block">
        {/* <div className="login_useIcn">
          <Image
            src={imageUploadUrl ? imageUploadUrl : loginUserIcn}
            alt="icons"
            width={65}
            height={65}
          />
        </div> 


        <button
          className="btn_animated btn_blockmd primary_btn register_upload"
          onClick={handleChangeOpenFile}
        >
          Upload Photo
        </button>
        <input
          className="register_upload_input"
          id="user_profile_photo"
          ref={fileInputRef}
          type="file"
          name="user_profile_photo"
          style={{ display: "none" }}
          onChange={handleChangeprofilephoto}
        />*/}
        
        <UploadImage setForm={setForm} form={form} imageUploadUrl={imageUploadUrl} setImageUploadUrl={setImageUploadUrl}/>
      </div>
      {hasCamera && (
        <div className="cameraicn">
          <button className="camera_click" onClick={() => setModalOpen(true)}>
            <Image src={cameraicn} alt="camera" />
          </button>
        </div>
      )}
      <Modal
        className="captured_modal"
        show={isModalOpen}
        onHide={handleCloseModal}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Camera</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!imageUrl && (
            <div className="capture_videos">
              <video
                ref={videoRef}
                width="640"
                height="640"
                autoPlay
                playsInline
              >
                  <track src="captions_en.vtt" kind="captions" srcLang="en" label="English captions" default/>
              </video>
            </div>
          )}
          {!imageUrl && (
            <div className="capture_img_btn">
              <button className="btn_animated primary_btn btn_blockmd" onClick={handleCapture}>
                Capture Image
              </button>
            </div>
          )}
          <canvas
            ref={canvasRef}
            width="640"
            height="640"
            style={{ display: "none" }}
          />
          {imageUrl && (
            <>
              <div className="captured_img">
                <Image
                  src={imageUrl || ""}
                  alt="Captured"
                  width={640}
                  height={640}
                />
              </div>
              <div className="captured_upload">
                <button
                  className="btn_animated primary_btn btn_blockmd"
                  onClick={handleCameraprofilephoto}
                >
                  Upload Photo
                </button>
                {/* <button className="" onClick={stopCamera}>Stop</button> */}
                <button className="cancel_btn" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CameraComponent;
