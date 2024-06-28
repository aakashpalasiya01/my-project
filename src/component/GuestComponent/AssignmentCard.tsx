/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useEffect } from 'react'
import elevateyour from "@/assets/images/backgrounds/elevate_your.jpg";
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import * as homeReducer from "@/store/reducers/homeReducer";
import { guestHomePageAssignment } from '@/store/actions/homeAction';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { RootState } from '@/store/store';


const AssignmentCard = () => {
  
  const dispatch = useAppDispatch();
  const { Loaded, AssignmentCards } = useAppSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(homeReducer.setLoader(true));
    dispatch(guestHomePageAssignment())
    dispatch(homeReducer.setLoader(false));
  }, [])
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          {Loaded ? (
            <SkeletonTheme baseColor="#eee" highlightColor="#ddd">
              <Skeleton className="elevate_imgskeleton" height={160} />
            </SkeletonTheme>
          ) : (
            <div className="elevate_img" data-aos="fade-right">
              <Image src={AssignmentCards?.background_image?.link ? AssignmentCards?.background_image?.link : elevateyour} alt="icons" className="img-fluid" width={652} height={160} />
            </div>
          )}
        </div>
        <div className="col-xl-6">
          <div className="elevate_content">
            {Loaded ? (
              <SkeletonTheme baseColor="#eee" highlightColor="#ddd">
                <h4><Skeleton width={395} height={27.59} /></h4>
                <p><Skeleton width={395} height={24}/></p>
              </SkeletonTheme>
            ) : (
              <>
                <h4 data-aos="fade-up">
                  {AssignmentCards?.top_heading}
                </h4>
                <p data-aos="fade-up">
                  {AssignmentCards?.title}
                </p>
              </>
            )}
           {Loaded ? (
            <SkeletonTheme baseColor="#eee" highlightColor="#ddd">
              <Skeleton width={179} height={50}/>
            </SkeletonTheme>
           ) : (
             <div className="elevate_btn">
             <button className="btn_animated white_btn btn_blockmd" data-aos="fade-up">
               {AssignmentCards?.button?.name}
             </button>
           </div>
           )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssignmentCard