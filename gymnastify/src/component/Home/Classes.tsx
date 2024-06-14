import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";
import playicn from "@/assets/images/icons/play_icn.svg";
import Link from "next/link";
import isFavorites from "@/assets/images/icons/favorites_icn.svg";
import closedWatch from "@/assets/images/icons/closed_watch.svg";
import React, { useEffect, useState} from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { registeredClasses } from "@/store/actions/registeredAction";

const Classes = () => {
  const dispatch = useAppDispatch();
  const {LevelSkill,RegisterLevel,RegisterClasses}=useAppSelector((state)=>state.registered)
  let Defaulpagination = {
    page : 1,
    per_page : 12,
    group: RegisterLevel?.level?.slug,
    cache: new Date(),
    level_skills:LevelSkill,
    search:''
  };
  const [pagination,setPagination]=useState(Defaulpagination)
  console.log(RegisterLevel)



  useEffect(() => {
    if (pagination?.group)
    dispatch(registeredClasses(pagination))
  }, [pagination]);


  useEffect(() => {
    if (RegisterLevel?.level?.slug){
      setPagination({...pagination,group:RegisterLevel?.level?.slug,level_skills:LevelSkill})
    }
  }, [RegisterLevel?.level?.slug,LevelSkill])
  
console.log(RegisterClasses)
  return (
    <section className="classes_area">
      <div className="filter">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="filter_search">
                <input
                  type="text"
                  className="form-control ele_input search_icn"
                  placeholder="What can we help you find ?"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="fitler_area filter_search">
                <div className="short_bydrop">
                  <Dropdown className="dropdown_inner">
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="dropdwn_btn"
                    >
                      <span className="balck_btn">Sort By</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <li>
                        <button type="button">Title A-Z</button>
                      </li>
                      <li>
                        <button type="button">Title Z-A</button>
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
          {RegisterClasses?.map((classinfo) => (
            <div
              key={classinfo.class_id}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <div className="classes_items position-relative">
                <div className="classes_img">
                  <Image
                    src={classinfo?.image?.normalImage}
                    alt="levels1"
                    width={311}
                    height={148}
                  />
                </div>
                <div className="classes_block">
                  <div className="arials_block">
                    <div className="favorites_block">
                      <div className="font12 aerials_tag">
                        {classinfo?.level_skills?.map((levelinfo) => (
                          <span
                            key={levelinfo}
                            style={{ paddingLeft: "3px", paddingRight: "3px" }}
                          >
                            {levelinfo}
                          </span>
                        ))}
                      </div>
                      <div className="favorites_btn">
                        <button type="button">
                          <Image
                            src={isFavorites}
                            alt="favorites"
                            width={19}
                            height={21}
                          />
                        </button>
                      </div>
                    </div>
                    <div className="levels_group">
                      <Link href={`/single-class/fdbf`}>
                        <div className="font12 levels_tag text-truncated">
                          {classinfo?.usag_level?.map((level) => (
                            <span
                              key={level}
                              style={{
                                paddingLeft: "3px",
                                paddingRight: "3px",
                              }}
                            >
                              {level}
                            </span>
                          ))}
                        </div>
                      </Link>
                      <div className="levels_btn">
                        <button type="button">
                          <Image
                            src={closedWatch}
                            alt="icons"
                            width={15}
                            height={15}
                          ></Image>
                        </button>
                        <Link href={`/single-class/fdbf`}>
                          <button type="button">
                            <Image src={playicn} alt="icosn" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="adult_class">
                    <Link className="font12 adult_tags" href="#">
                      {classinfo?.title}
                    </Link>
                    <span className="font12 duration">{`Duration - ${classinfo?.vimeo_data?.preview_video_length}`}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn_videos text-center">
          <button className="btn_animated btn_blockmd primary_btn">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Classes;
