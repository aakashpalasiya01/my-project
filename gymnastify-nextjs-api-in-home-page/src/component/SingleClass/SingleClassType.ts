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
  };

export type initialSingleClassState = {
    SingleClassData : SingleClassDataType,
    loadingState : boolean,
}

export type SingleClassDataResType = {
  data: SingleClassDataType,
  success:boolean
}
