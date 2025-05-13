import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { UserModel } from "../user/user.model"
import { MyList } from "./mylist.model";
import { Content } from "../Content/content.model";

export const addToMyListIntoDB = async (content: string, userId: string) => {
    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, "User does not exist");
    }
    const isContentExist = await Content.findById(content);
    if(!isContentExist){
        throw new AppError(httpStatus.NOT_FOUND, "Content does not exist");

    }
    const myList = await MyList.create({user : userId, content});
    return myList;
}

export const removeFromMyListFromDB = async(userId : string, contentId : string) =>{
    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, "User does not exist");
    }
    const isContentExist = await Content.findById(contentId);
    if(!isContentExist){
        throw new AppError(httpStatus.NOT_FOUND, "Content does not exist");
    }
    const result = await MyList.deleteOne({content : contentId});
    return result;
}