/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from "react";
import playicn from "@/assets/images/icons/play_icn.svg";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { ROUTES_PATH } from "@/utils/constant";
import Link from "next/link";
import wakingup from "@/assets/images/icons/wakingup.png";
import isFavorites from "@/assets/images/icons/favorites_icn.svg";
import closedWatch from "@/assets/images/icons/closed_watch.svg";
import classImg from '@/assets/images/gym-6.webp'
import backgroundFitnessImg from '@/assets/images/fitness (1).png'
import Image from "next/image";

function ExploreSkill() {
 
  return (
    <main className="main_content">
      <section className="bred_eles">
        <div className="container">
          <Breadcrumb>
            <Breadcrumb.Item className="point_none" href={ROUTES_PATH.GUEST}>
            Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href={ROUTES_PATH.EXPLORESKILL}>Explore Skill Dictionary</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </section>
      <section className="explore_banner"  style={{ backgroundImage: `url(${backgroundFitnessImg})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6">
                        <div className="explore_block">
                          
                                <>
                                    <h6 data-aos="fade-left" data-aos-duration="1000">Maximize Your Gymnastics Experience!</h6>
                                    <h4 data-aos="fade-left" data-aos-duration="1000">
                                    Upgrade to Premium for Video Assignments, Expert Coaching, and Live Classes. 
                                        <span className="invets_text">Invest in Your Progress</span>
                                    </h4>
                                </>
                            
                                <div className="explore_btn" data-aos="fade-left" data-aos-duration="1000">
                                    <Link href={ROUTES_PATH.LOGIN} >
                                        <button className="btn_animated white_btn btn_blockmd">
                                            Subscribe Now
                                        </button>
                                    </Link>
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
                    <h2>Gymnastify offers fun and fitness to all ages.</h2>
                </div>
                <div className="row">
                        <div
                            data-aos="flip-left" data-aos-duration="1000"
                            className="col-md-6 col-xl-3"
                        >
                            <div className="white_bg weve_items text-center">
                                  <span className="weve_items_ribbons">PRE-SCHOOL</span> 
                                <div className="weve_items_icn">
                                    <Image src={wakingup} width={58} height={55} alt="icos" />
                                </div>
                                <h4>Red Room Levels</h4>
                            </div>
                        </div>
                </div>
                <div className="skill_list">
                    <div className="sec_title_md">
                        <h5>Skill</h5>
                        <ul className="skill_block" key='a'>
                        <li key="all" data-aos="fade-left" data-aos-duration="1000">
                        <button  className={'skll_btn skll_isActived' }
                        >All</button>
                          </li>
                          <li key="all" data-aos="fade-left" data-aos-duration="1000">
                        <button  className={'skll_btn ' }
                        >Crickets</button>
                          </li>
                          <li key="all" data-aos="fade-left" data-aos-duration="1000">
                        <button  className={'skll_btn ' }
                        >Explorers</button>
                          </li>
                          <li key="all" data-aos="fade-left" data-aos-duration="1000">
                        <button  className={'skll_btn ' }
                        >Joeys</button>
                          </li>
                          <li key="all" data-aos="fade-left" data-aos-duration="1000">
                        <button  className={'skll_btn ' }
                        >Little Hoppers (LH)</button>
                          </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="classes_area">
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
                    </div>
                    <div className="btn_videos text-center">
                        <button className="btn_animated btn_blockmd primary_btn" >
                            Load More
                        </button>
                    </div>
                </div>
      </section>
    </main>
  );
}

export default ExploreSkill;