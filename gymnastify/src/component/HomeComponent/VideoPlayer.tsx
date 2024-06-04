import React, { useEffect, useState } from 'react'
import Modal from "react-bootstrap/Modal";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import VimeoVideo from '../VimeoComponent/VimeoVideo';
import Image from 'next/image';

const VideoPlayer = ({ show, handleClose, UniqueClass, VideoLoader }: any) => {
    const [videoPreview, setVideoPreview] = useState<any[]>()
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setVideoPreview(UniqueClass)
    }, [UniqueClass])

    const CloseHandler = () => {
        setIndex(0)
        handleClose()
    }

    const FormatSeconds = (duration: string) => {
        if (typeof duration !== 'string') {
            duration = String(duration);
        }
        if (duration === "0") {
            return "00:00";
        }
        const parts = duration?.split(':');
        const seconds = parseInt(parts[2]);
        const formattedSeconds = seconds.toFixed(2);
        return formattedSeconds;
    }

    const FormatTitleSeconds = (duration: string) => {
        if (typeof duration !== 'string') {
            duration = String(duration);
        }
        if (duration === "0") {
            return "00:00";
        }
        const parts = duration?.split(':');
        const seconds = parseInt(parts[2]);
        const formattedSeconds = seconds.toString();
        return formattedSeconds;
    }


    return (
            <Modal className="preview_video" show={show} onHide={CloseHandler}>
                <Modal.Header className="preview_title" closeButton>
                    <Modal.Title>{`${FormatTitleSeconds(videoPreview ? videoPreview[index]?.vimeo_data?.preview_video_length : "")} Sec. Preview video`}</Modal.Title>
                </Modal.Header >
                <Modal.Body>
                    <div className="previdos_content">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="previdos_watch">
                                    <VimeoVideo videoId={videoPreview ? videoPreview[index]?.vimeo_data?.preview_video : ""} />
                                    <div className="vidos_watch_title">
                                        {VideoLoader ? (
                                            <SkeletonTheme baseColor="#fff" highlightColor="#ddd">
                                                <Skeleton width={760} height={380} />
                                            </SkeletonTheme>
                                        ) : (
                                            <h4>{videoPreview ? videoPreview[index]?.title : "-"} - {videoPreview ? videoPreview[index]?.group[0] : "-"} {videoPreview ? videoPreview[index]?.instructors : "-"}</h4>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="more_videos">
                                    <div className="more_videos_title">
                                        <h3>More Preview Video:</h3>
                                    </div>
                                    <div className="more_pv">

                                        {videoPreview?.map((item: any, id: number) => {
                                            return (
                                                <div key={id} className={`morepv_items ${index === id ? "active" : ""}`} onClick={() => setIndex(id)}>
                                                    <div className="morepv_items_icn">
                                                        <Image src={item?.image?.normalImage ? item?.image?.normalImage : ''} alt="levels1" width={100} height={60}></Image>
                                                    </div>
                                                    <div className="morepv_items_block">
                                                        <h6>{item?.group[0]?.length > 1 ? `${item?.title} - ${item?.group[0]}, ${item?.instructors}` :  `${item?.title} - ${item?.instructors}`}</h6>
                                                        <p className="morepv_times">{FormatSeconds(item?.vimeo_data?.preview_video_length)}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal >
    )
}

export default VideoPlayer