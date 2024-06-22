interface Meta {
  image: string;
  label_name: string;
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

interface ExploreCard {
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
  classes:any[]
};

 export interface RegisteredReducersType {
  RegisterLevel: RegisterLevel;
  Registerbanner: Registerbanner;
  RegisterClasses: ClassType[]; 
  ExploreCard: ExploreCard[];
  Loaded: boolean;
  LoadedClasses: boolean;
  LoadedRegisterBanner: boolean;
  RegVideoLoader: boolean;
  LevelSkill:string;
 
}



export interface ParamsType {
  page: number;
  per_page: number;
  group?: string;
  cache: Date;
  level_skills: any
  search: string;
  order:string;
}