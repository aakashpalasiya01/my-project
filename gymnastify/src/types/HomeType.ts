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
    SocialIcon:any;
}

type MetadataType = {
    image:string,
    label_name:string
}

export type SkillsType = {
    id:string,
    name:string,
    slug:string
}

type AboutType = {
    href:string
}

type CollectionType = {
    href:string
}

type CuriesType = {
    name:string,
    href:string,
    templated:boolean
}

type SelfType = {
    href:string
}

type WPPType = {
    href:string
}

interface LinksType {
    "about":AboutType,
    "collection":CollectionType,
    "curies":CuriesType,
    "self":SelfType,
    "wp:post_type":WPPType,

}

type ExploreSkillDataType = {
    acf:[],
    count:number,
    description:string,
    id:number,
    link:string,
    meta:MetadataType,
    name:string,
    parent:number,
    skills:SkillsType[],
    slug:string,
    taxonomy: string,
    _links:LinksType
}

export type ExploreSkillResType = {
    data: ExploreSkillDataType[],
    success:boolean
}
