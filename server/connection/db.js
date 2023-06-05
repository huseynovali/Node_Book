import mongoose from "mongoose";

export const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.CONNECT_DB);
        console.log("Connect db !")
    }
    catch (err) {
        console.log(err)
    }
}
