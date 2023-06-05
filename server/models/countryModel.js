import mongoose from "mongoose";

const countrySchema = mongoose.Schema({
    name: {
        type: String
    }
})



export const Country = mongoose.model("country", countrySchema)