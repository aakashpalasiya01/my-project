"use client";
import React, { useEffect } from "react";
import DynamicWatchHistory from "./DynamicWatchHistory";

function WatchHistory() {
  return (
    <main className="main_content">
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
    </main>
  );
}

export default WatchHistory;
