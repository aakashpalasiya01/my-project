/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from "react";
import Image from "next/image";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Link from "next/link";
import readmore from "@/assets/images/icons/arrow_left_icn.svg";
import 'react-loading-skeleton/dist/skeleton.css'
import { ROUTES_PATH } from "@/utils/constant";
import blogImage from '@/assets/images/blog.jpg'


function Singleblog() {

  return (
    <main className="main_content">
      <section className="single_blog">
        <section className="bred_eles">
          <div className="container">
            <Breadcrumb>
              <Breadcrumb.Item href={ROUTES_PATH.BLOG} className="point_none">Blog</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Specialty Classes – 4</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </section>
        <div className="container">
          <div className="blog_details">
            <div className="effect_product single_blog_thum">
              <div className="effect_img">
                <Image src={blogImage} alt="icons" className="img-fluid" width={381} height={206}></Image>
              </div>
            </div>
            <div className="blog_details_title">
              <div className="prvcy_title">
                <h4>Specialty Classes – 4</h4>
                <span className="date_blogdetails">30 Apr 2024</span>
              </div>
            </div>
            <div >
              “Gymnastify” is an innovative platform designed to revolutionize the world of gymnastics. Whether you’re a beginner, intermediate, or advanced gymnast, Gymnastify offers a comprehensive suite of tools and resources to enhance your skills, optimize your training regimen, and track your progress like never before.
              With Gymnastify, you can access a vast library of instructional videos, tutorials, and tips crafted by expert gymnasts and coaches. From mastering fundamental techniques to perfecting advanced maneuvers, our curated content covers all aspects of gymnastics, catering to athletes of all levels and disciplines.
              But Gymnastify is more than just a repository of knowledge—it’s a dynamic training companion. Our interactive training plans are tailored to your skill level and goals, providing personalized workouts and drills to help you improve your strength, flexibility, and technique. Whether you’re training at home, in the gym, or on the go, Gymnastify empowers you to take your performance to the next level.
              Additionally, Gymnastify offers cutting-edge performance tracking and analysis tools. With our intuitive progress tracking features, you can monitor your development over time, identify areas for improvement, and set achievable milestones to keep you motivated and on track toward your goals.
              Whether you’re aiming for the podium or simply looking to enhance your gymnastics skills for fun and fitness, Gymnastify is your ultimate partner on your journey to gymnastic excellence. Join the Gymnastify community today and unlock your full potential in the world of gymnastics.
            </div>
          </div>
          <div className="blog_need">
            <div className="sec_title text-center">
              <h2>Related Blogs</h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-xl-3" data-aos="flip-left" data-aos-duration="1000">
                <div className="effect_product blog_items">
                  <div className="effect_img blog_img">
                    <Image src={blogImage} alt="icons" className="img-fluid" width={270} height={173} />
                  </div>
                  <h5>
                    <Link href={`${ROUTES_PATH.BLOG}/${395}`}>Specialty Classes – 4</Link>
                  </h5>
                  <span className="date_blog">30 Apr 2024</span>
                  <div>“Gymnastify” is an innovative platform designed to revolutionize the world of</div>
                  <div className="read_blog">
                    <Link href={`${ROUTES_PATH.BLOG}/${395}`}>
                      Read More <Image src={readmore} alt="icons"></Image>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3" data-aos="flip-left" data-aos-duration="1000">
                <div className="effect_product blog_items">
                  <div className="effect_img blog_img">
                    <Image src={blogImage} alt="icons" className="img-fluid" width={270} height={173} />
                  </div>
                  <h5>
                    <Link href={`${ROUTES_PATH.BLOG}/${395}`}>Specialty Classes – 4</Link>
                  </h5>
                  <span className="date_blog">30 Apr 2024</span>
                  <div>“Gymnastify” is an innovative platform designed to revolutionize the world of</div>
                  <div className="read_blog">
                    <Link href={`${ROUTES_PATH.BLOG}/${395}`}>
                      Read More <Image src={readmore} alt="icons"></Image>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3" data-aos="flip-left" data-aos-duration="1000">
                <div className="effect_product blog_items">
                  <div className="effect_img blog_img">
                    <Image src={blogImage} alt="icons" className="img-fluid" width={270} height={173} />
                  </div>
                  <h5>
                    <Link href={`${ROUTES_PATH.BLOG}/${395}`}>Specialty Classes – 4</Link>
                  </h5>
                  <span className="date_blog">30 Apr 2024</span>
                  <div>“Gymnastify” is an innovative platform designed to revolutionize the world of</div>
                  <div className="read_blog">
                    <Link href={`${ROUTES_PATH.BLOG}/${395}`}>
                      Read More <Image src={readmore} alt="icons"></Image>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3" data-aos="flip-left" data-aos-duration="1000">
                <div className="effect_product blog_items">
                  <div className="effect_img blog_img">
                    <Image src={blogImage} alt="icons" className="img-fluid" width={270} height={173} />
                  </div>
                  <h5>
                    <Link href={`${ROUTES_PATH.BLOG}/${395}`}>Specialty Classes – 4</Link>
                  </h5>
                  <span className="date_blog">30 Apr 2024</span>
                  <div>“Gymnastify” is an innovative platform designed to revolutionize the world of</div>
                  <div className="read_blog">
                    <Link href={`${ROUTES_PATH.BLOG}/${395}`}>
                      Read More <Image src={readmore} alt="icons"></Image>
                    </Link>
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
        </div>
      </section>
    </main>
  )
}

export default Singleblog;
