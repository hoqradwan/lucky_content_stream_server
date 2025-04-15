import { Schema, model, Document } from 'mongoose';
import { ICategory } from './category.interface';

const CategorySchema = new Schema<ICategory>(
    {
        name: { type: String, required: true, trim: true },
        description: { type: String, trim: true, default :"" },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

export const Category = model<ICategory>('Category', CategorySchema);

