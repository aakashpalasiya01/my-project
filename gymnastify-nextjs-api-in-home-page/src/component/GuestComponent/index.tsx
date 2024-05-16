"use client";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GuestBanner from "./GuestBanner";
import { useAppDispatch } from "@/mystore/hooks";
import { guestHome } from "@/mystore/actions/homeActions";
import Assignments from "./Assignments";
import ExpertGuidance from "./ExpertGuidance";
import Testimonials from "./Testimonials";
import Subscription from "./Subscription";
import NewsLetter from "./NewsLetter";
import WhatWeOffer from "./WhatWeOffer";
import VirtualWorkOut from "./VirtualWorkOut";

const HomeComponent = () => {
  const dispatch = useAppDispatch();

  let GuestData = async () => {
    await dispatch(guestHome());
  };

  useEffect(() => {
    GuestData();
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
