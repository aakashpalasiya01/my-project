'use client';
import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import wakingup from "@/assets/images/icons/wakingup.png";
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES_PATH } from '@/utils/constant';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

const VirtualBox = () => {

    const { Loaded, guesthome } = useAppSelector((state: RootState) => state.home);
    
    return (
        <div className="container">
            <div className="sec_title text-center">
                {Loaded ? (
                    <SkeletonTheme baseColor="#eee" highlightColor="#ddd">
                        <p>
                            <Skeleton width={1149} />
                        </p>
                        <h2>
                            <Skeleton width={1149} />
                        </h2>
                    </SkeletonTheme>
                ) : (
                    <>
                        <p data-aos="fade-left" data-aos-duration="1000">
                            {guesthome[0]?.acf_fields?.virtual_workout_section?.top_heading ? guesthome[0]?.acf_fields?.virtual_workout_section?.top_heading : "-"}
                        </p >
                        <h2 data-aos="fade-left" data-aos-duration="1000">{guesthome[0]?.acf_fields?.virtual_workout_section?.title ? guesthome[0]?.acf_fields?.virtual_workout_section?.title : "-"}</h2>
                    </>
                )}
            </div>
            <div className="row">
                {Loaded ? (
                    Array(4).fill(0).map((_, index) => (
                        <SkeletonTheme key={index + 1} baseColor="#eee" highlightColor="#ddd">
                            <div className="col-md-6 col-xl-3">
                                <Skeleton width={236} height={167} />
                            </div>
                        </SkeletonTheme>
                    ))
                ) : guesthome?.length > 0 && (
                    guesthome[0]?.acf_fields?.virtual_workout_section?.levels_section?.map((items: any, index: number) => (
                        <div className="col-md-6 col-xl-3" key={items.name} data-aos="flip-left" data-aos-duration="1000">
                            <div className="weve_items text-center">
                                {items?.top_label ? (<span className="weve_items_ribbons">{items?.top_label ? items?.top_label : "-"}</span>) : (null)}
                                <div className="weve_items_icn">
                                    <Image src={items?.url ? items.url : wakingup} alt="icos"></Image>
                                </div>
                                <h4>{items?.name ? items?.name : "-"}</h4>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="skill_dic">
                <Link href={ROUTES_PATH.EXPLORESKILL} className="btn_animated primary_btn btn_blockmd">
                    {guesthome[0]?.acf_fields?.virtual_workout_section?.button?.name ? guesthome[0]?.acf_fields?.virtual_workout_section?.button?.name : "-"}
                </Link>
            </div>
        </div>
    );
};

export default VirtualBox;