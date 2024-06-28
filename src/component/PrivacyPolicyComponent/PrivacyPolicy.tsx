/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {useAppSelector,useAppDispatch} from  "@/store/hooks";
import React,{useEffect} from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { RootState } from "@/store/store";
import { getPrivacyData } from "@/store/actions/privacyAction";
import * as privacyReducer from "@/store/reducers/privacyReducer";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function PrivacyPolicy() {
  const {privacyPolicy,loadingState} = useAppSelector((state:RootState)=>state.privacy);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      dispatch(privacyReducer.setLoader(true));
      await dispatch(getPrivacyData());
      dispatch(privacyReducer.setLoader(false));
    }
    fetchPrivacyPolicy();
  }, []);

  const renderingContent = privacyPolicy[0]?.content?.rendered;

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

  const PrivacyPolicyContent = (
    <main className="main_content">
      <section className="privacy_policy">
        <section className="bred_eles">
          <div className="container">
            <Breadcrumb>
              <Breadcrumb.Item className="point_none" href="#">
             {privacyPolicy[0]?.title?.rendered}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </section>
        <div className="container">
          <div className="privacy_content" dangerouslySetInnerHTML={{__html:renderingContent}}>
          </div>
        </div>
      </section>
    </main>
  );

  return loadingState ? SkeletonContent : PrivacyPolicyContent

}

export default PrivacyPolicy;
