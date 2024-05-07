"use client";
import React from "react";

import { useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "@/store/store";

const ExpertGuidance = () => {
  const ExpertGuidanceData = useSelector(
    (state :RootState) => state.home?.needExpertGuidance?.data
  );

  return (
    <section className="get_supports">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col_supports1">
            <div className="get_supports1">
              <img
                alt="get supports"
                width="250"
                height="190"
                src={ExpertGuidanceData?.image_one?.url}
              />
            </div>
          </div>
          <div className="col-lg-4 col_supports2">
            <div className="get_supports2">
              <img
                alt="get supports"
                width="325"
                height="246"
                src={ExpertGuidanceData?.image_two?.url}
              />
            </div>
          </div>
          <div className="col-lg-5 col_supports3">
            <div className="get_support_block">
              <p>{ExpertGuidanceData?.top_heading}</p>
              <h5>{ExpertGuidanceData?.title}</h5>
              <h4> {ExpertGuidanceData?.main_title}</h4>
              <p>{ExpertGuidanceData?.description}</p>
              <div className="get_subnow">
                <Link href={ExpertGuidanceData?.button?.link || "#"}>
                  {" "}
                  <button className="white_btn btn_blockmd">
                    {ExpertGuidanceData?.button?.name}
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
