 export interface ReviewType {
  ID: number;
  title: string;
  content: string;
  image_url: string;
  author: string;
  rating: string;
}
interface ImageSizes {
  thumbnail: string;
  "thumbnail-width": number;
  "thumbnail-height": number;
  medium: string;
  "medium-width": number;
  "medium-height": number;
  medium_large: string;
  "medium_large-width": number;
  "medium_large-height": number;
  large: string;
  "large-width": number;
  "1536x1536": string;
  "1536x1536-width": number;
  "1536x1536-height": number;
  "2048x2048": string;
  "2048x2048-width": number;
  "2048x2048-height": number;
}

interface BackgroundImage {
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
  sizes: ImageSizes;
}

interface Button {
  name: string;
  link: string;
}

export interface ExploreBannerType {
  top_heading: string;
  title: string;
  main_title: string;
  button: Button;
  background_image: BackgroundImage;
}

interface Meta {
  image: string;
  label_name: string;
}

 export interface LevelsTypes {
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
 export interface SkillType {
  id: string;
  name: string;
  slug: string;
  length:number

}
interface LevelSkill {
  id: string;
  name: string;
}

interface ClassInfo {
  class_id: string;
  image: {
    normalImage: string;
  };
  level_skills: string[];
  usag_level: string[];
  title: string;
  vimeo_data: {
    preview_video_length: string;
  };
}
 export interface FetchClassesResponse {
  classes: ClassInfo[];
}