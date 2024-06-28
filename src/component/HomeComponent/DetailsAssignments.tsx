"use client";
import React,{ useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "next/image";
import Link from "next/link";
import clockicn from "../../assets/images/icons/clock_icn.svg";
import volumeicn from "../../assets/images/icons/volume_icn.svg";
import usericn from "../../assets/images/icons/user_icn.svg";
import rating from "../../assets/images/icons/ratingh_icn.svg";
import editable from "../../assets/images/icons/edit_icn.svg";
import trashtable from "../../assets/images/icons/trash_icn.svg";
import penaicn from "../../assets/images/pena_icn.jpg";
import sessionicn from "../../assets/images/icons/session_icn.svg";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { AssignmentDetials } from "@/store/actions/assignmentAction";
import { RootState } from "@/store/store";
import { subscriptionStatus } from "@/utils/constant";
import VimeoVideo from "../VimeoComponent/VimeoVideo";
import { Rating } from "react-simple-star-rating";
import { AssignmentDetailDataTypes } from "@/types/AssignmentTypes";

function DetailsAssignments() {
    const dispatch =useAppDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const [loading ,setLoading]=useState(false);
  const { subscription, user } = useAppSelector((state: RootState) => state.auth);
  const isSubscribed = subscription && subscription?.status === subscriptionStatus.active
  const [assignmentDetails, setAssignmentDetails] = useState<AssignmentDetailDataTypes | null>(null);
  const renderingAssignmentDetailContent = assignmentDetails?.content?.rendered;
  const renderingAssignmentDetailCoach=assignmentDetails?.coach_note?.content
  const renderingAssignmentDetailsafety = assignmentDetails?.safety_instructions?.content


  console.log(assignmentDetails)


  useEffect(() => {
    const fetchAssignmentDetails = async () => {
        setLoading(true);
        try {
            const res = await dispatch(AssignmentDetials(663));
            setAssignmentDetails(res);
        } catch (error) {
            console.error('Failed to fetch assignment details:', error);
        } finally {
            setLoading(false);
        }
    };

    fetchAssignmentDetails();
}, [dispatch]);


  function formatNumberToStringWithOneDecimal(stringValue: string) {
    let numberValue = parseFloat(stringValue);
    let formattedValue = numberValue?.toFixed(1); 
    return formattedValue; 
}


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
              <div className="col-xl-9">
                <div className="single_left">
                  <div className="previdos_watch">
                  <VimeoVideo
                    videoId={
                      isSubscribed
                        ? assignmentDetails?.video_id
                        : assignmentDetails?.preview_video
                    }
                  />
                    <div className="vidos_watch_title">
                      <h4>Blue Room Girls Levels | Aerials</h4>
                  
                      <div
                      dangerouslySetInnerHTML={{
                        __html: renderingAssignmentDetailContent,
                      }}
                    ></div>
                    </div>
                  </div>
                </div>

                <div className="note_details">
                  <Tabs
                    defaultActiveKey="coachsnote"
                    id="uncontrolled-tab-example"
                    className="note_detailstab"
                  >
                    <Tab eventKey="coachsnote" title="Coach’s Note">
                      <div className="coach_note">
                        <div className="coach_note_block">
                          <div className="coach_title"></div>
                          <div className="coach_time">
                            Sep 18, 2023, 12:30PM
                          </div>
                        </div>
                        <div className="coach_card">
                     
                          <div
                      dangerouslySetInnerHTML={{
                        __html: renderingAssignmentDetailCoach,
                      }}
                    ></div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="safetyinstruc" title="Safety instructions">
                      <div className="coach_note">
                        <div className="coach_note_block">
                          <div className="coach_title"></div>
                          <div className="coach_time">
                            Sep 18, 2023, 12:30PM
                          </div>
                        </div>
                        <div className="coach_card">
                     
                          <div
                      dangerouslySetInnerHTML={{
                        __html: renderingAssignmentDetailsafety,
                      }}
                    ></div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey="chatkey" title="Chat">
                      <div className="mynote">
                        <div className="mytype_comenthead">
                          Type your Comments
                        </div>
                        <div className="notetext_field">
                          <textarea
                            className="note_textara"
                            placeholder="Add Notes"
                          ></textarea>
                          <div className="addnote_textfield">
                            <button className="btn_animated primary_btn btn_blocksm">
                              Send
                            </button>
                          </div>
                        </div>
                        <div className="notetext_field editable_text">
                          <div className="editable_text_block">
                            <div className="edittabl_profile">
                              <div className="edit_profile_img">
                                <Image src={penaicn} alt="icons"></Image>
                              </div>
                              <div className="edit_profile_content">
                                <div className="edit_profile_name">
                                  Eleanor Pena
                                </div>
                                <div className="editable">
                                  Sep 18, 2023, 12:30PM
                                </div>
                              </div>
                            </div>
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
                            customer relationship management tool? I because it
                            will help me understand how can support.
                          </p>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
              <div className="col-xl-3">
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
                     
                      {isSubscribed ? (
                      <div className="details_items_block">
                        <div className="ratings_group">
                          <span className="inline-block">{assignmentDetails?.average_rating ? formatNumberToStringWithOneDecimal(assignmentDetails?.average_rating): 0}</span>
                          <Rating
                            readonly
                            initialValue={parseFloat(parseFloat(assignmentDetails?.average_rating).toFixed(1))}
                            size={16}
                            className="inline-block"
                            emptyColor="#e2e2e2"
                            fillColor="#EA3E3C"
                            allowFraction
                          />
                          <span className="inline-block">{assignmentDetails?.rating_count}</span>
                        </div>
                      </div>
                    ) : (null)}
                    </div>
                    <div className="details_items ratings_items">
                      <div className="details_items_icn">
                        <p>Props</p>
                      </div>
                      <div className="details_items_block propsing_text">
                      <p>Ex: {assignmentDetails?.props?.join(', ')}</p>
                      </div>
                    </div>
                    <div className="details_items view_imglink">
                      <Link href="#">View Images</Link>
                    </div>
                  </div>
                  <div className="assign_detail_rightflow">
                    <div className="live_session">
                      <div className="live_sessicn">
                        <Image src={sessionicn} alt="icons" />
                      </div>
                      <h5>Request Live Session</h5>
                      <div className="live_sessbtn">
                        <button
                          onClick={handleShow}
                          className="btn_animated balck_btn btn_blockmd"
                        >
                          Request
                        </button>
                        <button className="cancel_btn">Cancel</button>
                      </div>
                    </div>
                    <div className="live_session">
                      <div className="session_flow">
                        <div className="sessionflow_itmes">
                          <div className="sessionflow_itmes_head">Date</div>
                          <div className="sessionflow_itmes_tag">Aug 24 2024</div>
                        </div>
                        <div className="sessionflow_itmes">
                          <div className="sessionflow_itmes_head">Time</div>
                          <div className="sessionflow_itmes_tag">10:00 AM</div>
                        </div>
                        <div className="sessionflow_itmes session_linkblock">
                          <div className="sessionflow_itmes_head">Session link</div>
                          <div className="sessionflow_itmes_tag"><Link className="session_links" href={"#"}>https://www. udemy.com/</Link></div>
                        </div>
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
                          <button className="btn_animated balck_btn">
                            Add Notes
                          </button>
                        </div>
                      </div>
                      <div className="notetext_field editable_text">
                        <div className="editable_text_block">
                          <div className="edittabl_profile">
                            <div className="edit_profile_content">
                              <div className="editable">
                                Sep 18, 2023, 12:30PM
                              </div>
                            </div>
                          </div>
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
                          customer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal className="request_live" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Request Live Session</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="requst_livefrm">
            <form action="">
              <div className="mb-3">
                <label className="ele_lable">Request Email ID</label>
                <input
                  className="ele_input form-control"
                  placeholder="johnsnow@email.com"
                  type="text"
                />
              </div>
              <div className="mb-3">
                <label className="ele_lable">Alternate Email ID</label>
                <input
                  className="ele_input form-control"
                  placeholder="Alternate Email ID"
                  type="text"
                />
              </div>
              <div className="mb-3">
                <label className="ele_lable">Message</label>
                <textarea
                  className="ele_input form-control"
                  rows="4"
                  cols="5"
                  placeholder="Type here"
                ></textarea>
              </div>
              <div className="msg_requstbtn">
                <button className="btn_animated primary_btn btn_block">
                  Send Request
                </button>
                <button className="cancel_btn">Cancel</button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </main>
  );
}

export default DetailsAssignments;
