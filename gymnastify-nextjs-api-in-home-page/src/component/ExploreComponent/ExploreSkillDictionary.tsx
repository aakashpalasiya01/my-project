import Image from 'next/image'
import React from 'react'
import wakingup from "../../assets/images/icons/wakingup.png";
import { ExplorerSkillProps, ExplorerSkill, MapSkills } from './Explorer';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { explorerPageClasses } from '@/store/actions/explorerAction';

const ExploreSkillDictionary = ({ SkillData, setPagination, pagination }: ExplorerSkillProps) => {
    const { ExplorerSkills } = useAppSelector((state: RootState) => state.explorer);

    const SelectedSkills = ExplorerSkills.filter((items: ExplorerSkill) => items?.id === SkillData);

    const handleChangeExplorerSkills = async (levelslug: string) => {
        setPagination({ ...pagination, page: 1, usag_level: levelslug });
    }

    const exploreSkillhandleFliter = async (skillslug: string, levelslug: string) => {
        setPagination({ ...pagination, usag_level: levelslug, level_skills: skillslug })
    }
    
    return (
        <div className="weve_got">
            <div className="container">
                <div className="sec_title text-center">
                    <h2>Gymnastify offeres fun and fitness to all ages.</h2>
                </div>
                <div className="row">
                    <>
                        {ExplorerSkills?.map((item: ExplorerSkill) => (
                            <div key={item?.id} className="col-md-6 col-xl-3" onClick={() => handleChangeExplorerSkills(item?.slug)} style={{ cursor: "pointer" }}>
                                <div className="white_bg weve_items text-center">
                                    <span className="weve_items_ribbons">{item?.meta?.label_name ? item?.meta?.label_name : "-"}</span>
                                    <div className="weve_items_icn">
                                        <Image src={item?.meta?.image ? item?.meta?.image : wakingup} width={58} height={55} alt="icos" ></Image>
                                    </div>
                                    <h4>{item?.name ? item?.name : "-"}</h4>
                                </div>
                            </div>
                        ))}
                    </>
                </div>
                <div className="skill_list">
                    <div className="sec_title_md">
                        <h5>Skill</h5>
                        <ul className="skill_block" key='a'>
                            {SelectedSkills && SelectedSkills.map((item: ExplorerSkill, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <li key="all">
                                            {item.skills.length === 0 ? (null) : (
                                                <button onClick={() => exploreSkillhandleFliter('', item.slug)}
                                                    className={pagination.level_skills === '' ? 'skll_btn skll_isActived' : 'skll_btn'}
                                                >All</button>
                                            )}
                                        </li>
                                        <>
                                            {item.skills.length === 0 ? (
                                                <div>No Skills</div>
                                            ) : (
                                                item.skills.map((items: MapSkills, index: number) => (
                                                    <li key={index}>
                                                        <button
                                                            onClick={() => exploreSkillhandleFliter(items.slug, item.slug)}
                                                            className={pagination.level_skills === items.slug ? 'skll_btn skll_isActived' : 'skll_btn'}
                                                        >
                                                            {items.name}
                                                        </button>
                                                    </li>
                                                ))
                                            )}
                                        </>
                                    </React.Fragment>
                                );
                            })}

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreSkillDictionary