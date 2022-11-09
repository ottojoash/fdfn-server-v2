const mongoose = require('mongoose');
const MovieSchema = mongoose.Schema(
    {
        movieName: { type: String, required: true },
        image: { type: String, required: true },
        link: { type: String, required: true },
    },
    { versionKey: false }
);
const MovieModel = mongoose.model('movies', MovieSchema);
module.exports = MovieModel;
