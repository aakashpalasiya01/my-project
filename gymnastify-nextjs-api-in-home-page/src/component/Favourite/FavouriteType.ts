export type FavData = {
  class_id: number,
  title: string,
  content: string,
  class_url: string,
  image: ImageType;
  instructors: string[],
  level_skills: string[],
  group: string[],
  usag_level: string[],
  props: string[],
  vimeo_data: VimeoDataType;
  favorite: boolean
};

type ImageType = {
  normalImage: string,
  retinaImage: string
};

type VimeoDataType = {
    video_id: string,
    video_length: string,
    pictures: string,
    preview_video: string
};

export type FetchFavParamsType = {
  user_id: string,
  per_page: number,
  page: number,
};

export type InitialFavType = {
  favoriteList: FavData[],
  loadingState: boolean,
}

export type FetchFavResType = {
  data: FavResDataType,
  success: boolean,
};

type FavResDataType = {
  data:FavInfo,
  success: boolean,
}

type FavInfo = {
  favorite: FavData[],
  page: number,
  per_page: number,
  total: string
}

export type RemoveFavResType = {
  data: RemoveResDataType,
  success: boolean
}

type RemoveResDataType = {
  data : RemoveMessageType,
  success: boolean
}

type RemoveMessageType = {
  message: string
}

export type FavPaginationType = {
  user_id: string,
  per_page: number,
  page: number,
  order_by: string,
  order: string,
  search: string,
};

export type PlusWhiteAddResType = {
  data : PlusWhiteAddDataType,
  success: boolean,
}

type PlusWhiteAddDataType = {
  data: PlusWhiteAddInfo,
  success:boolean
}

type PlusWhiteAddInfo = {
  message: string
}
