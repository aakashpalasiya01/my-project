/* eslint-disable react-hooks/exhaustive-deps */

"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import weoffer from "@/assets/images/we_offer.jpg";
import "slick-carousel/slick/slick-theme.css";
import wakingup from "@/assets/images/icons/wakingup.png";
import Image from "next/image";
import Guestbanner from "@/assets/images/guest_img.png";
import Link from "next/link";
import { ROUTES_PATH } from "@/utils/constant";
import getsupports1 from "@/assets/images/get_supports1.jpg";
import getsupports2 from "@/assets/images/get_supports2.jpg";
import testimonials from "@/assets/images/testimonials.png";
import ratinghicn from "@/assets/images/icons/ratingh_icn.svg";
import Slider from "react-slick";
import { settings } from '@/utils/commonsettings';

const HomeComponent = () => {
  return (
    <main className="main_content">
      <section className="guest_banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="guest_content">
                <div className="guest-title">
                  <h1 data-aos="fade-down" data-aos-duration="1000">
                    FUN AND FITNESS FOR ALL AGES!
                  </h1>
                  <p data-aos="fade-down" data-aos-duration="1000">
                    We attract the best long-term associates to work with your
                    child in a safe, clean, climate-controlled facility.
                  </p>
                </div>
                <div className="subnow_link">
                  <button
                    className="btn_animated primary_btn btn_blockmd"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="guest_img">
                <Image
                  data-aos="fade-up-left"
                  data-aos-duration="1000"
                  src={Guestbanner}
                  className="img-fluid"
                  alt="guest banner"
                  width={332}
                  height={403}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">
          <div className="sec_title text-center">
            <>
              <p data-aos="fade-left" data-aos-duration="1000">
                No Matter Your Fitness Level, Body Type, Mood, or Fitness Goal…
              </p>
              <h2 data-aos="fade-left" data-aos-duration="1000">
                We’ve Got a Virtual Workout for You
              </h2>
            </>
          </div>
          <div className="row">
            <div
              className="col-md-6 col-xl-3"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <div className="weve_items text-center">
                <span className="weve_items_ribbons">PRE-SCHOOL</span>
                <div className="weve_items_icn">
                  <Image src={wakingup} alt="icos"></Image>
                </div>
                <h4>Red Room Levels</h4>
              </div>
            </div>
          </div>
          <div className="skill_dic">
            <Link
              href={ROUTES_PATH.EXPLORESKILL}
              className="btn_animated primary_btn btn_blockmd"
            >
              Explore Skill Dictionary
            </Link>
          </div>
        </div>
      </section>
      <section className="get_supports">
      <div className="container">
            <div className="row align-items-center">
                    <>
                        <div className="col-lg-3 col_supports1" data-aos="fade-right">
                            <div className="get_supports1">
                                <Image
                                    src={getsupports1}
                                    alt="get supports"
                                    className="img-fluid"
                                    width={250}
                                    height={190}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col_supports2" data-aos="fade-right">
                            <div className="get_supports2">
                                <Image
                                    src={getsupports2}
                                    alt="get supports"
                                    className="img-fluid"
                                    width={325}
                                    height={246}
                                />
                            </div>
                        </div>
                    </>
                <div className="col-lg-5 col_supports3">
                        <div className="get_support_block">
                            <p data-aos="fade-up">Need Expert Guidance?</p>
                            <h5 data-aos="fade-up">Chat or Video Call Your Coach!</h5>
                            <h4 data-aos="fade-up"> Get support and personalized guidance</h4>
                            <p data-aos="fade-up">Connect with Coaches Now</p>
                            <div className="get_subnow" data-aos="fade-up">
                                <Link href={ROUTES_PATH.LOGIN}>
                                    <button className="btn_animated white_btn btn_blockmd">
                                    Subscribe Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                </div>
            </div >
        </div >
      </section>
      <section className="we_offer">
      <div className="container">
            <div className="we_offer_title">
                <div className="sec_title text-center">
                    <h2>What we offer</h2>
                </div>
                <div className="we_offer_img" data-aos="fade-up">
                    <Image src={weoffer} alt="we offer" className="img-fluid" />
                    <div className="we_offer_block">
                        <h4>Unlock Unlimited Learning</h4>
                        <h3>Join Our Thrilling Pre-Recorded Classes!</h3>
                        <p>
                            Unlimited access to all classes. Flexible learning schedule.
                            Regularly updated course material.
                        </p>
                        <div className="get_subnow weoffer_btn">
                            <Link href={ROUTES_PATH.LOGIN}>
                                <button className="btn_animated white_btn btn_blockmd">
                                    Subscribe Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="members_sayed">
      <div className="container">
            <div className="sec_title text-center">
                <h2>What our members are saying</h2>
            </div>
            <div className="member_slider" data-aos="fade-up">
                <Slider {...settings}>
                <div className="members_items" >
                            <div className="members_itemsicn">
                                <div className="members_img">
                                    <Image src={testimonials} alt="testimonials" width={63} height={60} />
                                </div>
                                <div className="members_block">
                                    <h6 dangerouslySetInnerHTML={{__html:"Instructor Review"}}></h6>
                                    <Image src={ratinghicn} alt="icons" />
                                </div>
                            </div>
                            <h3>Coach Alex, Youth Gymnastics Instructor</h3>
                            <p>
                            I love doing cartwheels and learning flips from my favorite coaches on the screen! I can already do a handstand for 10 seconds, thanks to their lessons!
                            </p>
                        </div>
                        <div className="members_items" >
                            <div className="members_itemsicn">
                                <div className="members_img">
                                    <Image src={testimonials} alt="testimonials" width={63} height={60} />
                                </div>
                                <div className="members_block">
                                    <h6 dangerouslySetInnerHTML={{__html:"Instructor Review"}}></h6>
                                    <Image src={ratinghicn} alt="icons" />
                                </div>
                            </div>
                            <h3>Coach Alex, Youth Gymnastics Instructor</h3>
                            <p>
                            I love doing cartwheels and learning flips from my favorite coaches on the screen! I can already do a handstand for 10 seconds, thanks to their lessons!
                            </p>
                        </div>
                        <div className="members_items" >
                            <div className="members_itemsicn">
                                <div className="members_img">
                                    <Image src={testimonials} alt="testimonials" width={63} height={60} />
                                </div>
                                <div className="members_block">
                                    <h6 dangerouslySetInnerHTML={{__html:"Instructor Review"}}></h6>
                                    <Image src={ratinghicn} alt="icons" />
                                </div>
                            </div>
                            <h3>Coach Alex, Youth Gymnastics Instructor</h3>
                            <p>
                            I love doing cartwheels and learning flips from my favorite coaches on the screen! I can already do a handstand for 10 seconds, thanks to their lessons!
                            </p>
                        </div>
                        <div className="members_items" >
                            <div className="members_itemsicn">
                                <div className="members_img">
                                    <Image src={testimonials} alt="testimonials" width={63} height={60} />
                                </div>
                                <div className="members_block">
                                    <h6 dangerouslySetInnerHTML={{__html:"Instructor Review"}}></h6>
                                    <Image src={ratinghicn} alt="icons" />
                                </div>
                            </div>
                            <h3>Coach Alex, Youth Gymnastics Instructor</h3>
                            <p>
                            I love doing cartwheels and learning flips from my favorite coaches on the screen! I can already do a handstand for 10 seconds, thanks to their lessons!
                            </p>
                        </div>
                        <div className="members_items" >
                            <div className="members_itemsicn">
                                <div className="members_img">
                                    <Image src={testimonials} alt="testimonials" width={63} height={60} />
                                </div>
                                <div className="members_block">
                                    <h6 dangerouslySetInnerHTML={{__html:"Instructor Review"}}></h6>
                                    <Image src={ratinghicn} alt="icons" />
                                </div>
                            </div>
                            <h3>Coach Alex, Youth Gymnastics Instructor</h3>
                            <p>
                            I love doing cartwheels and learning flips from my favorite coaches on the screen! I can already do a handstand for 10 seconds, thanks to their lessons!
                            </p>
                        </div>
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
                    <form >
                        <div className="form_join">
                            <span className='joinus_field'>
                                <input
                                    id='email'
                                    type="email"
                                    placeholder="Email"
                                    className="form-control"
                                    required
                                />
                            </span>
                            <button type='submit' className="btn_animated join_btn outline_btn">Join Us</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
};

export default HomeComponent;
