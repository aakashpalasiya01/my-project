/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ExplorerBanner } from './Explorer';
import Link from 'next/link';
import { ROUTES_PATH } from '@/utils/constant';
import { useEffect } from 'react';
import { explorerPageTopBanner } from '@/store/actions/explorerAction';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import * as explorerReducer from '@/store/reducers/explorerReducer';
import { RootState } from '@/store/store';

const ExploreBanner = () => {
    const dispatch = useAppDispatch();
    const { ExploreCard, LoadedBanner } = useAppSelector((state: RootState) => state.explorer);

    useEffect(() => {
        dispatch(explorerReducer.setLoaderExplorerBanner(true));
        explorerPageTopBanner().then((res: ExplorerBanner[]) => {
            dispatch(explorerReducer.setExploreCard(res));
            dispatch(explorerReducer.setLoaderExplorerBanner(false));
        })
    }, []);

    let backgroundURL;
    let banner_top_heading;
    let banner_title;
    let banner_main_title;
    let banner_button_name;
    if(Array.isArray(ExploreCard)) {
        backgroundURL = ExploreCard[0]?.background_image?.url;
        banner_top_heading = ExploreCard[0]?.top_heading;
        banner_title = ExploreCard[0]?.title;
        banner_main_title = ExploreCard[0]?.main_title;
        banner_button_name = ExploreCard[0]?.button?.name;
    } else if (typeof(ExploreCard)==="object") {
        backgroundURL = ExploreCard?.background_image?.url;
        banner_top_heading = ExploreCard?.top_heading;
        banner_title = ExploreCard?.title;
        banner_main_title = ExploreCard?.main_title;
        banner_button_name = ExploreCard?.button?.name;
    } else {
        backgroundURL = ""
        banner_top_heading = ""
        banner_title = ""
        banner_main_title = ""
        banner_button_name = ""
    }

    return (
        <section className="explore_banner"  style={{ backgroundImage: `url(${backgroundURL})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6">
                        <div className="explore_block">
                            {LoadedBanner ? (
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
                                    <h6 data-aos="fade-left" data-aos-duration="1000">{banner_top_heading}</h6>
                                    <h4 data-aos="fade-left" data-aos-duration="1000">
                                        {banner_title}
                                        <span className="invets_text">{banner_main_title}</span>
                                    </h4>
                                </>
                            )}
                            {LoadedBanner ? (
                                <SkeletonTheme baseColor="#fff" highlightColor="#ddd">
                                    <div className="explore_btn">
                                        <Skeleton width={185} height={50} />
                                    </div>
                                </SkeletonTheme>
                            ) : (
                                <div className="explore_btn" data-aos="fade-left" data-aos-duration="1000">
                                    <Link href={ROUTES_PATH.LOGIN} >
                                        <button className="btn_animated white_btn btn_blockmd">
                                            {banner_button_name}
                                        </button>
                                    </Link>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExploreBanner