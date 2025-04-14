import { Types } from 'mongoose';

export interface IContent {
    title: string;
    genre: Types.ObjectId[]; // References to Genre documents
    release_date: Date;
    description?: string;
    rating: number;
    category: Types.ObjectId; // References to Category documents
    thumbnail: string;
    content_url: string;
    language: string;
    status: 'Active' | 'Inactive'; // Content status
}