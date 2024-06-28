/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import readmore from "@/assets/images/icons/arrow_left_icn.svg";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getRelatedBlogsData } from "@/store/actions/singleBlogAction";
import * as singleBlogReducer from "@/store/reducers/singleBlogReducer";
import { decodeHTMLEntities, formatDateString, limitWords } from "@/utils/CommonService"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { RootState } from "@/store/store";
import { RelatedBlogsPropType, RelatedBlogsReponseDataType, RelatedBlogInterface } from "./singleBlogType";
import { ROUTES_PATH } from "@/utils/constant";

export default function RelatedBlog({ pagination, setPagination }: RelatedBlogsPropType) {
  const dispatch = useAppDispatch();
  const { relatedBlogsList, loadingRelatedBlog } = useAppSelector((state: RootState) => state.singleBlog);

  useEffect(() => {
    dispatch(singleBlogReducer.setLoadingRelatable(true));
    getRelatedBlogsData(pagination).then((res: RelatedBlogsReponseDataType) => {
      if (res.success) {
        if (pagination.total === "0" && pagination.pages === 0) {
          setPagination({ ...pagination, total: res?.data?.data.pagination.total, pages: res?.data?.data.pagination.pages });
        }
        if (pagination.page === 1) {
          dispatch(singleBlogReducer.setUpdatedRelatedBlogs(res?.data?.data?.data));
        } else {
          dispatch(singleBlogReducer.setUpdatedRelatedBlogs([...relatedBlogsList, ...res.data.data.data]))
        }
      }
    })
    dispatch(singleBlogReducer.setLoadingRelatable(false));
  }, [pagination]);



  const relatedBlogsContent = relatedBlogsList.map((relatedBlogListItem: RelatedBlogInterface) => {
    const renderedTitle: string = decodeHTMLEntities(relatedBlogListItem?.title?.rendered);
    const formatedDate: string = formatDateString(relatedBlogListItem?.date);
    const renderedContent = limitWords(relatedBlogListItem?.content?.rendered, 11);
    return (
      <div className="col-md-6 col-xl-3" key={relatedBlogListItem?.id}>
        <div className="effect_product blog_items">
          <div className="effect_img blog_img">
            <Image src={relatedBlogListItem?.image?.normalImage} alt="icons" className="img-fluid" width={270} height={173}></Image>
          </div>
          <h5>
            <Link href={`${ROUTES_PATH.BLOG}/${relatedBlogListItem?.id}`}>{renderedTitle}</Link>
          </h5>
          <span className="date_blog">{formatedDate}</span>
          <div dangerouslySetInnerHTML={{ __html: renderedContent }}></div>
          <div className="read_blog">
            <Link href={`${ROUTES_PATH.BLOG}/${relatedBlogListItem?.id}`}>
              Read More <Image src={readmore} alt="icons"></Image>
            </Link>
          </div>
        </div>
      </div>
    )
  })

  const ConditionalContent =
    loadingRelatedBlog
      ? Array(4)
        .fill(0)
        .map((_, index) => (
          <SkeletonTheme baseColor="#fff" highlightColor="#ddd" key={relatedBlogsList[index]?.id}>
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
      : [relatedBlogsContent]

  return relatedBlogsList.length > 0 ? ConditionalContent : <p>Currently we do not offer any blogs</p>
}