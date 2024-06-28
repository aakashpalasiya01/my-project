/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import wakingup from "@/assets/images/icons/wakingup.png";
import { ExplorerSkillProps, ExplorerSkill, MapSkills, UsagLevelApiResponse } from './Explorer';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { exploreSkill } from '@/store/actions/explorerAction';
import * as explorerReducer from '@/store/reducers/explorerReducer';



const ExploreSkillDictionary = ({ setPagination, pagination }: ExplorerSkillProps) => {

    const dispatch = useAppDispatch();
    const { ExplorerSkills } = useAppSelector((state: RootState) => state.explorer);
    const [SkillsIds, setSkillsId] = useState<number | null>(null);
    const [SkillData, setSkillsData] = useState<number | null>(SkillsIds);

    useEffect(() => { 
        exploreSkill().then((res: UsagLevelApiResponse) => {
            dispatch(explorerReducer.setExplorerSkills(res.data));
            
            setSkillsId(res.data[0].id);
            
            setPagination({ ...pagination, group: res.data[0].slug });
        })
    }, [])


    useEffect(() => { 
        setSkillsData(ExplorerSkills[0]?.id);
    }, [ExplorerSkills])

    const SelectedSkills = ExplorerSkills.filter((items: ExplorerSkill) => items?.id === SkillData);

    const handleChangeExplorerSkills = async (levelslug: string,index:number) => { 
        setPagination({ ...pagination,page:1, group: levelslug, level_skills:"" });
        setSkillsData(index);
    }

    const exploreSkillhandleFliter = async (skillslug: string, levelslug: string) => {
        if(pagination.page > 1){
            setPagination({ ...pagination,page:1, level_skills: skillslug, group: levelslug });
        }
        if(pagination.page===1){
            setPagination({ ...pagination, level_skills: skillslug, group: levelslug });
        }
    }

    const ExploererSkillsFliterContent = SelectedSkills.map((item: ExplorerSkill, index: number) => { 
        return (
            <React.Fragment key={index + 1}>
                <li key="all" data-aos="fade-left" data-aos-duration="1000">
                    {item.skills.length === 0 ? (null) : (
                        <button onClick={() => exploreSkillhandleFliter('', item.slug)}
                            className={pagination?.level_skills === '' ? 'skll_btn skll_isActived' : 'skll_btn'}
                        >All</button>
                    )}
                </li>
                {/* {item.skills.length === 0 ? (
                    <div>No Skills</div>
                ) : ( */}
                {item.skills.map((items: MapSkills, index: number) => ( 
                    <li key={index + 1} data-aos="fade-left" data-aos-duration="1000">
                        <button
                            onClick={() => exploreSkillhandleFliter(items.slug, item.slug)}
                            className={pagination.level_skills === items.slug ? 'skll_btn skll_isActived' : 'skll_btn'}
                        >
                            {items.name}
                        </button>
                    </li>
                ))}
                {/* )} */}
            </React.Fragment>
        );
    })


    return (
        <div className="weve_got">
            <div className="container">
                <div className="sec_title text-center">
                    <h2>Gymnastify offers fun and fitness to all ages.</h2>
                </div>
                <div className="row">
                    {ExplorerSkills?.map((item: ExplorerSkill) => (
                        <div
                            data-aos="flip-left" data-aos-duration="1000"
                            key={item?.id}
                            className="col-md-6 col-xl-3"
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                    handleChangeExplorerSkills(item?.slug,item?.id);
                                }
                            }}
                            onClick={() => handleChangeExplorerSkills(item?.slug,item?.id)} style={{ cursor: "pointer" }}
                        >
                            <div className="white_bg weve_items text-center">
                                {item?.meta?.label_name ?  <span className="weve_items_ribbons">{item?.meta?.label_name ? item?.meta?.label_name : "-"}</span> : null}
                                <div className="weve_items_icn">
                                    <Image src={item?.meta?.image ? item?.meta?.image : wakingup} width={58} height={55} alt="icos" ></Image>
                                </div>
                                <h4>{item?.name ? item?.name : "-"}</h4>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="skill_list">
                    <div className="sec_title_md">
                        <h5>Skill</h5>
                        <ul className="skill_block" key='a'>
                            {!ExplorerSkills ? (<p>No Skills Found</p>) : ExploererSkillsFliterContent}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreSkillDictionary