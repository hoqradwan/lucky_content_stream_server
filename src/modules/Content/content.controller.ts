import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createContentIntoDB } from "./content.service";

export const createContent = catchAsync(async(req, res) => {
    const result = await createContentIntoDB(req.body);
    sendResponse(res,{
        statusCode: 201,
        success: true,
        message: 'Content created successfully',
        data: req.body
    })
})