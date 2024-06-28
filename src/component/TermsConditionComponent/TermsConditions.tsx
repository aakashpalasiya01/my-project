/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React,{useEffect} from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {useAppSelector,useAppDispatch} from  "@/store/hooks";
import { RootState } from "@/store/store";
import {getTermsAndCondData} from "@/store/actions/termsCondAction";
import * as TandCReducer from "@/store/reducers/termsAndCondReducer";
import {decodeHTMLEntities} from "@/utils/CommonService";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function TermsConditions() {
  const {termsNconditions,loadingState} = useAppSelector((state:RootState)=>state.tAndC);
  const dispatch = useAppDispatch();

  useEffect(()=>{ 
    async function FetchTandC () { 
      dispatch(TandCReducer.setLoadingState(true));
      await dispatch(getTermsAndCondData());
      dispatch(TandCReducer.setLoadingState(false));
    };
    FetchTandC();
  },[]);

  const SkeletonContent = (
    <SkeletonTheme baseColor="#fff" highlightColor="#ddd">
      <section className="privacy_policy">
        <section className="bred_eles">
          <div className="container">
            <Skeleton width={90} height={10}/>
          </div>
        </section>
        <div className="container">
        <div className="privacy_content">
            <Skeleton count={2} />
            <br/>
            <Skeleton count={2} />
            <br/>
            <Skeleton count={3} />
            <br/>
            <Skeleton count={2} />
            <br/>
            <Skeleton count={2} />
          </div>
        </div>
      </section>
    </SkeletonTheme>
  );


  const htmlEntityTitle = termsNconditions[0]?.title?.rendered;
  const renderingTitle = decodeHTMLEntities(htmlEntityTitle);
  const renderingContent = termsNconditions[0]?.content?.rendered;
  
  const TermsConditionsContent =  (
    <main className="main_content">
      <section className="privacy_policy">
        <section className="bred_eles">
          <div className="container">
            <Breadcrumb>
              <Breadcrumb.Item className="point_none" href="#" >
                  {renderingTitle}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </section>
        <div className="container">
          <div className="privacy_content" dangerouslySetInnerHTML={{__html:renderingContent}}></div>
        </div>
      </section>
    </main>
  );

    return loadingState ? SkeletonContent : TermsConditionsContent
}

export default TermsConditions;
