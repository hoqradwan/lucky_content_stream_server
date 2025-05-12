import { Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { CustomRequest } from "../../utils/customRequest";
import sendResponse from "../../utils/sendResponse";
import { addToMyListIntoDB } from "./myList.service";

export const addToMyList = catchAsync(async(req :CustomRequest, res:Response)=>{
    const {id:userId} = req.user;
    const result = await addToMyListIntoDB(req.body,userId);
    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: 'added to my list successfully',
        data: result
    })
})