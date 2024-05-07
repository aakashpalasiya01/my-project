"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import wakingup from "../../assets/images/icons/wakingup.png";
import playicn from "../../assets/images/icons/play_icn.svg";
import levels1 from "../../assets/images/levels1.jpg";
import levels2 from "../../assets/images/levels2.jpg";
import levels3 from "../../assets/images/levels3.jpg";
import filltericon from "../../assets/images/icons/filter_icn.svg";
import unFavorites from "../../assets/images/icons/unfavorites_icn.svg";
import isFavorites from "../../assets/images/icons/favorites_icn.svg";
import plusWhite from "../../assets/images/icons/plus_white_icn.svg";


function WatchList() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [favorites, setFavorites] = useState(false);
  const FavoritesLabel = () => {
    setFavorites(!favorites);
  };

  return (
    <main className="main_content">
      <section className="classes_area favorites_page">
      <section className="bred_eles">
        <div className="container">
          <Breadcrumb>
            <Breadcrumb.Item className="point_none" href="#">Favorites</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </section>
        <div className="filter">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="filter_search">
                  <input
                    type="text"
                    className="form-control ele_input search_icn"
                    placeholder="What can we help you find ?"
                  />
                  <button className="balck_btn search_btn">CC</button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="fitler_area">
                  <button className="balck_btn">Short By</button>
                  <button className="balck_btn">
                    {" "}
                    <Image
                      className="fillter_icn"
                      src={filltericon}
                      alt="icons"
                    ></Image>{" "}
                    Filters
                  </button>
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
                    <div className="favorites_block">
                      <div className="font12 aerials_tag">Aerials</div>
                      <div className="favorites_btn">
                        <button type="button" onClick={FavoritesLabel}>
                          <Image
                            src={favorites ? unFavorites : isFavorites}
                            alt="favorites"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="levels_group">
                      <div className="font12 levels_tag">
                        Blue Room Girls Levels
                      </div>
                      <div className="levels_btn">
                        <Link href=""><Image src={plusWhite} alt="icons"></Image></Link>
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
                    <div className="favorites_block">
                      <div className="font12 aerials_tag">Aerials</div>
                      <div className="favorites_btn">
                        <button type="button" onClick={FavoritesLabel}>
                          <Image
                            src={favorites ? unFavorites : isFavorites}
                            alt="favorites"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="levels_group">
                      <div className="font12 levels_tag">
                        Blue Room Girls Levels
                      </div>
                      <div className="levels_btn">
                      <Link href=""><Image src={plusWhite} alt="icons"></Image></Link>
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
                    <div className="favorites_block">
                      <div className="font12 aerials_tag">Aerials</div>
                      <div className="favorites_btn">
                        <button type="button" onClick={FavoritesLabel}>
                          <Image
                            src={favorites ? unFavorites : isFavorites}
                            alt="favorites"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="levels_group">
                      <div className="font12 levels_tag">
                        Blue Room Girls Levels
                      </div>
                      <div className="levels_btn">
                      <Link href=""><Image src={plusWhite} alt="icons"></Image></Link>
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
                    <div className="favorites_block">
                      <div className="font12 aerials_tag">Aerials</div>
                      <div className="favorites_btn">
                        <button type="button" onClick={FavoritesLabel}>
                          <Image
                            src={favorites ? unFavorites : isFavorites}
                            alt="favorites"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="levels_group">
                      <div className="font12 levels_tag">
                        Blue Room Girls Levels
                      </div>
                      <div className="levels_btn">
                      <Link href=""><Image src={plusWhite} alt="icons"></Image></Link>
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

export default WatchList;
