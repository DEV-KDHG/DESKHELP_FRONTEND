export interface Category {
    statusEntity?: string,
    name?: string,
    code?: string,
}

export type CategoryDto= Omit<Category,"id_CATEGORY">;
export type UpdateCategoryDto= Partial<Category>;