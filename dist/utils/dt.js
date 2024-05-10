import mongoose from "mongoose";
export const connectDB = (uri) => {
    mongoose.connect(uri, {
        dbName: "Ecom-24"
    })
        .then((c) => console.log(`Db connected succesfully ${c.connection.host}`))
        .catch((e) => console.log(`Error in connsection ${e}`));
};
