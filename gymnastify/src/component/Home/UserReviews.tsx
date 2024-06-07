import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { settings } from "@/utils/commonsettings";
import Image from "next/image";
import ratinghicn from "@/assets/images/icons/ratingh_icn.svg";
import { useAppDispatch } from "@/store/hooks";
import { guestHomePageReview } from "@/store/actions/homeAction";
import { ReviewType } from "./Home";

const UserReviews = () => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const dispatch = useAppDispatch();

  let userReviewData = async () => {
    let res = await dispatch(guestHomePageReview());
    setReviews(res);
  };

  useEffect(() => {
    userReviewData();
  }, []);

  return (
    <section className="members_sayed">
      <div className="container">
        <div className="member_slider">
          <div className="container">
            <div className="sec_title text-center">
              <h2>What our members are saying</h2>
            </div>
            <div className="member_slider" data-aos="fade-up">
              <Slider {...settings}>
                {reviews?.length
                  ? reviews.map((review) => (
                      <div key={review.ID} className="members_items">
                        <div className="members_itemsicn">
                          <div className="members_img">
                            <Image
                              src={review?.image_url}
                              alt="testimonials"
                              width={63}
                              height={60}
                            />
                          </div>
                          <div className="members_block">
                            <h6
                              dangerouslySetInnerHTML={{
                                __html: review?.title,
                              }}
                            ></h6>
                            <Image src={ratinghicn} alt="icons" />
                          </div>
                        </div>
                        <h3>{review?.author}</h3>
                        <p>{review?.content}</p>
                      </div>
                    ))
                  : null}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserReviews;
