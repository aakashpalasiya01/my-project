export interface BlogDataType {
  "id": number,
  "date": string,
  "date_gmt":string,
  "guid": GuidInterface,
  "modified": string,
  "modified_gmt":string,
  "slug": string,
  "status": string,
  "type":string,
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
  "image": MailInterface,
  "_links": LinksInterface
}

interface GuidInterface {
  "rendered": string
}

interface TitleInterface {
  "rendered": string
}

interface ContentInterface {
  "rendered": string,
  "protected": boolean
}

interface ExcerptInterface {
  "rendered":string
  "protected": boolean
}

interface MetaInterface {
  "footnotes": string
}

interface MailInterface {
  "normalImage": string,
  "retinaImage":string
}

interface SelfInterface {
  "href": string
}

interface CollectionInterface {
  "href":string
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

interface VersionHistoryInterface {
  "count": number,
  "href": string
}

interface PredecessorVersionInterface {
  "id": number,
  "href":string
}

interface WpFeaturedMediaInterface {
  "embeddable": boolean,
  "href": string
}

interface WPAAttachmentInterface {
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
  "version-history": VersionHistoryInterface[],
  "predecessor-version": PredecessorVersionInterface[],
  "wp:featuredmedia": WpFeaturedMediaInterface[],
  "wp:attachment": WPAAttachmentInterface[],
  "wp:term": WPTermInterface[],
  "curies": CuriesInterface[]
};

export type PaginationType = {
  page: number,
  per_page: number,
  total_data: number
  total_Pages: number
}


export type InitialBlogStateType = {
  BlogDataList: BlogDataType[],
  loadingState: boolean,
  loadingClassesState: boolean
};

export type BlogPagination = {
  page: number,
  pages?: number,
  per_page: number,
  total: number,
};

type BlogPaginationDataType = {
  pagination : BlogPagination,
  data: BlogDataType[];
};

export type BlogResType = {
  success: boolean,
  data:{
      data: BlogPaginationDataType,
      success: boolean
  }
}

export interface BlogPropType {
  BlogDataList: BlogDataType[];
  pagination: PaginationType,
  setPagination:Function,
}