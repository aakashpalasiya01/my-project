/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import clockicn from "@/assets/images/icons/clock_icn.svg";
import volumeicn from "@/assets/images/icons/volume_icn.svg";
import usericn from "@/assets/images/icons/user_icn.svg";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import {
  getSingleClassData,
  ratingVideoAction,
} from "@/store/actions/singleClassAction";
import * as singleClassReducer from "@/store/reducers/singleClassReducer";
import RelatedClass from "./RelatedClass";
import { SingleClassDataResType } from "./SingleClassType";
import { useParams } from "next/navigation";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import VimeoVideo from "../VimeoComponent/VimeoVideo";
import { ROUTES_PATH, subscriptionStatus } from "@/utils/constant";
import Modal from "react-bootstrap/Modal";
import { Rating } from "react-simple-star-rating";
import { handleChangeduration } from "@/shared/common-dialog";
import { forSuccess } from "@/utils/CommonService";
import AnnouncementsModal from "@/shared/common-component/AnnouncementsModal";

function SingleClass() {

  const [rateus, setRateus] = useState(false);
  const handleClose = () => setRateus(false);
  const [rating, setRating] = useState<number>(0);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);
  const handleShow = () => setRateus(true);

  const dispatch = useAppDispatch();
  const { SingleClassData, loadingState } = useAppSelector((state: RootState) => state.singleClass);
  const { subscription, user } = useAppSelector((state: RootState) => state.auth);
  const isSubscribed = subscription && subscription?.status === subscriptionStatus.active

  const params = useParams<{ slug: string }>();
  const classID: string = params.slug;

  useEffect(() => {
    const FetchSingleClass = async () => {
      dispatch(singleClassReducer.setLoadingState(true));
      await getSingleClassData(classID).then((res: SingleClassDataResType) => {
        if (res?.success) {
          localStorage.setItem("Playlist_classList", classID);
          dispatch(singleClassReducer.setUpdateSingleClass(res?.data));
          dispatch(singleClassReducer.setLoadingState(false));
        }
      });
    };
    FetchSingleClass();

  }, [ratingSubmitted]);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleSubmitRating = () => {
    ratingVideoAction(classID, rating, user?.user_id).then((res: any) => {
      if (res?.success) {
        forSuccess(res.data.data.message);
        setRatingSubmitted(!ratingSubmitted);
        handleClose();
      }
    });
  }

  function formatNumberToStringWithOneDecimal(stringValue: string) {
    let numberValue = parseFloat(stringValue);
    let formattedValue = numberValue?.toFixed(1); 
    return formattedValue; 
}

  const renderingSingleClassContent = SingleClassData?.content;

  const skeletonContent = (
    <SkeletonTheme baseColor="#eee" highlightColor="#ddd">
      <section className="single_class">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="single_class_title">
                <Skeleton width={790} height={76} />
              </div>
            </div>
            <div className="col-md-8">
              <div className="single_left">
                <div className="previdos_watch">
                  <Skeleton width={790} height={480} />
                  <div className="vidos_watch_title">
                    <Skeleton width={790} height={35} />
                    <Skeleton width={790} height={104} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="details_others">
                <div className="details_others_title">
                  <Skeleton width={425} height={30} />
                </div>
                <div className="details_group">
                  <div className="details_items">
                    <Skeleton width={212} height={44} />
                  </div>
                  <div className="details_items">
                    <Skeleton width={212} height={44} />
                  </div>
                  <div className="details_items">
                    <Skeleton width={212} height={44} />
                  </div>
                  <div className="details_items ratings_items">
                    <div className="details_items_icn">
                      <Skeleton width={50} height={20} />
                    </div>
                    <div className="details_items_block">
                      <div className="ratings_group">
                        <Skeleton width={180} height={25} />
                      </div>
                    </div>
                  </div>
                  <div className="details_items ratings_items">
                    <div className="details_items_icn">
                      <Skeleton width={50} height={20} />
                    </div>
                    <div className="details_items_block propsing_text">
                      <Skeleton width={180} height={25} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="other_classess">
        <div className="classes_area">
          <div className="container">
            <div className="sec_title text-center">
              <Skeleton width={1266} height={55} />
            </div>
            <div className="row">
              {Array(4)
        .fill(0)
        .map((_, index) => (
          <SkeletonTheme baseColor="#eee" highlightColor="#ddd" key={index+1}>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="classes_items position-relative">
                <div className="classes_img">
                  <Skeleton width={311} height={155} />
                </div>
                <div className="classes_block">
                  <div className="arials_block">
                    <Skeleton width={311} height={18} />
                  </div>
                </div>
              </div>
            </div>
          </SkeletonTheme>
        ))}
            </div>
          </div>
        </div>
      </section>
    </SkeletonTheme>
  );

  const SingleClassContent = (
    <main className="main_content">
      <section className="single_class">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="single_class_title">
                <Link href={ROUTES_PATH.HOME}>Back to home</Link>
                <h4>
                  {SingleClassData?.title} -
                  {SingleClassData?.group && Array.isArray(SingleClassData.group) ? (
                    SingleClassData.group.map((group, index) => (
                      <span key={index + 1} style={{ paddingLeft: '3px', paddingRight: '3px' }}>
                        {group}{SingleClassData?.group.length - 1 === index ? '' : ','}
                      </span>
                    ))
                  ) : (
                    <span>-</span>
                  )} -
                  {SingleClassData?.instructors}
                </h4>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="single_left">
                <div className="previdos_watch">
                  <VimeoVideo
                    videoId={
                      isSubscribed
                        ? SingleClassData?.vimeo_data?.video_id
                        : SingleClassData?.vimeo_data?.preview_video
                    }
                  />
                  <div className="vidos_watch_title">
                    <div className="vidos_level_group">
                      <h4>
                        {SingleClassData?.group && Array.isArray(SingleClassData.group) ? (
                          SingleClassData.group.map((level, index) => (
                            <span key={index + 1} style={{ paddingLeft: '3px', paddingRight: '3px' }}>
                              {level}{SingleClassData?.group.length - 1 === index ? '' : ','}
                            </span>
                          ))
                        ) : (
                          <span>-</span>
                        )}
                        |
                        {SingleClassData?.level_skills && Array.isArray(SingleClassData.level_skills) ? (
                          SingleClassData.level_skills.map((skill, index) => (
                            <span key={index + 1} style={{ paddingLeft: '3px', paddingRight: '3px' }}>
                              {skill}{SingleClassData?.level_skills.length - 1 === index ? '' : ','}
                            </span>
                          ))
                        ) : (
                          <span>-</span>
                        )}
                      </h4>
                      {isSubscribed ? (<button
                        className="btn_animated rate_us primary_btn btn_blockmd"
                        onClick={handleShow}
                      >
                        Rate Us
                      </button>) : (null)}
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: renderingSingleClassContent,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="details_others">
                <div className="details_others_title">Other Details</div>
                <div className="details_group">
                  <div className="details_items">
                    <div className="details_items_icn">
                      <Image src={usericn} alt="icons"></Image>
                    </div>
                    <div className="details_items_block">
                      <p>Instructor</p>
                      <Link href={ROUTES_PATH.TEACHERS}>
                        <h6>{SingleClassData?.instructors}</h6>
                      </Link>
                    </div>
                  </div>
                  <div className="details_items">
                    <div className="details_items_icn">
                      <Image src={volumeicn} alt="icons"></Image>
                    </div>
                    <div className="details_items_block">
                      <p>{SingleClassData?.usag_level && Array.isArray(SingleClassData.usag_level) ? (
                        SingleClassData.usag_level.map((level, index) => (
                          <span key={index + 1} style={{ paddingLeft: '3px', paddingRight: '3px' }}>
                            {level}{SingleClassData?.usag_level.length - 1 === index ? '' : ','}
                          </span>
                        ))
                      ) : (
                        <span>-</span>
                      )}</p>
                      <h6>
                        {SingleClassData?.level_skills && Array.isArray(SingleClassData.level_skills) ? (
                          SingleClassData.level_skills.map((skill, index) => (
                            <span key={index + 1} style={{ paddingLeft: '3px', paddingRight: '3px' }}>
                              {skill}{SingleClassData?.level_skills.length - 1 === index ? '' : ','}
                            </span>
                          ))
                        ) : (
                          <span>-</span>
                        )}
                      </h6>
                    </div>
                  </div>
                  <div className="details_items">
                    <div className="details_items_icn">
                      <Image src={clockicn} alt="icons"></Image>
                    </div>
                    <div className="details_items_block">
                      <p>Duration</p>
                      <h6>
                        {handleChangeduration(
                          isSubscribed ? SingleClassData?.vimeo_data?.video_length : SingleClassData?.vimeo_data?.preview_video_length
                        )}
                      </h6>
                    </div>
                  </div>
                  <div className="details_items ratings_items">
                    <div className="details_items_icn">
                      <p>Ratings</p>
                    </div>
                    {isSubscribed ? (
                      <div className="details_items_block">
                        <div className="ratings_group">
                          <span className="inline-block">{SingleClassData?.average_rating ? formatNumberToStringWithOneDecimal(SingleClassData?.average_rating): 0}</span>
                          <Rating
                            readonly
                            initialValue={parseFloat(parseFloat(SingleClassData?.average_rating).toFixed(1))}
                            size={16}
                            className="inline-block"
                            emptyColor="#e2e2e2"
                            fillColor="#EA3E3C"
                            allowFraction
                          />
                          <span className="inline-block">{SingleClassData?.rating_count}</span>
                        </div>
                      </div>
                    ) : (null)}
                  </div>
                  <div className="details_items ratings_items">
                    <div className="details_items_icn">
                      <p>Props</p>
                    </div>
                    <div className="details_items_block propsing_text">
                      <p>Ex: {SingleClassData?.props}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="other_classess">
        <div className="classes_area">
          <div className="container">
            <div className="sec_title text-center">
              <h2>Other Classes You Might Like</h2>
            </div>
            <div className="row">
              <RelatedClass classID={classID} />
            </div>
          </div>
        </div>
      </section>
      <section className="join_our">
        <AnnouncementsModal />
      </section>
      <Modal
        className="rateing_modal"
        show={rateus}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="you_rateing">
            <p>
              How Would you rate out <br /> App Experience?
            </p>
            <div className="rating_st">
                <Rating
                onClick={handleRating}
                initialValue={SingleClassData?.current_user_rating ? SingleClassData.current_user_rating : 0}
                size={28}
                transition
                SVGstorkeWidth={1.5}
                SVGstrokeColor="#FFA534"
                emptyColor="#fff"
                fillColor="#FFA534"
                allowFraction={true}
              />
            </div>
            <div className="yourate_btn">
              <button onClick={handleSubmitRating} className="btn_animated primary_btn btn_blockmd">
                Submit
              </button>
              <button className="cancel_btn" onClick={handleClose}>
                No Thanks!
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </main>
  );

  return loadingState ? skeletonContent : SingleClassContent;
}

export default SingleClass;
