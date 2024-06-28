"use client";
import React from "react";
import Image from "next/image";
import playicn from "@/assets/images/icons/play_icn.svg";
import { addFavourite, removeFavorite, addWatchList, removeWatchList } from '@/store/actions/CommomActions';
import plusWhite from "@/assets/images/icons/plus_white_icn.svg";
import unFavorites from "@/assets/images/icons/unfavorites_icn.svg";
import isFavorites from "@/assets/images/icons/favorites_icn.svg";
import closedWatch from "@/assets/images/icons/closed_watch.svg";
import { forSuccess, uniqueid } from "@/utils/CommonService";
import { SingleClassesComponentProps } from "./RelatedClassType";
import { handleChangeduration } from "@/shared/common-dialog";
import Swal from "sweetalert2";
import { FavAddResType, PlusWhiteAddResType, RemoveCrossResType, RemoveFavResType } from '@/types/commonTypes';
import { useAppSelector,useAppDispatch } from "@/store/hooks";
import * as relatedClassReducer from "@/store/reducers/relatedClassReducer";
import { RootState } from "@/store/store";
import { ROUTES_PATH } from "@/utils/constant";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FavouritePopupContent,WatchListPopupContent } from "@/shared/common-dialog";
import ReactDomServer from "react-dom/server";

const SingleClassesComponent = ({ item, pagination, setPagination }: SingleClassesComponentProps) => {
    const { subscription } = useAppSelector((state: RootState) => state.auth);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const handleAddFavoritesLabel = (class_id: string, favorite: boolean) => { 
        if (!favorite) {
            addFavourite({ ...pagination, class_id: class_id }).then((res: FavAddResType) => {
                if (res.data.data.message) {
                    dispatch(relatedClassReducer.setRelatedClassFaviroteStatus({class_id: class_id,favorite : favorite}));
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
                    handleRemoveFavourites(class_id,item.favorite);
                }
            });
        }
    };

    const handleRemoveFavourites = async  (class_id: string, favorite: boolean) => { 
        removeFavorite({ ...pagination, class_id: class_id }).then((res: RemoveFavResType) => {
            if (res.data.data.message) {
                dispatch(relatedClassReducer.setRelatedClassFaviroteStatus({class_id: class_id,favorite : favorite}));
                Swal.fire({
                    html: ReactDomServer.renderToString(<FavouritePopupContent/>),
                    icon: "success",
                });
            }
        })
    };

    const handleAddWatchList = async (clsID: string, watchlist: boolean) => { 
        if (!watchlist) {
            addWatchList({ ...pagination, class_id: clsID }).then((res: PlusWhiteAddResType) => {
                if (res.data.success) {
                    dispatch(relatedClassReducer.setRelatedClassWatchlistStatus({class_id: clsID,watchlist: watchlist}));
                    forSuccess(res.data.data.message);
                }
            })
        } else {
            Swal.fire({
                title: "Are you sure Remove?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Removing from WatchList!",
            }).then((result: any) => {
                if (result.isConfirmed) {
                    handleRemoveWatchList(clsID);
                }
            });
        }
    }

    const handleRemoveWatchList = (clsID: string) => {
        removeWatchList({ ...pagination, class_id: clsID }).then((res: RemoveCrossResType) => {
            if (res.data.data.message) {
                setPagination({ ...pagination, cache: uniqueid() })
                Swal.fire({
                    html:ReactDomServer.renderToString(<WatchListPopupContent/>),
                    icon: "success",
                });
            }
        })
    }

    const handleClick = (e: any) => {
        e.preventDefault();
        router.push(`${ROUTES_PATH.SINGLECLASSES}/${item?.class_id}`, undefined);
    };

    return (
        <div className="classes_items position-relative">
            <div className="classes_img">
                <Image
                    src={item?.image?.normalImage}
                    alt="dynamiclevels"
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
                        {subscription ? (
                            <div className="favorites_btn">
                                <button
                                    type="button"
                                    onClick={() => handleAddFavoritesLabel(item.class_id, item.favorite)}
                                >
                                    <Image
                                        src={
                                            item.favorite ? isFavorites
                                                : unFavorites
                                        }
                                        alt="favorites"
                                        width={19}
                                        height={21}
                                    />
                                </button>
                            </div>
                        ) : (null)}
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
                            {subscription ? (
                                <button
                                    type="button"
                                    onClick={() => handleAddWatchList(item?.class_id, item?.watchlist)}
                                >
                                    <Image src={item?.watchlist ? closedWatch : plusWhite} alt="icons" width={15} height={15}></Image>
                                </button>
                            ) : (null)}
                            <button type="button" onClick={handleClick}>
                                <Image src={playicn} alt="icosn" width={29} height={21} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="adult_class">
                    <p className="font12 adult_tags">
                        {item?.title ? item?.title : '-'} -
                        {item?.group ? item?.group : '-'}
                        {item?.instructors ? item?.instructors : '-'}
                    </p>
                    <span className="font12 duration">
                        Duration - {handleChangeduration(item?.vimeo_data?.video_length)}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SingleClassesComponent