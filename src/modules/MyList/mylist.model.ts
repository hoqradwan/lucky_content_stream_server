import { model, Schema } from "mongoose";

const myListSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        default: null
    },
    content: {
        type: Schema.Types.ObjectId,
        ref: "Content",
        required: true,
        default: null
    }
})

export const MyList = model("MyList", myListSchema);