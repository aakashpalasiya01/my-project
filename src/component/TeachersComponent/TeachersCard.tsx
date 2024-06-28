/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useEffect, useState } from 'react'
import hero_banner2 from "@/assets/images/hero_banner2.jpg";
import Image from 'next/image';
import { getTeachersData } from '@/store/actions/TeachersAction';
import * as teachersReducer from '@/store/reducers/teachersReducer';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { RootState } from '@/store/store';
import { ApiResponseInstructors, paginationTeachersType } from './TeacherType';
import { ThreeDots } from 'react-loader-spinner';

const TeachersCard = () => {

    const defaultpagination: paginationTeachersType = {
        page: 1,
        per_page: 12,
        classdata: 0,
        totaldata: 0
    }

    const dispatch = useAppDispatch();
    const { isLoaded, TeachersData } = useAppSelector((state: RootState) => state.teachers);

    const [pagination, setPagination] = useState<paginationTeachersType>(defaultpagination);
    const [teacherLoadMore,setTeacherLoadMore] = useState(false);

    useEffect(() => {
        dispatch(teachersReducer.setLoading(true));
        getTeachersData(pagination).then((res: ApiResponseInstructors) => {

            if (pagination.totaldata === 0 && pagination.classdata === 0) {
                setPagination({ ...pagination, totaldata: res.pagination.pages, classdata: parseInt(res.pagination.total, 10) });
            }

            if (pagination.page === 1) {
                dispatch(teachersReducer.setTeacherData(res.term_data));
            } else {
                dispatch(teachersReducer.setTeacherData([...TeachersData, ...res.term_data]));
            }

            dispatch(teachersReducer.setLoading(false));
            
        })
    }, [pagination])

    const handleChangeLoadMore = () => {
        setTeacherLoadMore(true);
        if (pagination.per_page !== pagination.totaldata || TeachersData.length !== pagination.classdata) {
            setPagination({ ...pagination, page: pagination.page + 1 });
        }
        setTeacherLoadMore(false);
    }

    const TeachersClassRenderContent = TeachersData.map((item: any, index: number) => {
        return (
            <div className="col-md-6 col-xl-3" key={index + 1}>
                <div className="effect_product teach_items">
                    <div className="effect_img teach_img">
                        <Image
                            src={item?.image ? item?.image : hero_banner2}
                            alt="icons"
                            className="img-fluid"
                            width={295}
                            height={172}
                        />
                    </div>
                    <h5>{item?.name ? item?.name : "-"}</h5>
                     <p>{item?.designation ? item?.designation : "-"}</p> 
                </div>
            </div>
        )
    })

    const ConditionalContent = TeachersData.length === 0 && isLoaded
        ? Array(4)
            .fill(0)
            .map((_, index) => (
                <SkeletonTheme baseColor="#eee" highlightColor="#ddd" key={index + 1}>
                    <div className="col-md-6 col-xl-3">
                        <div className="effect_product teach_items">
                            <div className="effect_img teach_img">
                                <Skeleton height={148} />
                            </div>
                            <h5><Skeleton height={18} /></h5>
                            <p><Skeleton height={18} /></p>
                        </div>
                    </div>
                </SkeletonTheme>
            ))
        : [TeachersClassRenderContent]


    return (
        <div className="container">

            <div className="row">
                {TeachersData.length === 0 && !isLoaded ? (<p>No Teachers Found</p>) : ConditionalContent}
            </div>

            <div className="btn_videos text-center">
                {TeachersData.length !== pagination.classdata && pagination.totaldata > pagination.page && (
                    <button onClick={handleChangeLoadMore} className="btn_animated btn_blockmd primary_btn">
                        {teacherLoadMore ?
                            <ThreeDots
                                height="25"
                                width="80"
                                radius="9"
                                color="#fff"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{ display: "block" }}
                                visible={true}
                            />
                            : "Load More"}
                    </button>

                )}
            </div>
        </div>
    )
}

export default TeachersCard