interface Meta {
    image: string;
    label_name: string;
}
export interface MapSkills {
    id: string;
    name: string;
    slug: string;
}
export interface ExplorerSkill {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    parent: number;
    acf: any[];
    meta: {
        image: string;
        label_name: string;
    };
    skills: {
        id: string;
        name: string;
        slug: string;
    }[];
    _links: {
        self: {
            href: string;
        }[];
        collection: {
            href: string;
        }[];
        about: {
            href: string;
        }[];
        "wp:post_type": {
            href: string;
        }[];
        curies: {
            name: string;
            href: string;
            templated: boolean;
        }[];
    };
}

export interface UsagLevelApiResponse  {
    data: ExplorerSkill[];
    success: boolean;
  };
  
export interface ExplorerClassData {
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
}

export interface ExplorerClassesResponse {
    total_pages: number;
    current_page: string;
    total_classes: number;
    classes: ExplorerClassData[];
}

export interface ExplorerBanner {
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
}

export interface ExplorerPage {
    Loaded: boolean;
    ExplorerClass: ExplorerClassData[]; 
    ExplorerSkills: ExplorerSkill[];
    ExploreCard: ExplorerBanner[] | ExplorerBanner; 
    VideoLoader:boolean,
    LoadedBanner:boolean
}

export interface RegsiterBannerProps {
    Loaded: boolean;
    ExploreCard: ExplorerBanner;
  }

  export interface ExplorerSkillProps {
    pagination: Paginationtype;
    setPagination: Function;
  }
  export interface Paginationtype {
      page: number;
      per_page: number;
      group?: string;
      level_skills?: string;
      classData:number;
      totalData:number;
    }
  export interface ExplorerClasses {
    handleShow: Function;
    pagination: Paginationtype, 
    setPagination: Function,
  }
  