import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { registerPageUserSkills } from "@/store/actions/registeredAction";
import { LevelsTypes, SkillType } from "./Home";
import Skeleton from "react-loading-skeleton";
import { RootState } from "@/store/store";
import { setSkill } from "@/store/reducers/registeredReducer";

const SkillsDictionary = () => {
  const [loading, setLoading] = useState(true);
  const { user_id } = useAppSelector(
    (state: RootState) => state?.auth?.user ?? null
  );
  const dispatch = useAppDispatch();
  const {LevelSkill}=useAppSelector((state)=>state.registered)

  const [skills, setSkills] = useState<SkillType[]>([]);
  const [level, setLevel] = useState<LevelsTypes | null>(null);

  const skillsData = async () => {
    setLoading(true);
    let res = await dispatch(registerPageUserSkills(user_id));
    setSkills(res?.skills || []);
    setLevel(res?.level || null);
    setLoading(false);
  };

  useEffect(() => {
    skillsData();
  }, []);


   const handleSkill=(skill:string)=>{
       dispatch(setSkill(skill));
   }

  return (
    <section className="offeres_block">
      <div className="weve_got">
        <div className="container">
          <div className="sec_title text-center">
            <div className="sec_title_md">Skill Dictionary</div>
            <p>
              No Matter Your Fitness Level, Body Type, Mood, or Fitness Goal…
            </p>
            <h2>Gymnastify offers fun and fitness to all ages.</h2>
            <div className="row">
              {loading ? <Skeleton height={200} width={264} borderRadius={10}/> : <div
                className="col-md-6 col-xl-3"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <div className="white_bg weve_items text-center">
                  <span className="weve_items_ribbons">
                    {level?.meta?.label_name}
                  </span>
                  <div className="weve_items_icn">
                 
                      <Image
                        src={`${level?.meta?.image}`}
                        alt="icos"
                        width={58}
                        height={55}
                      />
                  
                  </div>
                  <h4>{level?.name}</h4>
                </div>
              </div>}
             
              <div className="col-xl-8">
                <div className="skill_list">
                  <h5>Skill</h5>
                  {loading ? (
                    <div style={{ display: "flex",  gap:50 }}>
                      <Skeleton
                        className="skill_block"
                        count={1}
                        height={50}
                        width={200}
                        borderRadius={50}
                      />
                      <Skeleton
                        className="skill_block"
                        count={1}
                        height={50}
                        width={200}
                        borderRadius={50}
                      />
                      <Skeleton
                        className="skill_block"
                        count={1}
                        height={50}
                        width={200}
                        borderRadius={50}
                      />
                      <Skeleton
                        className="skill_block"
                        count={1}
                        height={50}
                        width={200}
                        borderRadius={50}
                      />
                    </div>
                  ) : (
                    <ul className="skill_block">
                      {skills.length > 0 ? (
                        <>
                          <li data-aos="fade-left" data-aos-duration="1000">
                            <button onClick={()=>handleSkill('')}
                             className={`skll_btn ${LevelSkill === '' ? "skll_isActived" : ""}`}
                             >
                              All
                            </button>
                          </li>
                          {skills.map((skill: SkillType) => (
                            <li
                              key={skill.id}
                              data-aos="fade-left"
                              data-aos-duration="1000"
                            >
                              <button
                               onClick={()=>handleSkill(skill?.name)}
                               className={`skll_btn ${LevelSkill === (skill?.name)  ? "skll_isActived" : ""}`}
                                >
                                {skill?.name}
                              </button>
                            </li>
                          ))}
                        </>
                      ) : (
                        <li>No skills available</li>
                      )}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsDictionary;
