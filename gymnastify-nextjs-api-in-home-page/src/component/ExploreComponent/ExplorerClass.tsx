/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Image from 'next/image';
import playicn from "../../assets/images/icons/play_icn.svg";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { ThreeDots } from 'react-loader-spinner';
import { ExplorerClassData, ExplorerClasses, ExplorerClassesResponse } from './Explorer';
import Link from 'next/link';
import { ROUTES_PATH } from '@/utils/constant';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { explorerPageClasses } from '@/store/actions/explorerAction';
import * as explorerReducer from '@/store/reducers/explorerReducer';
import { RootState } from '@/store/store';

const ExplorerClassesComponent = ({ pagination, setPagination, setClassData, setTotalData, ClassData, TotalData,handleShow }: ExplorerClasses) => {
    const { Loaded, ExplorerClass } = useAppSelector((state: RootState) => state.explorer);

    const dispatch = useAppDispatch();
    useEffect(() => {
        if (pagination.usag_level) {
            dispatch(explorerReducer.setLoader(true));
            explorerPageClasses(pagination).then((res: ExplorerClassesResponse) => {
                setTotalData(res.total_pages);
                setClassData(res.total_classes);
                if (pagination.page === 1) {
                    dispatch(explorerReducer.setExplorerClasses(res.classes));
                } else {
                    dispatch(explorerReducer.setExplorerClasses([...ExplorerClass, ...res.classes]));
                }
                dispatch(explorerReducer.setLoader(false));
            })
        }
    }, [pagination])

    const handleChangeLoaded = () => {
        if (pagination.per_page !== TotalData || ExplorerClass.length !== ClassData) {
            setPagination({ ...pagination, page: pagination.page + 1 });
        }
    }


    return (
        <div className="container">
            <div className="sec_title_md">
                <h5>Classes</h5>
            </div>
            <div className="row">
                {Loaded ? (
                    Array(4).fill(0).map((_, index) => (
                        <SkeletonTheme key={100 - index} baseColor="#fff" highlightColor="#444">
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

                    ExplorerClass[0] as any === "No classes found." ? (
                        <div>No classes found.</div>
                    ) : (
                        ExplorerClass?.map((item: ExplorerClassData, index: number) => (
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={item.class_id}>
                                <div className="classes_items position-relative">
                                    <div className="classes_img">
                                        <Image src={item?.image?.normalImage ? item?.image?.normalImage : ''} alt="levels1" width={311} height={148}></Image>
                                    </div>
                                    <div className="classes_block">
                                        <div className="arials_block">
                                            <div className="font12 aerials_tag">{item?.level_skills ? item?.level_skills : '-'}</div>
                                            <div className="levels_group">
                                                <div className="font12 levels_tag">
                                                    {item?.usag_level ? item?.usag_level : '-'}
                                                </div>
                                                <div className="levels_btn">
                                                    <button type="button"
                                                    onClick={()=>handleShow(item?.class_id)}
                                                    >
                                                        <Image src={playicn} alt="icosn" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="adult_class">
                                            <Link href={ROUTES_PATH.SINGLECLASSES} className="font12 adult_tags">
                                                {item?.title ? item?.title : '-'} - {item?.group ? item?.group : '-'}, {item?.instructors ? item?.instructors : '-'}
                                            </Link>
                                            <span className="font12 duration">Duration - 30 mins</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                )}
            </div>
            <div className="btn_videos text-center">
                {ExplorerClass.length !== ClassData && ClassData > 12 ? (
                    <button className="btn_blockmd primary_btn" onClick={() => handleChangeLoaded}>
                        {Loaded ?
                            <ThreeDots
                                height="25"
                                width="80"
                                radius="9"
                                color="#fff"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{ display: "block" }}
                                visible={true}
                            />
                            : 'Load More Videos'}
                    </button>
                ) : (null)}
            </div>
        </div>
    )
}

export default ExplorerClassesComponent;