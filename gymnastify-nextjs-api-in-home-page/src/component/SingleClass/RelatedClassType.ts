

export type initialRelatedClassStateType = {
  relatedClassesList: relatedClassesListType[];
  loadingState: boolean;
};

export type relatedClassesListType = {
  class_id: number;
  title: string;
  content: string;
  class_url: string;
  image: RelatedClassImageType;
  instructors: string[];
  level_skills: string[];
  group: string[];
  usag_level: string[];
  props: string[];
  vimeo_data: RelatedClassVimeoType;
  favorite: boolean;
  watchlist: boolean;
};

type RelatedClassImageType = {
  normalImage: string;
  retinaImage: string;
};

type RelatedClassVimeoType = {
  video_id: string;
  video_length: string;
  pictures: string;
  preview_video: string;
};

export type FavAddResType = {
  data: FavAddDataType;
  success: boolean;
};

type FavAddDataType = {
  data: FavAddInfo;
  success: boolean;
};

type FavAddInfo = {
  message: string;
};

export type PlusWhiteAddResType = {
  data: PlusWhiteAddDataType;
  success: boolean;
};

type PlusWhiteAddDataType = {
  data: PlusWhiteAddInfo;
  success: boolean;
};

type PlusWhiteAddInfo = {
  message: string;
};

export type RelatedClassPropType = {
  classID:number
};

export type getRelatedClassResType = {
  data:RelatedClassResDataType,
  success:boolean
};

type RelatedClassResDataType = {
  data:RelatedClassResObjectType,
  success: boolean
}

type RelatedClassResObjectType = {
  total_pages:number,
  current_page:number,
  total_classes:number,
  classes:relatedClassesListType[]
}


