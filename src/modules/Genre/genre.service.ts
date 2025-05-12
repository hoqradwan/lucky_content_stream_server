import { Genre } from "./genre.model";

export const createContentIntoDB = async ( data: any) => {
    const result = await Genre.create(data);
    return result;
}
export const getAllGenreFromDB = async() =>{
    const result = await Genre.find({}).populate('content');
    return result;
}