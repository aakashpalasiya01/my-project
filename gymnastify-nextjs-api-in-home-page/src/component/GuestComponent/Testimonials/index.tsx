import React from 'react';
import { settings } from "@/utils/commonsettings";
import Slider from "react-slick";
import Image from 'next/image';
import testimonials from "@/assets/images/testimonials.png";
import ratinghicn from "@/assets/images/icons/ratingh_icn.svg";
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';


const Testimonials = () => {
    const testimonial = useSelector(
        (state :RootState) => state.home?.testimonials?.data
      );
    
  return (
    <section className="members_sayed">
    <div className="container">
        <div className="sec_title text-center">
            <h2>What our members are saying</h2>
        </div>
        <div className="member_slider">
            <Slider {...settings}>

               {testimonial && testimonial?.map((data:any)=>
                <div key={data?.ID} className="members_items">
                    <div className="members_itemsicn">
                        <div className="members_img">
                            <Image src={testimonials} alt="testimonials" width={63} height={60} />
                        </div>
                        <div className="members_block">
                            <h6>{data?.title}</h6>
                            <Image src={ratinghicn} alt="icons" />
                        </div>
                    </div>
                    <h3> {data?.author}</h3>
                    <p>
                    {data?.content}
                    </p>
                </div>
               
               )}

                {/* <div className="members_items">
                    <div className="members_itemsicn">
                        <div className="members_img">
                            <Image src={testimonials} alt="testimonials" width={63} height={60} />
                        </div>
                        <div className="members_block">
                            <h6>Excellent yoga classes</h6>
                            <Image src={ratinghicn} alt="icons" />
                        </div>
                    </div>
                    <h3>Michelle T Bonsus</h3>
                    <p>
                      One of the platform’s standout strengths is its roster of exceptional teachers. They are experts in their respective fields, passionate about their subjects, and skilled in delivering engaging and informative lessons. Their dedication to teaching shines through in their video content, which is professionally produced and visually captivating. These high- quality videos not only enhance comprehension but also make the learning experience enjoyable and immersive.
                    </p>
                </div>
                <div className="members_items">
                    <div className="members_itemsicn">
                        <div className="members_img">
                            <Image src={testimonials} alt="testimonials" width={63} height={60} />
                        </div>
                        <div className="members_block">
                            <h6>Excellent yoga classes</h6>
                            <Image src={ratinghicn} alt="icons" />
                        </div>
                    </div>
                    <h3>Michelle T Bonsus</h3>
                    <p>
                      One of the platform’s standout strengths is its roster of exceptional teachers. They are experts in their respective fields, passionate about their subjects, and skilled in delivering engaging and informative lessons. Their dedication to teaching shines through in their video content, which is professionally produced and visually captivating. These high- quality videos not only enhance comprehension but also make the learning experience enjoyable and immersive.
                    </p>
                </div>
                <div className="members_items">
                    <div className="members_itemsicn">
                        <div className="members_img">
                            <Image src={testimonials} alt="testimonials" width={63} height={60} />
                        </div>
                        <div className="members_block">
                            <h6>Excellent yoga classes</h6>
                            <Image src={ratinghicn} alt="icons" />
                        </div>
                    </div>
                    <h3>Michelle T Bonsus</h3>
                    <p>
                      One of the platform’s standout strengths is its roster of exceptional teachers. They are experts in their respective fields, passionate about their subjects, and skilled in delivering engaging and informative lessons. Their dedication to teaching shines through in their video content, which is professionally produced and visually captivating. These high- quality videos not only enhance comprehension but also make the learning experience enjoyable and immersive.
                    </p>
                </div> */}
            </Slider>
        </div>
    </div>
  </section>
  )
}

export default Testimonials