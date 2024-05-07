/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import playicn from "../../assets/images/icons/play_icn.svg";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { ThreeDots } from 'react-loader-spinner';
import { useDebouncedCallback } from 'use-debounce';
import { registeredPageClasses, searchRegisteredClasses } from '@/store/actions/registeredAction';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { ClassesComponentProps, ClassesDataType, ClassesResponse } from './Register';
import Link from 'next/link';
import { ROUTES_PATH } from '@/utils/constant';
import * as RegisteredSlice from "@/store/reducers/registeredReducer";
import Dropdown from "react-bootstrap/Dropdown";


const ClassesComponent = ({ TotalData, setTotalData, pagination, setPagination }: ClassesComponentProps) => {

    const [ClassData, setClassData] = useState<number>(0);

    const dispatch = useAppDispatch();
    const { Loaded, RegisterClasses } = useAppSelector((state: RootState) => state.registered);
    useEffect(() => {
        if (pagination.usag_level) {
            dispatch(RegisteredSlice.setLoader(true));
            registeredPageClasses({ usag_level: pagination.usag_level, level_skills: '', ...pagination }).then((res: ClassesResponse) => {
                setTotalData(res.data.total_pages);
                setClassData(res.data.total_classes);
                if (pagination.page === 1) {
                    dispatch(RegisteredSlice.setRegisterClasses(res.data.classes));
                } else {
                    dispatch(RegisteredSlice.setRegisterClasses([...RegisterClasses, ...res.data.classes]));
                }
                dispatch(RegisteredSlice.setLoader(false));
            })
            dispatch(RegisteredSlice.setLoader(false));
        }
    }, [pagination])


    const handleChangeLoaded = () => {
        if (pagination.per_page !== TotalData || RegisterClasses.length !== ClassData) {
            setPagination({ ...pagination, page: pagination.page + 1 });
        }
    }

    const debounced = useDebouncedCallback(
        (value) => {
            setPagination({ ...pagination, search: value });
        },
        1000
    );

    const handleSelectOrderBy = (order:string) => {
        setPagination({ ...pagination, order: order });
    }

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
                                {/* <button className="balck_btn"> <Image className="fillter_icn" src={filltericon} alt="icons"></Image> Filters</button> */}
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
                                                <button type="button" onClick={() => handleSelectOrderBy('asc')}>Title A-Z</button>
                                            </li>
                                            <li>
                                                <button type="button" onClick={() => handleSelectOrderBy('desc')}>Title Z-A</button>
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
                    {Loaded ? (
                        Array(4).fill(0).map((_, index) => (
                            <SkeletonTheme baseColor="#fff" highlightColor="#444" key={index}>
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
                            {RegisterClasses[0] === "No classes found." ? (
                                <div>No classes</div>
                            ) : (
                                RegisterClasses?.map((item: ClassesDataType, index: number) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={index}>
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
                                                            // onClick={() => handleChangeshowvideo(item.class_id)}
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
                            )}
                        </React.Fragment>
                    )}
                </div>
                <div className="btn_videos text-center">
                    {RegisterClasses.length !== ClassData && ClassData > 12 ? (
                        <button className="btn_blockmd primary_btn" onClick={handleChangeLoaded}>
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
        </>
    )
}

export default ClassesComponent