export type WatchDataType = {
  id: string;
  user_id: string;
  class_id: string;
  video_total_duration: string;
  watched_duration: string;
  watched_at: string;
  ip_address: string;
  class_details: ClassDetailsType;
};

type ClassDetailsType = {
    class_id: string;
    title: string;
    content: string;
    class_url: string;
    image: ImageType;
    instructors: string[];
    level_skill: string[];
    group: string[];
    usag_level: string[];
    props: string[];
    vimeo_data: VimeoDataType;
    favorite: boolean;
  };

type ImageType = {
  normalImage: string;
  retinaImag: string;
};

type VimeoDataType = {
  video_id: string;
  video_length: string;
  pictures: string;
  preview_video: string;
};

export type InitialHistoryType = {
  watchHistoryList: WatchDataType[]
  isLoaded: boolean
}

export type FetchHistoryResType = {
  data:ResHistoryDataType,
  success:boolean
}

type ResHistoryDataType = {
  data: HistoryInfoType,
  success:boolean
}

type HistoryInfoType = {
  current_page: number,
  total_pages: number,
  total_videos: string,
  videos: WatchDataType[]
}

export type DeleteHistoryResType = {
  data:ResDeleteHistoryType,
  success: boolean,
}

type ResDeleteHistoryType = {
  data:DeleteMessageType,
  success:boolean
}

type DeleteMessageType = {
  message: string
}