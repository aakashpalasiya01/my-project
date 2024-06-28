"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomeState } from "@/types/HomeType";
import { BranchLevels } from "@/types/authType";

const initialState: HomeState = {
  guesthome: [],
  Loaded: false,
  ExpertGuidance: [],
  AssignmentCards :[],
  ExploreCard: [],
  Fqa:[],
  Testimonials:[],
  Class:[],
  SocialIcon: [],
  UniqueClass: [],
  SkillsPerson: [],
  Taxonomy: [],
  TaxonomySkill: [],
  BranchName:[],
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setGuesthome: (state, action: PayloadAction<any>) => {
      state.guesthome = action.payload;
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
        state.Loaded = action.payload;
    },
    setExpertGuidance: (state, action: PayloadAction<any>) => {
        state.ExpertGuidance = action.payload;
    },
    setSocialIcon: (state, action: PayloadAction<any>) => {
      state.SocialIcon = action.payload;
  },
    setAssignmentCard: (state, action: PayloadAction<any>) => {
        state.AssignmentCards = action.payload;
    },
    setExploreCard: (state, action: PayloadAction<any>) => {
        state.ExploreCard = action.payload;
    },
    setFQA: (state, action: PayloadAction<any>) => {
      state.Fqa = action.payload;
    },
    setTestimonials: (state, action: PayloadAction<any>) => {
      state.Testimonials = action.payload;
    },
    setClasses: (state, action: PayloadAction<any>) => {
      state.Class = action.payload;
    },
    setUniqueClasses: (state,action: PayloadAction<any>) => {
      state.UniqueClass = action.payload;
    },
    setSkillsPerson: (state, action: PayloadAction<any>) => {
      state.SkillsPerson = action.payload;
    },
    setTaxonomy : (state, action: PayloadAction<any>) => {
      state.Taxonomy = action.payload;
    },
    setTaxonomyDetail: (state,action: PayloadAction<any>) => {
      state.TaxonomySkill = action.payload;
    },
    setBranchName: (state, action: PayloadAction<BranchLevels[]>) => {
      state.BranchName = action.payload;
    },
  },
});
export const { setGuesthome,setLoader,setExpertGuidance, setAssignmentCard, setExploreCard, setFQA, setTestimonials 
  , setClasses, setUniqueClasses, setSkillsPerson,setTaxonomy,setTaxonomyDetail,setSocialIcon,setBranchName
} = homeSlice.actions;

export default homeSlice.reducer;
