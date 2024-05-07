"use client";
import React,{useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";
import clockicn from "../../assets/images/icons/clock_icn.svg";
import volumeicn from "../../assets/images/icons/volume_icn.svg";
import usericn from "../../assets/images/icons/user_icn.svg";
import rating from "../../assets/images/icons/ratingh_icn.svg";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { getSingleClassData } from "@/store/actions/singleClassAction";
import * as singleClassReducer from "@/store/reducers/singleClassReducer";
import RelatedClass from "./RelatedClass";
import {SingleClassDataResType} from "./SingleClassType";


function SingleClass() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const dispatch = useAppDispatch();
  const {SingleClassData} = useAppSelector((state:RootState)=> state.singleClass) ;
  const classNumber:number = 175;
  const classID:number = SingleClassData?.class_id;

  useEffect(()=>{
    const FetchSingleClass = async() => {
      await getSingleClassData(classNumber).then((res:SingleClassDataResType)=>{ 
        if(res?.success){
          dispatch(singleClassReducer.setUpdateSingleClass(res?.data))
        }
      })
    };
    FetchSingleClass()
  },[dispatch]);

  const convertDuration = (durationStr:string) => {
    if (typeof durationStr !== 'string') {
      return "Invalid duration format";
  }
  const timeComponents = durationStr.split(':').map(Number);
  if (timeComponents.length !== 3) {
      return "Invalid duration format";
  }
  const [hours, minutes, seconds] = timeComponents;

    const totalSeconds = hours*3600 + minutes * 60 + seconds;

    const hrs = Math.floor(totalSeconds/3600);
    const mins = Math.floor((totalSeconds % 3600)/60);
    const secs = totalSeconds % 60;

    if (hrs > 0) {
      return `${String(hrs).padStart(2, '0')} hrs`;
  } else if (mins > 0) {
      return `${String(mins).padStart(2, '0')} mins`;
  } else {
      return `${String(secs).padStart(2, '0')} secs`;
  }
  }

  return (
    <main className="main_content">
      <section className="single_class">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="single_class_title">
                <Link href="/">Back to home</Link>
                <h4>{SingleClassData?.title} - {SingleClassData?.group} - {SingleClassData?.instructors}</h4>
              </div>
            </div>
            <div className="col-md-8">
              <div className="single_left">
              <div className="previdos_watch">
                  <video width="760" height="490" poster="" controls>
                    <track kind="captions" />
                    <source src="movie.mp4" type="video/mp4" />
                  </video>
                  <div className="vidos_watch_title">
                    <h4>{SingleClassData?.usag_level} | {SingleClassData?.level_skills}</h4>
                    <p>{SingleClassData?.content}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="details_others">
                <div className="details_others_title">
                  Other Details
                </div>
                <div className="details_group">
                  <div className="details_items">
                    <div className="details_items_icn">
                      <Image src={usericn} alt="icons"></Image>
                    </div>
                    <div className="details_items_block">
                      <p>Instructor</p>
                      <h6>{SingleClassData?.instructors}</h6>
                    </div>
                  </div>
                  <div className="details_items">
                    <div className="details_items_icn">
                      <Image src={volumeicn} alt="icons"></Image>
                    </div>
                    <div className="details_items_block">
                      <p>{SingleClassData?.usag_level}</p>
                      <h6>{SingleClassData?.level_skills}</h6>
                    </div>
                  </div>
                  <div className="details_items">
                    <div className="details_items_icn">
                      <Image src={clockicn} alt="icons"></Image>
                    </div>
                    <div className="details_items_block">
                      <p>Duration</p>
                      <h6>{convertDuration(SingleClassData?.vimeo_data.video_length)}</h6>
                    </div>
                  </div>
                  <div className="details_items ratings_items">
                    <div className="details_items_icn">
                      <p>Ratings</p>
                    </div>
                    <div className="details_items_block">
                      <div className="ratings_group">
                        <span className="inline-block">4.5</span><Image className="inline-block rating_details" src={rating} alt="icons"></Image><span className="inline-block">69.20</span>
                      </div>
                    </div>
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
              <RelatedClass classID ={classID} />
            </div>
          </div>
        </div>
      </section>
      <section className="join_our">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="join_our_title">
                <h4>Want to hear about announcements & news?</h4>
                <p>Join our mailing list!</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form_join">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                />
                <button className="join_btn outline_btn">Join Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal className="preview_video" show={show} onHide={handleClose}>
        <Modal.Header className="preview_title" closeButton>
          <Modal.Title>10 Sec. Preview video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="previdos_content">
            <div className="row">
              <div className="col-lg-8">
                <div className="previdos_watch">
                  <video width="760" height="380" poster="" controls>
                    <track kind="captions"/>
                    <source src="movie.mp4" type="video/mp4" />
                  </video>
                  <div className="vidos_watch_title">
                    <h4>W1930 - Adult Class - John Snow</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="more_videos">
                  <div className="more_videos_title">
                    <h3>More Preview Video:</h3>
                  </div>
                  <div className="more_pv">
                    <div className="morepv_items">
                      <div className="morepv_items_icn">
                        <video width="100" height="65" poster="" controls>
                        <track kind="captions"/>
                          <source src="movie.mp4" type="video/mp4" />
                        </video>
                      </div>
                      <div className="morepv_items_block">
                        <h6>W1930 - Adult Class, John Snow</h6>
                        <p className="morepv_times">15:20</p>
                      </div>
                    </div>
                    <div className="morepv_items">
                      <div className="morepv_items_icn">
                        <video width="100" height="65" poster="" controls>
                        <track kind="captions"/>
                          <source src="movie.mp4" type="video/mp4" />
                        </video>
                      </div>
                      <div className="morepv_items_block">
                        <h6>W1930 - Adult Class, John Snow</h6>
                        <p className="morepv_times">15:20</p>
                      </div>
                    </div>
                    <div className="morepv_items">
                      <div className="morepv_items_icn">
                        <video width="100" height="65" poster="" controls>
                        <track kind="captions"/>
                          <source src="movie.mp4" type="video/mp4" />
                        </video>
                      </div>
                      <div className="morepv_items_block">
                        <h6>W1930 - Adult Class, John Snow</h6>
                        <p className="morepv_times">15:20</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </main>
  );
}

export default SingleClass;
