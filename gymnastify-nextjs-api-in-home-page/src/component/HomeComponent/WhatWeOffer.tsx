import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import Image from "next/image";
import introcedueflow from "../../assets/images/instructor_chat.jpg";


const WhatWeOffer = ({ whatWeOfferList, isLoading }: any) => {
  return (
    <>
      {isLoading ? (
        // Display skeleton loaders when isLoading is true
        Array(4).fill(0).map((_, index) => ( // Assuming you want to show 4 skeleton loaders
          <SkeletonTheme key={index} baseColor="#fff" highlightColor="#444">
            <div className="wf_col col-md-6 col-lg-6 col-xl-3">
              <div className="what_content">
                <div className="what_cimg">
                  <Skeleton height={200} />
                </div>
                <div className="what_block">
                  <Skeleton height={20} width={`80%`} />
                  <Skeleton height={35} width={`90%`} style={{ marginTop: '10px' }} />
                  <Skeleton count={3} style={{ marginTop: '10px' }} />
                </div>
              </div>
            </div>
          </SkeletonTheme>
        ))
      ) : whatWeOfferList?.length > 0 ? (
        // Display content if isLoading is false and whatWeOfferList has items
        whatWeOfferList?.slice(0, 4)?.map((items: any, index: number) => (
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
        ))
      ) : (
        <p>No offerings to display.</p>
      )}
    </>
  );
};

export default WhatWeOffer;