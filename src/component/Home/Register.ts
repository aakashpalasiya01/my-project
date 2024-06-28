type Level = {
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
  meta: {
    image: string;
    label_name: string;
  };
};

export type RegisterSkill = {
  id: string;
  name: string;
  slug: string;
};

export type levelSkills = {
  level: Level;
  skills: RegisterSkill[];
};

export type ClassesDataType = {
  class_id: number;
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
    video_length: number;
    pictures: string;
    preview_video: number;
  };
  favorite: boolean;
  watchlist:boolean
};

export type ClassesResponse = {
  success: boolean;
  data: {
    total_pages: number;
    current_page: string;
    total_classes: number;
    classes: ClassesDataType[];
  };
};

export type RegsiterBanner = {
  top_heading: string;
  title: string;
  main_title: string;
  button: {
    name: string;
    link: string;
  };
  background_image: {
    ID: number;
    id: number;
    title: string;
    filename: string;
    filesize: number;
    url: string;
    link: string;
    alt: string;
    author: string;
    description: string;
    caption: string;
    name: string;
    status: string;
    uploaded_to: number;
    date: string;
    modified: string;
    menu_order: number;
    mime_type: string;
    type: string;
    subtype: string;
    icon: string;
    width: number;
    height: number;
  };
};

export type LevelAndSkills = {
  level: Level;
  skills: RegisterSkill[];
};

export interface RegisteredReducersType {
  RegisterLevel: levelSkills;
  RegisterClasses: ClassesDataType[];
  ExploreCard: RegsiterBanner |any;
  Loaded: boolean;
  LoadedRegisterBanner: boolean;
  LoadedClasses: boolean;
  RegVideoLoader:boolean;
};
export type RegisterSkillprops = {
  setPagination:Function;
  pagination:RegisteredPagination;
};
export type ClassesComponentProps = {
  setPagination: (pagination: RegisteredPagination) => void;
  pagination: RegisteredPagination;
};
export type RegisteredPagination = {
  page: number;
  per_page: number;
  group?: string;
  level_skills?: string;
  search?: string;
  order_by?: string;
  order?: string;
  user_id?: number | string;
  class_id?: number | string;
  cache?:  string;
  class_data: number,
  total_data: number,
};


export type ClassesResComponentProps = {
  item: ClassesDataType,
  pagination: RegisteredPagination,
  setPagination: Function,
  handleShow:Function
}

export type ClassPropType = {
  handleShow: Function
}