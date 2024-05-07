"use client";
import React from "react";
import Image from "next/image";
import {useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "@/store/store";

const GuestBanner = () => {
  const bannerdata = useSelector(
    (state :RootState) => state?.home?.guesthome[0]?.acf_fields?.hero_section
  );


  return (
    <section className="guest_banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="guest_content">
              <div className="guest-title">
                <h1>{bannerdata?.heading}</h1>
                <p>{bannerdata?.description}</p>
              </div>
              <div className="subnow_link">
                <Link href= {bannerdata?.primary_button?.link?.url || '#'}>
                <button className="primary_btn btn_blockmd">
                  {bannerdata?.primary_button?.button_name}
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="guest_img">
              <Image
                src={bannerdata && bannerdata?.image}
                className="img-fluid"
                alt="guest banner"
                width={332}
                height={403}
                style={{width:'auto', height:'auto'}}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestBanner;
