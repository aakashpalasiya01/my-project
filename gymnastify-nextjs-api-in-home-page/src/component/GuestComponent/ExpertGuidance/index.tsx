"use client";
import React, { useEffect } from "react";

import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/mystore/hooks";
import { needExGuide } from "@/mystore/actions/homeActions";
import { RootState } from "@/mystore/store";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const ExpertGuidance = () => {
  const dispatch = useAppDispatch();

  let NeedExpertGuidanceDatafunc = async () => {
    dispatch(needExGuide());
  };

  useEffect(() => {
    NeedExpertGuidanceDatafunc();
  }, []);
  const {needExpertGuidance} = useAppSelector((state: RootState) => state?.home);
  return (
    <section className="get_supports">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col_supports1">
            <div className="get_supports1">
              {needExpertGuidance?.image_one?.url ? (
                <img
                  alt="get supports"
                  width="250"
                  height="190"
                  src={needExpertGuidance?.image_one?.url}
                />
              ) : (
                <div className="get_supports1">
                  <SkeletonTheme baseColor="#fff" highlightColor="#444">
                    <Skeleton width={250} height={190} />
                  </SkeletonTheme>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-4 col_supports2">
            {needExpertGuidance?.image_two?.url ? (
              <div className="get_supports2">
                <img
                  alt="get supports"
                  width="325"
                  height="246"
                  src={needExpertGuidance?.image_two?.url}
                />
              </div>
            ) : (
              <div className="get_supports2">
                <SkeletonTheme baseColor="#fff" highlightColor="#444">
                  <Skeleton width={325} height={246} />
                </SkeletonTheme>
              </div>
            )}
          </div>
          <div className="col-lg-5 col_supports3">
            <div className="get_support_block">
              <p>{needExpertGuidance?.top_heading}</p>
              <h5>{needExpertGuidance?.title}</h5>
              <h4> {needExpertGuidance?.main_title}</h4>
              <p>{needExpertGuidance?.description}</p>
              <div className="get_subnow">
                <Link href={needExpertGuidance?.button?.link || "#"}>
                  {" "}
                  <button className="white_btn btn_blockmd">
                    {needExpertGuidance?.button?.name}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertGuidance;
