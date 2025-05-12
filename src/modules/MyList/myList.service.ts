import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { UserModel } from "../user/user.model"
import { MyList } from "./mylist.model";

export const addToMyListIntoDB = async (myListData: any, userId: string) => {
    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, "User does not exist");
    }
    const myList = await MyList.create({user : userId, content: myListData.content});
    return myList;
}