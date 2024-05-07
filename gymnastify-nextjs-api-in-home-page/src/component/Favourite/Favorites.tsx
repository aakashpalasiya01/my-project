/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import FavoriteClass from "./FavoriteClass";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { FetchFavoritesData, RemoveFavoriteData } from "@/store/actions/favoriteAction";
import * as favoriteReducer from "@/store/reducers/favoriteReducer";
import { FavData, FetchFavResType, RemoveFavResType } from "./FavouriteType";
import unFavorites from "../../assets/images/icons/unfavorites_icn.svg";
import isFavorites from "../../assets/images/icons/favorites_icn.svg";
import playicn from "../../assets/images/icons/play_icn.svg";

function Favorite() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedIndex, setSelectedIndex] = useState(NaN);
  const dispatch = useAppDispatch();
  const { favoriteList } = useAppSelector((state: RootState) => state.favorite);
  const { Profile } = useAppSelector((state: RootState) => state.profile);
  const userID: string = Profile?.user_id;

  const defaultPagination = {
    user_id: userID,
    per_page: 12,
    page: 1,
  };

  const [pagination, setPagination] = useState(defaultPagination);

  useEffect(() => { 
    const getFavoritesData = async () => {
      await FetchFavoritesData(pagination).then((res: FetchFavResType) => {
        if (res.success) { 
          dispatch(favoriteReducer.setUpdateFavItems(res.data.data.favorite.filter((FavClass:FavData) => FavClass.favorite)));
        }
      });
    };
    getFavoritesData();
  }, [pagination]);

  const unFavoritesLabel = async (clsId: number) => {
    (selectedIndex !== clsId) ?  setSelectedIndex(clsId) : setSelectedIndex(NaN)
    await RemoveFavoriteData(userID, clsId).then((res: RemoveFavResType) => { 
      if (res.success) { 
        dispatch(favoriteReducer.setRemoveFavItem(clsId));
      }
    });
  };



  return (
    <main className="main_content">
      <section className="classes_area">
        <FavoriteClass/>
      </section>
      <Modal className="preview_video" show={show} onHide={handleClose}>
        <Modal.Header className="preview_title" closeButton>
          <Modal.Title>10 Sec. Preview video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="previdos_content">
            <div className="row">
              <div className="col-lg-8">
                <div className="previdos_watch">
                  <video width="760" height="380" poster="" controls>
                    <track kind="captions"/>
                    <source src="movie.mp4" type="video/mp4" />
                  </video>
                  <div className="vidos_watch_title">
                    <h4>W1930 - Adult Class - John Snow</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="more_videos">
                  <div className="more_videos_title">
                    <h3>More Preview Video:</h3>
                  </div>
                  <div className="more_pv">
                    <div className="morepv_items">
                      <div className="morepv_items_icn">
                        <video width="100" height="65" poster="" controls>
                          <track kind="captions"/>
                          <source src="movie.mp4" type="video/mp4" />
                        </video>
                      </div>
                      <div className="morepv_items_block">
                        <h6>W1930 - Adult Class, John Snow</h6>
                        <p className="morepv_times">15:20</p>
                      </div>
                    </div>
                    <div className="morepv_items">
                      <div className="morepv_items_icn">
                        <video width="100" height="65" poster="" controls>
                           <track kind="captions"/>
                          <source src="movie.mp4" type="video/mp4" />
                        </video>
                      </div>
                      <div className="morepv_items_block">
                        <h6>W1930 - Adult Class, John Snow</h6>
                        <p className="morepv_times">15:20</p>
                      </div>
                    </div>
                    <div className="morepv_items">
                      <div className="morepv_items_icn">
                        <video width="100" height="65" poster="" controls>
                          <track kind="captions"/>
                          <source src="movie.mp4" type="video/mp4" />
                        </video>
                      </div>
                      <div className="morepv_items_block">
                        <h6>W1930 - Adult Class, John Snow</h6>
                        <p className="morepv_times">15:20</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </main>
  );
}

export default Favorite;
