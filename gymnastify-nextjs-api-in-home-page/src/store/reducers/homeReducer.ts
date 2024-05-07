"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomeState } from "@/types/HomeType";

const initialState: HomeState = {
  guesthome: [],
  Loaded: false,
  ExpertGuidance: [],
  AssignmentCards :[],
  ExploreCard: [],
  Fqa:[],
  Testimonials:[],
  Class:[] || "",
  UniqueClass: [],
  SkillsPerson: [],
  Taxonomy: [],
  TaxonomySkill: [],
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
    }
  },
});
export const { setGuesthome,setLoader,setExpertGuidance, setAssignmentCard, setExploreCard, setFQA, setTestimonials 
  , setClasses, setUniqueClasses, setSkillsPerson,setTaxonomy,setTaxonomyDetail
} = homeSlice.actions;

export default homeSlice.reducer;
