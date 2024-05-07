'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import hero_banner2 from "../../assets/images/hero_banner2.jpg";
import Image from 'next/image';
import { getTeachersData } from '@/store/actions/TeachersAction';
import * as teachersReducer from '@/store/reducers/teachersReducer';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { RootState } from '@/store/store';
import { ApiResponseInstructors, paginationType, TeacherPageProps } from './TeacherType';
import { ThreeDots } from 'react-loader-spinner';

const TeachersCard = () => {

    const defaultpagination: paginationType = {
        page: 1,
        per_page: 12,
    }

    const dispatch = useAppDispatch();
    const { isLoaded, TeachersData } = useAppSelector((state: RootState) => state.teachers);

    const [pagination, setPagination] = useState<paginationType>(defaultpagination);
    const [totalData, setTotalData] = useState<number>(0);

    useEffect(() => {
        dispatch(teachersReducer.setLoading(true));
        getTeachersData(pagination).then((res: ApiResponseInstructors) => {
            setTotalData(res.pagination.total)
            dispatch(teachersReducer.setTeacherData(res.term_data));
            dispatch(teachersReducer.setLoading(false));
        })
    }, [pagination])

    const handleChangeLoadMore = () => {
        if (pagination.per_page !== totalData) {
            setPagination({ ...pagination, page: pagination.page + 1 });
        }
    }

    return (
        <div className="container">
            <div className="row">
                <>
                    {isLoaded ? (
                        Array(4).fill(0).map((_, index) => (
                            <SkeletonTheme baseColor="#fff" highlightColor="#444" key={index}>
                                <div className="col-md-6 col-xl-3">
                                    <div className="teach_items">
                                        <div className="teach_img">
                                            <Skeleton width={311} height={148} />
                                        </div>
                                        <h5><Skeleton width={311} height={18} /></h5>
                                        <p><Skeleton width={311} height={18} /></p>
                                    </div>
                                </div>
                            </SkeletonTheme>
                        ))
                    ) : (
                        TeachersData?.length === 0 ? (
                            <p>No Teacher is Available</p>
                        ) : (
                            TeachersData?.map((item: any, index: number) => {
                                return (
                                    <>
                                        <div className="col-md-6 col-xl-3">
                                            <div className="teach_items">
                                                <div className="teach_img">
                                                    <Image
                                                        src={item?.image ? item?.image : hero_banner2}
                                                        alt="icons"
                                                        className="img-fluid"
                                                        width={295}
                                                        height={172}
                                                    ></Image>
                                                </div>
                                                <h5>{item?.name ? item?.name : "-"}</h5>
                                                <p>{item?.taxonomy ? item?.taxonomy : "-"}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        )
                    )}
                </>
            </div>
            <div className="btn_videos text-center">
                {TeachersData.length !== totalData && totalData > 12 && (
                    <button onClick={handleChangeLoadMore} className="btn_blockmd primary_btn">
                        {isLoaded ?
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