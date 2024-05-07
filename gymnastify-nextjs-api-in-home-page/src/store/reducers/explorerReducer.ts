"use client";
import { ExplorerBanner, ExplorerClassData, ExplorerPage, ExplorerSkill, UsagLevelApiResponse } from "@/component/ExploreComponent/Explorer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ExplorerPage = {
  Loaded: false,
  ExplorerClass: [],
  ExplorerSkills: [],
  ExploreCard:[],
  VideoLoader:false
};

export const explorerSlice = createSlice({
  name: "explorer",
  initialState,
  reducers: {
    setExplorerClasses: (state, action: PayloadAction<ExplorerClassData[]>) => {
      state.ExplorerClass = action.payload;
    },
    setExplorerSkills: (state, action: PayloadAction<ExplorerSkill[]>) => {
      state.ExplorerSkills = action.payload;
    },
    setExploreCard: (state, action: PayloadAction<ExplorerBanner>) => {
        state.ExploreCard = action.payload;
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.Loaded = action.payload;
    },
    setLoaderVideoPlayer: (state, action: PayloadAction<boolean>) => {
      state.VideoLoader = action.payload;
    }
  },
});
export const { setExplorerSkills, setExplorerClasses, setLoader,setExploreCard,setLoaderVideoPlayer } =
  explorerSlice.actions;

export default explorerSlice.reducer;
