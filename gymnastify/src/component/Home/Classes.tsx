import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";
import playicn from "@/assets/images/icons/play_icn.svg";
import Link from "next/link";
import isFavorites from "@/assets/images/icons/favorites_icn.svg";
import closedWatch from "@/assets/images/icons/closed_watch.svg";
import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { registeredClasses } from "@/store/actions/registeredAction";
import { ClassType, ParamsType } from "@/types/RegisterTypes";
import Skeleton from "react-loading-skeleton";
import debounce from '@/shared/common-component/Debounce';

const Classes = () => {
  const dispatch = useAppDispatch();
  const { LevelSkill, RegisterLevel, RegisterClasses } = useAppSelector(
    (state) => state.registered
  );

  const [sortByAscDesc, setSortByAscDesc] = useState("asc");
  const [searchTitle, setSearchTitle] = useState("");
  const [classesData, setClassesData] = useState([]); 
  const [loading, setLoading] = useState(true);

  const DefaultPagination:ParamsType = {
    page: 1,
    per_page: 12,
    group: RegisterLevel?.level?.slug,
    cache: new Date(),
    level_skills: LevelSkill,
    order: sortByAscDesc,
    search: "",
  };
  const [pagination, setPagination] = useState<ParamsType>(DefaultPagination);

  useEffect(() => {
    if (pagination?.group) {
      setLoading(true);
      dispatch(registeredClasses(pagination)).then((response) => {
        const fetchedClasses = response.classes;
        setClassesData((prevClasses) => (
          pagination.page === 1 ? fetchedClasses : [...prevClasses, ...fetchedClasses]
        ));
        setLoading(false);
      });
    }
  }, [pagination, dispatch]);

  const debouncedSetPagination = useRef(
    debounce((updatedPagination) => {
      setPagination(updatedPagination);
    }, 300)
  ).current;

  useEffect(() => {
    debouncedSetPagination({
      ...pagination,
      page: 1, 
      search: searchTitle,
    });
    setClassesData([]); 
  }, [searchTitle, debouncedSetPagination]);

  useEffect(() => {
    setPagination({
      ...pagination,
      page: 1, 
      order: sortByAscDesc,
    });
    setClassesData([]); 
  }, [sortByAscDesc]);

  useEffect(() => {
    if (RegisterLevel?.level?.slug) {
      setPagination({
        ...pagination,
        group: RegisterLevel?.level?.slug,
        level_skills: LevelSkill,
      });
    }
  }, [RegisterLevel?.level?.slug, LevelSkill]);

  const loadMore = () => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      page: prevPagination.page + 1,
    }));
  };

  const shouldShowLoadMore =
    RegisterClasses.total_pages > pagination.page &&
    RegisterClasses.classes.length >= pagination.per_page;

  const handleSort = (order:string) => {
    setSortByAscDesc(order);
  };

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
                  onChange={(e) => setSearchTitle(e.target.value)}
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
                        <button onClick={() => handleSort("asc")} type="button">
                          Title A-Z
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleSort("desc")}
                          type="button"
                        >
                          Title Z-A
                        </button>
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
        {loading ? (
          <div style={{ display: "flex", gap: "30px" }}>
            {[...Array(4)].map((_, index) => (
              <div key={index + "abc"}>
                {[...Array(2)].map((_, innerIndex) => (
                  <Skeleton
                    key={innerIndex + "abn"}
                    height={150}
                    width={300}
                    borderRadius={10}
                  />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="row">
            {RegisterClasses?.classes?.length > 0 ? (
              <>
                {classesData?.map((classinfo: ClassType) => (
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
                                  style={{
                                    paddingLeft: "3px",
                                    paddingRight: "3px",
                                  }}
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
                                />
                              </button>
                              <Link href={`/single-class/fdbf`}>
                                <button type="button">
                                  <Image src={playicn} alt="icons" />
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
              </>
            ) : (
              <div>no classes</div>
            )}
          </div>
        )}
        <div className="btn_videos text-center">
          {shouldShowLoadMore && !loading && (
            <button
              onClick={loadMore}
              className="btn_animated btn_blockmd primary_btn"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Classes;
