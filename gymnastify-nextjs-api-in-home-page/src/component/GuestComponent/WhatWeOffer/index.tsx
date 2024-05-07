"use client";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import introcedueflow from "@/assets/images/instructor_chat.jpg";
import { RootState } from "@/store/store";

const WhatWeOffer = () => {
  const whatWeOfferList = useSelector(
    (state :RootState)=> state.home?.testimonials?.what_we_offer
  );


  return (
    <section className="wf_what">
    <div className="container">
      <div className="sec_title text-center">
        <h2>What we offer</h2>
      </div>
      <div className="wf_row row">
     { whatWeOfferList?.slice(0, 4)?.map((items: any, index: number) => (
          <div key={index} className="wf_col col-md-6 col-lg-6 col-xl-3">
            <div className="what_content">
              <div className="what_cimg">
                <Image
                  alt={items.title}
                  className="img-fluid"
                  src={items?.images ? items.images : introcedueflow}
                />
              </div>
              <div className="what_block">
                <h6>{items.top_heading}</h6>
                <h4>{items.title}!</h4>
                <p>{items.description}.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default WhatWeOffer;
