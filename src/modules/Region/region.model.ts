import { model, Schema } from "mongoose";

 const RegionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        default: "others"
    }
})

export const Region  = model('Region', RegionSchema);
