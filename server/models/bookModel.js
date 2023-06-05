import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    publishDate: {
        type: String,
        required: true
    },
    date: {
        type: Date,
    },
    imgpath: {
        type: String
    },
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

export const Book = mongoose.model("Book", bookSchema);
