import mongoose from "mongoose";

const seasonSchema = new mongoose.Schema({
    season_number: { type: Number, required: true },
    content: { type: mongoose.Schema.Types.ObjectId, ref: 'Content', required: true },
    release_date: { type: Date, required: true },
    episode_count: { type: Number, required: true },
});

const Season = mongoose.model('Season', seasonSchema);
module.exports = Season;
