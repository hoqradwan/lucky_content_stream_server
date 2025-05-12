import { Region } from "./region.model";

export const createRegionIntoDB  = async(name: string) => {
    const result = await Region.create({ name });
    return result;
}

export const getRegionsFromDB = async () => {
    const result = await Region.find({}).select('-__v -createdAt -updatedAt');
    console.log(result);
    return result;
}