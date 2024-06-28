/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useState,useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ThreeDots } from 'react-loader-spinner';
import { useDebouncedCallback } from 'use-debounce';
import { registeredPageClasses,previewClassess } from '@/store/actions/registeredAction';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import {  ClassesDataType, ClassesResponse } from './Register';
import * as RegisteredSlice from "@/store/reducers/registeredReducer";
import Dropdown from "react-bootstrap/Dropdown";
import { uniqueid } from "@/utils/CommonService";
import Classes from './Classes';
import { usePagination } from './homepagecontext';
import NoClassesComponent from '@/shared/common-component/NoClasses';
import VideoPlayer from "../HomeComponent/VideoPlayer";
import { pagePerOptions } from '@/utils/constant';


const ClassesComponent = () => {
    const { pagination, setPagination } = usePagination();

    const dispatch = useAppDispatch();
    const { LoadedClasses, RegisterClasses } = useAppSelector((state: RootState) => state.registered);
    const [RegLoadMore,setRegLoadMore] = useState(false);

    useEffect(() => {
        if (pagination.group) {
            dispatch(RegisteredSlice.setClassesLoader(true));
                registeredPageClasses(pagination).then((res: ClassesResponse) => {
    
                    if (res.data.classes.length === 0) {
                        dispatch(RegisteredSlice.setClassesLoader(false));
                        dispatch(RegisteredSlice.setRegisterClasses(res.data.classes));
                        return;
                    }
                    
                    if (pagination.class_data === 0 && pagination.total_data === 0) {
                        setPagination({ ...pagination, class_data: res.data.total_classes, total_data: res.data.total_pages });
                    }
    
                    if (pagination.page === 1) { 
                        dispatch(RegisteredSlice.setRegisterClasses(res.data.classes));
                    } else if (pagination.page > 1 && pagination.class_data === RegisterClasses.length && pagination.order==="asc") {
                        const sortedAscending = RegisterClasses.slice().sort((a, b) => {
                            const titleA = a.title.toLowerCase();
                            const titleB = b.title.toLowerCase();
                            if (titleA < titleB) return -1;
                            if (titleA > titleB) return 1;
                            return 0;
                        });
                        dispatch(RegisteredSlice.setRegisterClasses(sortedAscending));
                    } else if (pagination.page > 1 && pagination.class_data === RegisterClasses.length && pagination.order==="desc") {
                        const sortedDescending = RegisterClasses.slice().sort((a, b) => {
                            const titleA = a.title.toLowerCase();
                            const titleB = b.title.toLowerCase();
                            if (titleA < titleB) return 1;
                            if (titleA > titleB) return -1;
                            return 0;
                        });
                        dispatch(RegisteredSlice.setRegisterClasses(sortedDescending));
                    } else { 
                        dispatch(RegisteredSlice.setRegisterClasses([...RegisterClasses, ...res.data.classes]));
                    } 
                    
                    dispatch(RegisteredSlice.setClassesLoader(false));
                })
             

        }
    }, [pagination])


    const handleChangeLoaded = () => {
        setRegLoadMore(true);
        if (pagination.per_page !== pagination.total_data || RegisterClasses.length !== pagination.class_data) {
            setPagination({ ...pagination, page: pagination.page + 1 });
        }
        setRegLoadMore(false);
    }

    const debounced = useDebouncedCallback(
        (value) => {
            setPagination({ ...pagination, search: value, page: 1 });
        },
        1000
    );

    const handleSelectOrderBy = (order: string) => {
        setPagination({ ...pagination, order: order });
    }

    const {RegVideoLoader} = useAppSelector((state:RootState)=>state.registered);
    const [show, setShow] =React.useState(false);
    const [perviewClassData, setPerviewClassData] = React.useState<any[]>([])
    
    const handleShow = (class_id: string) => {
      dispatch(RegisteredSlice.setRegVideoLoader(true));
      previewClassess(class_id).then((res: any) => {
        setPerviewClassData(res.classes);
        setShow(true);
      })
      dispatch(RegisteredSlice.setRegVideoLoader(false));
    }
  
    const handleClose = () => setShow(false);

    const RegisteredClassesContent = RegisterClasses?.map((item: ClassesDataType) => (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={item.class_id} data-aos="flip-left" data-aos-duration="1000">
            <Classes item={item} pagination={pagination} setPagination={setPagination} handleShow={handleShow} />
        </div>
    ))

    const ConditionalContent = RegisterClasses.length === 0 && LoadedClasses
        //const ConditionalContent = true
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
        : [RegisteredClassesContent]

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
                                {/* <button className="balck_btn"> <Image className="fillter_icn" src={filltericon} alt="icons"></Image> Filters</button> */}
                                <div className="short_bydrop">
                                    <Dropdown
                                        className="dropdown_inner"
                                    >
                                        <Dropdown.Toggle
                                            id="dropdown-basic"
                                            className="dropdwn_btn"
                                        >
                                            <span className="balck_btn">Sort By</span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <li>
                                                <button type="button" onClick={() => handleSelectOrderBy('asc')} >Title A-Z</button>
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
                    {RegisterClasses.length === 0 && !LoadedClasses ? (
                        <NoClassesComponent />
                    ) : ConditionalContent}
                    
                </div>
                
                <div className="btn_videos text-center">
                    {RegisterClasses.length !== pagination.class_data && pagination.total_data > pagination.page && RegisterClasses.length === pagination.per_page ? (
                        <button className="btn_animated btn_blockmd primary_btn" onClick={handleChangeLoaded}>
                            {RegLoadMore ?
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
            <VideoPlayer handleClose={handleClose} show={show} VideoLoader={RegVideoLoader} UniqueClass={perviewClassData} />
        </>
    )
}

export default ClassesComponent