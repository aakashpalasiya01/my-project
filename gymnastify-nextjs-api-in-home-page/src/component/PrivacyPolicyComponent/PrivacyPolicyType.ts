export interface PolicyDataType {
    "id": number,
    "date": string,
    "date_gmt": string,
    "guid": GuidType,
    "modified": string,
    "modified_gmt": string,
    "slug":string,
    "status": string,
    "type": string,
    "link":string,
    "title": Titletype,
    "content": Contenttype, 
    "excerpt": ExcerptType,
    "author": number,
    "featured_media": number,
    "parent":number,
    "menu_order":number,
    "comment_status": string,
    "ping_status": string,
    "template": string,
    "meta": MetaType,
    "acf": never[],
    "acf_fields": boolean,
    "_links": LinkType
  };

type  GuidType = {
    rendered: string
  }

type Titletype = {
    rendered: string
  }

type Contenttype = {
    rendered: string
    protected: boolean
  }

type ExcerptType = {
    rendered: string,
    protected: boolean
  }

type MetaType = {
    footnotes:string
  }

type SelfObjectType = {
    href:string
  }

  type CollectionObjectType = {
    href:string
  }

  type AboutObjectType = {
    href:string
  }

type AuthorObjectType ={
    embeddable: true,
    href: string
  }

  type RepliesObjectType ={
    embeddable: true,
    href: string
  }

  type VhistoryType = {
    count:number,
    href: string
  }

  type PversionType = {
    id: number,
    href: string
  }

  type WPAttachmentType = {
    href: string
  }

  type CuriesType = {
    name: string,
    href: string,
    templated:boolean
  }

  interface LinkType  {
    "self": SelfObjectType[],
    "collection": CollectionObjectType[],
    "author": AuthorObjectType[],
    "about": AboutObjectType[],
    "replies": RepliesObjectType[],
    "version-history": VhistoryType[],
    "predecessor-version": PversionType[],
    "wp:attachment": WPAttachmentType[],
    "curies": CuriesType[]
  }

  export type initialPolicyType = {
    privacyPolicy : PolicyDataType[],
    loadingState: boolean,
  }
