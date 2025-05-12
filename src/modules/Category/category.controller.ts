import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createCategoryIntoDB, getCategoriesFromDB } from "./category.service";

export const createCategory = catchAsync(async(req ,res)=>{
    const { type } = req.body;
    const result = await createCategoryIntoDB(type);
    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: 'Category created successfully',
        data: result
    })
})

export const getCategories = catchAsync(async(req ,res)=>{
    const result = await getCategoriesFromDB();
    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: 'Categories fetched successfully',
        data: result
    })
})