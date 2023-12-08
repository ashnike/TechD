require('dotenv').config({ path: '../.env' });

const mongoose = require("mongoose");

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connection established...!");
}).catch((error) => {
    console.log("Connection error:", error);
});
