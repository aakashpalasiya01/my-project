

type Pagination = {
  page: number;
  pages: number;
  per_page: number;
  total: number;
};

export type Instructors = {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: any[];
  acf: any[];
  image: string;
  _links: {
      self: Array<{ href: string }>;
      collection: Array<{ href: string }>;
      about: Array<{ href: string }>;
      "wp:post_type": Array<{ href: string }>;
      curies: Array<{
          name: string;
          href: string;
          templated: boolean;
      }>;
  };
};


export type ApiResponseInstructors = {
  // success: boolean;
  // data: {
      pagination: Pagination;
      term_data: Instructors[];
  // };
};


export type InstructorsInitialState = {
  TeachersData: Instructors[];
  isLoaded: boolean;
};


export type paginationType = {
    page: number,
    per_page: number,
}

export type TeacherPageProps ={
    setPagination: Function;
    pagination: paginationType;
}