import { Schema, model, Document } from 'mongoose';
import { IGenre } from './genre.interface';



const GenreSchema = new Schema<IGenre>(
    {
        name: { type: String, required: true, unique: true, trim: true },
        description: { type: String, trim: true },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

const Genre = model<IGenre>('Genre', GenreSchema);

export { Genre, IGenre };