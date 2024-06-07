import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppDispatch } from "@/store/hooks";
import { registerPageUserSkills } from "@/store/actions/registeredAction";
import { useSelector } from "react-redux";
import { LevelsTypes, SkillType } from "./Home";
import Skeleton from "react-loading-skeleton";
const SkillsDictionary = () => {
  const [loading,setLoading] =useState(false);
  const {user_id} = useSelector(state => state?.auth?.user);
  const dispatch = useAppDispatch();
  const [skills, setSkills] = useState<SkillType>();
  const [level,setLevel]=useState<LevelsTypes>();
  const skillsData = async () => {
    setLoading(true);
    let res = await dispatch(registerPageUserSkills(user_id));
    setSkills(res?.skills);
    setLevel(res?.level)
    setLoading(false);
  };
  useEffect(() => {
    skillsData();
  }, []);
  console.log(skills)
  console.log(level)

  return (
    <section className="offeres_block">
      <div className="weve_got">
        <div className="container">
          <div className="sec_title text-center">
            <div className="sec_title_md">Skill Dictionary</div>
            <p>
              No Matter Your Fitness Level, Body Type, Mood, or Fitness Goal…
            </p>
            <h2>Gymnastify offeres fun and fitness to all ages.</h2>
            <div className="row">
              <div
                className="col-md-6 col-xl-3"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <div className="white_bg weve_items text-center">
                  <span className="weve_items_ribbons">
                   {level?.meta?.label_name}
                  </span>
                  <div className="weve_items_icn">
                    <Image src={level?.meta?.image} alt="icos" width={58} height={55} />
                  </div>
                  <h4>{level?.name}</h4>
                </div>

                
              </div>
              <div className="col-xl-8">
                <div className="skill_list">
                
                       <h5>Skill</h5>
                       
                  <ul className="skill_block">

                    {loading ?   <Skeleton count={1} height={50} width={200} borderRadius={50}/> :<li data-aos="fade-left" data-aos-duration="1000">
                      <button className={"skll_btn skll_isActived"}>All</button>
                    </li>}
                  {skills?.map((skill:SkillType)=>
                      
                    <li key={skill.id} data-aos="fade-left" data-aos-duration="1000">
                      <button className={"skll_btn"}>{skill?.name}</button>
                    </li>)}

                
                  </ul>
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


