"use client";
import React from "react";
import dummyImg from '@/assets/images/gym-10 (1).webp'
import closedIcon from '@/assets/images/close_red.ac1f0483.svg'
import Image from "next/image";

function WatchHistory() {
  
  return (
    <main className="main_content">
        <section className="watch_history">
        <div className="container">
          <div className="history_block">
            <div className="more_videos_title">
              <h3>Watch History</h3>
            </div>
            <div className="more_pv" >
          <div className="more_videos_title">
            <h3>May 30</h3>
          </div>
          <div className="morepv_items">
            <div className="morepv_items_icn">
              <Image src={dummyImg} width={100} height={65} alt="thumbnails for the videos you've watched" />
            </div>
            <div className="morepv_items_block">
              <div className="history_tag">
                <h6>
                Yoga Sequences For Kids – YOGA PRACTICE -
                Blue Room Girls Levels
                Nathan Taylor
                </h6>
                <div className="history_closed">
                  <button
                    className="history_btnclosed"
                  >
                    <Image src={closedIcon} alt="icons" />
                  </button>
                </div>
              </div>
              <p className="morepv_times">
              0:15
              </p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WatchHistory;
