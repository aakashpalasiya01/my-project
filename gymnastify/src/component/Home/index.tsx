/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Classes from "./Classes";
import SubscriptionPlan from "./SubscriptionPlan";
import NewsLetter from "./NewsLetter";
import UserReviews from "./UserReviews";
import SubscribeBanner from "./SubscribeBanner";
import SkillsDictionary from "./SkillsDictionary";

function Registered() {

  
  return (
    <main className="main_content">
      <SubscribeBanner />
      <SkillsDictionary />
      <Classes />
      <SubscriptionPlan />
      <UserReviews />
      <NewsLetter />
    </main>
  );
}

export default Registered;
