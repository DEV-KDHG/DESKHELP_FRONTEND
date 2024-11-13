import { helpdesk } from "../../api";
import { PaginatedResponse } from "../../models/paginateData";
import { Priorities, PrioritiesDto } from "../../models/priorities";

export const CreatePriorities = async (priorities: PrioritiesDto) => {
  const { data } = await helpdesk.post("/priorities/create", priorities);

  return data as Priorities;
};

export const GetAllPriorities = async (
  page: number = 0,
  size: number = 10,
  sortBy: string = "name",
  direction: string = "asc"
) => {
  const url = `/priorities/findAll?page=${page}&size=${size}&sortBy=${sortBy}&direction=${direction}`;

  const { data } = await helpdesk.get(url);

  return data as PaginatedResponse<PrioritiesDto>;
};

export const UpdatePriorities = async (priorities: PrioritiesDto) => {
  const { code } = priorities;
  const { data } = await helpdesk.put("/priorities/update", priorities, {
    params: { code },
  });

  return data;
};
