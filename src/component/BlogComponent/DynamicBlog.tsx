/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import * as blogReducer from "@/store/reducers/blogReducer";
import { getBlogData } from "@/store/actions/blogAction";
import { BlogDataType, BlogResType, BlogPropType } from "./BlogType";
import Link from "next/link";
import Image from "next/image";
import readmore from "@/assets/images/icons/arrow_left_icn.svg";
import { ROUTES_PATH } from "@/utils/constant";
import {decodeHTMLEntities,formatDateString,limitWords} from "@/utils/CommonService"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { RootState } from "@/store/store";
import blog from "../../assets/images/blog.jpg";


export default function DynamicBlog({BlogDataList,pagination,setPagination}:BlogPropType) {

  const dispatch = useAppDispatch();
  const {loadingClassesState} = useAppSelector((state:RootState)=>state.blog);

  useEffect(() => { 
      dispatch(blogReducer.setLoadingClassesState(true));
       getBlogData(pagination).then((res: BlogResType) => {
        if (res.success) {
          if(pagination.total_data === 0 && pagination.total_Pages === 0)
            {
              setPagination({...pagination,total_data:res.data.data.pagination.total, total_Pages:res.data.data.pagination.pages});
            }
          if(pagination.page === 1)
            {
              dispatch(blogReducer.setGetBlogData(res.data.data.data));
            }
            else{
              dispatch(blogReducer.setGetBlogData([...BlogDataList, ...res.data.data.data]));
            }
          }
          dispatch(blogReducer.setLoadingClassesState(false));
        });
  }, [pagination]);

  

  const skeletonContent =  Array(4)
  .fill(0)
  .map((_, index) => (
    <SkeletonTheme baseColor="#eee"
    highlightColor="#ddd" key={BlogDataList[index]?.id}>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
        <div className="classes_items position-relative">
          <div className="classes_img">
            <Skeleton width={311} height={155} />
          </div>
          <div className="classes_block">
            <div className="arials_block">
              <Skeleton width={311} height={18} />
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  ))

  const renderingBlogContent = BlogDataList?.map(
    (BlogDataListItem: BlogDataType) => {
        const blogContent = limitWords(BlogDataListItem?.content?.rendered,11)
      return (
        <div className="col-md-6 col-xl-3" key={BlogDataListItem?.id} data-aos="flip-left" data-aos-duration="1000">
          <div className="effect_product blog_items">
            <div className="effect_img blog_img">
              <Image src={BlogDataListItem?.image?.normalImage ? BlogDataListItem?.image?.normalImage : blog} alt="icons" className="img-fluid" width={270} height={173} ></Image>
            </div>
            <h5>
              <Link href={`${ROUTES_PATH.BLOG}/${BlogDataListItem?.id}`}>{decodeHTMLEntities(BlogDataListItem?.title?.rendered)}</Link>
            </h5>
            <span className="date_blog">{formatDateString(BlogDataListItem?.date)}</span>
            <div dangerouslySetInnerHTML={{__html:blogContent}}></div>
            <div className="read_blog">
              <Link href={`${ROUTES_PATH.BLOG}/${BlogDataListItem?.id}`}>
                Read More <Image src={readmore} alt="icons"></Image>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  );
  return BlogDataList.length === 0 && loadingClassesState ? skeletonContent : [renderingBlogContent];
}