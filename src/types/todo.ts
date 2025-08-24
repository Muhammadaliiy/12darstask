export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoFilter {
  all: 'all';
  active: 'active';
  completed: 'completed';
}

export type FilterType = keyof TodoFilter;

export interface TodoStats {
  total: number;
  completed: number;
  active: number;
}