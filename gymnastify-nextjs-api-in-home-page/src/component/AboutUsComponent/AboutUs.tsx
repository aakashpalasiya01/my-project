"use client";
import { useEffect, useState } from "react";
import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {useAppSelector,useAppDispatch} from  "@/store/hooks";
import { RootState } from "@/store/store";
import { getAboutUsData } from "@/store/actions/aboutUsAction";
import * as aboutUsReducer from "@/store/reducers/aboutUsReducer";

function AboutUs() {
  const aboutUsState = useAppSelector((state:RootState) => state.aboutus );
  const dispatch = useAppDispatch();

  useEffect(()=>{ 
    const FetchAboutUsData = async() => { 
        dispatch(aboutUsReducer.setLoadingState(true));
        await dispatch((getAboutUsData()));
        dispatch(aboutUsReducer.setLoadingState(false));
    };
    FetchAboutUsData();
  },[]);

  const renderingContent = aboutUsState?.aboutUs[0]?.content.rendered

  return (
    <main className="main_content">
      <section className="privacy_policy">
        <section className="bred_eles">
          <div className="container">
            <Breadcrumb>
              <Breadcrumb.Item className="point_none" href="#">
                {aboutUsState?.aboutUs[0]?.title?.rendered}
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </section>
        <div className="container">
          <div className="privacy_content" dangerouslySetInnerHTML={{__html:renderingContent}} >        
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
