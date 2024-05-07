/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import wakingup from "../../assets/images/icons/wakingup.png";
import Image from "next/image";
import {
  watchListClassesAction,
  watchListFliterClasses,
  watchListSkills,
} from "@/store/actions/watchlistAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import * as WatchList from "@/store/reducers/watchlistReducer";
import { WatchlistClassesResponse,
  WatchListLevel,
  WatchSkill,
} from "./WatchListType";
import { RootState } from "@/store/store";

const WatchListSkill = ({ setPagination, pagination }: any) => {
  const dispatch = useAppDispatch();
  const { WatchListUserSkills } = useAppSelector((state: RootState) => state.watchlist);
  // const [activeSkill, setActiveSkill] = useState<string>("");
  const { user } = useAppSelector((state: RootState) => state.auth);
  const user_id = user?.user_id;

  useEffect(() => {
    if (user_id) {
      dispatch(WatchList.setLoader(true));
      watchListSkills(user_id).then((res: WatchListLevel) => {
        setPagination({ ...pagination, usag_level: res.level.slug });
        dispatch(WatchList.setWatchListSkills(res));
        dispatch(WatchList.setLoader(false));
      });
    }
  }, []);

  const watchlistSkillhandleFliter = (skillslug: string, slug: string) => {
    setPagination({ ...pagination, level_skills: skillslug });
    watchListClassesAction({...pagination,usag_level: slug,level_skills: skillslug}).then((res: WatchlistClassesResponse) => {
      dispatch(WatchList.setWatchListClasses(res.watchlist));
    });
  };

  return (
    <div className="weve_got">
      <div className="container">
        <div className="sec_title text-center">
          <p>No Matter Your Fitness Level, Body Type, Mood, or Fitness Goal…</p>
          <h2>Gymnastify offeres fun and fitness to all ages.</h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-xl-3">
            <div className="white_bg weve_items text-center">
              <span className="weve_items_ribbons">School Aged Children</span>
              <div className="weve_items_icn">
                <Image
                  src={
                    WatchListUserSkills?.level?.meta?.image
                      ? WatchListUserSkills?.level?.meta?.image
                      : wakingup
                  }
                  alt={
                    WatchListUserSkills?.level?.meta?.name
                      ? WatchListUserSkills?.level?.meta?.name
                      : "-"
                  }
                  width={58}
                  height={58}
                ></Image>
              </div>
              <h4>
                {WatchListUserSkills?.level?.name
                  ? WatchListUserSkills?.level?.name
                  : "-"}
              </h4>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="skill_list">
              <div className="sec_title_md">
              <h5>Skill</h5>
              <ul className="skill_block">
                <li key="all">
                  <button
                    onClick={() =>
                      watchlistSkillhandleFliter(
                        "",
                        WatchListUserSkills?.level?.slug
                      )
                    }
                    className={
                      pagination.level_skills === ""
                        ? "skll_btn skll_isActived"
                        : "skll_btn"
                    }
                  >
                    All
                  </button>
                </li>
                {WatchListUserSkills?.skills?.map((items: WatchSkill) => (
                  <li key={items.id}>
                    <button
                      onClick={() =>
                        watchlistSkillhandleFliter(
                          items?.slug,
                          WatchListUserSkills?.level?.slug
                        )
                      }
                      className={
                        pagination.level_skills === items?.slug
                          ? "skll_btn skll_isActived"
                          : "skll_btn"
                      }
                    >
                      {items?.name ? items?.name : "-"}
                    </button>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchListSkill;
