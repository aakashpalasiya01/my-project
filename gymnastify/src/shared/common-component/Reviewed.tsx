/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react'
import testimonials from "@/assets/images/testimonials.png";
import ratinghicn from "@/assets/images/icons/ratingh_icn.svg";
import Image from 'next/image';
import Slider from "react-slick";
import { settings } from '@/utils/commonsettings';


const Reviewed = () => {

    return (
        <div className="container">
            <div className="sec_title text-center">
                <h2>What our members are saying</h2>
            </div>
            <div className="member_slider" data-aos="fade-up">
                <Slider {...settings}>
                <div className="members_items" >
                            <div className="members_itemsicn">
                                <div className="members_img">
                                    <Image src={testimonials} alt="testimonials" width={63} height={60} />
                                </div>
                                <div className="members_block">
                                    <h6 dangerouslySetInnerHTML={{__html:"Instructor Review"}}></h6>
                                    <Image src={ratinghicn} alt="icons" />
                                </div>
                            </div>
                            <h3>Coach Alex, Youth Gymnastics Instructor</h3>
                            <p>
                            I love doing cartwheels and learning flips from my favorite coaches on the screen! I can already do a handstand for 10 seconds, thanks to their lessons!
                            </p>
                        </div>
                        <div className="members_items" >
                            <div className="members_itemsicn">
                                <div className="members_img">
                                    <Image src={testimonials} alt="testimonials" width={63} height={60} />
                                </div>
                                <div className="members_block">
                                    <h6 dangerouslySetInnerHTML={{__html:"Instructor Review"}}></h6>
                                    <Image src={ratinghicn} alt="icons" />
                                </div>
                            </div>
                            <h3>Coach Alex, Youth Gymnastics Instructor</h3>
                            <p>
                            I love doing cartwheels and learning flips from my favorite coaches on the screen! I can already do a handstand for 10 seconds, thanks to their lessons!
                            </p>
                        </div>
                        <div className="members_items" >
                            <div className="members_itemsicn">
                                <div className="members_img">
                                    <Image src={testimonials} alt="testimonials" width={63} height={60} />
                                </div>
                                <div className="members_block">
                                    <h6 dangerouslySetInnerHTML={{__html:"Instructor Review"}}></h6>
                                    <Image src={ratinghicn} alt="icons" />
                                </div>
                            </div>
                            <h3>Coach Alex, Youth Gymnastics Instructor</h3>
                            <p>
                            I love doing cartwheels and learning flips from my favorite coaches on the screen! I can already do a handstand for 10 seconds, thanks to their lessons!
                            </p>
                        </div>
                        <div className="members_items" >
                            <div className="members_itemsicn">
                                <div className="members_img">
                                    <Image src={testimonials} alt="testimonials" width={63} height={60} />
                                </div>
                                <div className="members_block">
                                    <h6 dangerouslySetInnerHTML={{__html:"Instructor Review"}}></h6>
                                    <Image src={ratinghicn} alt="icons" />
                                </div>
                            </div>
                            <h3>Coach Alex, Youth Gymnastics Instructor</h3>
                            <p>
                            I love doing cartwheels and learning flips from my favorite coaches on the screen! I can already do a handstand for 10 seconds, thanks to their lessons!
                            </p>
                        </div>
                        <div className="members_items" >
                            <div className="members_itemsicn">
                                <div className="members_img">
                                    <Image src={testimonials} alt="testimonials" width={63} height={60} />
                                </div>
                                <div className="members_block">
                                    <h6 dangerouslySetInnerHTML={{__html:"Instructor Review"}}></h6>
                                    <Image src={ratinghicn} alt="icons" />
                                </div>
                            </div>
                            <h3>Coach Alex, Youth Gymnastics Instructor</h3>
                            <p>
                            I love doing cartwheels and learning flips from my favorite coaches on the screen! I can already do a handstand for 10 seconds, thanks to their lessons!
                            </p>
                        </div>
                </Slider>
            </div>
        </div>
    )
}

export default Reviewed;