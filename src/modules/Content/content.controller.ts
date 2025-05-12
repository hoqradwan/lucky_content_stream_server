import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createContentIntoDB, deleteContentByIdFromDB, getContentsByIdFromDB, getContentsFromDB } from "./content.service";

export const getContents = catchAsync(async (req, res) => {
    const result = await getContentsFromDB();
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Contents retrieved successfully',
        data: result
    })
})
export const getContentById = catchAsync(async (req, res) => {
    const { id: contentId } = req.params;
    const result = await getContentsByIdFromDB(contentId);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Content retrieved successfully',
        data: result
    })
})
export const deleteContentById = catchAsync(async (req, res) => {
    const { id: contentId } = req.params;
    const result = await deleteContentByIdFromDB(contentId);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Content deleted successfully',
        data: result
    })
})
export const createContent = catchAsync(async (req, res) => {
    const result = await createContentIntoDB(req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Content created successfully',
        data: req.body
    })
})