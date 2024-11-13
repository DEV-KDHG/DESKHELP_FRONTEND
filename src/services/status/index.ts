import { helpdesk } from "../../api";
import { PaginatedResponse } from "../../models/paginateData";
import { Status, StatusDto } from "../../models/status";

export const CreateSatus = async (status: StatusDto) => {
  const { statusEntity } = status;
  const { data } = await helpdesk.post("/status/create", status, {
    params: { statusEntity },
  });

  return data as Status;
};

export const GetAllStatus = async (
  page: number = 0,
  size: number = 10,
  sortBy: string = "name",
  direction: string = "asc",
  statusEntity: string = "ACTIVE"
) => {
  const url = `/status?page=${page}&size=${size}&sortBy=${sortBy}&direction=${direction}&statusEntity=${statusEntity}`;
  const { data } = await helpdesk.get(url);
  return data as PaginatedResponse<StatusDto>;
};
export const GetAllInactiveStatus = async (
  page: number = 0,
  size: number = 10,
  sortBy: string = "name",
  direction: string = "asc"
) => {
  const url = `/status?page=${page}&size=${size}&sortBy=${sortBy}&direction=${direction}&statusEntity=INACTIVE`;
  const { data } = await helpdesk.get(url);
  return data as PaginatedResponse<StatusDto>;
};

export const UpdateStatus = async (status: StatusDto) => {
  const { code } = status;
  const { data } = await helpdesk.put(`/status/update`, status, {
    params: { code },
  });
  return data as Status;
};

export const InactiveStatus = async (code: string) => {
  const { data } = await helpdesk.delete("status/inactivate", {
    params: { code },
  });

  return data;
};

export const ReactiveStatus = async (code: string) => {
  const { data } = await helpdesk.put("/status/reactivate", null, {
    params: { code },
  });

  return data;
};
