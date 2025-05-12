import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { CustomRequest } from "../../utils/customRequest";
import sendResponse from "../../utils/sendResponse";
import { createContentIntoDB, getAllGenreFromDB } from "./genre.service";

export const createGenre = catchAsync(async (req : CustomRequest,res: Response)=>{
    const result = await createContentIntoDB(req.body);
    sendResponse(res,{
        statusCode: 201,
        success: true,
        message: 'Genre created successfully',
        data: result
    })
})
export const getAllGenre = catchAsync(async (req :Request,res : Response)=>{
    const result = await getAllGenreFromDB();
    sendResponse(res,{
        statusCode: 201,
        success: true,
        message: 'Genre retrileved successfully',
        data: result
    })
})
