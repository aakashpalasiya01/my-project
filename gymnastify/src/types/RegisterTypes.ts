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

interface RegisterLevel {
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
};

interface RegisteredReducersType {
  RegisterLevel: RegisterLevel;
  Registerbanner: Registerbanner;
  RegisterClasses: ClassType[]; 
  ExploreCard: ExploreCard[];
  Loaded: boolean;
  LoadedClasses: boolean;
  LoadedRegisterBanner: boolean;
  RegVideoLoader: boolean;
}

const initialState: RegisteredReducersType = {
  RegisterLevel: {
    level: {
      term_id: 0,
      name: "",
      slug: "",
      term_group: 0,
      term_taxonomy_id: 0,
      taxonomy: "",
      description: "",
      parent: 0,
      count: 0,
      filter: "",
      meta: {
        image: "",
        label_name: "",
      },
    },
    skills: [],
  },
  Registerbanner: {},
  RegisterClasses: [],
  ExploreCard: [],
  Loaded: false,
  LoadedClasses: false,
  LoadedRegisterBanner: false,
  RegVideoLoader: false,
};

interface LevelSkillType {
  skills: string[];
}
export interface ParamsType {
  page: number;
  per_page: number;
  group?: string;
  cache: Date;
  level_skills: LevelSkillType;
  search: string;
  order:string;
}