import mongoose, { Schema } from "mongoose";

const episodeSchema = new Schema({
    episode_number: { type: Number, required: true },
    season: { type: mongoose.Schema.Types.ObjectId, ref: 'Season', required: true },
    content: { type: mongoose.Schema.Types.ObjectId, ref: 'Content', required: true },
    title: { type: String, required: true },
    release_date: { type: Date, required: true },
})

const Episode = mongoose.model('Episode', episodeSchema);
export default Episode;