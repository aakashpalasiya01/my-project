'use client'
import React, { useEffect } from 'react';
import { assignments } from '@/mystore/actions/homeActions';
import { useAppDispatch, useAppSelector } from '@/mystore/hooks';
import { RootState } from '@/mystore/store';
import Link from 'next/link';

const Assignments = () => {
  const dispatch = useAppDispatch();

  let AssignmentDatafunc = async () => {
   dispatch(assignments());
  };

  useEffect(()=>{
    AssignmentDatafunc()

  },[])
  const {assignment} = useAppSelector((state:RootState) => state?.home);
  return (
    <section className="elevate_your">
        <div className="container">
            <div className="row">
              <div className="col-xl-6">
                  <div className="elevate_img">
                    <img alt="icons" width="652" height="160" src={assignment?.background_image?.url}/>
                  </div>
              </div>
              <div className="col-xl-6">
                  <div className="elevate_content">
                    <h4>{assignment?.top_heading}</h4>
                    <p>{assignment?.title}</p>
                    <div className="elevate_btn">
                      <Link className="white_btn btn_blockmd" href= '#'>{assignment?.button?.name}
                      </Link>
                 
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </section>
  )
}

export default Assignments