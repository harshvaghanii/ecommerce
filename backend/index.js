// Packages import

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 4000;

// End of Packages import

// Importing the Routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
// End of Route Imports

// DB Connection

mongoose
    .connect(
        process.env.MONGO_URL,
        { useNewUrlParser: true, useUnifiedTopology: true },
        mongoose.set("strictQuery", false)
    )
    .then(() => {
        console.log("DB Connection Successful");
    })
    .catch((e) => console.log(e));

// Configuring Body Parser

app.use(express.json());

// Setting up the end points

app.use("/api/v1/auth", authRoute);

app.use("/api/v1/user", userRoute);

app.get("/api/v1/test", (req, res) => {
    res.send("test is successful!");
});

// Listening to the server

app.listen(port, () => {
    console.log(`backend server is running at http://localhost:${port}`);
});
