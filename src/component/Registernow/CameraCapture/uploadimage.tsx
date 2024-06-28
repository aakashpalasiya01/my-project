'use client';
import Image from 'next/image';
import React, { useRef, useState } from 'react'
import loginUserIcn from "@/assets/images/icons/login_user.svg";
import CommonCropshow from '@/shared/common-component/CommonCrop';
import { forError } from '@/utils/CommonService';
import { UploadImagePageProps } from '../Registertype';

const UploadImage = ({setForm, form, imageUploadUrl,setImageUploadUrl}: UploadImagePageProps) => {

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showModal, setshowModal] = useState<boolean>(false);
  const [Fullimage, setFullImage] = useState<string | null>(null);

  const handleChangeOpenFile = () => {
    fileInputRef?.current?.click();
  };

  const ShowCropModal = () => {
    setshowModal(true)
  }

  const uploadimage = (e: any) => {
    setFullImage(null);
    const file = e.target.files[0]
    if (!file) {
      return
    }
    if (!file.type.startsWith("image/")) {
      forError("Unsupported file type.", "error")
      return
    }
    if (file.size > 3 * 1024 * 1024) {
      forError("Video file size exceeds 3MB limit.", "error")
      return
    }
    if (file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png") {
      const reader = new FileReader()
      reader.onloadend = (event) => {
        const imagePath = reader.result as string | null;
        setFullImage(imagePath)
      }
      ShowCropModal()
      reader.readAsDataURL(file);
      e.target.value = "";
    }else{
      forError("Unsupported file type.", "error");
    }
  }

  const updateImageFromCrop = (CropImage:any) => {
    if (CropImage?.type === "image/jpeg" || CropImage?.type === "image/png") {
      const url = URL.createObjectURL(CropImage);
      setImageUploadUrl(url);
      setForm({ ...form, user_profile_photo: CropImage });
      setshowModal(false);
    }
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    setshowModal(false);
  }



  return (
    <>
     {Fullimage && (
      <CommonCropshow updateImageFromCrop={updateImageFromCrop} handleClose={handleClose}  showModal={showModal} Fullimage={Fullimage} />
    )}
      <div className="login_useIcn">
        <Image
          src={imageUploadUrl ?? loginUserIcn}
          alt="icons"
          width={65}
          height={65}
          style={{objectFit:'cover'}}
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
        accept=".png, .jpg, .jpeg"
        style={{ display: "none" }}
        onChange={uploadimage}
      />
    </>
  )
}

export default UploadImage;