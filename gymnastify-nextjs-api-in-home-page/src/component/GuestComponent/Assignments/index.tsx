'use client'
import React from 'react';
import elevateyour from "@/assets/images/backgrounds/elevate_your.jpg";
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { RootState } from '@/store/store';

const Assignments = () => {
  const AssignmentsData = useSelector(
    (state :RootState) => state.home?.assignment?.data
  );

  
  return (
    <section className="elevate_your">
        <div className="container">
            <div className="row">
              <div className="col-xl-6">
                  <div className="elevate_img">
                    <img alt="icons" width="652" height="160" src={AssignmentsData?.background_image?.url}/>
                  </div>
              </div>
              <div className="col-xl-6">
                  <div className="elevate_content">
                    <h4>{AssignmentsData?.top_heading}</h4>
                    <p>{AssignmentsData?.title}</p>
                    <div className="elevate_btn">
                      <Link href={AssignmentsData?.button?.link || "#"}>
                      </Link>
                      <button className="white_btn btn_blockmd">{AssignmentsData?.button?.name}</button>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </section>
  )
}

export default Assignments