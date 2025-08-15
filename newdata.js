const mongoose = require("mongoose");
const Listing = require("./models/listing");
const { data } = require("./init/data"); // ✅ Corrected this line

const MONGO_URL = "mongodb://127.0.0.1:27017/wounderlust";

main();

async function main() {
    await mongoose.connect(MONGO_URL);
    await Listing.deleteMany({});
    await Listing.insertMany(data);
    console.log("Database updated successfully");
    mongoose.connection.close();
}
