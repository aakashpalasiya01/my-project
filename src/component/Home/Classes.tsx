'use client';
import React from 'react'
import Image from 'next/image';
import playicn from "@/assets/images/icons/play_icn.svg";
import Link from 'next/link';
import unFavorites from "@/assets/images/icons/unfavorites_icn.svg";
import isFavorites from "@/assets/images/icons/favorites_icn.svg";
import plusWhite from "@/assets/images/icons/plus_white_icn.svg";
import closedWatch from "@/assets/images/icons/closed_watch.svg";
import { ROUTES_PATH, subscriptionStatus } from '@/utils/constant';
import { handleChangeduration, FavouritePopupContent, WatchListPopupContent } from '@/shared/common-dialog';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { addFavourite, removeFavorite, addWatchList, removeWatchList } from '@/store/actions/CommomActions';
import { ClassesResComponentProps } from './Register';
import { forSuccess, uniqueid } from '@/utils/CommonService';
import Swal from "sweetalert2";
import { FavAddResType, PlusWhiteAddResType, RemoveCrossResType, RemoveFavResType } from '@/types/commonTypes';
import * as RegisteredSlice  from '@/store/reducers/registeredReducer';
import ReactDOMServer from "react-dom/server"

const RegisterClassesComponent = ({ item, pagination, setPagination , handleShow }: ClassesResComponentProps) => {
    const { subscription } = useAppSelector((state: RootState) => state.auth);
    const dispatch = useAppDispatch();
    const FavoritesLabel = (class_id: number, favorite: boolean) => {
        if (!favorite) {
            addFavourite({ ...pagination, class_id: class_id }).then((res: FavAddResType) => {
                if (res.data.data.message) {
                    // setPagination({ ...pagination, cache: uniqueid() })
                    dispatch(RegisteredSlice.setRegisterFaviroteStatus({class_id: class_id,favorite: favorite}));
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
                    handleRemoveFavourites(class_id);
                    dispatch(RegisteredSlice.setRegisterFaviroteStatus({class_id: class_id,favorite: favorite}));
                }
            });
        }
    };

    const handleRemoveFavourites = (class_id: number) => {
        removeFavorite({ ...pagination, class_id: class_id }).then((res: RemoveFavResType) => {
            if (res.data.data.message) {
                setPagination({ ...pagination, cache: uniqueid() })
                Swal.fire({
                    html:ReactDOMServer.renderToString(<FavouritePopupContent/>),
                    icon: "success",
                })
            }
        })
    }


    const WatchListLabel = (class_id: number, watchlist: boolean) => {
        if (!watchlist) {
            addWatchList({ ...pagination, class_id: class_id }).then((res: PlusWhiteAddResType) => {
                if (res.data.data.message) {
                    // setPagination({ ...pagination, cache: uniqueid() })
                    dispatch(RegisteredSlice.setRegisterWatchlistStatus({class_id: class_id,watchlist: watchlist}));
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
                    closingWatchListLogic(class_id,watchlist);
                }
            });
        }
    };

    const closingWatchListLogic = (class_id: number, watchlist: boolean) => {
        removeWatchList({ ...pagination, class_id }).then((res: RemoveCrossResType) => {
            if (res.data.data.message) {
                dispatch(RegisteredSlice.setRegisterWatchlistStatus({class_id: class_id,watchlist: watchlist}));
                Swal.fire({
                    html: ReactDOMServer.renderToString(<WatchListPopupContent/>),
                    icon: "success",
                })
            }
        })
    }


    return (
        <div className="classes_items position-relative">
            <div className="classes_img">
                <Image src={item?.image?.normalImage ? item?.image?.normalImage : ''} alt="levels1" width={311} height={148}></Image>
            </div>
            <div className="classes_block">
                <div className="arials_block">
                    <div className="favorites_block">
                        <div className="font12 aerials_tag">
                            {item?.level_skills && Array.isArray(item.level_skills) ? (
                                item.level_skills.map((skill, index) => (
                                    <span key={index + 1} style={{ paddingLeft: '3px', paddingRight: '3px' }}>{skill}{item?.level_skills.length - 1 === index ? '' : ','}</span>
                                ))
                            ) : (
                                '-'
                            )}
                        </div>
                        {subscription?.status === subscriptionStatus.active && <div className="favorites_btn">
                            <button
                                type="button"
                                onClick={() => FavoritesLabel(item?.class_id, item?.favorite)}
                            >
                                <Image
                                    src={
                                        item?.favorite
                                            ? isFavorites
                                            : unFavorites
                                    }
                                    alt="favorites"
                                    width={19}
                                    height={21}
                                />
                            </button>
                        </div>}
                    </div>
                    <div className="levels_group">
                        {subscription?.status === subscriptionStatus.active ? <Link href={`${ROUTES_PATH.SINGLECLASSES}/${item?.class_id}`}>
                            <div className="font12 levels_tag text-truncated">
                                {item?.usag_level && Array.isArray(item.usag_level) ? (
                                    item.usag_level.map((level, index) => (
                                        <span key={index + 1}  style={{ paddingLeft: '3px', paddingRight: '3px' }}>{level}{item?.usag_level.length - 1 === index ? '' : ','}</span>
                                    ))
                                ) : (
                                    '-'
                                )}
                            </div>

                        </Link> :
                        <div className="font12 levels_tag text-truncated">
                        {item?.usag_level && Array.isArray(item.usag_level) ? (
                            item.usag_level.map((level, index) => (
                                <span key={index + 1}  style={{ paddingLeft: '3px', paddingRight: '3px' }}>{level}{item?.usag_level.length - 1 === index ? '' : ','}</span>
                            ))
                        ) : (
                            '-'
                        )}
                    </div>
                        }
                        <div className="levels_btn">
                            {subscription?.status === subscriptionStatus.active && <button
                                type="button"
                                onClick={() => WatchListLabel(item?.class_id, item?.watchlist)}
                            >
                                <Image src={item?.watchlist ? closedWatch : plusWhite} alt="icons" width={15} height={15}></Image>
                            </button>}
                           {subscription?.status === subscriptionStatus.active ? <Link href={`${ROUTES_PATH.SINGLECLASSES}/${item?.class_id}`}>
                                <button type="button">
                                    <Image src={playicn} alt="icosn" />
                                </button>
                            </Link> : 
                            <button
                            type="button"
                            onClick={() => handleShow(item?.class_id)}
                          >
                            <Image src={playicn} alt="icosn" />
                          </button>}
                        </div>
                    </div>
                </div>
                <div className="adult_class">
                    { subscription?.status === subscriptionStatus.active ? <Link href={`${ROUTES_PATH.SINGLECLASSES}/${item?.class_id}`} className="font12 adult_tags">
                        {item?.title ? item?.title : '-'} - {item?.group ? item?.group : '-'} {item?.instructors ? item?.instructors : '-'}
                    </Link> 
                    : 
                    <span className="font12 adult_tags">
                        {item?.title ? item?.title : '-'} - {item?.group ? item?.group : '-'} {item?.instructors ? item?.instructors : '-'}
                    </span> 
                      }
                    <span className="font12 duration">{`Duration - ${handleChangeduration(item?.vimeo_data?.video_length)}`}</span>
                </div>
            </div>
        </div>
    )
}

export default RegisterClassesComponent