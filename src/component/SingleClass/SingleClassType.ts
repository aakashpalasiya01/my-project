export type SingleClassDataType = {
  class_id: number;
  title: string;
  content: string;
  class_url: string;
  image: SingleClassImageType;
  instructors: string[];
  level_skills: string[];
  group: string[];
  usag_level: string[];
  props: string[];
  vimeo_data: SingleClassVimeoType;
  favorite: boolean;
  watchlist: boolean;
  current_user_rating:number;
  average_rating: string;
  rating_count:number;
};

type SingleClassImageType = {
    normalImage: string;
    retinaImage: string;
};

type SingleClassVimeoType = {
    video_id: string;
    video_length: string;
    pictures: string;
    preview_video: string;
    preview_video_length: string;
  };

export type initialSingleClassState = {
    SingleClassData : SingleClassDataType,
    loadingState : boolean,
}

export type SingleClassDataResType = {
  data: SingleClassDataType,
  success:boolean
}
