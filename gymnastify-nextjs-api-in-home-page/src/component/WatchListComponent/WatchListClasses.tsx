/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import playicn from "../../assets/images/icons/play_icn.svg";
import { addFavirote, closeWatchList, removeFavirote, watchListClassesAction } from '@/store/actions/watchlistAction';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import * as WatchList from '@/store/reducers/watchlistReducer';
import { RootState } from '@/store/store';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { classesPropsWatchList, watchlistClassData, WatchlistClassesResponse } from './WatchListType';
import { useDebouncedCallback } from 'use-debounce';
import Link from 'next/link';
import unFavorites from "../../assets/images/icons/unfavorites_icn.svg";
import isFavorites from "../../assets/images/icons/favorites_icn.svg";
import closedWatch from "../../assets/images/icons/closed_watch.svg";
import { ROUTES_PATH } from "@/utils/constant";
import { forSuccess } from "@/utils/CommonService";
import "sweetalert2/src/sweetalert2.scss";
import Dropdown from "react-bootstrap/Dropdown";

const WatchListClasses = ({
  setPagination,
  pagination,
}: classesPropsWatchList) => {

  const dispatch = useAppDispatch();
  const { WatchListClasses, isLoaded } = useAppSelector((state: RootState) => state.watchlist);
  const { user } = useAppSelector((state: RootState) => state.auth);
  const userId = user?.user_id ? parseInt(user.user_id) : undefined;
  const [favIndex, setFavIndex] = useState<string | null | undefined>(null);

  useEffect(() => {
    if (pagination.usag_level) {
      dispatch(WatchList.setLoader(true));
      watchListClassesAction(pagination).then((res: WatchlistClassesResponse) => {
        dispatch(WatchList.setWatchListClasses(res.watchlist));
        dispatch(WatchList.setLoader(false));
      })
    }
  }, [pagination])

  const debounced = useDebouncedCallback(
    (value) => {
      setPagination({ ...pagination, search: value });
    },
    1000
  );

  const FavoritesLabel = (class_id: string, favorite: boolean) => {
    // (favIndex !== class_id) ? setFavIndex(class_id) : setFavIndex(null);
    if (!favorite) {
      addFavirote(class_id, userId).then((res: any) => {
        forSuccess(res.data.data.message);
      })
    }
    else {
      removeFavirote(class_id, userId).then((res: any) => {
        forSuccess(res.data.data.message);
      })
    }
  };

  const handleRemoveWatchList = async (classid: string) => {
    await closeWatchList({ ...pagination, class_id: classid }).then(
      (res: any) => {
        dispatch(WatchList.setRemoveClass(classid));
      }
    );
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
                      <span className="balck_btn">Short By</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <li>
                        <button type="button">Title A-Z</button>
                      </li>
                      <li>
                        <button type="button">Title Z-A</button>
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
          {isLoaded ? (
            Array(4)
              .fill(0)
              .map((_, index) => (
                <SkeletonTheme
                  baseColor="#fff"
                  highlightColor="#444"
                  key={index}
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
          ) : (
            <React.Fragment key="a">
              {WatchListClasses[0] === "No classes found." ? (
                <div>No classes found.</div>
              ) : (
                WatchListClasses?.map(
                  (item: watchlistClassData, index: number) => (
                    <div
                      key={item.class_id}
                      className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                    >
                      <div className="classes_items position-relative">
                        <div className="classes_img">
                          <Image
                            src={
                              item?.image?.normalImage
                                ? item?.image?.normalImage
                                : ""
                            }
                            alt="levels1"
                            width={311}
                            height={148}
                          ></Image>{" "}
                        </div>
                        <div className="classes_block">
                          <div className="arials_block">
                            <div className="favorites_block">
                              <div className="font12 aerials_tag">
                                {item?.level_skills ? item?.level_skills : "-"}
                              </div>
                              <div className="favorites_btn">
                                <button
                                  type="button"
                                  onClick={() => FavoritesLabel(item.class_id, item.favorite)}
                                >
                                  <Image
                                    src={
                                      item?.favorite ? isFavorites : unFavorites
                                    }
                                    alt="favorites"
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="levels_group">
                              <div className="font12 levels_tag">
                                {item?.usag_level ? item?.usag_level : "-"}
                              </div>
                              <div className="levels_btn">
                                <button
                                  type="button"
                                  onClick={() => handleRemoveWatchList(item.class_id)}
                                >
                                  <Image src={closedWatch} alt="icons"></Image>
                                </button>
                                <button type="button">
                                  <Image src={playicn} alt="icosn" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="adult_class">
                            <Link
                              href={ROUTES_PATH.SINGLECLASSES}
                              className="font12 adult_tags"
                            >
                              {item?.title ? item?.title : "-"} -{" "}
                              {item?.group ? item?.group : "-"},{" "}
                              {item?.instructors ? item?.instructors : "-"}
                            </Link>
                            <span className="font12 duration">
                              Duration - 30 mins
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )
              )}
            </React.Fragment>
          )}
        </div>
      </div>
    </>
  );
};

export default WatchListClasses;
