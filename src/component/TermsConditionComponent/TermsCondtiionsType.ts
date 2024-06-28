export interface TandCDataType  {
    "id": number,
    "date": string,
    "date_gmt": string,
    "guid": GuidDataType,
    "modified": string,
    "modified_gmt": string,
    "slug": string,
    "status": string,
    "type": string,
    "link": string,
    "title": TitleDataType,
    "content": ContentDataType,
    "excerpt": ExcerptDataType,
    "author": number,
    "featured_media": number,
    "parent": number,
    "menu_order": number,
    "comment_status": string,
    "ping_status": string,
    "template":string,
    "meta": MetaDataType,
    "acf": never[],
    "acf_fields": boolean,
    "_links": LinkDataType
  }

  type GuidDataType = {
    rendered: string
  }

  type TitleDataType = {
    rendered: string
  }

  type ContentDataType = {
    rendered: string
    protected: boolean
  }

  type ExcerptDataType = {
    rendered: string
    protected: boolean
  }

  type MetaDataType = {
    footnotes: string
  }

  type SelfDataType = {
    href: string
  }

  type CollectionDataType = {
    "href": string
  }
  type AboutDataType = {
    "href": string
  }

  type AuthorDataType = {
    embeddable: boolean,
    href: string
  }

  type RepliesDataType = {
    "embeddable": boolean,
    "href": string
  }

  type VersionHistoryType = {
    "count": number,
    "href": string
  }

  type PredecessorHistoryType = {
    id: number,
    href: string
  }

  type WPAttachmentType = {
    href:string
  }

  type CuriesDataType = {
    name: string,
    href: string,
    templated: boolean
  }

  interface LinkDataType {
    "self": SelfDataType[],
    "collection": CollectionDataType[],
    "about": AboutDataType[],
    "author": AuthorDataType[],
    "replies": RepliesDataType[],
    "version-history": VersionHistoryType[],
    "predecessor-version": PredecessorHistoryType[],
    "wp:attachment": WPAttachmentType[],
    "curies": CuriesDataType[]
  }

  export type initialTAndCState = {
        termsNconditions: TandCDataType[],
        loadingState: boolean
  }