/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from 'next/image'
import React, { useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Guestbanner from "@/assets/images/guest_img.png";
import Link from 'next/link';
import { ROUTES_PATH } from '@/utils/constant';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import * as homeReducer from '@/store/reducers/homeReducer';
import { guestHomeHeroSection } from '@/store/actions/homeAction';



const HeroSection = () => {

    const { Loaded, guesthome } = useAppSelector((state: RootState) => state.home);
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      const fetchGuestHome = async () => {
        dispatch(homeReducer.setLoader(true));
        await dispatch(guestHomeHeroSection());
        dispatch(homeReducer.setLoader(false));
      }
      fetchGuestHome();
    }, [])

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="guest_content">
                        <div className="guest-title">
                            {Loaded ? (
                                <SkeletonTheme baseColor="#eee" highlightColor="#ddd">
                                    <h1>
                                        <Skeleton width={520} height={143} />
                                    </h1>
                                </SkeletonTheme>) : (
                                <h1 data-aos="fade-down" data-aos-duration="1000">FUN AND FITNESS FOR ALL AGES!</h1>
                            )}
                            {Loaded ? (
                                <SkeletonTheme baseColor="#eee" highlightColor="#ddd">
                                    <p>
                                        <Skeleton width={520} height={43} />
                                    </p>
                                </SkeletonTheme>
                            ) : (
                                <p data-aos="fade-down" data-aos-duration="1000">
                                    {guesthome[0]?.acf_fields?.hero_section?.description ? guesthome[0]?.acf_fields?.hero_section?.description : '-'}
                                </p>
                            )}
                        </div>
                        <div className="subnow_link">
                            {Loaded ? (
                                <SkeletonTheme baseColor="#eee" highlightColor="#ddd">
                                    <button className="primary_btn btn_blockmd">
                                    <Skeleton width={289} height={43} />
                                    </button>
                                </SkeletonTheme>
                            ) : (
                                <Link href={ROUTES_PATH.LOGIN}>
                                    <button className="btn_animated primary_btn btn_blockmd" data-aos="fade-down" data-aos-duration="1000">
                                        {/* {guesthome[0]?.acf_fields?.hero_section?.primary_button?.button_name ? guesthome[0]?.acf_fields?.hero_section?.primary_button?.button_name : '-'} */}
                                        Subscribe Now
                                    </button>
                                </Link>
                            )}
                            {/* <Link href={ROUTES_PATH.LOGIN}  data-aos="fade-down" data-aos-duration="1000">
                                {guesthome[0]?.acf_fields?.hero_section?.secondary_button?.button_name ? guesthome[0]?.acf_fields?.hero_section?.secondary_button?.button_name : 'Subscribe Now'}
                            </Link> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="guest_img">
                        {Loaded ? (
                            <SkeletonTheme baseColor="#eee" highlightColor="#ddd">
                                <Skeleton width={332} height={403} />
                            </SkeletonTheme>
                        ) : (
                            <Image
                                data-aos="fade-up-left" data-aos-duration="1000"
                                src={guesthome[0]?.acf_fields?.hero_section?.image ? guesthome[0]?.acf_fields?.hero_section?.image : Guestbanner}
                                className="img-fluid"
                                alt="guest banner"
                                width={332}
                                height={403}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection