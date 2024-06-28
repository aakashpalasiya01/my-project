/* eslint-disable react-hooks/exhaustive-deps */

"use server";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VirtualBox from "./VirtualBox";
import ExpertGuidances from "./ExpertGuidance";
import HeroSection from "./HeroSection";
import Reviewed from "@/shared/common-component/Reviewed";
import GuestWhatweoffer from "./GuestWhatweoffer";
import SubscriptionPlan from "../Home/SubscriptionPlan";
import AnnouncementsModal from "@/shared/common-component/AnnouncementsModal";

const HomeComponent = () => {
  return (
    <main className="main_content">
      <section className="guest_banner">
        <HeroSection />
      </section>
      <section className="weve_got">
        <VirtualBox />
      </section>
      <section className="get_supports">
        <ExpertGuidances />
      </section>
      <section className="subs_plan">
        <SubscriptionPlan />
      </section>
      <section className="we_offer" >
        <GuestWhatweoffer />
      </section>
      <section className="members_sayed">
        <Reviewed />
      </section>
      <section className="join_our">
        <AnnouncementsModal />
      </section>
    </main>
  );
};

export default HomeComponent;