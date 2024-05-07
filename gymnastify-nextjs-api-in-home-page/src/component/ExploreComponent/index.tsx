/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import React from "react";
import ExploreBanner from "./ExploreBanner";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import * as explorerReducer from "@/store/reducers/explorerReducer";
import { exploreSkill, explorerPageClasses, explorerPageTopBanner, previewClassess } from "@/store/actions/explorerAction";
import VideoPlayer from "../HomeComponent/VideoPlayer";
import ExploreSkillDictionary from "./ExploreSkillDictionary";
import ExplorerClassesComponent from "./ExplorerClass";
import { ExplorerBanner, ExplorerClassesResponse, ExplorerSkill, Paginationtype, UsagLevelApiResponse } from "./Explorer";

function ExploreSkill() {
  const defalutPagination: Paginationtype = {
    page: 1,
    per_page: 12,
    usag_level: '',
    level_skills: '',
  }

  const { Loaded, ExploreCard, VideoLoader, ExplorerSkills } = useAppSelector((state: RootState) => state.explorer);
  const {user} = useAppSelector((state: RootState) => state.auth);

  const [SkillsIds, setSkillsId] = useState<number | null>(null);
  const [pagination, setPagination] = useState(defalutPagination);
  const [TotalData, setTotalData] = useState<number>(0);
  const [ClassData, setClassData] = useState<number>(0);
  const [SkillData, setSkillsData] = useState<number | null>(SkillsIds);
  const [show, setShow] = useState(false);
  const [perviewClassData,setPerviewClassData] = useState<any[]>([])
  // const [activeSkill, setActiveSkill] = useState<string>("all")
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(explorerReducer.setLoader(true));
    exploreSkill().then((res: UsagLevelApiResponse) => {
      dispatch(explorerReducer.setExplorerSkills(res.data));
      setSkillsId(res.data[0].id);
      setPagination({ ...pagination, usag_level: res.data[0].slug });
    })
    dispatch(explorerReducer.setLoader(true));
    explorerPageTopBanner().then((res: ExplorerBanner) => {
      dispatch(explorerReducer.setExploreCard(res));
    })
    dispatch(explorerReducer.setLoader(false));

    dispatch(explorerReducer.setLoader(false));
  }, [])


  useEffect(() => {
    setSkillsData(ExplorerSkills[0]?.id);
  }, [ExplorerSkills])

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
      <ExploreBanner Loaded={Loaded} ExploreCard={ExploreCard} />
      <section className="offeres_block">
        <ExploreSkillDictionary
          // handleChangeExplorerSkills={handleChangeExplorerSkills}
          // exploreSkillhandleFliter={exploreSkillhandleFliter}   
          setPagination={setPagination}
          SkillData={SkillData}
          pagination={pagination}
        />
      </section>
      <section className="classes_area">
        <ExplorerClassesComponent
          setPagination={setPagination}
          pagination={pagination}
          setTotalData={setTotalData} 
          TotalData={TotalData}
          setClassData={setClassData}
          ClassData={ClassData}
          handleShow={handleShow}
          />
      </section>
      <VideoPlayer handleClose={handleClose} show={show} VideoLoader={VideoLoader} UniqueClass={perviewClassData}/>
    </main>
  );
}

export default ExploreSkill;