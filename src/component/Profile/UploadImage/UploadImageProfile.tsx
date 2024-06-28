'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import cameraicn from "@/assets/images/icons/camera_icn.svg";
import { forError } from '@/utils/CommonService';
import profile_img from "@/assets/images/icons/profile.png";
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import CommonCropshow from '@/shared/common-component/CommonCrop';
import { UploadImageProps } from '../ProfileType';

const UploadImageProfile = ({ setForm, form}: UploadImageProps) => {

    const { user } = useAppSelector((state: RootState) => state.auth);
    const [showModal, setshowModal] = useState<boolean>(false);
    const [Fullimage, setFullImage] = useState<string | null>("");

    const updateImageFromCrop = (CropImage:any) => {
        if (CropImage?.type === "image/jpeg" || CropImage?.type === "image/png") {
          const url = URL.createObjectURL(CropImage);
        //   setImageUploadUrl(url);
          setForm({ ...form, user_profile_photo: CropImage });     
          setshowModal(false);
        }
      };
    const getProfileImg = (file: File | null, profileURL: string | null | undefined) => {
        if (file) return URL.createObjectURL(file);
        if (profileURL) return profileURL;
        return profile_img
    }

    const ShowCropModal = () => {
        setshowModal(true)
    }

    const uploadimage = (e: any) => {
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
                setFullImage(reader.result as string | null);
            }
            ShowCropModal()
            reader.readAsDataURL(file);
            e.target.value = "";
        }
    }
    const handleClose = () => {
        setshowModal(false);
    }
    return (
        <>
            {Fullimage && (
                <CommonCropshow updateImageFromCrop={updateImageFromCrop} handleClose={handleClose}  showModal={showModal} Fullimage={Fullimage} />
            )}
            <div className="edit_img">
                <Image src={getProfileImg(form.user_profile_photo, user?.user_profile_photo)} alt="icons" width={100} height={100} />
                <div className="edit_camera">
                    <input id="editProfile" 
                    type="file"        
                    accept=".png, .jpg, .jpeg"
                    onChange={uploadimage} />
                    <label htmlFor="editProfile">
                        <Image src={cameraicn} alt="icons" width={36} height={36} />
                    </label>
                </div>
            </div>

        </>
    )
}

export default UploadImageProfile