export type ClassData = {
    class_id: string;
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
};


export type HomeState = {
    guesthome: any;
    Loaded: boolean;
    ExpertGuidance: any;
    AssignmentCards: any;
    ExploreCard: any;
    Fqa: any;
    Testimonials: any;
    Class: any;
    UniqueClass:any;
    SkillsPerson: any;
    Taxonomy:any;
    TaxonomySkill: any;

}

export interface GuesthomeDataType {
  hero_section: {
    heading: string;
    description: string;
    primary_button: {
      link: {
        url: string;
        title?: string; 
        target?: string; 
      };
      button_name: string;
    };
    secondary_button?: { // Optional secondary_button property
      button_name: string;
      link: string;
    };
    image: string;
  };
  virtual_workout_section: {
    top_heading: string;
    title: string;
    levels_section: {
      top_label: string;
      icone: {
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
        sizes: {
          thumbnail: string;
          thumbnail_width: number;
          thumbnail_height: number;
          medium: string;
          medium_width: number;
          medium_height: number;
          medium_large: string;
          medium_large_width: number;
          medium_large_height: number;
          large: string;
          large_width: number;
          large_height: number;
        
        };
      };
      name: string;
    }[];
    button: {
      name: string;
      link: string;
    };
  };
}


export interface WhatWeOfferDataType {
  title: string;
  images: string; 
  top_heading: string;
  description: string;
}

export interface TestimonialDataType {
  ID: string;
  image_url: string; 
  title: string;
  author: string;
  content: string;
  
}

export interface NeedExpertGuidanceDataType {
  image_one: {
    url: string;
  };
  image_two: {
    url: string;
  };
  top_heading: string;
  title: string;
  main_title: string;
  description: string;
  button: {
    link: string;
    name: string;
  };
}

export interface AssignmentDataType {
  background_image: {
    url: string;
  };
  top_heading: string;
  title: string;
  button: {
    link: string;
    name: string;
  };
}

export type InitialHomeState = {
    guesthome:GuesthomeDataType | null;

    WhatWeOffer:WhatWeOfferDataType[];
testimonialsData:TestimonialDataType[],
needExpertGuidance:NeedExpertGuidanceDataType | null,
assignment:AssignmentDataType | null,

  }