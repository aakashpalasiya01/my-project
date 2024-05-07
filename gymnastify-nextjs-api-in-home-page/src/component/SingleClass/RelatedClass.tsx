"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import playicn from "../../assets/images/icons/play_icn.svg";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { getRelatedClassData,AddPlusWhite, AddFavouriteData } from "@/store/actions/relatedClassAction";
import * as relatedClassReducer from "@/store/reducers/relatedClassReducer";
import plusWhite from "../../assets/images/icons/plus_white_icn.svg";
import unFavorites from "../../assets/images/icons/unfavorites_icn.svg";
import isFavorites from "../../assets/images/icons/favorites_icn.svg";
import { forSuccess, forWarning } from "@/utils/CommonService";
import { PlusWhiteAddResType,FavAddResType,RelatedClassPropType,getRelatedClassResType } from "./RelatedClassType";


export default function RelatedClass({classID}:RelatedClassPropType) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [selectedIndex, setSelectedIndex] = useState(NaN);
  const dispatch = useAppDispatch();
  const { relatedClassesList } = useAppSelector(
    (state: RootState) => state.relatedClass
  );
  const { Profile } = useAppSelector((state: RootState) => state.profile);
  const userID: string = Profile?.user_id;

  useEffect(() => {
    const FetchRelatedClass = async () => {
      await getRelatedClassData(classID).then((res:getRelatedClassResType) => { 
        if (res?.success) {
          dispatch(
            relatedClassReducer.setUpdateRelatedClassList(res.data?.data?.classes)
          );
        }
      });
    };
    FetchRelatedClass();
  }, [classID, dispatch]);

  const FavoritesLabel = async (clsId: number) => {
    selectedIndex !== clsId ? setSelectedIndex(clsId) : setSelectedIndex(NaN);
    await AddFavouriteData(userID, clsId).then((res: FavAddResType) => {
      if(res.data.success) {
        forSuccess(res.data.data.message);
      } else {
        forWarning(res.data.data.message);
      }
    });
  };


  const convertDuration = (durationStr:string) => {
    if (typeof durationStr !== 'string') {
      return "Invalid duration format";
  }
  const timeComponents = durationStr.split(':').map(Number);
  if (timeComponents.length !== 3) {
      return "Invalid duration format";
  }
  const [hours, minutes, seconds] = timeComponents;

    const totalSeconds = hours*3600 + minutes * 60 + seconds;

    const hrs = Math.floor(totalSeconds/3600);
    const mins = Math.floor((totalSeconds % 3600)/60);
    const secs = totalSeconds % 60;

    if (hrs > 0) {
      return `${String(hrs).padStart(2, '0')} hrs`;
  } else if (mins > 0) {
      return `${String(mins).padStart(2, '0')} mins`;
  } else {
      return `${String(secs).padStart(2, '0')} secs`;
  }
  }

  const handleAddPlusWhite = async(clsID:number) => { 
    await AddPlusWhite(clsID,userID).then((res:PlusWhiteAddResType)=>{ 
      if(res.data.success) {
        forSuccess(res.data.data.message);
      } else {
        forWarning(res.data.data.message);
      }
     
    }) 
}

  const dynamicRelatedClasses = relatedClassesList.map(
    (relatedClassesListItem) => {
      return (
        <div
          className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
          key={relatedClassesListItem?.class_id}
        >
          <div className="classes_items position-relative">
            <div className="classes_img">
              <Image
                src={relatedClassesListItem?.image?.normalImage}
                alt="dynamiclevels"
                width={311}
              height={155}
              ></Image>
            </div>
            <div className="classes_block">
              <div className="arials_block">
              <div className="favorites_block">
                <div className="font12 aerials_tag">
                  {relatedClassesListItem?.level_skills}
                </div>
                <div className="favorites_btn">
                  <button
                    type="button"
                    onClick={() => FavoritesLabel(relatedClassesListItem.class_id)}
                  >
                    <Image
                      src={
                        selectedIndex ===  relatedClassesListItem.class_id && !relatedClassesListItem.favorite ?  unFavorites
                          : isFavorites 
                      }
                      alt="favorites"
                      width={19}
                      height={21}
                    />
                  </button>
                </div>
              </div>
                <div className="levels_group">
                  <div className="font12 levels_tag">
                    {relatedClassesListItem?.usag_level}
                  </div>
                  <div className="levels_btn">
                    <button
                      type="button"
                      onClick={() => handleAddPlusWhite(relatedClassesListItem?.class_id)}
                    >
                      <Image src={plusWhite} alt="icons" width={29} height={21}></Image>
                    </button>
                    <button type="button" onClick={handleShow}>
                      <Image src={playicn} alt="icosn" width={29} height={21} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="adult_class">
                <p className="font12 adult_tags">
                  {relatedClassesListItem?.title} -{" "}
                  {relatedClassesListItem?.group},{" "}
                  {relatedClassesListItem?.instructors}
                </p>
                <span className="font12 duration">
                  Duration - {convertDuration(relatedClassesListItem?.vimeo_data?.video_length)}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

  return [dynamicRelatedClasses];
}
