/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from "react";
import classImg from '@/assets/images/gym-6.webp'
import Image from "next/image";
import isFavorites from "@/assets/images/icons/favorites_icn.svg";
import Link from "next/link";
import closedWatch from "@/assets/images/icons/closed_watch.svg";
import playicn from "@/assets/images/icons/play_icn.svg";
import { Dropdown } from "react-bootstrap";

function Favorite() {

  return (
    <main className="main_content">
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
                  <Dropdown className="dropdown_inner">
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="dropdwn_btn"
                    >
                      <span className="balck_btn">Sort By</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <li>
                        <button
                          type="button"
                        >
                          Title A-Z
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                        >
                          Title Z-A
                        </button>
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
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
      </div>
      <div className="btn_videos text-center">
            <button className="btn_animated btn_blockmd primary_btn">
            Load More
            </button>
        </div>
      </section>
    </main>
  );
}

export default Favorite;
