import { Category } from "./category.model";

export const createCategoryIntoDB = async (type: string) =>{
    const result = await Category.create({ type });
    return result;
}

export const getCategoriesFromDB = async () => {
    const result = await Category.find({}).select('-__v -createdAt -updatedAt');
    return result;
}