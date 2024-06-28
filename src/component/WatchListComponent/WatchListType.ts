interface Level {
  term_id: number;
  name: string;
  slug: string;
  term_group: number;
  term_taxonomy_id: number;
  taxonomy: string;
  description: string;
  parent: number;
  count: number;
  filter: string;
  favorite: boolean;
  meta: {
    image: string;
    label_name: string;
  };
}
export interface WatchSkill {
  id: string;
  name: string;
  slug: string;
}

export interface WatchListLevel {
  level: Level;
  skills: WatchSkill[];
}

export interface WatchlistClassData {
  class_id: string;
  key: string | number;
  title: string;
  content: string;
  class_url: string;
  image: {
    normalImage: string;
    retinaImage: string;
  };
  instructors: string[];
  level_skills: string[];
  group: string[];
  usag_level: string[];
  props: string[];
  vimeo_data: {
    video_id: string;
    video_length: string;
    pictures: string;
    preview_video: string;
  };
  favorite: boolean;
  watchlist: boolean;
}
export interface WatchlistItem extends WatchlistClassData{
  class_id: string;
  name: string;
  datetime: string;
  classes: WatchlistClassData[];
  favorite: boolean;
}

export interface WatchlistClassesResponse {
  page: number;
  pages: number;
  per_page: number;
  total: number;
  watchlist: WatchlistItem[];
}

export interface AddFaviroteprops {
  class_Id: number;
  user_id: number;
}

export interface WatchListPagination {
  group?: string;
  level_skills: string;
  search: string;
  order_by: string;
  order: string;
  user_id: number | string;
  class_id: string;
  cache: string;
  page: number;
  per_page: number;
  class_data: number;
  total_data: number;
}

export interface ClassesPropsWatchList {
  setPagination: Function;
  handleShow: Function;
  pagination: WatchListPagination;
}
export interface SkillsPropsWatchList {
  setPagination: Function;
  pagination: WatchListPagination;
}

export interface InitialStateWatchList {
  WatchListClasses: WatchlistItem[];
  isLoaded: boolean;
}

export interface WatchclassPropsDataType {
  setPagination: Function;
  pagination: WatchListPagination;
  item: WatchlistClassData;
}
