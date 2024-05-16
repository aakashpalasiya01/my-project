"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import introcedueflow from "@/assets/images/instructor_chat.jpg";
import { useAppDispatch, useAppSelector } from "@/mystore/hooks";
import { whatWeOffer } from "@/mystore/actions/homeActions";
import { RootState } from "@/mystore/store";

const WhatWeOffer = () => {
  const dispatch = useAppDispatch();

  let WhatweOfferDatafun = async () => {
    dispatch(whatWeOffer());
  };

  useEffect(() => {
    WhatweOfferDatafun();
  }, []);

  const {WhatWeOffer} = useAppSelector((state: RootState) => state?.home);

  return (
    <section className="wf_what">
      <div className="container">
        <div className="sec_title text-center">
          <h2>What we offer</h2>
        </div>
        <div className="wf_row row">
          {WhatWeOffer?.slice(0, 4)?.map((items: any, index: number) => (
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
