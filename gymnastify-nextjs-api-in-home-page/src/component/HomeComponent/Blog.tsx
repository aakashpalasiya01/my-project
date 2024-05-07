"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import hero_banner2 from "../../assets/images/hero_banner2.jpg";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Link from "next/link";
import blog from "../../assets/images/blog.jpg";
import readmore from "../../assets/images/icons/arrow_left_icn.svg";

function Blog() {
  return (
    <main className="main_content">
      <section className="blog_page">
        {/* <section className="bred_eles">
        <div className="container"> 
          <Breadcrumb>
            <Breadcrumb.Item className="point_none" href="#">Blog</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </section> */}
        <section className="explore_banner blog_banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6"></div>
              <div className="col-lg-6">
                <div className="explore_block">
                  <h6>Maximize Your Gymnastics Experience!</h6>
                  <h4>
                    <span className="invets_text">Blue Room Girls Levels</span>
                  </h4>
                  <div className="explore_btn">
                    <button className="white_btn btn_blockmd">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="effect_product blog_items">
                <div className="effect_img blog_img">
                  <Image
                    src={blog}
                    alt="icons"
                    className="img-fluid"
                  ></Image>
                </div>
                <h5>
                  <Link href="">Blue Room Girls Levels</Link>
                </h5>
                <span className="date_blog">19 Mar, 2024</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting.
                </p>
                <div className="read_blog">
                  <Link href="">
                    Read More <Image src={readmore} alt="icons"></Image>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="blog_items effect_product">
                <div className="blog_img effect_img">
                  <Image
                    src={blog}
                    alt="icons"
                    className="img-fluid"
                  ></Image>
                </div>
                <h5>
                  <Link href="">Blue Room Girls Levels</Link>
                </h5>
                <span className="date_blog">19 Mar, 2024</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting.
                </p>
                <div className="read_blog">
                  <Link href="">
                    Read More <Image src={readmore} alt="icons"></Image>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="effect_product blog_items">
                <div className="effect_img blog_img">
                  <Image
                    src={blog}
                    alt="icons"
                    className="img-fluid"
                  ></Image>
                </div>
                <h5>
                  <Link href="">Blue Room Girls Levels</Link>
                </h5>
                <span className="date_blog">19 Mar, 2024</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting.
                </p>
                <div className="read_blog">
                  <Link href="">
                    Read More <Image src={readmore} alt="icons"></Image>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="effect_product blog_items">
                <div className="effect_img blog_img">
                  <Image
                    src={blog}
                    alt="icons"
                    className="img-fluid"
                  ></Image>
                </div>
                <h5>
                  <Link href="">Blue Room Girls Levels</Link>
                </h5>
                <span className="date_blog">19 Mar, 2024</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting.
                </p>
                <div className="read_blog">
                  <Link href="">
                    Read More <Image src={readmore} alt="icons"></Image>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="btn_videos text-center">
            <button className="btn_blockmd primary_btn">Load More</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
