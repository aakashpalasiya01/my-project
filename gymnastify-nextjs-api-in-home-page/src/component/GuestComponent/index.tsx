"use client";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Assignments from "./Assignments";
import VirtualWorkOut from "./VirtualWorkOut";
import Subscription from "./Subscription";
import WhatWeOffer from "./WhatWeOffer";
import NewsLetter from "./NewsLetter";
import Testimonials from "./Testimonials";
import ExpertGuidance from "./ExpertGuidance";
import GuestBanner from "./GuestBanner";
import { useDispatch, useSelector } from "react-redux";
import {
  assignments,
  guestHome,
  needExpertGuidance,
  testimonials,
  whatWeOffer,
} from "@/mystore/actions/homeActions";
import { RootState } from "@/store/store";

const HomeComponent = () => {
  const dispatch: any = useDispatch();
  let GuestData = async () => {
    await dispatch(guestHome());
  };

  let WhatweOfferData = async () => {
    await dispatch(whatWeOffer());
  };
  let NeedExpertGuidanceData = async () => {
    await dispatch(needExpertGuidance());
  };

  let AssignmentData = async () => {
    await dispatch(assignments());
  };

  let TestimonialsData = async () => {
    await dispatch(testimonials());
  };
  useEffect(() => {
    GuestData();
    WhatweOfferData();
    TestimonialsData();
    NeedExpertGuidanceData();
    AssignmentData();
  }, []);

  return (
    <main className="main_content">
      <GuestBanner />
      <Assignments />

      <VirtualWorkOut />

      <ExpertGuidance />

      <Subscription />

      <WhatWeOffer />

      <NewsLetter />
      <Testimonials />
    </main>
  );
};
export default HomeComponent;
