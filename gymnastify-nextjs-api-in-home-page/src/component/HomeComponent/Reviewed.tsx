/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import testimonials from "@/assets/images/testimonials.png";
import ratinghicn from "@/assets/images/icons/ratingh_icn.svg";
import Image from 'next/image';
import * as homeReducer from "@/store/reducers/homeReducer";
import { useAppDispatch } from '@/store/hooks';
import { guestHomePageReview } from '@/store/actions/homeAction';
import Slider from "react-slick";
import { settings } from '@/utils/commonsettings';

const Reviewed = ({Testimonials}:any) => {
    const dispatch = useAppDispatch();
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
            <div className="member_slider">
                <Slider {...settings}>
                    {Testimonials?.map((item: any, index: number) => (
                        <div className="members_items" key={index}>
                            <div className="members_itemsicn">
                                <div className="members_img">
                                    <Image src={item?.image_url ? item.image_url : testimonials} alt="testimonials" width={63} height={60} />
                                </div>
                                <div className="members_block">
                                    <h6>{item?.title ? item.title : "-"}</h6>
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