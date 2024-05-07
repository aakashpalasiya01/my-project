/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import React, { useState, useEffect } from "react";
import playicn from "../../assets/images/icons/play_icn.svg";
import unFavorites from "../../assets/images/icons/unfavorites_icn.svg";
import isFavorites from "../../assets/images/icons/favorites_icn.svg";
import {
  FetchFavoritesData,
  RemoveFavoriteData,
  AddPlusWhite
} from "@/store/actions/favoriteAction";
import { RootState } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import * as favoriteReducer from "@/store/reducers/favoriteReducer";
import {
  FavData,
  FetchFavResType,
  RemoveFavResType,
  FavPaginationType,
  PlusWhiteAddResType
} from "@/component/Favourite/FavouriteType";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import plusWhite from "../../assets/images/icons/plus_white_icn.svg";
import { useDebouncedCallback } from "use-debounce";
import { forSuccess, forWarning } from "@/utils/CommonService";

const FavoriteClasses = () => {
  const [selectedIndex, setSelectedIndex] = useState(NaN);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const dispatch = useAppDispatch();
  const { favoriteList, loadingState } = useAppSelector(
    (state: RootState) => state.favorite
  );
  const { Profile } = useAppSelector((state: RootState) => state.profile);
  const userID: string = Profile?.user_id;
 
  const defaultPagination:FavPaginationType = {
    user_id: userID,
    per_page: 12,
    page: 1,
    order_by: "title",
    order: "asc",
    search: "",
  };

  const [pagination, setPagination] = useState(defaultPagination);

  useEffect(() => {
    const getFavoritesData = async () => { 
      await FetchFavoritesData({...pagination}).then((res: FetchFavResType) => { 
        if (res.success) { 
          dispatch(favoriteReducer.setChangeLoadingState(true));
          dispatch(favoriteReducer.setUpdateFavItems(res.data.data.favorite));
          dispatch(favoriteReducer.setChangeLoadingState(false));
        }
      });
    };
    getFavoritesData();
  }, [pagination]);

  const debounced = useDebouncedCallback(
    (value) => {
      setPagination({...pagination,search:value})
    },1000
  );

  const unFavoritesLabel = async (clsId: number) => {
    selectedIndex !== clsId ? setSelectedIndex(clsId) : setSelectedIndex(NaN);
    await RemoveFavoriteData(userID, clsId).then((res: RemoveFavResType) => {
      if (res.success) {
        dispatch(favoriteReducer.setRemoveFavItem(clsId));
      }
    });
  };

  const handleAddPlusWhite = async(clsID:number) => { 
      await AddPlusWhite(clsID,userID).then((res:PlusWhiteAddResType)=>{ 
        if(res.data.success) {
          forSuccess(res.data.data.message);
        } else {
          forWarning(res.data.data.message);
        }
       
      }) 
  };

  const convertDuration = (durationStr:string) => {
    if (typeof durationStr !== 'string') {
      return "Invalid duration format";
  }
  const timeComponents = durationStr.split(':').map(Number);
  if (timeComponents.length !== 3) {
      return "Invalid duration format";
  }
  const [hours, minutes, seconds] = timeComponents;

    const totalSeconds = hours*3600 + minutes * 60 + seconds;

    const hrs = Math.floor(totalSeconds/3600);
    const mins = Math.floor((totalSeconds % 3600)/60);
    const secs = totalSeconds % 60;

    if (hrs > 0) {
      return `${String(hrs).padStart(2, '0')} hrs`;
  } else if (mins > 0) {
      return `${String(mins).padStart(2, '0')} mins`;
  } else {
      return `${String(secs).padStart(2, '0')} secs`;
  }
  }

  const FavouriteClassRenderContent = favoriteList.map((FavClass: FavData) => {
    return (
      <div
        className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
        key={FavClass.class_id}
      >
        <div className="classes_items position-relative">
          <div className="classes_img">
            <Image
              src={FavClass.image?.normalImage}
              alt="levels1"
              width={311}
              height={155}
            ></Image>
          </div>
          <div className="classes_block">
            <div className="arials_block">
              <div className="favorites_block">
                <div className="font12 aerials_tag">
                  {FavClass.level_skills}
                </div>
                <div className="favorites_btn">
                  <button
                    type="button"
                    onClick={() => unFavoritesLabel(FavClass.class_id)}
                  >
                    <Image
                      src={
                        selectedIndex === FavClass.class_id &&
                        !FavClass.favorite
                          ? unFavorites
                          : isFavorites
                      }
                      alt="favorites"
                      width={19}
                      height={21}
                    />
                  </button>
                </div>
              </div>
              <div className="levels_group">
                <div className="font12 levels_tag">{FavClass.usag_level}</div>
                <div className="levels_btn">
                  <button type="button" onClick={()=>handleAddPlusWhite(FavClass.class_id)}>
                    <Image src={plusWhite} alt="icons"></Image>
                  </button>
                  <button type="button" onClick={handleShow}>
                    <Image src={playicn} alt="icosn" width={29} height={21} />
                  </button>
                </div>
              </div>
            </div>
            <div className="adult_class">
              <p className="font12 adult_tags">
                {FavClass.title} - {FavClass.group}, {FavClass.instructors}
              </p>
              <span className="font12 duration">
                Duration - {convertDuration(FavClass.vimeo_data?.video_length)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const ConditionalContent =
    favoriteList.length === 0 && loadingState
      ? Array(4)
      .fill(0)
      .map((_, index) => (
        <SkeletonTheme baseColor="#fff" highlightColor="#444" key={index}>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="classes_items position-relative">
              <div className="classes_img">
                <Skeleton width={311} height={155} />
              </div>
              <div className="classes_block">
                <div className="arials_block">
                  <Skeleton width={311} height={18} />
                </div>
              </div>
            </div>
          </div>
        </SkeletonTheme>
      ))
      :  [FavouriteClassRenderContent]

  return (
    <>
      <div className="filter">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="filter_search">
                <input
                  type="text"
                  className="form-control ele_input search_icn"
                  placeholder="What can we help you find ?"
                  onChange={(e)=> debounced(e.target.value)}
                />
                {/* <button className="balck_btn search_btn">CC</button> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="fitler_area filter_search">
                <select className="ele_input form-control"
                        name="order"
                        id="order"
                        value={pagination.order}
                        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setPagination({...pagination,order:event.target.value})}>
                  <option selected value="">Sort By</option>
                  <option value="asc">A to Z</option>
                  <option value="desc">Z to A</option>
                </select>
                {/* <button className="balck_btn">Short By</button>
               <button className="balck_btn">
                  {/*
                  <Image
                       className="fillter_icn"
                      src={filltericon}
                       alt="icons"
                   ></Image>{" "}
                  Filters
              </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sec_title_md">
          <h5>Classes</h5>
        </div>
        <div className="row">{favoriteList.length === 0 && !loadingState ? (<p>No Classes Found</p>): ConditionalContent}</div>
      </div>
    </>
  );
};

export default FavoriteClasses;
