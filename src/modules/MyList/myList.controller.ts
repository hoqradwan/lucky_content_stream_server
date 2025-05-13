import { Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { CustomRequest } from "../../utils/customRequest";
import sendResponse from "../../utils/sendResponse";
import { addToMyListIntoDB, removeFromMyListFromDB } from "./myList.service";

export const addToMyList = catchAsync(async (req: CustomRequest, res: Response) => {
    const { id: userId } = req.user;
    const result = await addToMyListIntoDB(req.body.content, userId);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'added to my list successfully',
        data: result
    })
})

export const removeFromMyList = catchAsync(async (req: CustomRequest, res: Response) => {
    const { id: userId } = req.user;
    const { id: contentId } = req.params;
    const result = await removeFromMyListFromDB(userId, contentId);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'remove from my list successfully',
        data: result
    })
})
