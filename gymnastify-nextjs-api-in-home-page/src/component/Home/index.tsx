/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-bootstrap/Modal";
import { RootState } from "@/store/store";
import Skill from "./RegisterSkill";
import Reviewed from "../HomeComponent/Reviewed";
import ClassesComponent from "./RegisteredClasses";
import RegisterBanner from "./RegisterBanner";
import { RegisteredPagination } from "./Register";
import { useAppSelector } from "@/store/hooks";
import SubscriptionPlan from "./SubscriptionPlan";

function Registered() {
    const defalutPagination: RegisteredPagination = {
        page: 1,
        per_page: 12,
        usag_level: '',
        level_skills: '',
        search: '',
        order_by:'title',
        order:'asc'
    }
    const { Testimonials } = useAppSelector((state: RootState) => state.home);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [pagination, setPagination] = useState(defalutPagination);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (
        <main className="main_content">
            <RegisterBanner />
            <section className="offeres_block">
                <Skill setPagination={setPagination}  pagination={pagination}/>
            </section>
            <section className="classes_area">
                <ClassesComponent
                    setTotalData={setTotalCount}
                    TotalData={totalCount}
                    setPagination={setPagination}
                    pagination={pagination}
                />
            </section>

            <SubscriptionPlan />

            <section className="members_sayed">
                <div className="container">
                    <div className="member_slider">
                        <Reviewed Testimonials={Testimonials} />
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

export default Registered;
