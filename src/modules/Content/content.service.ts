import { Category } from "../Category/category.model";
import { Genre } from "../Genre/genre.model";
import { IContent } from "./content.interface";
import { Content } from "./content.model";

export const createContentIntoDB = async (contentData : IContent ) => {
    const {  genre,  category, } = contentData;
    const categoryExist = await Category.findById(category);
    if (!categoryExist) {
        throw new Error("Category not found");
    }
    const genreExist = await Genre.find({ _id: { $in: genre } });
    if (genreExist.length !== genre.length) {
        throw new Error("Some genres not found");
    }

    // Simulate a database operation
    const result = await Content.create(contentData);
    return result;
}