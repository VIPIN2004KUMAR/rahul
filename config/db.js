const mongoose = require("mongoose");
///const URLdb = process.env.ATLASDB_URL;
const connectDB = async () => {
 await mongoose.connect(process.env.ATLASDB_URL, {
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Connection Error:", err));
};
module.exports = connectDB;