"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Link from "next/link";
import blog from "../../assets/images/blog.jpg";
import readmore from "../../assets/images/icons/arrow_left_icn.svg";
import singleBlog from "../../assets/images/single_blog.jpg"; 

function Singleblog() {
  return (
    <main className="main_content">
      <section className="single_blog">
        <section className="bred_eles">
          <div className="container">
            <Breadcrumb>
              <Breadcrumb.Item className="point_none" href="#">
                Blog
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">Blue Room Girls Levels</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </section>
        <div className="container">
          <div className="blog_details">
          <div className="single_blog_thum">
              <Image src={singleBlog} alt="icons" className="img-fluid"></Image>
            </div>
            <div className="blog_details_title">
              <div className="prvcy_title">
                <h4>Blue Room Girls Levels</h4>
                <span className="date_blogdetails">29 Apr 2024</span>
              </div>
            </div>
            <p>
              “Gymnastify” is an innovative platform designed to revolutionize
              the world of gymnastics. Whether you’re a beginner, intermediate,
              or advanced gymnast, Gymnastify offers a comprehensive suite of
              tools and resources to enhance your skills, optimize your training
              regimen, and track your progress like never before.
            </p>
            <p>
              With Gymnastify, you can access a vast library of instructional
              videos, tutorials, and tips crafted by expert gymnasts and
              coaches. From mastering fundamental techniques to perfecting
              advanced maneuvers, our curated content covers all aspects of
              gymnastics, catering to athletes of all levels and disciplines.
            </p>
            <p>
              But Gymnastify is more than just a repository of knowledge—it’s a
              dynamic training companion. Our interactive training plans are
              tailored to your skill level and goals, providing personalized
              workouts and drills to help you improve your strength,
              flexibility, and technique. Whether you’re training at home, in
              the gym, or on the go, Gymnastify empowers you to take your
              performance to the next level.
            </p>
            <p>
              Additionally, Gymnastify offers cutting-edge performance tracking
              and analysis tools. With our intuitive progress tracking features,
              you can monitor your development over time, identify areas for
              improvement, and set achievable milestones to keep you motivated
              and on track toward your goals.
            </p>
            <p>
              Whether you’re aiming for the podium or simply looking to enhance
              your gymnastics skills for fun and fitness, Gymnastify is your
              ultimate partner on your journey to gymnastic excellence. Join the
              Gymnastify community today and unlock your full potential in the
              world of gymnastics.
            </p>
          </div>
          <div className="blog_need">
            <div className="sec_title text-center">
              <h2>What we offer</h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-xl-3">
                <div className="effect_product blog_items">
                  <div className="effect_img blog_img">
                    <Image src={blog} alt="icons" className="img-fluid"></Image>
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
                    <Image src={blog} alt="icons" className="img-fluid"></Image>
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
                    <Image src={blog} alt="icons" className="img-fluid"></Image>
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
                    <Image src={blog} alt="icons" className="img-fluid"></Image>
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
          </div>
        </div>
      </section>
    </main>
  );
}

export default Singleblog;
