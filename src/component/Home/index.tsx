/* eslint-disable react-hooks/exhaustive-deps */
"use server";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PaginationProvider } from "@/component/Home/homepagecontext";
import Skill from "./RegisterSkill";
import Reviewed from "../../shared/common-component/Reviewed";
import ClassesComponent from "./RegisteredClasses";
import RegisterBanner from "./RegisterBanner";
import SubscriptionPlan from "./SubscriptionPlan";
import AnnouncementsModal from "../../shared/common-component/AnnouncementsModal";

function Registered() {
    
  

    return (
        <main className="main_content">
            <PaginationProvider>
                <RegisterBanner />
                <section className="offeres_block">
                    <Skill />
                </section>
                <section className="classes_area">
                    <ClassesComponent />
                </section>
                <SubscriptionPlan />
                <section className="members_sayed">
                    <div className="container">
                        <div className="member_slider">
                            <Reviewed />
                        </div>
                    </div>
                </section>
                <section className="join_our">
                    <AnnouncementsModal />
                </section>
                </PaginationProvider>
        </main>
    );
}

export default Registered;
