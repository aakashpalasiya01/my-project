"use client";
import React,{useEffect} from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {useAppSelector,useAppDispatch} from  "@/store/hooks";
import { RootState } from "@/store/store";
import {getTermsAndCondData} from "@/store/actions/termsCondAction";
import * as TandCReducer from "@/store/reducers/termsAndCondReducer";

function TermsConditions() {
  const TermsConditionState = useAppSelector((state:RootState)=>state.tAndC);
  const dispatch = useAppDispatch();

  useEffect(()=>{ 
    async function FetchTandC () { 
      dispatch(TandCReducer.setLoadingState(true));
      await dispatch(getTermsAndCondData());
      dispatch(TandCReducer.setLoadingState(false));
    };
    FetchTandC();
  },[]);

  const decodeHTMLEntities = (text:string) => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  }

  const htmlEntityTitle = TermsConditionState?.termsNconditions[0]?.title?.rendered;
  const renderingTitle = decodeHTMLEntities(htmlEntityTitle);
  const renderingContent = TermsConditionState?.termsNconditions[0]?.content?.rendered;
  
  return (
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
}

export default TermsConditions;
