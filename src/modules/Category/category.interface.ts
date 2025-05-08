export interface ICategory extends Document {
    type: string;
    enum: ['Episode', 'Movie'];
}