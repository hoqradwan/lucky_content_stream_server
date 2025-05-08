import { Schema, model, Document } from 'mongoose';
import { ICategory } from './category.interface';

const CategorySchema = new Schema<ICategory>(
    {
        type: {
            type: String,
            enum: ["Episode", "Movie"],
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export const Category = model<ICategory>('Category', CategorySchema);

