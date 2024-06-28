/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { FetchFavoritesData } from "@/store/actions/favoriteAction";
import { RootState } from "@/store/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import * as favoriteReducer from "@/store/reducers/favoriteReducer";
import {
  FavData,
  FetchFavResType,
  FavPaginationType
} from "@/component/Favourite/FavouriteType";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDebouncedCallback } from "use-debounce";
import { uniqueid } from "@/utils/CommonService";
import Dropdown from "react-bootstrap/Dropdown";
import { ThreeDots } from "react-loader-spinner";
import FavoriteClassesComponent from "./classes";
import NoClassesComponent from "@/shared/common-component/NoClasses";

const FavoriteClasses = () => {

  const dispatch = useAppDispatch();
  const { favoriteList, loadingState } = useAppSelector(
    (state: RootState) => state.favorite
  );
  const { Profile } = useAppSelector((state: RootState) => state.profile);

  const userID: string = Profile?.user_id;

  const defaultPagination: FavPaginationType = {
    user_id: userID,
    class_id: 0,
    per_page: 12,
    page: 1,
    order_by: "date",
    order: "asc",
    search: "",
    cache: uniqueid(),
    class_data: 0,
    total_data: 0,
  };

  const [pagination, setPagination] = useState(defaultPagination);
  const [favLoadMore,setFavLoadMore] = useState(false);

  const ascendingFunction = (x:FavData[]) => {
   return x.slice().sort((a:FavData, b:FavData) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    });
  }

  const descendingFunction = (y:FavData[]) => {
    return y.slice().sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (titleA < titleB) return 1;
      if (titleA > titleB) return -1;
      return 0;
    });
  }

  useEffect(() => {
    const getFavoritesData = async () => {
      dispatch(favoriteReducer.setChangeLoadingState(true));

      await FetchFavoritesData(pagination).then((res: FetchFavResType) => {
        
        if (res.data.data.favorite.length === 0) {
          dispatch(favoriteReducer.setChangeLoadingState(false));
          dispatch(favoriteReducer.setUpdateFavItems(res.data.data.favorite));
          return;
        }

        if (pagination.total_data === 0 && pagination.class_data === 0) {
          setPagination({
            ...pagination,
            total_data: res.data.data.pages,
            class_data: parseInt(res.data.data.total, 10),
          });
        }

        if (pagination.page === 1) {
          dispatch(favoriteReducer.setUpdateFavItems(res.data.data.favorite));
        } 
        else if (pagination.page > 1 && pagination.class_data === favoriteList.length && pagination.order === "asc") {
          const sortedAscending = ascendingFunction(favoriteList);
          dispatch(favoriteReducer.setUpdateFavItems(sortedAscending));
        } else if (pagination.page > 1 && pagination.class_data === favoriteList.length && pagination.order === "desc") {
          const sortedDescending = descendingFunction(favoriteList);
          dispatch(favoriteReducer.setUpdateFavItems(sortedDescending));
        }
        else {
          dispatch(
            favoriteReducer.setUpdateFavItems([
              ...favoriteList,
              ...res.data.data.favorite,
            ])
          );
        }
        dispatch(favoriteReducer.setChangeLoadingState(false));
      }
      );
    };
    getFavoritesData();
  }, [pagination]);

  const debounced = useDebouncedCallback((value) => {
    setPagination({ ...pagination, search: value, page : 1 });
  }, 1000);


  const handleSelectOrderBy = (order: string) => {
    setPagination({ ...pagination, order: order });
  };

  const FavouriteClassRenderContent = favoriteList.map((item: FavData) => {
    return (
      <div
        className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
        data-aos="flip-left" data-aos-duration="1000"
        key={item.class_id}
      >
        <FavoriteClassesComponent item={item} pagination={pagination} setPagination={setPagination} />
      </div>
    );
  });

  const ConditionalContent =
    favoriteList.length === 0 && loadingState
      ? Array(4)
        .fill(0)
        .map((_, index) => (
          <SkeletonTheme
            baseColor="#eee"
            highlightColor="#ddd"
            key={index + 1}
          >
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
      : [FavouriteClassRenderContent];

  const handleChangeLoaded = () => {
    setFavLoadMore(true);
    if (
      pagination.per_page !== pagination.total_data ||
      favoriteList.length !== pagination.class_data
    ) {
      setPagination({ ...pagination, page: pagination.page + 1 });
    }
    setFavLoadMore(false);
  };
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
                  onChange={(e) => debounced(e.target.value)}
                />
                {/* <button className="btn_animated balck_btn search_btn">CC</button> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="fitler_area filter_search">
                <div className="short_bydrop">
                  <Dropdown className="dropdown_inner">
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="dropdwn_btn"
                    >
                      <span className="balck_btn">Sort By</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <li>
                        <button
                          type="button"
                          onClick={() => handleSelectOrderBy("asc")}
                        >
                          Title A-Z
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={() => handleSelectOrderBy("desc")}
                        >
                          Title Z-A
                        </button>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="sec_title_md">
          <h5>Classes</h5>
        </div>
        <div className="row">
          {favoriteList.length === 0 && !loadingState ? (
            <NoClassesComponent />
          ) : (
            ConditionalContent
          )}
        </div>
        <div className="btn_videos text-center">
         
              {favoriteList.length !== pagination.class_data && pagination.total_data > pagination.page && favoriteList.length === pagination.per_page ? (
            <button
              className="btn_animated btn_blockmd primary_btn"
              onClick={handleChangeLoaded}
            >
              {favLoadMore ? (
                <ThreeDots
                  height="25"
                  width="80"
                  radius="9"
                  color="#fff"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{ display: "block" }}
                  visible={true}
                />
              ) : (
                "Load More"
              )}
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default FavoriteClasses;
