import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import homeSlice from "./reducers/homeReducer";
import ProfileSlice from "./reducers/profileReducer";
import explorerSlice from "./reducers/explorerReducer";
import  RegisteredSlice  from "./reducers/registeredReducer";
import  WatchList  from "./reducers/watchlistReducer";
import WatchHistorySlice from "./reducers/watchHistoryReducer";
import favoriteSlice from "./reducers/favoriteReducer";
import singleClassSlice from "./reducers/singleClassReducer";
import  relatedClassSlice  from "./reducers/relatedClassReducer";
import  PrivacySlice  from "./reducers/privacyReducer";
import  teachersSlice  from "./reducers/teachersReducer";
import  TermsAndCondSlice  from "./reducers/termsAndCondReducer";
import AboutUsSlice from "./reducers/aboutUsReducer";
import BlogSlice from "./reducers/blogReducer";
import SingleBlogSlice from "./reducers/singleBlogReducer";
import MySubSlice from "./reducers/mySubReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeSlice,
    profile: ProfileSlice,
    explorer: explorerSlice,
    registered: RegisteredSlice,
    watch: WatchHistorySlice,
    favorite: favoriteSlice,
    watchlist: WatchList,
    singleClass: singleClassSlice,
    relatedClass: relatedClassSlice,
    privacy: PrivacySlice,
    teachers: teachersSlice,
    tAndC: TermsAndCondSlice,
    aboutus: AboutUsSlice,
    blog: BlogSlice,
    singleBlog: SingleBlogSlice,
    mySub:MySubSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
