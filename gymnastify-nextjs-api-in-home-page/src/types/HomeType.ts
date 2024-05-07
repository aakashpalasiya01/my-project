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