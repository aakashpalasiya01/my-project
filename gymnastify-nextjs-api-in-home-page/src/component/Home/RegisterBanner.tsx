/* eslint-disable react-hooks/exhaustive-deps */
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import React, { useEffect } from 'react'
import * as RegisteredSlice from "@/store/reducers/registeredReducer";
import { RootState } from '@/store/store';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { RegisterPageTopBanner } from '@/store/actions/registeredAction';
import { RegsiterBanner } from './Register';

const RegisterBanner = () => {

    const { Loaded, ExploreCard } = useAppSelector((state: RootState) => state.registered);
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(RegisteredSlice.setLoader(true));
        RegisterPageTopBanner().then((res: RegsiterBanner) => {
            dispatch(RegisteredSlice.setExploreCard(res.data));
            dispatch(RegisteredSlice.setLoader(false));
        })
    }, [])

    return (
        <section className="explore_banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6">
                        <div className="explore_block">
                            {Loaded ? (
                                <SkeletonTheme baseColor="#fff" highlightColor="#444">
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
                                    <h6>{ExploreCard?.top_heading ? ExploreCard?.top_heading : '-'}</h6>
                                    <h4>
                                        {ExploreCard?.title ? ExploreCard?.title : '-'}
                                        <span className="invets_text">{ExploreCard?.main_title ? ExploreCard?.main_title : '-'}</span>
                                    </h4>
                                </>
                            )}
                            <div className="explore_btn">
                                <a className="white_btn btn_blockmd" href='#subs_plan'>
                                    {ExploreCard?.button?.name ? ExploreCard?.button?.name : '-'}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterBanner;