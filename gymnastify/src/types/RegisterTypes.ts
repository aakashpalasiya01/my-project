interface Meta {
  image: string;
  label_name: string;
}

interface Level {
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
  meta: Meta;
}

interface RegisterLevel {
  level: Level;
  skills: any[]; // Define a more specific type if known
}

interface Registerbanner {
  // Define properties if known, else leave as empty object type
  [key: string]: any;
}

interface ExploreCard {
  // Define properties if known, else leave as empty array type
  [key: string]: any;
}

interface RegisteredReducersType {
  RegisterLevel: RegisterLevel;
  Registerbanner: Registerbanner;
  RegisterClasses: any[]; // Define a more specific type if known
  ExploreCard: ExploreCard[];
  Loaded: boolean;
  LoadedClasses: boolean;
  LoadedRegisterBanner: boolean;
  RegVideoLoader: boolean;
}

const initialState: RegisteredReducersType = {
  RegisterLevel: {
    level: {
      term_id: 0,
      name: "",
      slug: "",
      term_group: 0,
      term_taxonomy_id: 0,
      taxonomy: "",
      description: "",
      parent: 0,
      count: 0,
      filter: "",
      meta: {
        image: "",
        label_name: "",
      },
    },
    skills: [],
  },
  Registerbanner: {},
  RegisterClasses: [],
  ExploreCard: [],
  Loaded: false,
  LoadedClasses: false,
  LoadedRegisterBanner: false,
  RegVideoLoader: false,
};
