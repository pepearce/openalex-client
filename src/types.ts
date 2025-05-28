// src/types.ts
export interface Work {
  id: string;
  title: string;
  doi?: string;
  cited_by_count?: number;
  publication_date?: string;
  authorships?: {
    author: { id: string; display_name: string };
    institutions: { id: string; display_name: string }[];
  }[];
  concepts?: {
    id: string;
    display_name: string;
  }[];
  primary_location?: {
    source: {
      id: string;
      display_name: string;
    };
  };
}

export interface Author {
  id: string;
  display_name: string;
  works_count: number;
  cited_by_count: number;
  last_known_institution?: {
    id: string;
    display_name: string;
  };
}

export interface APIResponse<T> {
  meta: {
    count: number;
    page: number;
    per_page: number;
  };
  results: T[];
}
