/* eslint-disable react-hooks/exhaustive-deps */
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { ExplorerBanner, RegsiterBannerProps } from './Explorer';
import { useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import * as explorerReducer from '@/store/reducers/explorerReducer';
import { explorerPageTopBanner } from '@/store/actions/explorerAction';

const ExploreBanner = ({ Loaded, ExploreCard }: RegsiterBannerProps) => {
    const dispatch = useAppDispatch();
    // useEffect(() => {
            
    // }, [])
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
                                <button className="white_btn btn_blockmd">
                                    {ExploreCard?.button?.name ? ExploreCard?.button?.name : '-'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExploreBanner