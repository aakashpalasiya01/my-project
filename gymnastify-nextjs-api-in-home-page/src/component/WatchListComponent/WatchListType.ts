interface Level{
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

export interface watchlistClassData {
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
      video_length: string;
      pictures: string;
      preview_video: string;
    };
    favorite: boolean;
  }
  
  export interface WatchlistItem {
    class_id: string;
    name: string;
    datetime: string;
    classes: watchlistClassData;
  }
  
  export interface WatchlistClassesResponse {
    page: number;
    pages: number;
    per_page: number;
    total: string;
    watchlist: WatchlistItem[];
  }

// export interface WatchlistClassData {
//     page: string;
//     pages: number;
//     per_page: string;
//     total: string;
//     watchlist: ClassData[];
// }
export interface AddFaviroteprops {
    class_Id:number;
    user_id:number;
}

export interface WatchListPagination {
    usag_level: string;
    level_skills: string;
    search: string;
    order_by:string;
    order:string;
    user_id:number;
    class_id: string;
    time: string;
  }

  export interface classesPropsWatchList{
    setPagination:Function;
    handleShow: Function;
    pagination: WatchListPagination;
  }