"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import readmore from "@/assets/images/icons/arrow_left_icn.svg";
import { ROUTES_PATH } from "@/utils/constant";
import blogImage from '@/assets/images/blog.jpg'

export default function Blog() {

  return (
    <main className="main_content">
      <section className="blog_page">
        <section className="explore_banner blog_banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6"></div>
              <div className="col-lg-6">
                <div className="explore_block">
                  <h6>Maximize Your Gymnastics Experience!</h6>
                  <h4>
                    <span className="invets_text">Blue Room Boys Levels</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
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
      </section>
    </main>
  );
}