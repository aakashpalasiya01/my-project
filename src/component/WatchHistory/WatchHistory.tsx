"use client";
import React from "react";
import DynamicWatchHistory from "./DynamicWatchHistory";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import SubscribedProduct from "@/shared/common-component/SubscribedProduct";
import { subscriptionStatus } from "@/utils/constant";

function WatchHistory() {
  const { subscription } = useAppSelector((state: RootState) => state.auth);
  return (
    <main className="main_content">
      {subscription?.status !== subscriptionStatus.active ? (
        <SubscribedProduct />
      ) : (
        <section className="watch_history">
        <div className="container">
          <div className="history_block">
            <div className="more_videos_title">
              <h3>Watch History</h3>
            </div>
            <DynamicWatchHistory />
          </div>
        </div>
      </section>
      )}
    </main>
  );
}

export default WatchHistory;
