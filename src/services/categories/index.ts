import { helpdesk } from "../../api";
import { Category, CategoryDto } from "../../models/category";
import { PaginatedResponse } from "../../models/paginateData";

export const CreateCategory = async (category: CategoryDto) => {
  const { statusEntity } = category;
  const { data } = await helpdesk.post("/category/create", category, {
    params: { statusEntity },
  });

  return data as Category;
};

export const GetAllCategories = async (
  page: number = 0,
  size: number = 10,
  sortBy: string = "name",
  direction: string = "asc",
  statusEntity: string = "ACTIVE"
) => {
  const url = `/category?page=${page}&size=${size}&sortBy=${sortBy}&direction=${direction}&statusEntity=${statusEntity}`;
  const { data } = await helpdesk.get(url);

  return data as PaginatedResponse<CategoryDto>;
};

export const GetAllInactivesCategories = async (
  page: number = 0,
  size: number = 10,
  sortBy: string = "name",
  direction: string = "asc"
) => {
  const url = `/category?page=${page}&size=${size}&sortBy=${sortBy}&direction=${direction}&statusEntity=INACTIVE`;
  const { data } = await helpdesk.get(url);
  return data as PaginatedResponse<CategoryDto>;
};

export const UpdateCategory = async (category: CategoryDto) => {
  const { code } = category;

  const { data } = await helpdesk.put("/category/update", category, {
    params: { code },
  });
};

export const InactiveCategory = async (code: string) => {
  const { data } = await helpdesk.delete("/category/inactivate", {
    params: { code },
  });
  return data;
};

export const ReactiveCategory = async (code: string) => {
  const { data } = await helpdesk.put("/category/reactivate", null, {
    params: { code },
  });

  return data;
};
