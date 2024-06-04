/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Link from "next/link";
import Image from "next/image";
import Guestbanner from "../../assets/images/guest_img.png";
import wakingup from "../../assets/images/icons/wakingup.png";
import getsupports1 from "../../assets/images/get_supports1.jpg";
import getsupports2 from "../../assets/images/get_supports2.jpg";
import subplan from "../../assets/images/subplan.svg";
import elevateyour from "../../assets/images/backgrounds/elevate_your.jpg";
import { ROUTES_PATH } from "@/utils/constant";
import WhatWeOffer from "./WhatWeOffer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setLoader, whatWeOffer } from "@/store/reducers/authReducer";
import { WhatWeOfferAction } from "@/store/actions/homeAction";
import { RootState } from "@/store/store";
import Reviewed from "../../shared/common-component/Reviewed";

const HomeComponent =  () => {
  const dispatch = useAppDispatch();
  const { whatWeOfferList, isLoaded } = useAppSelector((state: RootState) => state.auth);



  useEffect(() => {
    const FetchingData = async () => {
      await WhatWeOfferAction().then((res: any ) => {
        try {
          dispatch(setLoader(true));
          if (res.success) { 
            dispatch(whatWeOffer(res.data.what_we_offer));
          }
        } catch (error: any) {
        }
        finally {
          dispatch(setLoader(false));
        }
      })
    }
    FetchingData();
  }, [])


  return (
    <main className="main_content">
      <section className="guest_banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="guest_content">
                <div className="guest-title">
                  <h1>FUN AND FITNESS FOR ALL AGES!</h1>
                  <p>
                    We attract the best long-term associates to work with your
                    child in a safe, clean, climate-controlled facility.
                  </p>
                </div>
                <div className="subnow_link">
                  <button className="btn_animated primary_btn btn_blockmd">
                    Start Your Gymnastify Journey
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="guest_img">
                <Image
                  src={Guestbanner}
                  className="img-fluid"
                  alt="guest banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elevate_your">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="elevate_img">
                <Image src={elevateyour} alt="icons" className="img-fluid" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="elevate_content">
                <h4>Elevate Your Learning with Assignments</h4>
                <p>
                  Unlock your potential with our weekly skill-building
                  assignments.
                </p>
                <div className="elevate_btn">
                  <button className="btn_animated white_btn btn_blockmd">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="weve_got">
        <div className="container">
          <div className="sec_title text-center">
            <p>
              No Matter Your Fitness Level, Body Type, Mood, or Fitness Goal…
            </p>
            <h2>We’ve Got a Virtual Workout for You</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="weve_items text-center">
                <span className="weve_items_ribbons">PRE-SCHOOL</span>
                <div className="weve_items_icn">
                  <Image src={wakingup} alt="icos"></Image>
                </div>
                <h4>Red Room Levels</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="weve_items text-center">
                <span className="weve_items_ribbons">School Aged Children</span>
                <div className="weve_items_icn">
                  <Image src={wakingup} alt="icos"></Image>
                </div>
                <h4>Blue Room Girls Levels</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="weve_items text-center">
                <span className="weve_items_ribbons">School Aged Children</span>
                <div className="weve_items_icn">
                  <Image src={wakingup} alt="icos"></Image>
                </div>
                <h4>Blue Room Boys Levels</h4>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="weve_items text-center">
                <div className="weve_items_icn">
                  <Image src={wakingup} alt="icos"></Image>
                </div>
                <h4>Specialty Classes</h4>
              </div>
            </div>
          </div>
          <div className="skill_dic">
            <Link href={ROUTES_PATH.EXPLORESKILL} className="btn_animated primary_btn btn_blockmd">
              Explore Skill Dictionary
            </Link>
          </div>
        </div>
      </section>
      <section className="get_supports">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col_supports1">
              <div className="get_supports1">
                <Image
                  src={getsupports1}
                  alt="get supports"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4 col_supports2">
              <div className="get_supports2">
                <Image
                  src={getsupports2}
                  alt="get supports"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-5 col_supports3">
              <div className="get_support_block">
                <p>Need Expert Guidance?</p>
                <h5>Chat or Video Call Your Coach! </h5>
                <h4>Get support and personalized guidance</h4>
                <p>Connect with Coaches Now</p>
                <div className="get_subnow">
                  <button className="btn_animated white_btn btn_blockmd">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="subs_plan">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="subsplan_block">
                <div className="sec_title">
                  <h2>Subscription Plan</h2>
                </div>
                <div className="plan_sbtab">
                  <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                  >
                    <Tab eventKey="home" title="Monthly Billing">
                      <div className="subsplan_content position-relative">
                        <div className="subsplan_ele position-relative">
                          <h4>Pre-Recorded Classes</h4>
                          <div className="subplan_amount">
                            <div className="subplan_doller">$9</div>
                            <span>
                              .99 <span className="per_month">Per Month</span>
                            </span>
                          </div>
                          <p>
                            Dive into the world of knowledge with our Pre-
                            Recorded Class Subscription. Gain access to a rich
                            collection of pre-recorded classes on a variety of
                            skills.
                          </p>
                          <div className="recorderd_check">
                            <label className="gym_block">Home Assignments
                              <input type="checkbox" />
                              <span className="gym_block_marked"></span>
                            </label>
                            <label className="gym_block">Live classes
                              <input type="checkbox" />
                              <span className="gym_block_marked"></span>
                            </label>
                            <label className="gym_block">Instructor chat
                              <input type="checkbox" />
                              <span className="gym_block_marked"></span>
                            </label>
                          </div>
                          <div className="get_started">
                            <button className="btn_animated primary_btn btn_blockmd">
                              Get Started
                            </button>
                          </div>
                        </div>
                        <div className="sbsplan_layers"></div>
                      </div>
                    </Tab>
                    <Tab eventKey="profile" title="Annual Billing">
                      <div className="subsplan_content position-relative">
                        <div className="subsplan_ele position-relative">
                          <h4>Pre-Recorded Classes</h4>
                          <div className="subplan_amount">
                            <div className="subplan_doller">$15</div>
                            <span>
                              .99 <span className="per_month">Per Month</span>
                            </span>
                          </div>
                          <p>
                            Dive into the world of knowledge with our Pre-
                            Recorded Class Subscription. Gain access to a rich
                            collection of pre-recorded classes on a variety of
                            skills.
                          </p>
                          <div className="get_started">
                            <button className="btn_animated primary_btn btn_blockmd">
                              Get Started
                            </button>
                          </div>
                        </div>
                        <div className="sbsplan_layers"></div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="subsplan_img">
                <Image src={subplan} alt="subplan" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wf_what">
        <div className="container">
          <div className="sec_title text-center">
            <h2>What we offer</h2>
          </div>
          <div className="wf_row row">
            <WhatWeOffer whatWeOfferList={whatWeOfferList} isLoading={isLoaded} />
          </div>
        </div>
      </section>
      <section className="members_sayed">
        <div className="container">
          <div className="sec_title text-center">
            <h2>What our members are saying</h2>
          </div>
          <div className="member_slider">
            <Reviewed />
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
    </main>
  );
};
export default HomeComponent;
