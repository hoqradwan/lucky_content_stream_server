import mongoose from "mongoose";
const contentSchema = new mongoose.Schema({
    title : { type: String, required: true },
    genre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],                              
    release_date: { type: Date, default : Date.now() },                          
    description: { type: String, default : ""},                          
    rating: { type: Number , default : 0},                             
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }, // movie, tv show, etc.
    thumbnail: { type: String, default: "" },                            
    content_url: { type: String , default : ""},                          
    language: { type: String, default : "" },                            
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },  // Content status
});

export const Content = mongoose.model('Content', contentSchema);
