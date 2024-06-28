/* eslint-disable react-hooks/exhaustive-deps */
import {
  GetWatchHistoryData,
  RemoveWatchHistory,
} from "@/store/actions/watchHistoryAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { DeleteHistoryResType, FetchHistoryResType, WatchDataType } from "./WatchHistoryType";
import * as watchReducer from "@/store/reducers/watchHistoryReducer";
import Closered from "@/assets/images/icons/close_red.svg";
import Image from 'next/image';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { WatchHistoryPopupContent } from "@/shared/common-dialog";
import ReactDOMServer from "react-dom/server";

const DynamicWatchHistory = () => {
  const { watchHistoryList, isLoaded } = useAppSelector(
    (state: RootState) => state.watch
  );
  const duplicateWHList: WatchDataType[] = watchHistoryList.filter(
    (item, index, self) =>
      self.findIndex(
        (i) =>
          i.class_id === item.class_id &&
          i.watched_at.split(" ")[0] === item.watched_at.split(" ")[0]
      ) !== index
  );

  const filteredWHList = watchHistoryList.filter(
    (item, index, self) =>
      self.findIndex(
        (i) => i.class_id === item.class_id && i.watched_at.split(" ")[0] === item.watched_at.split(" ")[0]
      ) === index
  );

  const { user } = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const userID: string | number | undefined = user?.user_id;

  useEffect(() => {
    if (userID) {
      duplicateWHList.map(async (item: WatchDataType) => {
        await RemoveWatchHistory(item.id, userID);
      })
      
      dispatch(watchReducer.setLoader(true));
      GetWatchHistoryData(userID).then((res: FetchHistoryResType) => {
        if (res.success) {
          dispatch(watchReducer.setUpdateHistoryData(res.data.data.videos));
          dispatch(watchReducer.setLoader(false));
        }
      }
      );
    }
  }, [userID, duplicateWHList.length]);

  const handlePopup = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          html:ReactDOMServer.renderToString(<WatchHistoryPopupContent/>),
          icon: "success",
        }).then(() => handleDeleteHistory(id));
      }
    });
  };
  const handleDeleteHistory = async (id: string) => {
    await RemoveWatchHistory(id, userID).then((res: DeleteHistoryResType) => {
      if (res.success) {
        dispatch(watchReducer.setHistoryRemoval(id));
      }
    });
  };

  if (duplicateWHList.length === 0) {
    localStorage.setItem("isRecentlyDeleted", "true");
  } else {
    localStorage.setItem("isRecentlyDeleted", "false");
  }

  function formatDateUsingDate(dateStr: string) {
    // Create a date object from the string
    const date = new Date(dateStr);
    // Use toLocaleDateString to format it
    return date.toLocaleDateString('en-US', {
      month: 'short', // abbreviated month name
      day: '2-digit'  // two-digit day
    });
  }

  const today = new Date();
  const formattedToday = today.toLocaleDateString('en-US', {
    month: 'short', // abbreviated month name
    day: '2-digit'  // two-digit day
  });
  today.setDate(today.getDate() - 1); //changing date to yesterday
  const formattedYesterday = today.toLocaleDateString('en-US', {
    month: 'short', // abbreviated month name
    day: '2-digit'  // two-digit day
  })

  let datesArray: string[] = [];


  const SkeletonContent = (
    <SkeletonTheme baseColor="#eee"
      highlightColor="#ddd">
      <div className="more_pv">
        <div className="more_videos_title">
          <Skeleton height={30} width={210} /> {/* Example dimensions */}
        </div>
        <div className="morepv_items">
          <div className="morepv_items_icn">
            <Skeleton height={65} width={100} />
          </div>
          <div className="morepv_items_block">
            <Skeleton count={3} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );

  const WatchHsitoryContent = (
    filteredWHList.map((item, index, array) => {
      const firstUniqueDate = formatDateUsingDate(item?.watched_at);
      const DuplicateDates: string | null = index > 0 ? formatDateUsingDate(array[index - 1].watched_at) : null;
      const showDate = index === 0 || firstUniqueDate !== DuplicateDates;

      if (formattedToday === firstUniqueDate) {
        datesArray.push("Today");
      } else if (formattedYesterday === firstUniqueDate) {
        datesArray.push("Yesterday");
      } else {
        datesArray.push(firstUniqueDate);
      }

      const handlechangehistoryDuration = (duration: string) => {
        const [hours, minutes, seconds] = duration.split(':').map(Number);
        const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
        const resultMinutes = Math.floor(totalSeconds / 60);
        const resultSeconds = totalSeconds % 60;
        const formattedTime = `${resultMinutes}:${resultSeconds.toString().padStart(2, '0')}`;
        return formattedTime;
      }

      return (
        <div className="more_pv" key={item?.id}>
          <div className="more_videos_title">
            <h3>{showDate && datesArray[index]}</h3>
          </div>
          <div className="morepv_items">
            <div className="morepv_items_icn">
              <Image src={item?.class_details?.image?.normalImage} width={100} height={65} alt="thumbnails for the videos you've watched" />
            </div>
            <div className="morepv_items_block">
              <div className="history_tag">
                <h6>
                  {item?.class_details?.title} -
                  {item?.class_details?.group[0]}
                  {item?.class_details?.instructors[0]}
                </h6>
                <div className="history_closed">
                  <button
                    className="history_btnclosed"
                    onClick={() => handlePopup(item?.id)}
                  >
                    <Image src={Closered} alt="icons" />
                  </button>
                </div>
              </div>
              <p className="morepv_times">
                {handlechangehistoryDuration(item?.class_details?.vimeo_data?.video_length)}
              </p>
            </div>
          </div>
        </div>
      );
    })
  )

  const conditionalContent = watchHistoryList.length === 0 ? (
    <p>No Watch History</p>
  ) : ([WatchHsitoryContent])

  return (
    <>
      {isLoaded ? SkeletonContent : conditionalContent}
    </>
  );
};

export default DynamicWatchHistory;
