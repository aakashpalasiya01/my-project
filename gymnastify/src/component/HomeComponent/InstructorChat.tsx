"use client";
import React,{ useState } from "react";
import Image from "next/image";
import dangerEmoji from "../../assets/images/icons/danger_emoji.png";
import warningEmoji from "../../assets/images/icons/warning_emoji.png";
import successEmoji from "../../assets/images/icons/success_emoji.png";
import plusCircle from "../../assets/images/icons/plus_circle.svg";
import micIcn from "../../assets/images/icons/mic_icn.svg";
import messageSend from "../../assets/images/icons/message_send_icn.svg";
import bookedmark from "../../assets/images/icons/booked_mark_icn.png";
import chatvideoPlay from "../../assets/images/icons/chat_video_play.svg";
import videicn from "../../assets/images/icons/vide_icn.png";
import chatlist_icn from "../../assets/images/icons/chat_list_icn.png";
import ellipseIcons from "../../assets/images/icons/dots_icn.png";
import add_circle_icn from "../../assets/images/icons/add_circle_icn.png";
import arrowCircle from "../../assets/images/icons/arrow-circle-left.png";
import eleanorPena from "../../assets/images/icons/eleanor_pena.png";
import robertCharles from "../../assets/images/icons/robert_charles.png";
import thumb from "../../assets/images/icons/thumb.png";
import video_chat_bg from "../../assets/images/icons/video_chat_bg.png";
import ComingSoon from "@/shared/common-component/ComingSoon";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import Link from "next/link";


function InstructorChat() {

  const [sidebarActive, setSidebarActive] = useState(false);

  const { subscription } = useAppSelector((state: RootState) => state.auth);


  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  }

  return (
    <main className="main_content">
        <ComingSoon />
      {/* <section className="container msg_chat_wrapper"> */}
            {/* <aside className={`msg_chat_list ${sidebarActive ? 'sidebar_active' : ''}`}>
            <div className="msg_chat_list_head">
              <h2>Chat</h2>
              <Link href="#">
                <Image src={add_circle_icn} alt="icons"></Image>
              </Link>
              <Link href="#" className="close_chat_sidebar" onClick={toggleSidebar}>
                <Image src={arrowCircle} alt="icons"></Image>
              </Link>
            </div>
            <form className="chat_searchbar_wrapper">
              <input
                type="search"
                className="form-control search_input"
                placeholder="Search instructor"
              />
            </form>
            <ul>
              <li className="is_active_usr">
                <Link href="#" className="msg_chat_user">
                  <div className="msg_chat_user_img">
                    <Image src={thumb} alt="icons"></Image>
                    <span></span>
                  </div>
                  <div className="msg_chat_user_img_cont">
                    <h4>Jimmy Lick</h4>
                    <p>I’ve always been on the fringe…</p>
                  </div>
                  <div className="msg_chat_user_time">
                    <p>Now</p>
                    <span>2</span>
                  </div>
                </Link>
              </li>

              <li>
                <Link href="#" className="msg_chat_user">
                  <div className="msg_chat_user_img">
                    <Image src={eleanorPena} alt="icons"></Image>
                  </div>
                  <div className="msg_chat_user_img_cont">
                    <h4>Eleanor Pena</h4>
                    <p>Let’s start the practice…</p>
                  </div>
                  <div className="msg_chat_user_time">
                    <p>20 min</p>
                  </div>
                </Link>
              </li>

              <li>
                <Link href="#" className="msg_chat_user">
                  <div className="msg_chat_user_img">
                    <Image src={robertCharles} alt="icons"></Image>
                  </div>
                  <div className="msg_chat_user_img_cont">
                    <h4>Robert Charles</h4>
                    <p>Ok Linda let’s see…</p>
                  </div>
                  <div className="msg_chat_user_time">
                    <p>1 hour</p>
                  </div>
                </Link>
              </li>

              <li>
                <Link href="#" className="msg_chat_user">
                  <div className="msg_chat_user_img">
                    <Image src={eleanorPena} alt="icons"></Image>
                  </div>
                  <div className="msg_chat_user_img_cont">
                    <h4>Miya Smith</h4>
                    <p>Loren Ipsum dolor sit…</p>
                  </div>
                  <div className="msg_chat_user_time">
                    <p>2 hour</p>
                  </div>
                </Link>
              </li>

              <li>
                <Link href="#" className="msg_chat_user">
                  <div className="msg_chat_user_img">
                    <Image src={robertCharles} alt="icons"></Image>
                    <span></span>
                  </div>
                  <div className="msg_chat_user_img_cont">
                    <h4>James Stark</h4>
                    <p>I’ve always been on the fringe…</p>
                  </div>
                  <div className="msg_chat_user_time">
                    <p>Yesterday</p>
                    <span>2</span>
                  </div>
                </Link>
              </li>

              <li>
                <Link href="#" className="msg_chat_user">
                  <div className="msg_chat_user_img">
                    <Image src={thumb} alt="icons"></Image>
                  </div>
                  <div className="msg_chat_user_img_cont">
                    <h4>Jimmy Lick</h4>
                    <p>I’ve always been on the fringe…</p>
                  </div>
                  <div className="msg_chat_user_time">
                    <p>3:15 PM</p>
                  </div>
                </Link>
              </li>

              <li>
                <Link href="#" className="msg_chat_user">
                  <div className="msg_chat_user_img">
                    <Image src={thumb} alt="icons"></Image>
                    <span></span>
                  </div>
                  <div className="msg_chat_user_img_cont">
                    <h4>Jimmy Lick</h4>
                    <p>I’ve always been on the fringe…</p>
                  </div>
                  <div className="msg_chat_user_time">
                    <p>Now</p>
                    <span>2</span>
                  </div>
                </Link>
              </li>

              <li>
                <Link href="#" className="msg_chat_user">
                  <div className="msg_chat_user_img">
                    <Image src={eleanorPena} alt="icons"></Image>
                  </div>
                  <div className="msg_chat_user_img_cont">
                    <h4>Eleanor Pena</h4>
                    <p>Let’s start the practice…</p>
                  </div>
                  <div className="msg_chat_user_time">
                    <p>20 min</p>
                  </div>
                </Link>
              </li>

              <li>
                <Link href="#" className="msg_chat_user">
                  <div className="msg_chat_user_img">
                    <Image src={eleanorPena} alt="icons"></Image>
                  </div>
                  <div className="msg_chat_user_img_cont">
                    <h4>Robert Charles</h4>
                    <p>Ok Linda let’s see…</p>
                  </div>
                  <div className="msg_chat_user_time">
                    <p>1 hour</p>
                  </div>
                </Link>
              </li>
            </ul>
          </aside>
          <article className="msg_chat_list_cont">
            <div className="msg_chat_top_user">
              <div className="msg_chat_top_user_img_cont">
                <h4>John Snow</h4>
                <p>
                  Active Now <span></span>
                </p>
              </div>
              <div className="msg_chat_header_right">
                <Link href="#" className="video_chat_link">
                  <Image src={videicn} alt="icons"></Image>
                </Link>

                <Link href="#" className="chat_list_link" onClick={toggleSidebar}>
                  <Image src={chatlist_icn} alt="icons"></Image>
                </Link>

                <Link href="#" className="chat_more_link">
                  <Image src={ellipseIcons} alt="icons"></Image>
                </Link>
              </div>
            </div>

            <div className="msg_chat_box_wrapper">
              <ul>
                {/* Message status */}
                {/* <div className="smg_chat_status">Today</div> */}

                {/* Outgoing message box */}
                {/* <li className="msg_outgoing">
                  <div className="msg_chat">
                    <div className="msg_chat_img_cont">
                      <Link href="#" className="msg_bookmerked">
                        <Image src={bookedmark} alt="icons"></Image>
                      </Link>
                      <p>I want to watch my videos</p>
                      <span className="msg_chat_img">
                        <Image src={eleanorPena} alt="icons"></Image>
                      </span>
                    </div>

                    <div className="msg_reaction_wrapper">
                      <ul className="msg_reaction_emoji">
                        <li>
                          <Link href="#">
                            <Image src={successEmoji} alt="icons"></Image>
                          </Link>
                        </li>

                        <li>
                          <Link href="#">
                            <Image src={warningEmoji} alt="icons"></Image>
                          </Link>
                        </li>

                        <li>
                          <Link href="#">
                            <Image src={dangerEmoji} alt="icons"></Image>
                          </Link>
                        </li>
                      </ul>
                      <span className="arrving_time">3:07 PM</span>
                    </div>
                  </div>
                </li> */}

                {/* Incomming message box */}
                {/* <li className="msg_incomming">
                  <div className="msg_chat">
                    <div className="msg_chat_img_cont">
                      <div className="msg_chat_img">
                        <Image src={thumb} alt="icons"></Image>
                      </div>
                      <p>
                        This is if the bot wants to give video suggestion for your
                        videos and practice videos…
                      </p>
                      <Link href="#" className="msg_bookmerked">
                        <Image src={bookedmark} alt="icons"></Image>
                      </Link>
                    </div>

                    <div className="msg_reaction_wrapper">
                      <ul className="msg_reaction_emoji">
                        <li>
                          <Link href="#">
                            <Image src={successEmoji} alt="icons"></Image>
                          </Link>
                        </li>

                        <li>
                          <Link href="#">
                            <Image src={warningEmoji} alt="icons"></Image>
                          </Link>
                        </li>

                        <li>
                          <Link href="#">
                            <Image src={dangerEmoji} alt="icons"></Image>
                          </Link>
                        </li>
                      </ul>
                      <span className="arrving_time">3:07 PM</span>
                    </div>
                  </div>
                </li> */}

                {/* <li className="msg_outgoing">
                  <div className="msg_chat">
                    <div className="msg_chat_img_cont">
                      <Link href="#" className="msg_bookmerked">
                        <Image src={bookedmark} alt="icons"></Image>
                      </Link>
                      <p>Hello, can we connect</p>
                      <span className="msg_chat_img">
                        <Image src={eleanorPena} alt="icons"></Image>
                      </span>
                    </div>

                    <div className="msg_reaction_wrapper">
                      <ul className="msg_reaction_emoji">
                        <li>
                          <Link href="#">
                            <Image src={successEmoji} alt="icons"></Image>
                          </Link>
                        </li>

                        <li>
                          <Link href="#">
                            <Image src={warningEmoji} alt="icons"></Image>
                          </Link>
                        </li>

                        <li>
                          <Link href="#">
                            <Image src={dangerEmoji} alt="icons"></Image>
                          </Link>
                        </li>
                      </ul>
                      <span className="arrving_time">3:07 PM</span>
                    </div>
                  </div>
                </li> */}

                {/* Incomming message box  */}
                {/* <li className="msg_incomming">
                  <div className="msg_chat">
                    <div className="msg_chat_img_cont">
                      <div className="msg_chat_img"> */}
                        {/* <img src="assets/images/thumbnails/thumb.png" alt="img" />  */}
                      {/* </div>
                      <div className="msg_chat_video">
                        <Image src={video_chat_bg} alt="icons"></Image>
                        <div className="msg_video_content">
                          <article>
                            <h6>Blue Room Girls Levels</h6>
                            <p>30 mins</p>
                          </article>

                          <Link href="#">
                            <Image src={chatvideoPlay} alt="icons"></Image>
                          </Link>
                        </div>
                      </div>
                      <Link href="#" className="msg_bookmerked">
                        <Image src={bookedmark} alt="icons"></Image>
                      </Link>
                    </div>
                  </div>
                </li> */}

                {/* Outgoing message box */}
                {/* <li className="msg_outgoing">
                  <div className="msg_chat">
                    <div className="msg_chat_img_cont">
                      <Link href="#" className="msg_bookmerked">
                        <Image src={bookedmark} alt="icons"></Image>
                      </Link>
                      <p>I want to watch my videos</p>
                      <span className="msg_chat_img">
                        <Image src={eleanorPena} alt="icons"></Image>
                      </span>
                    </div> */}

                    {/* <div className="msg_reaction_wrapper">
                      <ul className="msg_reaction_emoji">
                        <li>
                          <Link href="#">
                            <Image src={successEmoji} alt="icons"></Image>
                          </Link>
                        </li>

                        <li>
                          <Link href="#">
                            <Image src={warningEmoji} alt="icons"></Image>
                          </Link>
                        </li>

                        <li>
                          <Link href="#">
                            <Image src={dangerEmoji} alt="icons"></Image>
                          </Link>
                        </li>
                      </ul>
                      <span className="arrving_time">3:07 PM</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div> */}

            {/* <div className="msg_send_btn">
              <Link href="#" className="msg_action_btns">
                <Image src={plusCircle} alt="icons"></Image>
              </Link>

              <Link href="#" className="msg_action_btns">
                <Image src={micIcn} alt="icons"></Image>
              </Link>

              <div className="chat_input_wrapper">
                <input
                  className="chat_input_box"
                  type="text"
                  name="message_input"
                  id="message_input"
                  placeholder="Type a message"
                />
                <button className="message_send_btn">
                  <Image src={messageSend} alt="icons"></Image>
                </button>
              </div>
            </div> */}
          {/* </article> */}
        {/* // </section> */}

    </main>
  );
}

export default InstructorChat;
