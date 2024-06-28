import Image from "next/image";
import React from "react";
import playicn from "@/assets/images/icons/play_icn.svg";
import { addFavourite, removeFavorite, removeWatchList } from '@/store/actions/CommomActions';
import Link from 'next/link';
import unFavorites from "@/assets/images/icons/unfavorites_icn.svg";
import isFavorites from "@/assets/images/icons/favorites_icn.svg";
import closedWatch from "@/assets/images/icons/closed_watch.svg";
import { ROUTES_PATH } from "@/utils/constant";
import { forSuccess } from "@/utils/CommonService";
import Swal from "sweetalert2";
import { handleChangeduration, FavouritePopupContent, WatchListPopupContent } from "@/shared/common-dialog";
import { WatchclassPropsDataType } from "./WatchListType";
import { FavAddResType, RemoveCrossResType, RemoveFavResType } from '@/types/commonTypes';
import * as WatchList from "@/store/reducers/watchlistReducer";
import { useAppDispatch } from "@/store/hooks";
import ReactDOMServer from "react-dom/server";

const WatchListClassesComponent = ({ item, pagination, setPagination }: WatchclassPropsDataType) => {

    const dispatch = useAppDispatch();
    const FavoritesLabel = (class_id: string, favorite: boolean) => {
        if (!favorite) {
            addFavourite({ ...pagination, class_id: class_id }).then((res: FavAddResType) => {
                if (res.data.data.message) {
                    dispatch(WatchList.setWListFaviroteStatus({class_id: class_id,favorite: favorite}));
                    forSuccess(res.data.data.message);
                }
            })
        }
        else {
            Swal.fire({
                title: "Are you sure remove?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Removing from Favourites!",
            }).then((result: any) => {
                if (result.isConfirmed) {
                    handleRemoveFavourites(class_id,favorite);
                }
            });
        }
    };

    const handleRemoveFavourites = async (class_id: string,favorite: boolean) => {
        removeFavorite({ ...pagination, class_id: class_id }).then((res: RemoveFavResType) => {
            if (res.data.data.message) {
                dispatch(WatchList.setWListFaviroteStatus({class_id: class_id,favorite: favorite}));
                Swal.fire({
                    html:ReactDOMServer.renderToString(<FavouritePopupContent/>),
                    icon: "success",
                });
            }
        })
    };


    const handleRemoveWatchList = async (classid: string, watchList:boolean) => {
        Swal.fire({
            title: "Are you sure remove?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Removing from watch list!",
        }).then((result: any) => {
            if (result.isConfirmed) {
                handleRemoveWatchdata(classid,watchList);
            }
        });
    };
    
    const handleRemoveWatchdata = async (classid: string,watchList:boolean) => {
        await removeWatchList({ ...pagination, class_id: classid }).then((res: RemoveCrossResType) => {
            if (res.data.data.message) {
                dispatch(WatchList.setWListWatchlistStatus(classid));
                Swal.fire({
                    html: ReactDOMServer.renderToString(<WatchListPopupContent/>),
                    icon: "success",
                });
            }
        })
    };

    return (
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
                    <Link href={`${ROUTES_PATH.SINGLECLASSES}/${item?.class_id}`}>
                        <div className="font12 levels_tag  text-truncated">
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
                            <button
                                type="button"
                                onClick={() => handleRemoveWatchList(item.class_id, item.watchlist)}
                            >
                                <Image src={closedWatch} alt="icons"></Image>
                            </button>
                            <Link href={`${ROUTES_PATH.SINGLECLASSES}/${item?.class_id}`}>
                                <button type="button">
                                    <Image src={playicn} alt="icosn" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="adult_class">
                    <Link
                        href={`${ROUTES_PATH.SINGLECLASSES}/${item?.class_id}`}
                        className="font12 adult_tags"
                    >
                        {item?.title ? item?.title : "-"} -
                        {item?.group ? item?.group : "-"}
                        {item?.instructors ? item?.instructors : "-"}
                    </Link>
                    <span className="font12 duration">
                        {`Duration - ${handleChangeduration(item?.vimeo_data?.video_length)}`}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default WatchListClassesComponent