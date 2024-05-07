/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import VimeoPlayer from '@vimeo/player';


import styles from "./moduletwo.module.scss";

interface VimeoVideoProps {
  videoId: string;
}

const VimeoVideo: React.FC<VimeoVideoProps> = ({ videoId }) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerall = useRef<any>(null);
  const [watchedTime, setWatchedTime] = useState<number>(0);

  useEffect(() => {
    const player = new VimeoPlayer(iframeRef.current!);
    playerall.current = player;

    player.on('play', async () => {
      let playRef = playerall.current;
      const currentTime = await playRef.getCurrentTime();
      console.log('Played the video');
    });

    player.on('pause', () => {
      player.getCurrentTime().then((seconds: any) => {
        setWatchedTime(seconds);
        console.log(`Paused the video at: ${seconds} seconds`);
        const watchedMinutes = Math.floor(seconds / 60);
        console.log(`Watched Minutes: ${watchedMinutes}`);
      }).catch((error: any) => {
        console.error('Failed to get current time:', error);
      });
    });

    player.on('ended', () => {
      console.log('Video ended');
    });

    // Clean up
    return () => {
      player.off('play');
      player.off('pause');
      player.off('ended');
    };
  }, [videoId]);
  

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