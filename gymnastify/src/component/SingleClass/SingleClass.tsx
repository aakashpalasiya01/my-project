"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";
import playicn from "../../assets/images/icons/play_icn.svg";
import levels1 from "../../assets/images/levels1.jpg";
import levels2 from "../../assets/images/levels2.jpg";
import levels3 from "../../assets/images/levels3.jpg";
import clockicn from "../../assets/images/icons/clock_icn.svg";
import volumeicn from "../../assets/images/icons/volume_icn.svg";
import usericn from "../../assets/images/icons/user_icn.svg";
import rating from "../../assets/images/icons/ratingh_icn.svg";

function SingleClass() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main className="main_content">
      <section className="single_class">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="single_class_title">
                <Link href="#0">Back to home</Link>
                <h4>Blue Room Girls Levels | Aerials</h4>
              </div>
            </div>
            <div className="col-md-8">
              <div className="single_left">
              <div className="previdos_watch">
                  <video width="760" height="490" poster="" controls>
                    <source src="movie.mp4" type="video/mp4" />
                  </video>
                  <div className="vidos_watch_title">
                    <h4>Blue Room Girls Levels | Aerials</h4>
                    <p>Bring your Pilates ring for this total body mat Pilates sculpt session. Flow through traditional Pilates moves designed to create long lean muscles, using your ring for added assistance AND added intensity. Hit play to feel the burn!</p>
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
                      <h6>John Snow</h6>
                    </div>
                  </div>
                  <div className="details_items">
                    <div className="details_items_icn">
                      <Image src={volumeicn} alt="icons"></Image>
                    </div>
                    <div className="details_items_block">
                      <p>Blue Room Girls Levels</p>
                      <h6>Aerials</h6>
                    </div>
                  </div>
                  <div className="details_items">
                    <div className="details_items_icn">
                      <Image src={clockicn} alt="icons"></Image>
                    </div>
                    <div className="details_items_block">
                      <p>Duration</p>
                      <h6>30 mins</h6>
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
                      <p>Ex: Mat, Skipping rope</p>
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="classes_items position-relative">
                  <div className="classes_img">
                    <Image src={levels1} alt="levels1"></Image>
                  </div>
                  <div className="classes_block">
                    <div className="arials_block">
                      <div className="font12 aerials_tag">Aerials</div>
                      <div className="levels_group">
                        <div className="font12 levels_tag">
                          Blue Room Girls Levels
                        </div>
                        <div className="levels_btn">
                          <button type="button" onClick={handleShow}>
                            <Image src={playicn} alt="icosn" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="adult_class">
                      <p className="font12 adult_tags">
                        W1930 - Adult Class, John Snow
                      </p>
                      <span className="font12 duration">
                        Duration - 30 mins
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="classes_items position-relative">
                  <div className="classes_img">
                    <Image src={levels2} alt="levels2"></Image>
                  </div>
                  <div className="classes_block">
                    <div className="arials_block">
                      <div className="font12 aerials_tag">Aerials</div>
                      <div className="levels_group">
                        <div className="font12 levels_tag">
                          Blue Room Girls Levels
                        </div>
                        <div className="levels_btn">
                          <button type="button">
                            <Image src={playicn} alt="icosn" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="adult_class">
                      <p className="font12 adult_tags">
                        W1930 - Adult Class, John Snow
                      </p>
                      <span className="font12 duration">
                        Duration - 30 mins
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="classes_items position-relative">
                  <div className="classes_img">
                    <Image src={levels3} alt="levels3"></Image>
                  </div>
                  <div className="classes_block">
                    <div className="arials_block">
                      <div className="font12 aerials_tag">Aerials</div>
                      <div className="levels_group">
                        <div className="font12 levels_tag">
                          Blue Room Girls Levels
                        </div>
                        <div className="levels_btn">
                          <button type="button">
                            <Image src={playicn} alt="icosn" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="adult_class">
                      <p className="font12 adult_tags">
                        W1930 - Adult Class, John Snow
                      </p>
                      <span className="font12 duration">
                        Duration - 30 mins
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="classes_items position-relative">
                  <div className="classes_img">
                    <Image src={levels1} alt="levels1"></Image>
                  </div>
                  <div className="classes_block">
                    <div className="arials_block">
                      <div className="font12 aerials_tag">Aerials</div>
                      <div className="levels_group">
                        <div className="font12 levels_tag">
                          Blue Room Girls Levels
                        </div>
                        <div className="levels_btn">
                          <button type="button">
                            <Image src={playicn} alt="icosn" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="adult_class">
                      <p className="font12 adult_tags">
                        W1930 - Adult Class, John Snow
                      </p>
                      <span className="font12 duration">
                        Duration - 30 mins
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn_videos text-center">
              <button className="btn_blockmd primary_btn">
                Load More Videos
              </button>
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
