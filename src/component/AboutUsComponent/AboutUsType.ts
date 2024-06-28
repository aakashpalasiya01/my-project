export interface AboutUsDataType  {
    "id": number,
    "date": string,
    "date_gmt": string,
    "guid": GuidInterface,
    "modified": string,
    "modified_gmt": string,
    "slug": string,
    "status": string,
    "type": string,
    "link": string,
    "title": TitleInterface,
    "content": ContentInterface,
    "excerpt": ExcerptInterface,
    "author": number,
    "featured_media": number,
    "parent": number,
    "menu_order": number,    
    "comment_status": string,
    "ping_status": string,
    "template": string,
    "meta": MetaInterface,
    "acf": [],
    "acf_fields": boolean,
    "_links": LinksInterface
  }

  interface GuidInterface {
    "rendered": string
  }

  interface TitleInterface {
    "rendered": string
  }

  interface ContentInterface {
    "rendered": string
    "protected": boolean
  }

  interface ExcerptInterface {
  "rendered": string
  "protected": boolean
}

interface MetaInterface {
    "footnotes": string
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

  interface AuthorInterface{
    "embeddable": boolean,
    "href": string
  }

  interface RepliesInterface {
    "embeddable": boolean,
    "href": string
  }

  interface VersionHistoryInterface {
    "count": number,
    "href": string
  }

  interface PredecessorVersionInterface {
    "id": number,
    "href": string
  }

  interface WPAttachmentInterface {
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
    "replies": RepliesInterface[],
    "version-history": VersionHistoryInterface[],
    "predecessor-version": PredecessorVersionInterface[],
    "wp:attachment": WPAttachmentInterface[],
    "curies": CuriesInterface[]
  }

 export type InitialAboutUsState = {
    aboutUs: AboutUsDataType[],
    loadingState: boolean
  }