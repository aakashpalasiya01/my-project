// src/types/AssignmentTypes.ts
export interface Assignment {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  image: {
    normalImage: string;
    retinaImage: string;
  };
  template: string;
  categories: string[];
  instructors: string[];
  level_skills: string[];
  group: string[];
  usag_level: string[];
  props: string[];
  preview_video: string;
  preview_vimeo_video_length: string;
  video_id: string;
  vimeo_video_length: string;
  vimeo_pictures: string;
  rating_count: number;
  average_rating: string;
  current_user_rating: number;
}



 export type AssignmentDetailDataTypes = {

  
    id: number;
    date: string;
    date_gmt: string;
    guid: {
      rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
      protected: boolean;
    };
    image: {
      normalImage: string;
      retinaImage: string;
    };
    template: string;
    categories: string[];
    instructors: string[];
    level_skills: string[];
    group: string[];
    usag_level: string[];
    props: string[];
    preview_video: string;
    preview_vimeo_video_length: string;
    video_id: string;
    vimeo_video_length: string;
    vimeo_pictures: string;
    rating_count: number;
    average_rating: string;
    current_user_rating: number;
    coach_note: {
      content: string;
      date: string;
    };
    safety_instructions: {
      content: string;
      date: string;
    };
  
};



export interface AssignmentState {
  beginners: {
    assignments: Assignment[];
  };
  assignmentDetail: AssignmentDetailDataTypes[];
}
