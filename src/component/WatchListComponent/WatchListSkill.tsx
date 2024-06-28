/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import wakingup from "@/assets/images/icons/wakingup.png";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { SkillsPropsWatchList, WatchSkill } from "./WatchListType";
import { RootState } from "@/store/store";
import { registerPageUserSkills } from "@/store/actions/registeredAction";
import { levelSkills } from "../Home/Register";
import * as RegisteredSlice from "@/store/reducers/registeredReducer";
import * as WatchList from "@/store/reducers/watchlistReducer";


const WatchListSkill = ({ setPagination, pagination }: SkillsPropsWatchList) => {
  const dispatch = useAppDispatch();
  const { RegisterLevel } = useAppSelector((state: RootState) => state.registered);
  const { user } = useAppSelector((state: RootState) => state.auth);
  const user_id = user?.user_id;

  useEffect(() => {
    if (user_id) {
      dispatch(WatchList.setLoader(true));
      registerPageUserSkills(user_id).then((res: levelSkills) => {
        dispatch(RegisteredSlice.setRegisterlevels(res));
        setPagination({ ...pagination, group: res.level.slug });
        dispatch(WatchList.setLoader(true));

      })
    }
  }, []);

  const watchlistSkillhandleFliter = (skillslug: string) => {
    setPagination({ ...pagination, page:1 ,level_skills: skillslug });
  };

  return (
    <div className="weve_got">
      <div className="container">
        <div className="sec_title text-center">
          <p>No Matter Your Fitness Level, Body Type, Mood, or Fitness Goal…</p>
          <h2>Gymnastify offeres fun and fitness to all ages.</h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-xl-3" data-aos="flip-left" data-aos-duration="1000">
            <div className="white_bg weve_items text-center">
              {RegisterLevel?.level?.meta?.label_name ? (<span className="weve_items_ribbons">
                {RegisterLevel?.level?.meta?.label_name ? RegisterLevel?.level?.meta?.label_name : ""}
              </span>) : null}
              <div className="weve_items_icn">
                <Image
                  src={
                    RegisterLevel?.level?.meta?.image
                      ? RegisterLevel?.level?.meta?.image
                      : wakingup
                  }
                  alt="wakingup"
                  width={58}
                  height={58}
                ></Image>
              </div>
              <h4>
                {RegisterLevel?.level?.name
                  ? RegisterLevel?.level?.name
                  : "-"}
              </h4>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="skill_list">
              <div className="sec_title_md">
                <h5>Skill</h5>
                <ul className="skill_block">
                  <li key="all" data-aos="fade-left" data-aos-duration="1000">
                    <button
                      onClick={() =>
                        watchlistSkillhandleFliter(
                          ""
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
                  {RegisterLevel?.skills?.map((items: WatchSkill) => (
                    <li key={items.id} data-aos="fade-left" data-aos-duration="1000">
                      <button
                        onClick={() =>
                          watchlistSkillhandleFliter(
                            items?.slug,
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
