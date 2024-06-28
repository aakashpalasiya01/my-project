/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import VimeoPlayer from '@vimeo/player';
import { useParams } from "next/navigation";


import styles from "./moduletwo.module.scss";
import { addwatchhistorylist } from '@/store/actions/singleClassAction';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

interface VimeoVideoProps {
  videoId: string;
}

interface ApiResponse {
  data: {
    success: boolean;
    data: {
      message: string;
    };
  };
  success: boolean;
}



const VimeoVideo: React.FC<VimeoVideoProps> = ({ videoId }) => {
  const params = useParams<{ slug: string }>();
  const classID: string = params.slug;
  const currentlyWatchingClassID = localStorage.getItem("CurrentClass");
  if(currentlyWatchingClassID === null) {
    localStorage.setItem("CurrentClass",classID);
  }
  const watchingRecentlyDeletedVideo = localStorage.getItem("isRecentlyDeleted");
  if(watchingRecentlyDeletedVideo === null) {
    localStorage.setItem("isRecentlyDeleted","true")
  }
  const date = new Date();
  const formatDate = date.toISOString().split("T");
  const DateString = formatDate[0];
  const [today,setToday] = useState(DateString);
  const { user,subscription } = useAppSelector((state: RootState) => state.auth);
  const { SingleClassData } = useAppSelector((state: RootState) => state.singleClass);
  
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerall = useRef<any>(null);
  const [watchedTime, setWatchedTime] = useState<number>(0);
  
  function convertToSeconds(time: string) {
    const parts = time.split(':').map(part => parseInt(part, 10));
    const hours = parts[0];
    const minutes = parts[1];
    const seconds = parts[2];
    return hours * 3600 + minutes * 60 + seconds;
  }
  
  useEffect(() => { 
    const player = new VimeoPlayer(iframeRef.current!);
    playerall.current = player;
    player.on('play', async () => { 
      const playRef = playerall.current;
      const currentTime = await playRef.getCurrentTime();

      const sameVideoCondition = classID === currentlyWatchingClassID;
      if(sameVideoCondition && today !== DateString){
        localStorage.setItem("CurrentClass",classID);
        setToday(DateString);
      }
      if(sameVideoCondition && watchingRecentlyDeletedVideo === "false"){
        return;
      }
      if(!sameVideoCondition && subscription!==null || sameVideoCondition && watchingRecentlyDeletedVideo === "true" && subscription!==null){
        const apiClassID = classID ?? "";
        const videoLength = SingleClassData?.vimeo_data?.video_length ?? "";
        const userID = user?.user_id ?? "";
          addwatchhistorylist(apiClassID, convertToSeconds(videoLength),userID ).then((res: ApiResponse) => {
            if (res.data.data.message) {
              localStorage.setItem("CurrentClass",classID)
            }
        });
      }
    });

    player.on('pause', () => {
      player.getCurrentTime().then((seconds: any) => {
        setWatchedTime(seconds);
        const watchedMinutes = Math.floor(seconds / 60);
      }).catch((error: any) => {
        console.error('Failed to get current time:', error);
      });
    });

    player.on('ended', () => {
      // Reset on video end
    });

    // Clean up
    return () => {
      player.off('play');
      player.off('pause');
      player.off('ended');
    };
  }, [videoId, classID, ]); // Ensure videoId is correctly used to handle new instances




  return (
    <div className={`${styles.module_wrapper_main}`}>
      <div className={`${styles.video_wrapper}`}>
        <iframe
          title='asd'  
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${videoId}`}
          width="640"
          height="360"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VimeoVideo;