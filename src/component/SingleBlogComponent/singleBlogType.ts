export interface SingleBlogInterface {
    "id": number,
    "date": string,
    "date_gmt": string,
    "guid": GuidInterface,
    "modified": string,
    "modified_gmt": string,
    "slug": string,
    "status":string,
    "type": string,
    "link": string,
    "title": TitleInterface,
    "content": ContentInterface,
    "excerpt": ExcerptInterface,
    "author": number,
    "featured_media": number,
    "comment_status": string,
    "ping_status": string,
    "sticky": boolean,
    "template": string,
    "format": string,
    "meta": MetaInterface,
    "categories": number[],
    "tags": [],
    "acf": [],
    "image": ImageInterface,
    "_links": LinksInterface
  }

  export interface GuidInterface {
    "rendered": string
  }

  export interface TitleInterface {
    "rendered": string
  }

  export interface ContentInterface {
    "rendered":string
    "protected": boolean
  }

  export interface ExcerptInterface {
    "rendered": string
    "protected": boolean
  }

  export interface MetaInterface {
    "footnotes": string
  }

  export interface ImageInterface {
    "normalImage": string,
    "retinaImage": string
  }

   interface SelfInterface {
    "href": string
  }

   interface CollectionInterface {
    "href": string
  }

   interface AboutInterface {
    "href": string
  }

   interface AuthorInterface {
    "embeddable": boolean,
    "href": string
  }

   interface ReplyInterface {
    "embeddable": boolean,
    "href": string
  }

   interface VHInterface {
    "count": number,
    "href": string
  }

   interface PVInterface {
    "id": number,
    "href": string
  }

   interface WPFMInterface  {
    "embeddable": boolean,
    "href": string
  }

   interface WPAttachmentInterface {
    "href": string
  }

   interface WPTermInterface {
    "taxonomy": string,
    "embeddable": boolean,
    "href": string
  }

   interface CuriesInterface {
    "name": string,
    "href": string,
    "templated": boolean
  }

   interface LinksInterface {
    "self": SelfInterface[],
    "collection": CollectionInterface[],
    "about": AboutInterface[],
    "author": AuthorInterface[],
    "replies": ReplyInterface[],
    "version-history": VHInterface[],
    "predecessor-version": PVInterface[],
    "wp:featuredmedia": WPFMInterface[],
    "wp:attachment": WPAttachmentInterface[],
    "wp:term": WPTermInterface[],
    "curies": CuriesInterface[]
  }

  export interface RelatedBlogInterface {
    "id": number,
    "date": string,
    "date_gmt": string,
    "guid": GuidType,
    "modified": string,
    "modified_gmt":string,
    "slug": string,
    "status": string,
    "type": string,
    "link":string,
    "title": TitleType,
    "content": ContentType,
    "excerpt": ExcerptType,
    "author": number,
    "featured_media": number,
    "comment_status": string,
    "ping_status":string,
    "sticky": boolean,
    "template": string,
    "format": string,
    "meta": MetaType,
    "categories": number[],
    "tags": [],
    "acf": [],
    "image": ImageType,
    "_links": LinksInterface
  }

  type GuidType = {
    rendered: string
  }

  type TitleType = {
    rendered: string
  }

  type ContentType = {
    rendered: string
    protected: boolean
  }

  type ExcerptType = {
    rendered: string
    protected: boolean
  }

  type MetaType = {
    footnotes: string
  }

  type ImageType = {
    normalImage: string,
    retinaImage: string
  }

  type SelfType =  {
    href: string
  }

  type CollectionType = {
    href: string
  }

  type AboutType = {
    href: string
  }

  type AuthorType = {
    embeddable: boolean,
    href: string
  }

  type RepliesType = {
    embeddable: boolean,
    href:string
  }

  type VersionHistoryType =  {
    count: number,
    href: string
  }

  type PredecessorVersionType = {
    id: number,
    href: string
  }

  type WPFeatureMediaType = {
    embeddable: boolean,
    href: string
  }

  type WPAttachmentType =  {
    href: string
  }

  type WPTermType = {
    taxonomy: string,
    embeddable: boolean,
    href: string
  }

  type CuriesType = {
    name: string,
    href: string,
    templated: boolean
  }

  interface LinksInterface {
    "self": SelfType[],
    "collection": CollectionType[],
    "about": AboutType[],
    "author": AuthorType[],
    "replies": RepliesType[],
    "version-history": VersionHistoryType[],
    "predecessor-version": PredecessorVersionType[],
    "wp:featuredmedia": WPFeatureMediaType[],
    "wp:attachment": WPAttachmentType[],
    "wp:term": WPTermType[],
    "curies": CuriesType[]
  }

  
  export type RelatedBlogPagination = {
    page:number,
    per_page: number,
    total:string,
    pages:number,
    exclude: string
  }
  
  export type RelatedBlogsPropType = {
      pagination : RelatedBlogPagination,
      setPagination: Function
  }
    
  export type RelatedBlogsReponseDataType = {
    data: RelatedBlogResponseType,
    success:boolean
  }

   type RelatedBlogResponseType = {
    success: boolean,
    data: RelatedBlogResponsePayloadType
  }

  type RelatedBlogResponsePayloadType = {
    pagination: RelatedBlogPagination,
    data: RelatedBlogInterface[]
}

  export type InitialSingleBlogStateType = {
    singleBlog: SingleBlogInterface,
    loadingSingleBlog: boolean,
    relatedBlogsList: RelatedBlogInterface[],
    loadingRelatedBlog: boolean
  }

  export type SingleBlogResponse = {
    data: SingleBlogInterface,
    success: boolean
  }