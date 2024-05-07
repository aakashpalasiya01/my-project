'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { RootState } from '@/store/store';

const VirtualWorkOut = () => {
  const virtualWorkdata = useSelector(
    (state :RootState) => state?.home?.guesthome[0]?.acf_fields?.virtual_workout_section

  );

  return (
    <section className="weve_got">
    <div className="container">
        <div className="sec_title text-center">
          <p>{virtualWorkdata?.top_heading}</p>
          <h2>{virtualWorkdata?.title}</h2>
        </div>
        <div className="row">

          {virtualWorkdata?.levels_section?.map((data)=>
          
          <div key={data?.icone?.ID} className="col-md-6 col-xl-3">
              <div className="weve_items text-center">
                <span className="weve_items_ribbons">{data?.top_label}</span>
                <div className="weve_items_icn">
                  <img alt="icos" width="59" height="55" src={data?.icone?.url} />
                </div>
                <h4>{data?.name}</h4>
              </div>
          </div>
          
          )}






          {/* <div className="col-md-6 col-xl-3">
              <div className="weve_items text-center">
                <span className="weve_items_ribbons">School Aged Children</span>
                <div className="weve_items_icn">
                  <img alt="icos" width="59" height="55" src={wakingup.src} />
                </div>
                <h4>Blue Room Girls Levels</h4>
              </div>
          </div>
          <div className="col-md-6 col-xl-3">
              <div className="weve_items text-center">
                <span className="weve_items_ribbons">School Aged Children</span>
                <div className="weve_items_icn">
                  <img alt="icos" width="59" height="55" src={wakingup.src} />
                </div>
                <h4>Blue Room Boys Levels</h4>
              </div>
          </div>
          <div className="col-md-6 col-xl-3">
              <div className="weve_items text-center">
                <span className="weve_items_ribbons">-</span>
                <div className="weve_items_icn">
                  <img alt="icos" width="59" height="55" src={wakingup.src} />
                </div>
                <h4>Specialty Classes</h4>
              </div>
          </div> */}
        </div>
        <div className="skill_dic">
          <Link className="primary_btn btn_blockmd" href={virtualWorkdata?.button?.link || '#'}>{virtualWorkdata?.button?.name}</Link>
        </div>
    </div>
  </section>
  )
}

export default VirtualWorkOut