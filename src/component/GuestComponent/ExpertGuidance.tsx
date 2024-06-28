/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useEffect } from 'react'
import getsupports1 from "@/assets/images/get_supports1.jpg";
import getsupports2 from "@/assets/images/get_supports2.jpg";
import Image from 'next/image';
import { guestHomePageNeedExpertGuidance } from '@/store/actions/homeAction';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import * as homeReducer from "@/store/reducers/homeReducer";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Link from 'next/link';
import { ROUTES_PATH } from '@/utils/constant';
import { RootState } from '@/store/store';

const ExpertGuidances = () => {

    const dispatch = useAppDispatch();
    const { Loaded, ExpertGuidance } = useAppSelector((state: RootState) => state.home);

    useEffect(() => {
        dispatch(homeReducer.setLoader(true));
        dispatch(guestHomePageNeedExpertGuidance())
        dispatch(homeReducer.setLoader(false));
    }, [])

    

    return (
        <div className="container">
            <div className="row align-items-center">
                {Loaded ? (
                    <SkeletonTheme baseColor="#eee" highlightColor="#ddd">
                        <div className="col-lg-3 col_supports1">
                            <div className="get_supports1">
                                <Skeleton width={250}
                                    height={190} />
                            </div>
                        </div>
                        <div className="col-lg-4 col_supports2">
                            <div className="get_supports2">
                                <Skeleton width={325} height={246} />
                            </div>
                        </div>
                    </SkeletonTheme>
                ) : (
                    <>
                        <div className="col-lg-3 col_supports1" data-aos="fade-right">
                            <div className="get_supports1">
                                <Image
                                    src={ExpertGuidance?.image_one?.url || getsupports1}
                                    alt="get supports"
                                    className="img-fluid"
                                    width={250}
                                    height={190}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4 col_supports2" data-aos="fade-right">
                            <div className="get_supports2">
                                <Image
                                    src={ExpertGuidance?.image_two?.url || getsupports2}
                                    alt="get supports"
                                    className="img-fluid"
                                    width={325}
                                    height={246}
                                />
                            </div>
                        </div>
                    </>
                )}
                <div className="col-lg-5 col_supports3">
                    {Loaded ? (
                        <SkeletonTheme baseColor="#eee" highlightColor="#ddd">
                            <div className="get_support_block">
                                <p>
                                    <Skeleton width={150} />
                                </p>
                                <h5>
                                    <Skeleton width={250} />
                                </h5>
                                <h4>
                                    <Skeleton width={250} />
                                </h4>
                                <p>
                                    <Skeleton width={250} />
                                </p>
                            </div>
                        </SkeletonTheme>
                    ) : (
                        <div className="get_support_block">
                            <p data-aos="fade-up">{ExpertGuidance?.top_heading || "-"}</p>
                            <h5 data-aos="fade-up">{ExpertGuidance?.title || "-"}</h5>
                            <h4 data-aos="fade-up">{ExpertGuidance?.main_title || "-"}</h4>
                            <p data-aos="fade-up">{ExpertGuidance?.description || "-"}</p>
                            <div className="get_subnow" data-aos="fade-up">
                                <Link href={ROUTES_PATH.LOGIN}>
                                    <button className="btn_animated white_btn btn_blockmd">
                                        {ExpertGuidance?.button?.name || "-"}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div >
        </div >
    )
}

export default ExpertGuidances