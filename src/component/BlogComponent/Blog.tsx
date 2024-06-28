"use client";
import React, { useState } from "react";
import DynamicBlog from "./DynamicBlog";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { ThreeDots } from 'react-loader-spinner';
import { formatString } from "@/utils/CommonService";
import { PaginationType } from "./BlogType";
import * as blogReducer from "@/store/reducers/blogReducer";


export default function Blog() {

  const { BlogDataList, loadingState } = useAppSelector((state: RootState) => state.blog);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const defaultPagination: PaginationType = {
    page: 1,
    per_page: 8,
    total_data: 0,
    total_Pages: 0,
  };
  const [pagination, setPagination] = useState<PaginationType>(defaultPagination);
  const [blogLoadMore,setBlogLoadMore] = useState(false);


  const bannerTitle = formatString(user?.levels);

  const handleChangeLoaded = async() => {
    dispatch(blogReducer.setLoadingState(true));
    setBlogLoadMore(true);
    if (pagination.per_page !== pagination.total_data && pagination.total_Pages > pagination.page) {
      setPagination({ ...pagination, page: pagination.page + 1 });
    }
    dispatch(blogReducer.setLoadingState(false));
    setBlogLoadMore(false);
  };

  return (
    <main className="main_content">
      <section className="blog_page">
        <section className="explore_banner blog_banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6"></div>
              <div className="col-lg-6">
                <div className="explore_block">
                  <h6>Maximize Your Gymnastics Experience!</h6>
                  <h4>
                    <span className="invets_text">{bannerTitle}</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <DynamicBlog BlogDataList={BlogDataList} pagination={pagination} setPagination={setPagination} />
          </div>
          <div className="btn_videos text-center">
            {(BlogDataList.length !== pagination.total_data && pagination.total_Pages > pagination.page) ? (
              <button className="btn_animated btn_blockmd primary_btn" onClick={handleChangeLoaded}>
                {(blogLoadMore) ?
                  <ThreeDots
                    height="25"
                    width="80"
                    radius="9"
                    color="#fff"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{ display: "block" }}
                    visible={true}
                  />
                  : 'Load More'}
              </button>
            ) : (null)}
          </div>
        </div>
      </section>
    </main>
  );
}