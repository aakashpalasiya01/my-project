'use client';
import React, { useState } from "react"
import "react-image-crop/dist/ReactCrop.css"
import { v4 as uuidv4 } from "uuid"
import { forError } from "@/utils/CommonService"
import { CropPhotoImagProps, ProfileFormState } from "../ProfileType"
import CommonCropshow from "@/shared/common-component/CommonCrop"


const CropImage = ({ setForm }: CropPhotoImagProps) => {
  const [showModal, setshowModal] = useState<boolean>(false);
  const [Fullimage, setFullImage] = useState<string | null>("");

  //show modal For crop
  const ShowCropModal = () => {
    setshowModal(true)
  }
  //close modal For crop
  const handleClose = () => {
    setshowModal(false)
  }

  //Initial Profile image uploaded Functions
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
      reader.readAsDataURL(file)
      const formData = new FormData()
      formData.append("file", file)
      e.target.value = "";
    }
  }

  const updateImageFromCrop = (images: any) => {
    const files: File[] = images ? [images] : []
    if (files[0]?.type === "image/jpeg" || files[0]?.type === "image/png") {
      const filesArray = Array.from(files)
      const imageUrls = filesArray?.map((file: any) => {
        return {
          image_url: URL.createObjectURL(file),
          image_id: uuidv4(),
          file
        }
      })
      setForm((prevForm: ProfileFormState) => ({
        ...prevForm,
        gallery: [...prevForm.gallery, ...imageUrls]
      }))
    } else {
      forError("This is an unsupported format please only use jpeg/png format")
    }
  }

  return (
    <>
      {Fullimage && (
      <CommonCropshow updateImageFromCrop={updateImageFromCrop} handleClose={handleClose} showModal={showModal} Fullimage={Fullimage}/>
    )}
      <div className="mb-3">
        <label className="ele_lable" htmlFor="photo">
          Photo
        </label>
        <div className="drag_area">
          <input
            type="file"
            id="gallery"
            name="gallery"
            accept=".png, .jpg, .jpeg"
            onChange={uploadimage}
          />
          <div className="drag_ele">
            <label className="drop_filed" htmlFor="gallery">
              {"Drag & Drop File"}
            </label>
            <p>Maximum 10</p>
          </div>
          {/* <p className='gallery_text'>{form?.gallery?.length ? form?.gallery?.length+ " Photos selected" : ""}</p> */}
        </div>
      </div>
    </>
  )
}

export default CropImage
