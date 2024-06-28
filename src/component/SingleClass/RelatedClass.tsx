/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { getRelatedClassData } from "@/store/actions/relatedClassAction";
import * as relatedClassReducer from "@/store/reducers/relatedClassReducer";
import { uniqueid } from "@/utils/CommonService";
import { RelatedClassPropType, SingleClassPaginationType, getRelatedClassResType } from "./RelatedClassType";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import SingleClassesComponent from "./Classes";
import NoClassesComponent from "@/shared/common-component/NoClasses";


export default function RelatedClass({ classID }: RelatedClassPropType) {
  const dispatch = useAppDispatch();
  const { relatedClassesList, loadingState } = useAppSelector((state: RootState) => state.relatedClass);
  const { Profile } = useAppSelector((state: RootState) => state.profile);
  const userID: string = Profile?.user_id;

  const defalutPagination:SingleClassPaginationType = {
    user_id: userID,
    class_id: classID,
    cache: uniqueid(),
  }

  const [pagination, setPagination] = useState<SingleClassPaginationType>(defalutPagination);

  useEffect(() => {
    getRelatedClassData(pagination.class_id).then((res: getRelatedClassResType) => {
      if (res?.success) {
        dispatch(relatedClassReducer.setLoadingState(true));
        dispatch(relatedClassReducer.setUpdateRelatedClassList(res.data?.data?.classes));
        dispatch(relatedClassReducer.setLoadingState(false));
      }
    });
  }, [pagination]);

  

  const dynamicRelatedClasses = relatedClassesList.map(
    (item) => {
      return (
        <div
          className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
          key={item?.class_id}
          data-aos="flip-left" data-aos-duration="1000"
        >
        <SingleClassesComponent item={item} pagination={pagination} setPagination={setPagination} />
        </div>
      );
    }
  );

  const ConditionalContent =
     loadingState
      ? Array(4)
        .fill(0)
        .map((_, index) => (
          <SkeletonTheme baseColor="#eee" highlightColor="#ddd" key={relatedClassesList[index]?.class_id}>
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
      : [dynamicRelatedClasses]

  return relatedClassesList.length > 0 ? ConditionalContent : <div className="col-sm-12"><NoClassesComponent /></div>
}
