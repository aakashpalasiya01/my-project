/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import wakingup from "../../assets/images/icons/wakingup.png";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { levelSkills, RegisterSkill, RegisterSkillprops } from './Register';
import * as RegisteredSlice from "@/store/reducers/registeredReducer";
import { registerPageUserSkills } from '@/store/actions/registeredAction';

const Skill = ({ setPagination, pagination }: RegisterSkillprops) => {

    const { RegisterLevel } = useAppSelector((state: RootState) => state.registered);
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state: RootState) => state.auth);
    const userId = user?.user_id;

    useEffect(() => {
        dispatch(RegisteredSlice.setLoader(true));
        registerPageUserSkills(userId).then((res: levelSkills) => {
            dispatch(RegisteredSlice.setRegisterlevels(res));
            setPagination({ ...pagination, usag_level: res.level.slug });
            dispatch(RegisteredSlice.setLoader(false));
        })
    }, [])


    const exploreSkillhandleFliter = (skillslug: string, slug: string) => {
        setPagination({ ...pagination, level_skills: skillslug, usag_level: slug });
    }

    return (
        <>
            <div className="weve_got">
                <div className="container">
                    <div className="sec_title text-center">
                        <div className="sec_title_md">Skill Dictionary</div>
                        <p>No Matter Your Fitness Level, Body Type, Mood, or Fitness Goal…</p>
                        <h2>Gymnastify offeres fun and fitness to all ages.</h2>
                        <div className="row">
                            <div className="col-md-6 col-xl-3">
                                <div className="white_bg weve_items text-center">
                                    <span className="weve_items_ribbons">
                                        {RegisterLevel?.level?.meta?.label_name ? RegisterLevel?.level?.meta?.label_name : "-"}
                                    </span>
                                    <div className="weve_items_icn">
                                        <Image src={RegisterLevel?.level?.meta?.image ? RegisterLevel?.level?.meta?.image : wakingup} alt="icos" width={58} height={55}></Image>
                                    </div>
                                    <h4>{RegisterLevel?.level?.name ? RegisterLevel?.level?.name : "-"}</h4>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="skill_list">
                                    {/* <div className="sec_title_md"> */}
                                        <h5>Skill</h5>
                                        <ul className="skill_block">
                                            <li key="all">
                                                <button
                                                    onClick={() => exploreSkillhandleFliter('', RegisterLevel?.level?.slug)}
                                                    className={pagination.level_skills === '' ? 'skll_btn skll_isActived' : 'skll_btn'}
                                                >
                                                    All
                                                </button>
                                            </li>
                                            {RegisterLevel?.skills?.length === 0 ? (
                                                <div>No Skills</div>
                                            ) : (
                                                RegisterLevel?.skills?.map((items: RegisterSkill, index: number) => (
                                                    <li key={index}>
                                                        <button
                                                            onClick={() => exploreSkillhandleFliter(items?.slug, RegisterLevel?.level?.slug)}
                                                            className={pagination.level_skills === items.slug ? 'skll_btn skll_isActived' : 'skll_btn'}
                                                        >
                                                            {items.name}
                                                        </button>
                                                    </li>
                                                ))
                                            )}
                                        </ul>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill