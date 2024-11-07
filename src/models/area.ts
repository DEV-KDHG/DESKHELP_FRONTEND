export interface Area {

  name?: string;
  state?: string;
  code?:string;
}
export type AreaDto = Omit<Area, "idArea">;
export type UpdateAreaDto = Partial<Area>;
