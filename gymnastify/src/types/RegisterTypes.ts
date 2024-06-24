interface Meta {
  image: string;
  label_name: string;
}




export interface FavParamtypes {
  page: number;
  per_page: number;
  level_skills: string;
  search: string;
  order_by: string;
  order: string;
  class_data: number;
  total_data: number;
  group: string;
  user_id: string;
  cache: string;
  class_id: number;
}


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
  meta: Meta;
}

export interface RegisterLevel {
  level: Level;
  skills: any[]; // Define a more specific type if known
}

interface Registerbanner {
  // Define properties if known, else leave as empty object type
  [key: string]: any;
}

export interface ExploreCard {
  // Define properties if known, else leave as empty array type
  [key: string]: any;
}
type Image = {
  normalImage: string;
  retinaImage: string;
};

// Define the type for the Vimeo data object
type VimeoData = {
  video_id: number;
  video_length: string;
  pictures: string;
  preview_video: string;
  preview_video_length: string;
};
  export type indivisualclass={
    total_pages:number;
  }
// Define the type for a class object
export type ClassType = {
  class_id: number;
  total_pages:number;
  title: string;
  content: string;
  class_url: string;
  image: Image;
  instructors: string[];
  level_skills: string[];
  group: string[];
  usag_level: string[];
  props: string[];
  vimeo_data: VimeoData;
  favorite: boolean;
  watchlist: boolean;
  rating_count: number;
  average_rating: string;
  current_user_rating: number;
  classes:indivisualclass[]
};


export interface RegisterClassTs {
  classes:ClassType[];
  current_page: number;
  total_classes:number;
  total_pages:number;

}

 export interface RegisteredReducersType {
  RegisterLevel: RegisterLevel;
  Registerbanner: Registerbanner;
  RegisterClasses: RegisterClassTs; 
  ExploreCard: ExploreCard[];
  Loaded: boolean;
  LoadedClasses: boolean;
  LoadedRegisterBanner: boolean;
  RegVideoLoader: boolean;
  LevelSkill:string;
 
}



export interface ParamsType {
  per_page: number;
  group?: string;
  cache: Date;
  level_skills: any
  search: string;
  order:string;
  page: number;
  order_by: string;
  class_data: number | string;
  total_data: number;
  user_id: string;
  class_id: number;
}