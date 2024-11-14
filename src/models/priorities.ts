export interface Priorities {
  name?: string;
  description?: string;
  code?: string;
}

export type PrioritiesDto = Omit<Priorities, "idPriorities">;
export type UpdatePrioritiesDto = Partial<Priorities>;
