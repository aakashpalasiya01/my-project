/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useEffect } from 'react'
import testimonials from "@/assets/images/testimonials.png";
import ratinghicn from "@/assets/images/icons/ratingh_icn.svg";
import Image from 'next/image';
import * as homeReducer from "@/store/reducers/homeReducer";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { guestHomePageReview } from '@/store/actions/homeAction';
import Slider from "react-slick";
import { settings } from '@/utils/commonsettings';
import { RootState } from '@/store/store';


const Reviewed = () => {

    const dispatch = useAppDispatch();
    const { Testimonials } = useAppSelector((state: RootState) => state.home);

    useEffect(() => {
        dispatch(homeReducer.setLoader(true));
        dispatch(guestHomePageReview());
        dispatch(homeReducer.setLoader(false));
    }, [])

  
    return (
        <div className="container">
            <div className="sec_title text-center">
                <h2>What our members are saying</h2>
            </div>
            <div className="member_slider" data-aos="fade-up">
                <Slider {...settings}>
                    {Testimonials?.map((item: any, index: number) => (
                        <div className="members_items" key={index + 1}>
                            <div className="members_itemsicn">
                                <div className="members_img">
                                    <Image src={item?.image_url ? item.image_url : testimonials} alt="testimonials" width={63} height={60} />
                                </div>
                                <div className="members_block">
                                    <h6 dangerouslySetInnerHTML={{__html:item?.title}}></h6>
                                    <Image src={ratinghicn} alt="icons" />
                                </div>
                            </div>
                            <h3>{item?.author ? item.author : "-"}</h3>
                            <p>
                                {item?.content ? item.content : "-"}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Reviewed;