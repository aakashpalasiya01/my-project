"use client";
import React from "react";
import Modal from "react-bootstrap/Modal";
import wakingup from "@/assets/images/icons/wakingup.png";
import Image from "next/image";
import 'react-loading-skeleton/dist/skeleton.css'
import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";
import isFavorites from "@/assets/images/icons/favorites_icn.svg";
import closedWatch from "@/assets/images/icons/closed_watch.svg";
import classImg from '@/assets/images/gym-6.webp'
import playicn from "@/assets/images/icons/play_icn.svg";

function WatchList() {

  return (
    <main className="main_content">
      <>
        <section className="offeres_block">
          <div className="weve_got">
            <div className="container">
              <div className="sec_title text-center">
                <p>No Matter Your Fitness Level, Body Type, Mood, or Fitness Goal…</p>
                <h2>Gymnastify offeres fun and fitness to all ages.</h2>
              </div>
              <div className="row">
                <div className="col-md-6 col-xl-3" data-aos="flip-left" data-aos-duration="1000">
                  <div className="white_bg weve_items text-center">
                    <span className="weve_items_ribbons">
                      School Aged Children
                    </span>
                    <div className="weve_items_icn">
                      <Image
                        src={wakingup
                        }
                        alt="wakingup"
                        width={58}
                        height={58}
                      ></Image>
                    </div>
                    <h4>
                      Blue Room Girls Levels
                    </h4>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="skill_list">
                    <div className="sec_title_md">
                      <h5>Skill</h5>
                      <ul className="skill_block">
                        <li key="all" data-aos="fade-left" data-aos-duration="1000">
                          <button
                            className={"skll_btn skll_isActived"}
                          >
                            All
                          </button>
                        </li>
                        <li key="all" data-aos="fade-left" data-aos-duration="1000">
                          <button
                            className={
                              "skll_btn"
                            }
                          >
                            Aerials
                          </button>
                        </li>
                        <li key="all" data-aos="fade-left" data-aos-duration="1000">
                          <button
                            className={
                              "skll_btn"
                            }
                          >
                            Cartwheels (CW)
                          </button>
                        </li>
                        <li key="all" data-aos="fade-left" data-aos-duration="1000">
                          <button
                            className={
                              "skll_btn"
                            }
                          >
                            Gainers
                          </button>
                        </li>
                        <li key="all" data-aos="fade-left" data-aos-duration="1000">
                          <button
                            className={
                              "skll_btn"
                            }
                          >
                            High School - JV
                          </button>
                        </li>
                        <li key="all" data-aos="fade-left" data-aos-duration="1000">
                          <button
                            className={
                              "skll_btn"
                            }
                          >
                            High School - Varsity
                          </button>
                        </li>
                        <li key="all" data-aos="fade-left" data-aos-duration="1000">
                          <button
                            className={
                              "skll_btn"
                            }
                          >
                            Kips
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="classes_area">
          <>
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
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fitler_area filter_search">
                      <div className="short_bydrop">
                        <Dropdown
                          className="dropdown_inner"
                        >
                          <Dropdown.Toggle
                            id="dropdown-basic"
                            className="dropdwn_btn"
                          >
                            <span className="balck_btn" >Sort By</span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <li>
                              <button type="button">Title A-Z</button>
                            </li>
                            <li>
                              <button type="button">Title Z-A</button>
                            </li>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
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
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="flip-left" data-aos-duration="1000">
                  <div className="classes_items position-relative">
                    <div className="classes_img">
                      <Image src={classImg} alt="levels1" width={311} height={148} />
                    </div>
                    <div className="classes_block">
                      <div className="arials_block">
                        <div className="favorites_block">
                          <div className="font12 aerials_tag">
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW)</span>
                          </div>
                          <div className="favorites_btn">
                            <button
                              type="button"
                            >
                              <Image
                                src={isFavorites}
                                alt="favorites"
                                width={19}
                                height={21}
                              />
                            </button>
                          </div>
                        </div>
                        <div className="levels_group">
                          <Link href={`#`}>
                            <div className="font12 levels_tag text-truncated">
                              <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Red Room Levels</span>
                            </div>
                          </Link>
                          <div className="levels_btn">
                            <button
                              type="button"
                            >
                              <Image src={closedWatch} alt="icons" width={15} height={15}></Image>
                            </button>
                            <Link href={`#`}>
                              <button type="button">
                                <Image src={playicn} alt="icosn" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="adult_class">
                        <Link className="font12 adult_tags" href="#">
                          All About Yoga: Poses, Types, Benefits -
                          Blue Room Girls LevelsRed Room Levels Matt Green</Link>
                        <span className="font12 duration">Duration - 16 secs</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="flip-left" data-aos-duration="1000">
                  <div className="classes_items position-relative">
                    <div className="classes_img">
                      <Image src={classImg} alt="levels1" width={311} height={148} />
                    </div>
                    <div className="classes_block">
                      <div className="arials_block">
                        <div className="favorites_block">
                          <div className="font12 aerials_tag">
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW)</span>
                          </div>
                          <div className="favorites_btn">
                            <button
                              type="button"
                            >
                              <Image
                                src={isFavorites}
                                alt="favorites"
                                width={19}
                                height={21}
                              />
                            </button>
                          </div>
                        </div>
                        <div className="levels_group">
                          <Link href={`#`}>
                            <div className="font12 levels_tag text-truncated">
                              <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Red Room Levels</span>
                            </div>
                          </Link>
                          <div className="levels_btn">
                            <button
                              type="button"
                            >
                              <Image src={closedWatch} alt="icons" width={15} height={15}></Image>
                            </button>
                            <Link href={`#`}>
                              <button type="button">
                                <Image src={playicn} alt="icosn" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="adult_class">
                        <Link className="font12 adult_tags" href="#">
                          All About Yoga: Poses, Types, Benefits -
                          Blue Room Girls LevelsRed Room Levels Matt Green</Link>
                        <span className="font12 duration">Duration - 16 secs</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="flip-left" data-aos-duration="1000">
                  <div className="classes_items position-relative">
                    <div className="classes_img">
                      <Image src={classImg} alt="levels1" width={311} height={148} />
                    </div>
                    <div className="classes_block">
                      <div className="arials_block">
                        <div className="favorites_block">
                          <div className="font12 aerials_tag">
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW)</span>
                          </div>
                          <div className="favorites_btn">
                            <button
                              type="button"
                            >
                              <Image
                                src={isFavorites}
                                alt="favorites"
                                width={19}
                                height={21}
                              />
                            </button>
                          </div>
                        </div>
                        <div className="levels_group">
                          <Link href={`#`}>
                            <div className="font12 levels_tag text-truncated">
                              <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Red Room Levels</span>
                            </div>
                          </Link>
                          <div className="levels_btn">
                            <button
                              type="button"
                            >
                              <Image src={closedWatch} alt="icons" width={15} height={15}></Image>
                            </button>
                            <Link href={`#`}>
                              <button type="button">
                                <Image src={playicn} alt="icosn" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="adult_class">
                        <Link className="font12 adult_tags" href="#">
                          All About Yoga: Poses, Types, Benefits -
                          Blue Room Girls LevelsRed Room Levels Matt Green</Link>
                        <span className="font12 duration">Duration - 16 secs</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="flip-left" data-aos-duration="1000">
                  <div className="classes_items position-relative">
                    <div className="classes_img">
                      <Image src={classImg} alt="levels1" width={311} height={148} />
                    </div>
                    <div className="classes_block">
                      <div className="arials_block">
                        <div className="favorites_block">
                          <div className="font12 aerials_tag">
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW)</span>
                          </div>
                          <div className="favorites_btn">
                            <button
                              type="button"
                            >
                              <Image
                                src={isFavorites}
                                alt="favorites"
                                width={19}
                                height={21}
                              />
                            </button>
                          </div>
                        </div>
                        <div className="levels_group">
                          <Link href={`#`}>
                            <div className="font12 levels_tag text-truncated">
                              <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Red Room Levels</span>
                            </div>
                          </Link>
                          <div className="levels_btn">
                            <button
                              type="button"
                            >
                              <Image src={closedWatch} alt="icons" width={15} height={15}></Image>
                            </button>
                            <Link href={`#`}>
                              <button type="button">
                                <Image src={playicn} alt="icosn" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="adult_class">
                        <Link className="font12 adult_tags" href="#">
                          All About Yoga: Poses, Types, Benefits -
                          Blue Room Girls LevelsRed Room Levels Matt Green</Link>
                        <span className="font12 duration">Duration - 16 secs</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="flip-left" data-aos-duration="1000">
                  <div className="classes_items position-relative">
                    <div className="classes_img">
                      <Image src={classImg} alt="levels1" width={311} height={148} />
                    </div>
                    <div className="classes_block">
                      <div className="arials_block">
                        <div className="favorites_block">
                          <div className="font12 aerials_tag">
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW)</span>
                          </div>
                          <div className="favorites_btn">
                            <button
                              type="button"
                            >
                              <Image
                                src={isFavorites}
                                alt="favorites"
                                width={19}
                                height={21}
                              />
                            </button>
                          </div>
                        </div>
                        <div className="levels_group">
                          <Link href={`#`}>
                            <div className="font12 levels_tag text-truncated">
                              <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Red Room Levels</span>
                            </div>
                          </Link>
                          <div className="levels_btn">
                            <button
                              type="button"
                            >
                              <Image src={closedWatch} alt="icons" width={15} height={15}></Image>
                            </button>
                            <Link href={`#`}>
                              <button type="button">
                                <Image src={playicn} alt="icosn" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="adult_class">
                        <Link className="font12 adult_tags" href="#">
                          All About Yoga: Poses, Types, Benefits -
                          Blue Room Girls LevelsRed Room Levels Matt Green</Link>
                        <span className="font12 duration">Duration - 16 secs</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="flip-left" data-aos-duration="1000">
                  <div className="classes_items position-relative">
                    <div className="classes_img">
                      <Image src={classImg} alt="levels1" width={311} height={148} />
                    </div>
                    <div className="classes_block">
                      <div className="arials_block">
                        <div className="favorites_block">
                          <div className="font12 aerials_tag">
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW)</span>
                          </div>
                          <div className="favorites_btn">
                            <button
                              type="button"
                            >
                              <Image
                                src={isFavorites}
                                alt="favorites"
                                width={19}
                                height={21}
                              />
                            </button>
                          </div>
                        </div>
                        <div className="levels_group">
                          <Link href={`#`}>
                            <div className="font12 levels_tag text-truncated">
                              <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Red Room Levels</span>
                            </div>
                          </Link>
                          <div className="levels_btn">
                            <button
                              type="button"
                            >
                              <Image src={closedWatch} alt="icons" width={15} height={15}></Image>
                            </button>
                            <Link href={`#`}>
                              <button type="button">
                                <Image src={playicn} alt="icosn" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="adult_class">
                        <Link className="font12 adult_tags" href="#">
                          All About Yoga: Poses, Types, Benefits -
                          Blue Room Girls LevelsRed Room Levels Matt Green</Link>
                        <span className="font12 duration">Duration - 16 secs</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="flip-left" data-aos-duration="1000">
                  <div className="classes_items position-relative">
                    <div className="classes_img">
                      <Image src={classImg} alt="levels1" width={311} height={148} />
                    </div>
                    <div className="classes_block">
                      <div className="arials_block">
                        <div className="favorites_block">
                          <div className="font12 aerials_tag">
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW)</span>
                          </div>
                          <div className="favorites_btn">
                            <button
                              type="button"
                            >
                              <Image
                                src={isFavorites}
                                alt="favorites"
                                width={19}
                                height={21}
                              />
                            </button>
                          </div>
                        </div>
                        <div className="levels_group">
                          <Link href={`#`}>
                            <div className="font12 levels_tag text-truncated">
                              <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Red Room Levels</span>
                            </div>
                          </Link>
                          <div className="levels_btn">
                            <button
                              type="button"
                            >
                              <Image src={closedWatch} alt="icons" width={15} height={15}></Image>
                            </button>
                            <Link href={`#`}>
                              <button type="button">
                                <Image src={playicn} alt="icosn" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="adult_class">
                        <Link className="font12 adult_tags" href="#">
                          All About Yoga: Poses, Types, Benefits -
                          Blue Room Girls LevelsRed Room Levels Matt Green</Link>
                        <span className="font12 duration">Duration - 16 secs</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="flip-left" data-aos-duration="1000">
                  <div className="classes_items position-relative">
                    <div className="classes_img">
                      <Image src={classImg} alt="levels1" width={311} height={148} />
                    </div>
                    <div className="classes_block">
                      <div className="arials_block">
                        <div className="favorites_block">
                          <div className="font12 aerials_tag">
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW)</span>
                          </div>
                          <div className="favorites_btn">
                            <button
                              type="button"
                            >
                              <Image
                                src={isFavorites}
                                alt="favorites"
                                width={19}
                                height={21}
                              />
                            </button>
                          </div>
                        </div>
                        <div className="levels_group">
                          <Link href={`#`}>
                            <div className="font12 levels_tag text-truncated">
                              <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Red Room Levels</span>
                            </div>
                          </Link>
                          <div className="levels_btn">
                            <button
                              type="button"
                            >
                              <Image src={closedWatch} alt="icons" width={15} height={15}></Image>
                            </button>
                            <Link href={`#`}>
                              <button type="button">
                                <Image src={playicn} alt="icosn" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="adult_class">
                        <Link className="font12 adult_tags" href="#">
                          All About Yoga: Poses, Types, Benefits -
                          Blue Room Girls LevelsRed Room Levels Matt Green</Link>
                        <span className="font12 duration">Duration - 16 secs</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="flip-left" data-aos-duration="1000">
                  <div className="classes_items position-relative">
                    <div className="classes_img">
                      <Image src={classImg} alt="levels1" width={311} height={148} />
                    </div>
                    <div className="classes_block">
                      <div className="arials_block">
                        <div className="favorites_block">
                          <div className="font12 aerials_tag">
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW)</span>
                          </div>
                          <div className="favorites_btn">
                            <button
                              type="button"
                            >
                              <Image
                                src={isFavorites}
                                alt="favorites"
                                width={19}
                                height={21}
                              />
                            </button>
                          </div>
                        </div>
                        <div className="levels_group">
                          <Link href={`#`}>
                            <div className="font12 levels_tag text-truncated">
                              <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Red Room Levels</span>
                            </div>
                          </Link>
                          <div className="levels_btn">
                            <button
                              type="button"
                            >
                              <Image src={closedWatch} alt="icons" width={15} height={15}></Image>
                            </button>
                            <Link href={`#`}>
                              <button type="button">
                                <Image src={playicn} alt="icosn" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="adult_class">
                        <Link className="font12 adult_tags" href="#">
                          All About Yoga: Poses, Types, Benefits -
                          Blue Room Girls LevelsRed Room Levels Matt Green</Link>
                        <span className="font12 duration">Duration - 16 secs</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="flip-left" data-aos-duration="1000">
                  <div className="classes_items position-relative">
                    <div className="classes_img">
                      <Image src={classImg} alt="levels1" width={311} height={148} />
                    </div>
                    <div className="classes_block">
                      <div className="arials_block">
                        <div className="favorites_block">
                          <div className="font12 aerials_tag">
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW)</span>
                          </div>
                          <div className="favorites_btn">
                            <button
                              type="button"
                            >
                              <Image
                                src={isFavorites}
                                alt="favorites"
                                width={19}
                                height={21}
                              />
                            </button>
                          </div>
                        </div>
                        <div className="levels_group">
                          <Link href={`#`}>
                            <div className="font12 levels_tag text-truncated">
                              <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Red Room Levels</span>
                            </div>
                          </Link>
                          <div className="levels_btn">
                            <button
                              type="button"
                            >
                              <Image src={closedWatch} alt="icons" width={15} height={15}></Image>
                            </button>
                            <Link href={`#`}>
                              <button type="button">
                                <Image src={playicn} alt="icosn" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="adult_class">
                        <Link className="font12 adult_tags" href="#">
                          All About Yoga: Poses, Types, Benefits -
                          Blue Room Girls LevelsRed Room Levels Matt Green</Link>
                        <span className="font12 duration">Duration - 16 secs</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="flip-left" data-aos-duration="1000">
                  <div className="classes_items position-relative">
                    <div className="classes_img">
                      <Image src={classImg} alt="levels1" width={311} height={148} />
                    </div>
                    <div className="classes_block">
                      <div className="arials_block">
                        <div className="favorites_block">
                          <div className="font12 aerials_tag">
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW)</span>
                          </div>
                          <div className="favorites_btn">
                            <button
                              type="button"
                            >
                              <Image
                                src={isFavorites}
                                alt="favorites"
                                width={19}
                                height={21}
                              />
                            </button>
                          </div>
                        </div>
                        <div className="levels_group">
                          <Link href={`#`}>
                            <div className="font12 levels_tag text-truncated">
                              <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Red Room Levels</span>
                            </div>
                          </Link>
                          <div className="levels_btn">
                            <button
                              type="button"
                            >
                              <Image src={closedWatch} alt="icons" width={15} height={15}></Image>
                            </button>
                            <Link href={`#`}>
                              <button type="button">
                                <Image src={playicn} alt="icosn" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="adult_class">
                        <Link className="font12 adult_tags" href="#">
                          All About Yoga: Poses, Types, Benefits -
                          Blue Room Girls LevelsRed Room Levels Matt Green</Link>
                        <span className="font12 duration">Duration - 16 secs</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" data-aos="flip-left" data-aos-duration="1000">
                  <div className="classes_items position-relative">
                    <div className="classes_img">
                      <Image src={classImg} alt="levels1" width={311} height={148} />
                    </div>
                    <div className="classes_block">
                      <div className="arials_block">
                        <div className="favorites_block">
                          <div className="font12 aerials_tag">
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW) ,</span>
                            <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Cartwheels (CW)</span>
                          </div>
                          <div className="favorites_btn">
                            <button
                              type="button"
                            >
                              <Image
                                src={isFavorites}
                                alt="favorites"
                                width={19}
                                height={21}
                              />
                            </button>
                          </div>
                        </div>
                        <div className="levels_group">
                          <Link href={`#`}>
                            <div className="font12 levels_tag text-truncated">
                              <span style={{ paddingLeft: '3px', paddingRight: '3px' }}>Red Room Levels</span>
                            </div>
                          </Link>
                          <div className="levels_btn">
                            <button
                              type="button"
                            >
                              <Image src={closedWatch} alt="icons" width={15} height={15}></Image>
                            </button>
                            <Link href={`#`}>
                              <button type="button">
                                <Image src={playicn} alt="icosn" />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="adult_class">
                        <Link className="font12 adult_tags" href="#">
                          All About Yoga: Poses, Types, Benefits -
                          Blue Room Girls LevelsRed Room Levels Matt Green</Link>
                        <span className="font12 duration">Duration - 16 secs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn_videos text-center">
                <button className="btn_animated btn_blockmd primary_btn"> Load More
                </button>
              </div>
            </div>
          </>
        </section>
        <Modal className="preview_video" >
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
    </main>
  );
}

export default WatchList;
