/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import * as WatchList from '@/store/reducers/watchlistReducer';
import { RootState } from '@/store/store';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ClassesPropsWatchList, WatchlistClassData, WatchlistClassesResponse, WatchlistItem } from './WatchListType';
import { useDebouncedCallback } from 'use-debounce';
import Dropdown from "react-bootstrap/Dropdown";
import { ThreeDots } from "react-loader-spinner";
import WatchListClassesComponent from "./Classes";
import { watchListClassesAction } from "@/store/actions/watchlistAction";
import NoClassesComponent from "@/shared/common-component/NoClasses";

const WatchListClasses = ({ setPagination, pagination }: ClassesPropsWatchList) => {

  const dispatch = useAppDispatch();
  const { WatchListClasses, isLoaded } = useAppSelector((state: RootState) => state.watchlist);
  const [wtchlstLoadMore, setWtchlstLoadMore] = useState(false);


  const ascendingFunction = (x:WatchlistItem[]) => {
    return x.slice().sort((a, b) => {
       const titleA = a.title.toLowerCase();
       const titleB = b.title.toLowerCase();
       if (titleA < titleB) return -1;
       if (titleA > titleB) return 1;
       return 0;
     });
   }
 
   const descendingFunction = (y:WatchlistItem[]) => {
     return y.slice().sort((a, b) => {
       const titleA = a.title.toLowerCase();
       const titleB = b.title.toLowerCase();
       if (titleA < titleB) return 1;
       if (titleA > titleB) return -1;
       return 0;
     });
   }


  useEffect(() => {
    const FetchDataWatchList = () => {
      if (pagination.group) {
        dispatch(WatchList.setLoader(true));

        watchListClassesAction(pagination).then((res: WatchlistClassesResponse) => {

          if (res.watchlist.length === 0) {
            dispatch(WatchList.setLoader(false));
            dispatch(WatchList.setWatchListClasses(res.watchlist));
            return;
          }

          if (pagination.total_data === 0 && pagination.class_data === 0) {
            setPagination({ ...pagination, total_data: parseInt(res.pages.toString(), 10), class_data: parseInt(res?.total.toString(), 10) })
          }

          if (pagination.page === 1) {
            dispatch(WatchList.setWatchListClasses(res.watchlist));
          }
          else if (pagination.page > 1 && pagination.class_data === WatchListClasses.length && pagination.order === "asc") {
            const sortedAscending = ascendingFunction(WatchListClasses);
            dispatch(WatchList.setWatchListClasses(sortedAscending));
          } else if (pagination.page > 1 && pagination.class_data === WatchListClasses.length && pagination.order === "desc") {
            const sortedDescending = descendingFunction(WatchListClasses);
            dispatch(WatchList.setWatchListClasses(sortedDescending));
          }
          else {
            dispatch(WatchList.setWatchListClasses([...WatchListClasses, ...res.watchlist]));
          }

          dispatch(WatchList.setLoader(false));
        });
      }
    }
    FetchDataWatchList();
  }, [pagination])

  const debounced = useDebouncedCallback(
    (value) => {
      setPagination({ ...pagination, search: value, page : 1});
    },
    1000
  );

  const handleChangeLoaded = () => {
    setWtchlstLoadMore(true);
    if (pagination.per_page !== pagination.total_data || WatchListClasses.length !== pagination.class_data) {
      setPagination({ ...pagination, page: pagination.page + 1 });
    }
    setWtchlstLoadMore(false);
  }


  const handleSelectOrderBy = (order: string) => {
    setPagination({ ...pagination, order: order});
  }

  const WatchListClassRenderContent = WatchListClasses.map((item: WatchlistClassData) => {
    return (
      <div
        key={item.class_id}
        className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
        data-aos="flip-left" data-aos-duration="1000"
      >
        <WatchListClassesComponent item={item} pagination={pagination} setPagination={setPagination} />
      </div>
    )
  })

  const ConditionalContent = WatchListClasses.length === 0 && isLoaded
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
                <Skeleton width={311} height={148} />
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
    : [WatchListClassRenderContent]

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
                {/* <button className="balck_btn search_btn">CC</button> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="fitler_area filter_search">
                {/* <select
                                    className="ele_input form-control"
                                    name="order"
                                    id="order"
                                    value={pagination.order}
                                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setPagination({ ...pagination, order: event.target.value })}
                                >
                                    <option selected value="">Short By</option>
                                    <option value="asc">A to Z</option>
                                    <option value="desc">Z to A</option>
                                </select> */}

                <div className="short_bydrop">
                  <Dropdown
                    className="dropdown_inner"
                  >
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="dropdwn_btn"
                    >
                      <span className="balck_btn" >Sort By</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <li>
                        <button type="button" onClick={() => handleSelectOrderBy('asc')}>Title A-Z</button>
                      </li>
                      <li>
                        <button type="button" onClick={() => handleSelectOrderBy('desc')}>Title Z-A</button>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                {/* <button className="balck_btn">Short By</button>
                                <button className="balck_btn">
                                    {" "}
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
        <div className="row">
          {WatchListClasses.length === 0 && !isLoaded ? (<NoClassesComponent />) : ConditionalContent}
        </div>
        <div className="btn_videos text-center">
        {WatchListClasses.length !== pagination.class_data && pagination.total_data > pagination.page && WatchListClasses.length === pagination.per_page ? (
            <button className="btn_animated btn_blockmd primary_btn" onClick={handleChangeLoaded}>
              {wtchlstLoadMore ?
                <ThreeDots
                  height="25"
                  width="80"
                  radius="9"
                  color="#fff"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{ display: "block" }}
                  visible={true}
                />
                : 'Load More'}
            </button>
          ) : (null)}
        </div>
      </div>
    </>
  );
};

export default WatchListClasses;