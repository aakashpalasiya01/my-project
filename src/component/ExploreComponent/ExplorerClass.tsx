/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import playicn from "@/assets/images/icons/play_icn.svg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ThreeDots } from "react-loader-spinner";
import {
  ExplorerClassData,
  ExplorerClasses,
  ExplorerClassesResponse,
} from "./Explorer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { explorerPageClasses } from "@/store/actions/explorerAction";
import * as explorerReducer from "@/store/reducers/explorerReducer";
import { RootState } from "@/store/store";
import { handleChangeduration } from "@/shared/common-dialog";
import NoClassesComponent from "@/shared/common-component/NoClasses";

const ExplorerClassesComponent = ({
  pagination,
  setPagination,
  handleShow,
}: ExplorerClasses) => {
  const { Loaded, ExplorerClass } = useAppSelector(
    (state: RootState) => state.explorer
  );
  const dispatch = useAppDispatch();

  const [exploreLoadMore, setExploreLoadMore] = useState(false);

  useEffect(() => {
    if (pagination.group) {
      dispatch(explorerReducer.setLoader(true));

      explorerPageClasses(pagination).then((res: ExplorerClassesResponse) => {
        if (res.classes.length === 0) {
          dispatch(explorerReducer.setLoader(false));
          dispatch(explorerReducer.setExplorerClasses(res.classes));
          return;
        }

        if (pagination.classData !== res.total_classes) {
          setPagination({
            ...pagination,
            totalData: res.total_pages,
            classData: res.total_classes,
          });
        };

        if (pagination.page === 1) {
          dispatch(explorerReducer.setExplorerClasses(res.classes));
        } else {
          dispatch(
            explorerReducer.setExplorerClasses([
              ...ExplorerClass,
              ...res.classes,
            ])
          );
        }

        dispatch(explorerReducer.setLoader(false));
      });
    }
  }, [pagination]);

  const handleChangeLoaded = () => {
    setExploreLoadMore(true);
    if (
      pagination.per_page !== pagination.totalData ||
      ExplorerClass.length !== pagination.classData
    ) {
      setPagination({ ...pagination, page: pagination.page + 1 });
    }
    setExploreLoadMore(false);
  };

  const ExplorerClassesContent = ExplorerClass?.map(
    (item: ExplorerClassData, index: number) => {
      return (
        <div
          className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
          key={index + 1}
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <div className="classes_items position-relative">
            <div className="classes_img">
              <Image
                src={item?.image?.normalImage ? item?.image?.normalImage : ""}
                alt="levels1"
                width={311}
                height={148}
              ></Image>
            </div>
            <div className="classes_block">
              <div className="arials_block">
                <div className="font12 aerials_tag">
                  {item?.level_skills && Array.isArray(item.level_skills) ? (
                    item.level_skills.map((skill, index) => (
                      <span key={index + 1} style={{ paddingLeft: '3px', paddingRight: '3px' }}>{skill}{item?.level_skills.length - 1 === index ? '' : ','}</span>
                    ))
                  ) : (
                    '-'
                  )}
                </div>
                <div className="levels_group">
                  <div className="font12 levels_tag text-truncated">
                    {item?.group && Array.isArray(item.group) ? (
                      item.group.map((level, index) => (
                        <span key={index + 1} style={{ paddingLeft: '3px', paddingRight: '3px' }}>{level}{item?.group.length - 1 === index ? '' : ','}</span>
                      ))
                    ) : (
                      '-'
                    )}
                  </div>
                  <div className="levels_btn">
                    <button
                      type="button"
                      onClick={() => handleShow(item?.class_id)}
                    >
                      <Image src={playicn} alt="icosn" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="adult_class">
                <span
                  className="font12 adult_tags"
                >
                  {item?.title ? item?.title : "-"} -{" "}
                  {item?.group ? item?.group : "-"}{" "}
                  {item?.instructors ? item?.instructors : "-"}
                </span>
                <span className="font12 duration">
                  {`Duration - ${handleChangeduration(item?.vimeo_data?.video_length)}`}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

  const ConditionalContent =
    ExplorerClass.length === 0 && Loaded
      ? Array(4)
        .fill(0)
        .map((_, index) => (
          <SkeletonTheme
            key={100 - index}
            baseColor="#fff"
            highlightColor="#ddd"
          >
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="classes_items position-relative">
                <div className="classes_img">
                  <Skeleton width={311} height={148} />
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
      : [ExplorerClassesContent];

  return (
    <div className="container">
      <div className="sec_title_md">
        <h5>Classes</h5>
      </div>
      <div className="row">
        {ExplorerClass.length === 0 && !Loaded ? (
          <NoClassesComponent />
        ) : ConditionalContent}
      </div>
      <div className="btn_videos text-center">
        {ExplorerClass.length !== pagination.classData &&
          pagination.totalData > pagination.page ? (
          <button
            className="btn_animated btn_blockmd primary_btn"
            onClick={handleChangeLoaded}
          >
            {exploreLoadMore ? (
              <ThreeDots
                height="25"
                width="80"
                radius="9"
                color="#fff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{ display: "block" }}
                visible={true}
              />
            ) : (
              "Load More"
            )}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ExplorerClassesComponent;
