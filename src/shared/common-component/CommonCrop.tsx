'use client';
import React, { useRef, useState } from "react"
import "react-image-crop/dist/ReactCrop.css"
import ReactCrop, {
    centerCrop,
    makeAspectCrop,
    convertToPixelCrop
} from "react-image-crop"
import { Modal } from "react-bootstrap"
import Image from "next/image"
import { base64ToFile } from "../common-dialog"
import { CommonReactCrop } from "../common-dialog/types"

const CommonCropshow = ({ updateImageFromCrop, handleClose, showModal, Fullimage}: CommonReactCrop) => {
    const ASPECT_RATIO = 1;
    const MIN_DIMENSION = 150;
    const Scale = 1;
    const Aspect = 1;
    const Rotate = 0;
    const imgRef = useRef<HTMLImageElement | null>(null);
    const CanvasRef = useRef<HTMLCanvasElement | null>(null);
    const [crop, setCrop] = useState<any>()

    const onImagecropLoader = (e: any) => {
        const { width, height } = e.currentTarget
        const cropWidthInPercent = (MIN_DIMENSION / width) * 100
        //makeAspectcrop create a new object()
        
        const crop = makeAspectCrop(
            {
                unit: "%",
                width: cropWidthInPercent
            },
            ASPECT_RATIO,
            width,
            height
        )
        //use the bound crop make the image center
        const centeredCrop = centerCrop(crop, width, height)
        setCrop(centeredCrop)
    }

    const setCanvascropImage = (
        orginalimage: any,
        cropscanvas: any,
        crop: any
    ) => {
        //canvas
        const ctx = cropscanvas?.getContext("2d")
        if (!ctx) {
            throw new Error("No 2d context")
        }
        const pixelRatio = window.devicePixelRatio
        //scale will calculate for vertical and horizontal
        const scaleX = orginalimage.naturalWidth / orginalimage.width
        const scaleY = orginalimage.naturalHeight / orginalimage.height
        //crops area width and height of the canvas
        cropscanvas.width = Math.floor(crop.width * scaleX * pixelRatio)
        cropscanvas.height = Math.floor(crop.height * scaleY * pixelRatio)

        ctx.scale(pixelRatio, pixelRatio)
        ctx.imageSmoothingQuality = "high"
        ctx.save()

        const cropX = crop.x * scaleX
        const cropY = crop.y * scaleY

        // Move the crop origin to the canvas origin (0,0)
        ctx.translate(-cropX, -cropY)
        ctx.drawImage(
            orginalimage,
            0,
            0,
            orginalimage.naturalWidth,
            orginalimage.naturalHeight,
            0,
            0,
            orginalimage.naturalWidth,
            orginalimage.naturalHeight
        )

        ctx.restore()
    }


    return (
        <>
            <Modal show={showModal} className="profile_modal">
                <Modal.Body>
                    {Fullimage && (
                        <div>
                            <ReactCrop
                                crop={crop}
                                onChange={(_, percentCrop) => setCrop(percentCrop)}
                                // onComplete={(c) => setCompletedCrop(c)}
                                aspect={Aspect}
                                minWidth={400}
                                minHeight={100}
                            // circularCrop
                            >
                                <div className="edit_profile_circle_wrap">
                                    <Image
                                        ref={imgRef}
                                        alt="Crop me"
                                        src={Fullimage}
                                        style={{
                                            transform: `scale(${Scale}) rotate(${Rotate}deg)`
                                        }}
                                        onLoad={onImagecropLoader}
                                        width={500}
                                        height={404}
                                    />
                                </div>
                            </ReactCrop>

                            <div className="captured_upload" style={{ display: "flex", justifyContent: "center", flexDirection: 'row' }}>
                                <button
                                    style={{ marginRight: "20px" }}
                                    className="btn_animated primary_btn btn_blockmd"
                                    onClick={() => {
                                        if (imgRef.current && CanvasRef.current && crop) {
                                            const pixelCrop = convertToPixelCrop(
                                                crop,
                                                imgRef.current.width,
                                                imgRef.current.height
                                            );
                                            setCanvascropImage(
                                                imgRef.current,
                                                CanvasRef.current,
                                                pixelCrop
                                            );

                                            const cropImageUrl = CanvasRef.current.toDataURL("image/png");
                                            const fileObject = base64ToFile(cropImageUrl);
                                            updateImageFromCrop(fileObject);
                                            handleClose();
                                        } else {
                                            console.error("Missing image or canvas reference, or crop data");
                                        }
                                    }}
                                >
                                    Crop Image
                                </button>
                                
                                <button className="cancel_btn" onClick={(event) => handleClose()}>
                                    Cancel
                                </button>                            
                            </div>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
            <canvas ref={CanvasRef} style={{ display: "none" }} />
        </>
    )
}

export default CommonCropshow