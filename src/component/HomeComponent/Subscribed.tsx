"use client";
import { useState } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import wakingup from "../../assets/images/icons/wakingup.png";
import playicn from "../../assets/images/icons/play_icn.svg";
import levels1 from "../../assets/images/levels1.jpg";
import levels2 from "../../assets/images/levels2.jpg";
import levels3 from "../../assets/images/levels3.jpg";
import filltericon from "../../assets/images/icons/filter_icn.svg";
import testimonials from "../../assets/images/testimonials.png";
import ratinghicn from "../../assets/images/icons/ratingh_icn.svg";



function Subscribed() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    //autoplaySpeed: 5000, // Adjust autoplay speed as needed
    responsive: [
      {
        breakpoint: 1200, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1199, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main className="main_content">
      <section className="offeres_block">
        <div className="weve_got">
          <div className="container">
            <div className="sec_title text-center">
              <p>No Matter Your Fitness Level, Body Type, Mood, or Fitness Goal…</p>
              <h2>Gymnastify offeres fun and fitness to all ages.</h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-xl-3">
                <div className="white_bg weve_items text-center">
                  <span className="weve_items_ribbons">
                    School Aged Children
                  </span>
                  <div className="weve_items_icn">
                    <Image src={wakingup} alt="icos"></Image>
                  </div>
                  <h4>Blue Room Girls Levels</h4>
                </div>
              </div>
              <div className="col-xl-8">
              <div className="skill_list">
              <div className="sec_title_md">
                <h5>Skill</h5>
                <ul className="skill_block">
                  <li><button className="skll_btn skll_isActived">All</button></li>
                  <li><button className="skll_btn">Cartwheels (CW)</button></li>
                  <li><button className="skll_btn">Round Offs (RO)</button></li>
                  <li><button className="skll_btn">Kips</button></li>
                  <li><button className="skll_btn">Aerials</button></li>
                  <li><button className="skll_btn">Gainers</button></li>
                  <li><button className="skll_btn">High School - JV</button></li>
                  <li><button className="skll_btn">High School - Varsity</button></li>
                </ul>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="classes_area">
      <div className="filter">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="filter_search">
                <input type="text" className="form-control ele_input search_icn" placeholder="What can we help you find ?" />
                <button className="btn_animated balck_btn search_btn">CC</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="fitler_area">
                <button className="btn_animated balck_btn">Short By</button>
                <button className="btn_animated balck_btn"> <Image className="fillter_icn" src={filltericon} alt="icons"></Image> Filters</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="container">
          <div className="sec_title_md">
            <h5>Classes</h5>
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
                    <span className="font12 duration">Duration - 30 mins</span>
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
                    <span className="font12 duration">Duration - 30 mins</span>
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
                    <span className="font12 duration">Duration - 30 mins</span>
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
                    <span className="font12 duration">Duration - 30 mins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn_videos text-center">
            <button className="btn_animated btn_blockmd primary_btn">
              Load More
            </button>
          </div>
        </div>
      </section>
      <section className="members_sayed">
        <div className="container">
          <div className="sec_title text-center">
            <h2>What our members are saying</h2>
          </div>
          <div className="member_slider">
            <Slider {...settings}>
              <div className="members_items">
                <div className="members_itemsicn">
                  <div className="members_img">
                    <Image src={testimonials} alt="testimonials" />
                  </div>
                  <div className="members_block">
                    <h6>Michelle T Bonsus</h6>
                    <Image src={ratinghicn} alt="icons" />
                  </div>
                </div>
                <h3>Excellent yoga classes </h3>
                <p>
                  One of the platform’s standout strengths is its roster of
                  exceptional teachers. They are experts in their respective
                  fields, passionate about their subjects, and skilled in
                  delivering engaging and informative lessons. Their dedication
                  to teaching shines through in their video content, which is
                  professionally produced and visually captivating. These high-
                  quality videos not only enhance comprehension but also make
                  the learning experience enjoyable and immersive.
                </p>
              </div>
              <div className="members_items">
                <div className="members_itemsicn">
                  <div className="members_img">
                    <Image src={testimonials} alt="testimonials" />
                  </div>
                  <div className="members_block">
                    <h6>Michelle T Bonsus</h6>
                    <Image src={ratinghicn} alt="icons" />
                  </div>
                </div>
                <h3>Excellent yoga classes </h3>
                <p>
                  One of the platform’s standout strengths is its roster of
                  exceptional teachers. They are experts in their respective
                  fields, passionate about their subjects, and skilled in
                  delivering engaging and informative lessons. Their dedication
                  to teaching shines through in their video content, which is
                  professionally produced and visually captivating. These high-
                  quality videos not only enhance comprehension but also make
                  the learning experience enjoyable and immersive.
                </p>
              </div>
              <div className="members_items">
                <div className="members_itemsicn">
                  <div className="members_img">
                    <Image src={testimonials} alt="testimonials" />
                  </div>
                  <div className="members_block">
                    <h6>Michelle T Bonsus</h6>
                    <Image src={ratinghicn} alt="icons" />
                  </div>
                </div>
                <h3>Excellent yoga classes </h3>
                <p>
                  One of the platform’s standout strengths is its roster of
                  exceptional teachers. They are experts in their respective
                  fields, passionate about their subjects, and skilled in
                  delivering engaging and informative lessons. Their dedication
                  to teaching shines through in their video content, which is
                  professionally produced and visually captivating. These high-
                  quality videos not only enhance comprehension but also make
                  the learning experience enjoyable and immersive.
                </p>
              </div>
              <div className="members_items">
                <div className="members_itemsicn">
                  <div className="members_img">
                    <Image src={testimonials} alt="testimonials" />
                  </div>
                  <div className="members_block">
                    <h6>Michelle T Bonsus</h6>
                    <Image src={ratinghicn} alt="icons" />
                  </div>
                </div>
                <h3>Excellent yoga classes </h3>
                <p>
                  One of the platform’s standout strengths is its roster of
                  exceptional teachers. They are experts in their respective
                  fields, passionate about their subjects, and skilled in
                  delivering engaging and informative lessons. Their dedication
                  to teaching shines through in their video content, which is
                  professionally produced and visually captivating. These high-
                  quality videos not only enhance comprehension but also make
                  the learning experience enjoyable and immersive.
                </p>
              </div>
              {/* Add more testimonials as needed */}
            </Slider>
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
                <button className="btn_animated join_btn outline_btn">Join Us</button>
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

export default Subscribed;
