/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect }  from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import * as homeReducer from "@/store/reducers/homeReducer";
import { FQA } from "@/store/actions/homeAction";
import { RootState } from "@/store/store";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { FAQResponse } from "./FqaType";

function Faqs() {
  const dispatch = useAppDispatch();
  const { Fqa, Loaded } = useAppSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(homeReducer.setLoader(true));
    FQA().then((res:FAQResponse ) => {
      dispatch(homeReducer.setFQA(res));
      dispatch(homeReducer.setLoader(false));
    })
  }, [])

  return (
    <main className="main_content">
      <section className="faqs_block">
        <div className="container">
          <div className="more_videos_title">
            <h3>FAQs</h3>
          </div>
          <div className="faqs_content">
            {Loaded ? (
              Array(4).fill(0).map((_, index) => (
                <SkeletonTheme key={index + 1} baseColor="#fff" highlightColor="#ddd">
                  <Accordion defaultActiveKey="">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><span> <Skeleton width={1203} height={58} /></span> </Accordion.Header>
                      <Accordion.Body>
                        <Skeleton width={1203} height={58} />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </SkeletonTheme>
              ))) : (
              <>
                {Fqa?.faqs?.map((item: any, index: number) => (
                  <React.Fragment key={index+1}>
                    <Accordion defaultActiveKey={item.id}>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header><span>{item?.title ? item.title : "-"}</span> </Accordion.Header>
                        <Accordion.Body>
                          <p>
                          {item?.content ? item.content : "-"}
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </React.Fragment>
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Faqs;
