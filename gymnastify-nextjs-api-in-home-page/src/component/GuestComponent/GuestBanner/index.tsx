"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/mystore/hooks";
import { RootState } from "@/mystore/store";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GuestBanner = () => {
  const guesthome = useAppSelector((state: RootState) => state?.home?.guesthome?.hero_section
  );
  return (
    <section className="guest_banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="guest_content">
              <div className="guest-title">
                <h1>{guesthome?.heading}</h1>
                <p>{guesthome?.description}</p>
              </div>
              <div className="subnow_link">
                <Link href={guesthome?.primary_button?.link?.url || "#"}>
                  <button className="primary_btn btn_blockmd">
                    {guesthome?.primary_button?.button_name}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="guest_img">
              {guesthome ? (
                <Image
                  src={guesthome?.image}
                  className="img-fluid"
                  alt="guest banner"
                  width={332}
                  height={403}
                  style={{ width: "auto", height: "auto" }}
                />
              ) : (
                <div className="guest_img">
                  <SkeletonTheme baseColor="#fff" highlightColor="#444">
                    <Skeleton width={432} height={503} />
                  </SkeletonTheme>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestBanner;
