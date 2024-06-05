/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ExploreBanner from "./ExploreBanner";
import Offers from "./Offers";
import Classes from "./Classes";
import SubscriptionPlan from "./SubscriptionPlan";
import NewsLetter from "./NewsLetter";
import UserReviews from "./UserReviews";

function Registered() {

  
  return (
    <main className="main_content">
      <ExploreBanner />
      <Offers />
      <Classes />
      <SubscriptionPlan />
      <UserReviews />
      <NewsLetter />
    </main>
  );
}

export default Registered;
