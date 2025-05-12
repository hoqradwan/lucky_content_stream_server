import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createRegionIntoDB, getRegionsFromDB } from "./region.service";

export const createRegion = catchAsync(async(req ,res)=>{
    const {name} = req.body;
    const result = await createRegionIntoDB(name);
    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: 'Region created successfully',
        data: result
    })
})

export const getRegions = catchAsync(async(req ,res)=>{
    const result = await getRegionsFromDB();
    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: 'Regions fetched successfully',
        data: result
    })
})