import {
  GetWatchHistoryData,
  RemoveWatchHistory,
} from "@/store/actions/watchHistoryAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import {DeleteHistoryResType,FetchHistoryResType} from "./WatchHistoryType";
import * as watchReducer from "@/store/reducers/watchHistoryReducer";
import Closered from "../../assets/images/icons/close_red.svg";
import Image from 'next/image';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const DynamicWatchHistory = () => {
  const { watchHistoryList, isLoaded } = useAppSelector(
    (state: RootState) => state.watch
  );
  const { Profile } = useAppSelector((state: RootState) => state.profile);
  const dispatch = useAppDispatch();
  const userID: string = Profile?.user_id;

  useEffect(() => {
    const fetchWatchHistoryData = async () => {
      dispatch(watchReducer.setLoader(true));
      await GetWatchHistoryData(userID).then((res: FetchHistoryResType) => {
        if (res.success) {
          dispatch(watchReducer.setUpdateHistoryData(res.data.data.videos));
          dispatch(watchReducer.setLoader(false));
        }
      });
    };
    fetchWatchHistoryData();
  }, [dispatch, userID]);

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
          title: "Deleted!",
          text: "Your file has been deleted.",
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

  function formatDateUsingDate(dateStr:string) {
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

  let results:string[] = [];
 
  

  return (
    <>
      {isLoaded ? (
        <SkeletonTheme baseColor="#fff" highlightColor="#444">
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
      ) : watchHistoryList.length === 0 ? (
        <p>No Watch History</p>
      ) : (
        watchHistoryList.map((item, index, array) => {
          const firstUniqueDate = formatDateUsingDate(item?.watched_at);
          const DuplicateDates =  index > 0 ? formatDateUsingDate(array[index - 1].watched_at) : null;
          const showDate = index === 0 || firstUniqueDate !== DuplicateDates;

        if(formattedToday === firstUniqueDate ) {
            results.push("Today")
        } else if (formattedYesterday === firstUniqueDate) {
            results.push("Yesterday")
        } else {
            results.push(firstUniqueDate)
        };

          return (
            <div className="more_pv" key={item?.id}>
              <div className="more_videos_title">
                <h3>{showDate && results[index]}</h3>
              </div>
              <div className="morepv_items">
                <div className="morepv_items_icn">
                  <video width="100" height="65" poster="" controls>
                    <track kind="captions" />
                    <source
                      src={item?.class_details?.vimeo_data?.preview_video}
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="morepv_items_block">
                  <div className="history_tag">
                    <h6>
                      {item?.class_details?.title} -{" "}
                      {item?.class_details?.group[0]},{" "}
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
                    {item?.class_details?.vimeo_data?.video_length}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default DynamicWatchHistory;
