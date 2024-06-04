/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FitnessImg from '@/assets/images/fitness.png'
import wakingup from "@/assets/images/icons/wakingup.png";
import Dropdown from "react-bootstrap/Dropdown";
import playicn from "@/assets/images/icons/play_icn.svg";
import Link from 'next/link';
import isFavorites from "@/assets/images/icons/favorites_icn.svg";
import closedWatch from "@/assets/images/icons/closed_watch.svg";
import classImg from '@/assets/images/gym-6.webp'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "next/image";
import subplan from "@/assets/images/subplan.svg";
import testimonials from "@/assets/images/testimonials.png";
import ratinghicn from "@/assets/images/icons/ratingh_icn.svg";
import Slider from "react-slick";
import { settings } from '@/utils/commonsettings';


function Registered() {

    return (
        <main className="main_content">
            <section className="explore_banner" style={{ backgroundImage: `${FitnessImg}` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6">
                            <div className="explore_block">
                                <h6 data-aos="fade-left" data-aos-duration="1000">Maximize Your Gymnastics Experience!</h6>
                                <h4 data-aos="fade-left" data-aos-duration="1000">
                                    Upgrade to Premium for Video Assignments, Expert Coaching, and Live Classes.
                                    <span className="invets_text">Invest in Your Progress</span>
                                </h4>
                                <div className="explore_btn" data-aos="fade-left" data-aos-duration="1000">
                                    <a className="btn_animated white_btn btn_blockmd" href='#subs_plan'>
                                        Subscribe Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="offeres_block">
                <div className="weve_got">
                    <div className="container">
                        <div className="sec_title text-center">
                            <div className="sec_title_md">Skill Dictionary</div>
                            <p>No Matter Your Fitness Level, Body Type, Mood, or Fitness Goal…</p>
                            <h2>Gymnastify offeres fun and fitness to all ages.</h2>
                            <div className="row">
                                <div className="col-md-6 col-xl-3" data-aos="flip-left" data-aos-duration="1000">
                                    <div className="white_bg weve_items text-center">
                                        <span className="weve_items_ribbons">
                                            School Aged Children
                                        </span>
                                        <div className="weve_items_icn">
                                            <Image src={wakingup} alt="icos" width={58} height={55} />
                                        </div>
                                        <h4>Blue Room Girls Levels</h4>
                                    </div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="skill_list">
                                        {/* <div className="sec_title_md"> */}
                                        <h5>Skill</h5>
                                        <ul className="skill_block">
                                            <li key="all" data-aos="fade-left" data-aos-duration="1000">
                                                <button
                                                    className={'skll_btn skll_isActived'}
                                                >
                                                    All
                                                </button>
                                            </li>
                                            <li key="all" data-aos="fade-left" data-aos-duration="1000">
                                                <button
                                                    className={'skll_btn'}
                                                >
                                                    Aerials
                                                </button>
                                            </li>
                                            <li key="all" data-aos="fade-left" data-aos-duration="1000">
                                                <button
                                                    className={'skll_btn'}
                                                >
                                                    Cartwheels (CW)
                                                </button>
                                            </li>
                                            <li key="all" data-aos="fade-left" data-aos-duration="1000">
                                                <button
                                                    className={'skll_btn'}
                                                >
                                                    Gainers
                                                </button>
                                            </li>
                                            <li key="all" data-aos="fade-left" data-aos-duration="1000">
                                                <button
                                                    className={'skll_btn'}
                                                >
                                                    High School - JV
                                                </button>
                                            </li>
                                            <li key="all" data-aos="fade-left" data-aos-duration="1000">
                                                <button
                                                    className={'skll_btn'}
                                                >
                                                    High School - Varsity
                                                </button>
                                            </li>
                                            <li key="all" data-aos="fade-left" data-aos-duration="1000">
                                                <button
                                                    className={'skll_btn'}
                                                >
                                                    Kips
                                                </button>
                                            </li>
                                            <li key="all" data-aos="fade-left" data-aos-duration="1000">
                                                <button
                                                    className={'skll_btn'}
                                                >
                                                    Round Offs (RO)
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
                                                <span className="balck_btn">Sort By</span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <li>
                                                    <button type="button"  >Title A-Z</button>
                                                </li>
                                                <li>
                                                    <button type="button" >Title Z-A</button>
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
                                            <Link href={`/single-class/fdbf`}>
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
                                                <Link href={`/single-class/fdbf`}>
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
                                            <Link href={`/single-class/fdbf`}>
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
                                                <Link href={`/single-class/fdbf`}>
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
                                            <Link href={`/single-class/fdbf`}>
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
                                                <Link href={`/single-class/fdbf`}>
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
                                            <Link href={`/single-class/fdbf`}>
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
                                                <Link href={`/single-class/fdbf`}>
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
                                            <Link href={`/single-class/fdbf`}>
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
                                                <Link href={`/single-class/fdbf`}>
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
                                            <Link href={`/single-class/fdbf`}>
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
                                                <Link href={`/single-class/fdbf`}>
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
                                            <Link href={`/single-class/fdbf`}>
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
                                                <Link href={`/single-class/fdbf`}>
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
                                            <Link href={`/single-class/fdbf`}>
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
                                                <Link href={`/single-class/fdbf`}>
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
                                            <Link href={`/single-class/fdbf`}>
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
                                                <Link href={`/single-class/fdbf`}>
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
                                            <Link href={`/single-class/fdbf`}>
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
                                                <Link href={`/single-class/fdbf`}>
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
                        <button className="btn_animated btn_blockmd primary_btn" >
                            Load More
                        </button>
                    </div>
                </div>
            </section>
            <section className="subs_plan" id="subs_plan">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="subsplan_block">
                                <div className="sec_title">
                                    <h2>Subscription Plan</h2>
                                </div>
                                <div
                                    className="plan_sbtab"
                                    data-aos="zoom-in-right"
                                    data-aos-duration="1000"
                                >
                                    <Tabs defaultActiveKey="0" id="uncontrolled-tab-example">
                                        <Tab
                                            eventKey={0}
                                            title={"Monthly Billing"}
                                            key={"Monthly Billing"}
                                        >
                                            <div className="subsplan_content position-relative">
                                                <div className="subsplan_ele position-relative">
                                                    <h4>Pre-Recorded Classes</h4>
                                                    <div className="subplan_amount">
                                                        <div className="subplan_doller">
                                                            $9
                                                        </div>
                                                        <span>
                                                            {/* .{Number((+item.amount - Math.floor(+item.amount)).toFixed(2))} */}
                                                            /{" "}
                                                            <span className="per_month">
                                                                {" "}
                                                                Per Month
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <p style={{ minHeight: 78 }}>
                                                        Dive into the world of knowledge with our Pre- Recorded Class Subscription. Gain access to a rich collection of pre-recorded classes on a variety of skills.
                                                    </p>
                                                    <div className="get_started">
                                                        {/* <CheckoutFormModal productId={item.id} /> */}
                                                        <Link
                                                            href={"#"}
                                                            className="btn_animated primary_btn btn_blockmd over_hidden"
                                                        >
                                                            Get Started
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="sbsplan_layers"></div>
                                            </div>
                                        </Tab>
                                        <Tab
                                            eventKey={1}
                                            title={"Annual Billing"}
                                            key={"Annual Billing"}
                                        >
                                            <div className="subsplan_content position-relative">
                                                <div className="subsplan_ele position-relative">
                                                    <h4>Pre-Recorded Classes</h4>
                                                    <div className="subplan_amount">
                                                        <div className="subplan_doller">
                                                            $9
                                                        </div>
                                                        <span>
                                                            /{" "}
                                                            <span className="per_month">
                                                                {" "}
                                                                Per Year
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <p style={{ minHeight: 78 }}>
                                                        Dive into the world of knowledge with our Pre- Recorded Class Subscription. Gain access to a rich collection of pre-recorded classes on a variety of skills.
                                                    </p>
                                                    <div className="get_started">
                                                        <Link
                                                            href={"#"}
                                                            className="btn_animated primary_btn btn_blockmd over_hidden"
                                                        >
                                                            Get Started
                                                        </Link>
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
                                <Image
                                    src={subplan}
                                    alt="subplan"
                                    className="img-fluid"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="members_sayed">
                <div className="container">
                    <div className="member_slider">
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
                                                <h6 dangerouslySetInnerHTML={{ __html: "Instructor Review" }}></h6>
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
                                                <h6 dangerouslySetInnerHTML={{ __html: "Instructor Review" }}></h6>
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
                                                <h6 dangerouslySetInnerHTML={{ __html: "Instructor Review" }}></h6>
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
                                                <h6 dangerouslySetInnerHTML={{ __html: "Instructor Review" }}></h6>
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
                                                <h6 dangerouslySetInnerHTML={{ __html: "Instructor Review" }}></h6>
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
}

export default Registered;
