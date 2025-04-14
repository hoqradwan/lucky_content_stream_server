import { IContent } from "./content.interface";
import { Content } from "./content.model";

export const createContentIntoDB = async (contentData : IContent ) => {
    
    // Simulate a database operation
    const result = await Content.create(contentData);
    return result;
}