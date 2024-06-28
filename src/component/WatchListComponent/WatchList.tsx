"use client";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import WatchListSkill from "./WatchListSkill";
import WatchListClasses from "./WatchListClasses";
import { WatchListPagination } from "./WatchListType";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { uniqueid } from "@/utils/CommonService";
import SubscribedProduct from "@/shared/common-component/SubscribedProduct";
import { subscriptionStatus } from "@/utils/constant";

function WatchList() {

  const { Profile } = useAppSelector((state: RootState) => state.profile);
  const { subscription } = useAppSelector((state: RootState) => state.auth);
  const userID: string = Profile?.user_id;

  const defalutPagination: WatchListPagination = {
    level_skills: '',
    search: '',
    group: '',
    page: 1,
    per_page: 12,
    user_id: userID,
    order_by: 'title',
    order: 'asc',
    class_id: '',
    cache: uniqueid(),
    class_data: 0,
    total_data: 0
  }

  const [show, setShow] = useState(false);
  const [pagination, setPagination] = useState(defalutPagination);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main className="main_content">
      {subscription?.status !== subscriptionStatus.active ? (<SubscribedProduct />) : (
        <>
          <section className="offeres_block">
            <WatchListSkill setPagination={setPagination} pagination={pagination} />
          </section>
          <section className="classes_area">
            <WatchListClasses handleShow={handleShow} setPagination={setPagination} pagination={pagination} />
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
                        <track kind="captions" />
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
                              <track kind="captions" />
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
                              <track kind="captions" />
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
                            <track kind="captions" />
                            <video width="100" height="65" poster="" controls>
                              <track kind="captions" />
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
        </>
      )}

    </main>
  );
}

export default WatchList;
