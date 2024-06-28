/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import React, { useEffect } from 'react'
import * as RegisteredSlice from "@/store/reducers/registeredReducer";
import { RootState } from '@/store/store';
import { RegisterPageTopBanner } from '@/store/actions/registeredAction';
import { RegsiterBanner } from './Register';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Link from 'next/link';
import moment from 'moment';
import { subscriptionStatus } from '@/utils/constant';

const RegisterBanner = () => {

    const dispatch = useAppDispatch();
    const { ExploreCard, LoadedRegisterBanner } = useAppSelector((state: RootState) => state.registered);
    const { subscription } = useAppSelector((state: RootState) => state.auth);
    const currentTimestamp = moment().unix();

    useEffect(() => {
        if ((subscription && +subscription?.current_period_end <= currentTimestamp) || subscription?.status === subscriptionStatus.canceled || !subscription) {
            dispatch(RegisteredSlice.setLoadedRegisterBanner(true));
    
            RegisterPageTopBanner().then((res: RegsiterBanner) => {
                dispatch(RegisteredSlice.setExploreCard(res));
            })
            dispatch(RegisteredSlice.setLoadedRegisterBanner(false));
        }

    }, []);

    // The provided timestamp is greater than the current time.
    if (subscription && +subscription?.current_period_end > currentTimestamp && subscription.status === subscriptionStatus.active) {
        return null;
    }

    return (
        <section className="explore_banner" style={{ backgroundImage: `url(${ExploreCard?.background_image?.url ? ExploreCard?.background_image?.url : ''})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6">
                        <div className="explore_block">
                            {LoadedRegisterBanner ? (
                                <SkeletonTheme baseColor="#fff" highlightColor="#ddd">
                                    <h6>
                                        <Skeleton width={368} />
                                    </h6>
                                    <h4>
                                        <Skeleton width={368} />
                                        <span className='invets_text'>
                                            <Skeleton width={368} />
                                        </span>
                                    </h4>
                                </SkeletonTheme>
                            ) : (
                                <>
                                    <h6 data-aos="fade-left" data-aos-duration="1000">{ExploreCard?.top_heading ? ExploreCard?.top_heading : '-'}</h6>
                                    <h4 data-aos="fade-left" data-aos-duration="1000">
                                        {ExploreCard?.title ? ExploreCard?.title : '-'}
                                        <span className="invets_text">{ExploreCard?.main_title ? ExploreCard?.main_title : '-'}</span>
                                    </h4>
                                </>
                            )}
                            {LoadedRegisterBanner ? (
                                <SkeletonTheme baseColor="#fff" highlightColor="#ddd">
                                    <div className="explore_btn">
                                        <Link href='#subs_plan' className="btn_animated white_btn btn_blockmd">
                                            <Skeleton width={185} height={25} />
                                        </Link>
                                    </div>
                                </SkeletonTheme>
                            ) : (
                                <div className="explore_btn" data-aos="fade-left" data-aos-duration="1000">
                                    <a className="btn_animated white_btn btn_blockmd" href='#subs_plan'>
                                        {ExploreCard?.button?.name ? ExploreCard?.button?.name : '-'}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterBanner;