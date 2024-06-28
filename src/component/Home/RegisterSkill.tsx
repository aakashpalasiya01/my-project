'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import React, { useEffect } from 'react'
import wakingup from "@/assets/images/icons/wakingup.png";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { levelSkills, RegisterSkill } from './Register';
import * as RegisteredSlice from "@/store/reducers/registeredReducer";
import { registerPageUserSkills } from '@/store/actions/registeredAction';
import { usePagination } from './homepagecontext';

const Skill = () => {
    const { pagination, setPagination } = usePagination();

    const dispatch = useAppDispatch();

    const { RegisterLevel } = useAppSelector((state: RootState) => state.registered);
    const RegisterSkillsData = RegisterLevel ? Object.keys(RegisterLevel).length : 0
    const { user, subscription } = useAppSelector((state: RootState) => state.auth);

    const userId = user?.user_id;

    useEffect(() => {
        if (userId) {
            dispatch(RegisteredSlice.setClassesLoader(true));
            registerPageUserSkills(userId).then((res: levelSkills) => { 
                dispatch(RegisteredSlice.setRegisterlevels(res));
                setPagination({ ...pagination, group:res.level.slug});
                dispatch(RegisteredSlice.setClassesLoader(true));
            })
        }
    }, [userId])


    const exploreSkillhandleFliter = (skillslug: string, slug: string) => { 
            setPagination({ ...pagination, page: 1, level_skills: skillslug, group: slug });
    }

    return (
        <div className="weve_got">
            <div className="container">
                <div className="sec_title text-center">
                    {!subscription ? (<div className="sec_title_md">Skill Dictionary</div>
                    ) : (null)}
                    <p>No Matter Your Fitness Level, Body Type, Mood, or Fitness Goal…</p>
                    <h2>Gymnastify offeres fun and fitness to all ages.</h2>
                    <div className="row">
                        <div className="col-md-6 col-xl-3" data-aos="flip-left" data-aos-duration="1000">
                            <div className="white_bg weve_items text-center">
                                {RegisterLevel?.level?.meta?.label_name ? (<span className="weve_items_ribbons">
                                    {RegisterLevel?.level?.meta?.label_name ? RegisterLevel?.level?.meta?.label_name : ""}
                                </span>) : null}
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
                                    <li key="all" data-aos="fade-left" data-aos-duration="1000">
                                        <button
                                            onClick={() => exploreSkillhandleFliter('', RegisterLevel?.level?.slug)}
                                            className={pagination.level_skills === '' ? 'skll_btn skll_isActived' : 'skll_btn'}
                                        >
                                            All
                                        </button>
                                    </li>
                                    {RegisterSkillsData === 0 ? (
                                        <div>No Skills</div>
                                    ) : (
                                        RegisterLevel?.skills?.map((items: RegisterSkill, index: number) => (
                                            <li key={index + 1} data-aos="fade-left" data-aos-duration="1000">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill