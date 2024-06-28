"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import assign from "../../assets/images/assign.jpg";
import assignProfile from "../../assets/images/assign_profile.jpg";
import ProgressBar from "react-bootstrap/ProgressBar";
import leaverating from "../../assets/images/icons/leave_rating.svg";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import getsupports1 from "../../assets/images/get_supports1.jpg";
import getsupports2 from "../../assets/images/get_supports2.jpg";
import join1 from "../../assets/images/join1.jpg";
import join2 from "../../assets/images/join2.jpg";
import join3 from "../../assets/images/join3.jpg";
import join4 from "../../assets/images/join4.jpg";
import expert1 from "../../assets/images/expert1.jpg";
import expert2 from "../../assets/images/expert2.jpg";
import expert3 from "../../assets/images/expert3.jpg";
import AssignmentCard from "./AssignmentCard";
import { beginnersSection } from "@/store/actions/assignmentAction";

function Assignments() {
  const { subscription } = useAppSelector((state: RootState) => state.auth);
  const { beginners } = useAppSelector(state => state.assignment);
  
  const defaultPagination : any = {
      page:1,
      per_page:4,
      group: "blue-room-girls-levels",
      category : ""
  }
  
  const dispatch = useAppDispatch();

  const fetchBeginnersSection = async () => {
      await dispatch(beginnersSection(defaultPagination));
  };

  useEffect(() => {
      fetchBeginnersSection();
  }, []);
  
  return (
    <main className="main_content">
      {/* <ComingSoon /> */}
      <section className="assignments_block">
        <div className="container">
          <div className="assign_ments">
            <div className="assign_head">
              <h3>Assignments</h3>
            </div>
            <div className="assign_form">
              <div className="not_started">
                <select
                  className="form-control ele_input ele_select"
                  name=""
                  id=""
                >
                  <option value="">Not Started</option>
                  <option value="">Not Started</option>
                  <option value="">Not Started</option>
                  <option value="">Not Started</option>
                </select>
                <button className="reset_btn">Reset</button>
              </div>
              <div className="assign_search">
                <input
                  className="form-control ele_input search_icn"
                  type="text"
                  placeholder="Search here…"
                />
              </div>
            </div>
          </div>
          <div className="begin_title">
            <div className="sec_title_md">
              <h5>Beginners</h5>
            </div>
            <div className="begin_link">
              <Link href={"#"}>View All</Link>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="assignments_items">
                <div className="assign_product">
                  <Image
                    src={assign}
                    alt="product"
                    className="img-fluid"
                  ></Image>
                </div>
                <div className="assign_content">
                  <Link href="">Blue Room Girls Levels</Link>
                  <div className="assign_profile">
                    <div className="assign_img">
                      <Image src={assignProfile} alt="icons"></Image>
                    </div>
                    <div className="assign_title">John Snow</div>
                  </div>
                  <div className="progress_assign">
                    <ProgressBar now={now} label={`${now}%`} />
                
                    <div className="process_com">
                      <div className="procees_percentage">48% Complete</div>
                      <div className="leave_rating">
                        <div className="leave_rating_img">
                          <Image src={leaverating} alt="icosn"></Image>
                        </div>
                        Leave a rating
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="assignments_items">
                <div className="assign_product">
                  <Image
                    src={assign}
                    alt="product"
                    className="img-fluid"
                  ></Image>
                </div>
                <div className="assign_content">
                  <Link href="">Blue Room Girls Levels</Link>
                  <div className="assign_profile">
                    <div className="assign_img">
                      <Image src={assignProfile} alt="icons"></Image>
                    </div>
                    <div className="assign_title">John Snow</div>
                  </div>
                  <div className="progress_assign">
                    <ProgressBar now={now} label={`${now}%`} />
                    <div className="process_com">
                      <div className="procees_percentage">48% Complete</div>
                      <div className="leave_rating">
                        <div className="leave_rating_img">
                          <Image src={leaverating} alt="icosn"></Image>
                        </div>
                        Leave a rating
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="assignments_items">
                <div className="assign_product">
                  <Image
                    src={assign}
                    alt="product"
                    className="img-fluid"
                  ></Image>
                </div>
                <div className="assign_content">
                  <Link href="">Blue Room Girls Levels</Link>
                  <div className="assign_profile">
                    <div className="assign_img">
                      <Image src={assignProfile} alt="icons"></Image>
                    </div>
                    <div className="assign_title">John Snow</div>
                  </div>
                  <div className="progress_assign">
                    <ProgressBar now={now} label={`${now}%`} />
                    <div className="process_com">
                      <div className="procees_percentage">48% Complete</div>
                      <div className="leave_rating">
                        <div className="leave_rating_img">
                          <Image src={leaverating} alt="icosn"></Image>
                        </div>
                        Leave a rating
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="assignments_items">
                <div className="assign_product">
                  <Image
                    src={assign}
                    alt="product"
                    className="img-fluid"
                  ></Image>
                </div>
                <div className="assign_content">
                  <Link href="">Blue Room Girls Levels</Link>
                  <div className="assign_profile">
                    <div className="assign_img">
                      <Image src={assignProfile} alt="icons"></Image>
                    </div>
                    <div className="assign_title">John Snow</div>
                  </div>
                  <div className="progress_assign">
                    <ProgressBar now={now} label={`${now}%`} />
                    <div className="process_com">
                      <div className="procees_percentage">48% Complete</div>
                      <div className="leave_rating">
                        <div className="leave_rating_img">
                          <Image src={leaverating} alt="icosn"></Image>
                        </div>
                        Leave a rating
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <AssignmentCard beginners={beginners}/>
          </div>
        </div>
      </section>
      <section className="inter_mediate assign_flowsec">
        <div className="container">
          <div className="sec_title_md">
            <h5>Intermediate</h5>
          </div>
          <div className="get_supports">
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
                <div className="get_support_block assign_boostflow">
                  <p>Assignments</p>
                  <h5>Boost Collaboration</h5>
                  <p>Connect with Coaches Now</p>
                  <div className="get_subnow">
                    <button className="btn_animated white_btn btn_blockmd">
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="advanced_block assign_flowsec">
        <div className="container">
          <div className="sec_title_md">
            <h5>Advanced</h5>
          </div>
          <div className="get_supports">
            <div className="row align-items-center">
              <div className="col-xl-6 advancedcol_left">
                <div className="advance_joinrow">
                  <div className="advance_joincol">
                    <div className="advance_joinimg">
                      <Image src={join1} alt="icons"></Image>
                    </div>
                  </div>
                  <div className="advance_joincol">
                    <div className="advance_joinimg">
                      <Image src={join2} alt="icons"></Image>
                    </div>
                  </div>
                  <div className="advance_joincol">
                    <div className="advance_joinimg">
                      <Image src={join3} alt="icons"></Image>
                    </div>
                  </div>
                  <div className="advance_joincol">
                    <div className="advance_joinimg">
                      <Image src={join4} alt="icons"></Image>
                    </div>
                  </div>
                </div>
                <div className="advanced_content text-center">
                  <h5>Join Our Thrilling Advanced Assignments</h5>
                  <p>
                    Experience real-time instruction from our top-notch
                    instructors. Boost your skills, interact with coaches, and
                    achieve greatness with Gyminny Kids.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 advancedcol_right">
                <div className="get_support_block assign_boostflow">
                  <p>Assignments</p>
                  <h5>Advanced</h5>
                  <div className="get_subnow">
                    <button className="btn_animated white_btn btn_blockmd">
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="expert_block assign_flowsec">
        <div className="container">
          <div className="sec_title_md">
            <h5>Expert</h5>
          </div>
          <div className="get_supports">
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="row">
                   <div className="col-md-4">
                      <div className="expert_img">
                        <Image src={expert1} alt="icons"/>
                      </div>
                    </div> 
                    <div className="col-md-4">
                      <div className="expert_img">
                        <Image src={expert2} alt="icons"/>
                      </div>
                    </div> 
                    <div className="col-md-4">
                      <div className="expert_img">
                        <Image src={expert3} alt="icons"/>
                      </div>
                    </div> 
                </div>
              </div>
              <div className="col-xl-6">
                <div className="get_support_block assign_boostflow">
                  <p>Assignments</p>
                  <h5>Expert</h5>
                  <div className="get_subnow">
                    <button className="btn_animated white_btn btn_blockmd">
                      Purchase
                    </button>
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

export default Assignments;
