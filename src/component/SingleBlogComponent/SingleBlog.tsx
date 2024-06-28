/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, {useState, useEffect} from "react"
import Image from "next/image"
import Breadcrumb from "react-bootstrap/Breadcrumb"
import {useAppDispatch, useAppSelector} from "@/store/hooks"
import {getSingleBlogData} from "@/store/actions/singleBlogAction"
import * as singleBlogReducer from "@/store/reducers/singleBlogReducer"
import {useParams} from "next/navigation"
import {SingleBlogResponse, RelatedBlogPagination} from "./singleBlogType"
import {decodeHTMLEntities, formatDateString} from "@/utils/CommonService"
import Skeleton, {SkeletonTheme} from "react-loading-skeleton"
import {RootState} from "@/store/store"
import RelatedBlog from "./RelatedBlog"
import {ThreeDots} from "react-loader-spinner"
import {ROUTES_PATH} from "@/utils/constant"

function Singleblog() {
  const dispatch = useAppDispatch()
  const {singleBlog, loadingSingleBlog, relatedBlogsList, loadingRelatedBlog} =
    useAppSelector((state: RootState) => state.singleBlog)
  const params = useParams<{blog_id: string}>()
  const blogID: string = params.blog_id
  const [sglblgLoadMore, setSglBlgLoadMore] = useState(false)
  useEffect(() => {
    const FetchSingleBlog = async () => {
      dispatch(singleBlogReducer.setLoadingSingle(true))
      await getSingleBlogData(blogID).then((res: SingleBlogResponse) => {
        if (res?.success) {
          dispatch(singleBlogReducer.setUpdateSingleBlog(res?.data))
        }
      })
      dispatch(singleBlogReducer.setLoadingSingle(false))
    }
    FetchSingleBlog()
  }, [])

  const defaultPagination: RelatedBlogPagination = {
    page: 1,
    per_page: 4,
    total: "0",
    pages: 0,
    exclude: blogID
  }

  const [pagination, setPagination] =
    useState<RelatedBlogPagination>(defaultPagination)

  const formattedTitle = decodeHTMLEntities(singleBlog?.title?.rendered)

  const formattedDate = formatDateString(singleBlog?.date)

  const handleChangeLoaded = () => {
    setSglBlgLoadMore(true)
    if (
      pagination.per_page !== parseInt(pagination.total, 10) &&
      pagination.pages > pagination.page
    ) {
      setPagination({...pagination, page: pagination.page + 1})
    }
    setSglBlgLoadMore(false)
  }

  const SkeletonContent = (
    <SkeletonTheme baseColor="#fff" highlightColor="#ddd">
      <main className="main_content">
        <section className="single_blog">
          <section className="bred_eles">
            <div className="container">
              <Skeleton width={200} height={30} />
            </div>
          </section>
          <div className="container">
            <div className="blog_details">
              <div className="single_blog_thum">
                <Skeleton width={381} height={206} />
              </div>
              <div className="blog-details_title">
                <div className="prvcy_title">
                  <Skeleton width={90} height={10} />
                </div>
                <span className="date_blogdetails">
                  <Skeleton width={40} height={5} />
                </span>
              </div>
              <div>
                <Skeleton count={3} />
                <Skeleton count={3} />
                <Skeleton count={3} />
              </div>
            </div>
            <div className="blog_need">
              <div className="sec_title text-center">
                <Skeleton width={1110} height={55} />
              </div>
              <div className="row">
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <SkeletonTheme
                      baseColor="#eee"
                      highlightColor="#ddd"
                      key={index + 1}
                    >
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
                  ))}
              </div>
              <div className="btn_videos text-center">
                <Skeleton width={220} height={50} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </SkeletonTheme>
  )

  const SingleBlogContent = (
    <main className="main_content">
      <section className="single_blog">
        <section className="bred_eles">
          <div className="container">
            <Breadcrumb>
              <Breadcrumb.Item href={ROUTES_PATH.BLOG} className="point_none">
                Blog
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">{formattedTitle}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </section>
        <div className="container">
          <div className="blog_details">
            <div className="effect_product single_blog_thum">
              <div className="effect_img">
                <Image
                  src={singleBlog?.image.normalImage}
                  alt="icons"
                  className="img-fluid"
                  width={381}
                  height={206}
                ></Image>
              </div>
            </div>
            <div className="blog_details_title">
              <div className="prvcy_title">
                <h4>{formattedTitle}</h4>
                <span className="date_blogdetails">{formattedDate}</span>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{__html: singleBlog?.content.rendered}}
            ></div>
          </div>
          <div className="blog_need">
            <div className="sec_title text-center">
              <h2>Related Blogs</h2>
            </div>
            <div className="row">
              <RelatedBlog
                pagination={pagination}
                setPagination={setPagination}
              />
            </div>
            <div className="btn_videos text-center">
              {relatedBlogsList.length !== parseInt(pagination.total, 10) &&
              pagination.pages > pagination.page ? (
                <button
                  className="btn_animated btn_blockmd primary_btn"
                  onClick={handleChangeLoaded}
                >
                  {sglblgLoadMore ? (
                    <ThreeDots
                      height="25"
                      width="80"
                      radius="9"
                      color="#fff"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{display: "block"}}
                      visible={true}
                    />
                  ) : (
                    "Load More"
                  )}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  )

  return loadingSingleBlog ? SkeletonContent : SingleBlogContent
}

export default Singleblog
