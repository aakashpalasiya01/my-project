"use client";
import { useState } from "react";
import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import clockicn from "../../assets/images/icons/clock_icn.svg";
import volumeicn from "../../assets/images/icons/volume_icn.svg";
import usericn from "../../assets/images/icons/user_icn.svg";
import rating from "../../assets/images/icons/ratingh_icn.svg";
import editable from "../../assets/images/icons/edit_icn.svg";
import trashtable from "../../assets/images/icons/trash_icn.svg";
function DetailsAssignments() {
  return (
    <main className="main_content">
      <section className="detail_assignflow">
      <section className="bred_eles">
        <div className="container">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Explore Skill Dictionary</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </section>
        <div className="single_class">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="single_class_title">
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
                      <p>
                        Bring your Pilates ring for this total body mat Pilates
                        sculpt session. Flow through traditional Pilates moves
                        designed to create long lean muscles, using your ring
                        for added assistance AND added intensity. Hit play to
                        feel the burn!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="note_details">
                  <div className="coach_note">
                    <div className="coach_note_block">
                      <div className="coach_title">Coach’s Note</div>
                      <div className="coach_time">Sep 18, 2023, 12:30PM</div>
                    </div>
                    <div className="coach_card">
                      <p>
                        To help you get the most out of your trial, I have a
                        quick question for you: <br /> What, specifically, are
                        you hoping to achieve with a customer relationship
                        management tool? I because it will help me understand
                        how can support.
                      </p>
                    </div>
                  </div>
                  <div className="mynote">
                    <div className="mynote_title">My Notes</div>
                    <div className="notetext_field">
                      <textarea
                        className="note_textara"
                        placeholder="Add Notes"
                      ></textarea>
                      <div className="addnote_textfield">
                        <button className="btn_animated balck_btn">Add Notes</button>
                      </div>
                    </div>
                    <div className="notetext_field editable_text">
                      <div className="editable_text_block">
                        <div className="editable">Sep 18, 2023, 12:30PM</div>
                        <div className="editable_btn">
                          <button className="btn_editable">
                            <Image
                              width={17}
                              src={editable}
                              alt="icons"
                            ></Image>
                          </button>
                          <button className="deleted_editable">
                            <Image
                              width={17}
                              src={trashtable}
                              alt="icons"
                            ></Image>
                          </button>
                        </div>
                      </div>
                      <p>
                        What, specifically, are you hoping to achieve with a
                        customer relationship management tool? I because it will
                        help me understand how can support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="details_others">
                  <div className="details_others_title">Other Details</div>
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
                          <span className="inline-block">4.5</span>
                          <Image
                            className="inline-block rating_details"
                            src={rating}
                            alt="icons"
                          ></Image>
                          <span className="inline-block">69.20</span>
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
        </div>
      </section>
    </main>
  );
}

export default DetailsAssignments;
