import Link from "next/link";
import Image from "next/image";
import React from "react";
import playicn from "@/assets/images/icons/play_icn.svg";
import unFavorites from "@/assets/images/icons/unfavorites_icn.svg";
import isFavorites from "@/assets/images/icons/favorites_icn.svg";
import { removeFavorite, addWatchList, removeWatchList } from '@/store/actions/CommomActions';
import { PlusWhiteAddResType, RemoveCrossResType, RemoveFavResType } from '@/types/commonTypes';
import "react-loading-skeleton/dist/skeleton.css";
import plusWhite from "../../assets/images/icons/plus_white_icn.svg";
import closedWatch from "../../assets/images/icons/closed_watch.svg";
import { forSuccess } from "@/utils/CommonService";
import { ROUTES_PATH } from "@/utils/constant";
import Swal from "sweetalert2";
import { handleChangeduration,FavouritePopupContent,WatchListPopupContent } from "@/shared/common-dialog";
import { ClassComponent } from "./FavouriteType";
import { useAppDispatch } from "@/store/hooks";
import * as FavoriteReducer from "@/store/reducers/favoriteReducer";
import ReactDomServer from "react-dom/server";



const FavoriteClassesComponent = ({ item, pagination, setPagination }: ClassComponent) => {
    const dispatch = useAppDispatch();
    const handleRemoveFavourite = async (classid: number) => {
        Swal.fire({
            title: "Are you sure remove?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Removing from Favourites!",
        }).then((result: any) => {
            if (result.isConfirmed) {
                unFavoritesLabel(classid);
            }
        });
    };



    const unFavoritesLabel = async (clsId: string|number) => {
        await removeFavorite({ ...pagination, class_id: clsId }).then((res: RemoveFavResType) => {
            if (res.success) {
                dispatch(FavoriteReducer.setRemoveFavStatus(clsId));
                Swal.fire({
                    html: ReactDomServer.renderToString(<FavouritePopupContent/>),
                    icon: "success",
                });
            }
        })
    };

    const closingWatchListLogic = (clsId: number,watchlist:boolean) => {
        removeWatchList({ ...pagination, class_id: clsId }).then((res: RemoveCrossResType) => {
            if (res.data.data.message) {
                dispatch(FavoriteReducer.setFavPageWatchlistStatus({class_id: clsId,watchlist: watchlist}));
                Swal.fire({
                    html: ReactDomServer.renderToString(<WatchListPopupContent/>),
                    icon: "success",
                });
            }
        })
    }

    const handleChangeWatchListLabel = (clsId: number, watchlist: boolean) => {
        if (!watchlist) {
            addWatchList({ ...pagination, class_id: clsId }).then((res: PlusWhiteAddResType) => {
                if (res.data.data.message) {
                    // setPagination({ ...pagination, cache: uniqueid() })
                    dispatch(FavoriteReducer.setFavPageWatchlistStatus({class_id: clsId,watchlist: watchlist}));
                    forSuccess("Added to the watchlist!");
                }
            })
        }
        else {
            Swal.fire({
                title: "Are you sure Remove?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Removing from WatchList!",
            }).then((result: any) => {
                if (result.isConfirmed) {
                    closingWatchListLogic(clsId,watchlist);
                }
            });
        }
    };

    return (
        <div className="classes_items position-relative">
            <div className="classes_img">
                <Image
                    src={item.image?.normalImage}
                    alt="levels1"
                    width={311}
                    height={155}
                ></Image>
            </div>
            <div className="classes_block">
                <div className="arials_block">
                    <div className="favorites_block">
                        <div className="font12 aerials_tag">
                            {item?.level_skills && Array.isArray(item.level_skills) ? (
                                item.level_skills.map((skill, index) => (
                                    <span key={index + 1}  style={{ paddingLeft: '3px', paddingRight: '3px' }}>{skill}{item?.level_skills.length - 1 === index ? '' : ','}</span>
                                ))
                            ) : (
                                '-'
                            )}
                        </div>
                        <div className="favorites_btn">
                            <button
                                type="button"
                                onClick={() => handleRemoveFavourite(item.class_id)}
                            >
                                <Image
                                    src={
                                        item.class_id
                                            ? isFavorites
                                            : unFavorites
                                    }
                                    alt="favorites"
                                    width={19}
                                    height={21}
                                />
                            </button>
                        </div>
                    </div>
                    <div className="levels_group">
                    <Link href={`${ROUTES_PATH.SINGLECLASSES}/${item?.class_id}`}>
                        <div className="font12 levels_tag text-truncated">
                            {item?.usag_level && Array.isArray(item.usag_level) ? (
                                item.usag_level.map((level, index) => (
                                    <span key={index + 1}  style={{ paddingLeft: '3px', paddingRight: '3px' }}>{level}{item?.usag_level.length - 1 === index ? '' : ','}</span>
                                ))
                            ) : (
                                '-'
                            )}
                        </div>
                    </Link>
                        <div className="levels_btn">
                            <button type="button" onClick={() => handleChangeWatchListLabel(item.class_id, item?.watchlist)}>
                                <Image src={item?.watchlist ? closedWatch : plusWhite} alt="icons" width={15} height={15}></Image>
                            </button>
                            <Link href={`${ROUTES_PATH.SINGLECLASSES}/${item.class_id}`}>
                                <button type="button">
                                    <Image src={playicn} alt="icosn" width={29} height={21} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="adult_class">
                    <Link href={`${ROUTES_PATH.SINGLECLASSES}/${item?.class_id}`}>
                        <p className="font12 adult_tags">
                            {item?.title} - {item?.group}, {item?.instructors}
                        </p>
                    </Link>
                    <span className="font12 duration">
                        Duration - {handleChangeduration(item.vimeo_data?.video_length)}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FavoriteClassesComponent