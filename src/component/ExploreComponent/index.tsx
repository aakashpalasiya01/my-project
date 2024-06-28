/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState } from "react";
import ExploreBanner from "./ExploreBanner";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import * as explorerReducer from "@/store/reducers/explorerReducer";
import { previewClassess } from "@/store/actions/explorerAction";
import VideoPlayer from "../HomeComponent/VideoPlayer";
import ExploreSkillDictionary from "./ExploreSkillDictionary";
import ExplorerClassesComponent from "./ExplorerClass";
import { Paginationtype } from "./Explorer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { ROUTES_PATH } from "@/utils/constant";

function ExploreSkill() {
  const defalutPagination: Paginationtype = {
    page: 1,
    per_page: 12,
    group: '',
    level_skills: '',
    totalData: 0,
    classData: 0,
  }

  const { VideoLoader } = useAppSelector((state: RootState) => state.explorer);

  const [pagination, setPagination] = useState(defalutPagination);
  const [show, setShow] = useState(false);
  const [perviewClassData, setPerviewClassData] = useState<any[]>([])
  // const [activeSkill, setActiveSkill] = useState<string>("all")

  const dispatch = useAppDispatch();

  const handleShow = (class_id: string) => {
    dispatch(explorerReducer.setLoaderVideoPlayer(true));
    previewClassess(class_id).then((res: any) => {
      setPerviewClassData(res.classes);
      setShow(true);
    })
    dispatch(explorerReducer.setLoaderVideoPlayer(false));
  }

  const handleClose = () => setShow(false);

  return (
    <main className="main_content">
      <section className="bred_eles">
        <div className="container">
          <Breadcrumb>
            <Breadcrumb.Item className="point_none" href={ROUTES_PATH.GUEST}>
            Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href={ROUTES_PATH.EXPLORESKILL}>Explore Skill Dictionary</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </section>
      <ExploreBanner />
      <section className="offeres_block">
        <ExploreSkillDictionary
          setPagination={setPagination}
          pagination={pagination}
        />
      </section>
      <section className="classes_area">
        <ExplorerClassesComponent
          setPagination={setPagination}
          pagination={pagination}
          handleShow={handleShow}
        />
      </section>
      <VideoPlayer handleClose={handleClose} show={show} VideoLoader={VideoLoader} UniqueClass={perviewClassData} />
    </main>
  );
}

export default ExploreSkill;